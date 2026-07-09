package com.sambhav.meshPay.mesh.algorithm;

import com.sambhav.meshPay.device.entity.Device;
import com.sambhav.meshPay.mesh.entity.MeshConnection;
import com.sambhav.meshPay.mesh.repository.MeshConnectionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
@RequiredArgsConstructor
public class BFSRoutingEngine implements RoutingEngine {

    private final MeshConnectionRepository meshConnectionRepository;

    @Override
    public List<Device> findShortestPath(Device source, Device destination) {

        List<MeshConnection> connections = meshConnectionRepository.findAll();

        Map<Device, List<Device>> graph = buildGraph(connections);

        return bfs(graph, source, destination);
    }

    private Map<Device, List<Device>> buildGraph(List<MeshConnection> connections) {

        Map<Device, List<Device>> graph = new HashMap<>();

        for (MeshConnection connection : connections) {

            Device source = connection.getSourceDevice();
            Device target = connection.getTargetDevice();

            graph.computeIfAbsent(source, k -> new ArrayList<>()).add(target);
            graph.computeIfAbsent(target, k -> new ArrayList<>()).add(source);
        }

        return graph;
    }

    private List<Device> bfs(Map<Device, List<Device>> graph,
                             Device source,
                             Device destination) {

        Queue<Device> queue = new LinkedList<>();
        Map<Device, Device> parent = new HashMap<>();
        Set<Device> visited = new HashSet<>();

        queue.offer(source);
        visited.add(source);

        while (!queue.isEmpty()) {

            Device current = queue.poll();

            if (current.equals(destination))
                break;

            for (Device neighbour : graph.getOrDefault(current, Collections.emptyList())) {

                if (!visited.contains(neighbour)) {

                    visited.add(neighbour);

                    parent.put(neighbour, current);

                    queue.offer(neighbour);
                }
            }
        }

        List<Device> path = new ArrayList<>();

        Device current = destination;

        while (current != null) {

            path.add(current);

            current = parent.get(current);
        }

        Collections.reverse(path);

        if (!path.isEmpty() && path.get(0).equals(source))
            return path;

        return Collections.emptyList();
    }
}