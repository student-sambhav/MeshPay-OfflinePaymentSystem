import { useState } from "react";

import PacketStats from "../components/packet/PacketStats";
import PacketFilters from "../components/packet/PacketFilters";
import PacketQueue from "../components/packet/PacketQueue";
import PacketActivity from "../components/packet/PacketActivity";
import PacketDetailsDrawer from "../components/packet/PacketDetailsDrawer";

const selectedPacket = {
  id: "PKT-1001",
  source: "Samsung",
  destination: "Pixel",
  status: "Forwarding",
  ttl: 6,
};

export default function PacketMonitor() {

  const [open,setOpen]=useState(false);

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-white">
          Packet Monitor
        </h1>

        <p className="text-slate-400">
          Monitor packet forwarding inside the mesh network
        </p>

      </div>

      <PacketStats/>

      <PacketFilters/>

      <div className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <div
            onClick={()=>setOpen(true)}
            className="cursor-pointer"
          >

            <PacketQueue/>

          </div>

        </div>

        <PacketActivity/>

      </div>

      <PacketDetailsDrawer
        open={open}
        packet={selectedPacket}
        onClose={()=>setOpen(false)}
      />

    </div>

  );
}