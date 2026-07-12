import PacketCard from "./PacketCard";

const packets = [
  {
    id: "PKT-1001",
    source: "Samsung",
    destination: "Pixel",
    status: "Forwarding",
    ttl: 6,
    hops: 3,
  },
  {
    id: "PKT-1002",
    source: "Pixel",
    destination: "iPhone",
    status: "Queued",
    ttl: 8,
    hops: 1,
  },
  {
    id: "PKT-1003",
    source: "OnePlus",
    destination: "Samsung",
    status: "Delivered",
    ttl: 2,
    hops: 5,
  },
];

export default function PacketQueue() {
  return (
    <div className="space-y-5">

      {packets.map((packet) => (

        <PacketCard
          key={packet.id}
          packet={packet}
        />

      ))}

    </div>
  );
}