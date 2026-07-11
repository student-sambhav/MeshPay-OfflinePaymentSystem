import { useState } from "react";

import { Plus } from "lucide-react";

import DeviceCard from "../components/devices/DeviceCard";
import DeviceStats from "../components/devices/DeviceStats";
import DeviceFilters from "../components/devices/DeviceFilters";
import DeviceDetailsDrawer from "../components/devices/DeviceDetailsDrawer";
import RegisterDeviceModal from "../components/devices/RegisterDeviceModal";

const demoDevices = [
  {
    id: 1,
    deviceId: "SM-S24",
    deviceName: "Samsung S24",
    online: true,
    bridgeNode: true,
    batteryLevel: 92,
    owner: { name: "Sambhav" },
  },
  {
    id: 2,
    deviceId: "PIXEL-9",
    deviceName: "Pixel 9",
    online: true,
    bridgeNode: false,
    batteryLevel: 81,
    owner: { name: "Rahul" },
  },
  {
    id: 3,
    deviceId: "IP16",
    deviceName: "iPhone 16",
    online: false,
    bridgeNode: true,
    batteryLevel: 63,
    owner: { name: "Priya" },
  },
];

export default function Devices() {
  const [devices] = useState(demoDevices);
  const [selected, setSelected] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-white">
            Device Management
          </h1>

          <p className="text-slate-400">
            Manage your mesh network devices
          </p>

        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-500"
        >
          <Plus size={20} />
          Register Device
        </button>

      </div>

      <DeviceStats />

      <DeviceFilters />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {devices.map((device) => (
          <DeviceCard
            key={device.id}
            device={device}
            onView={(d) => {
              setSelected(d);
              setOpenDrawer(true);
            }}
          />
        ))}

      </div>

      <RegisterDeviceModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onRegister={(device) => {
          console.log(device);
          setOpenModal(false);
        }}
      />

      <DeviceDetailsDrawer
        open={openDrawer}
        device={selected}
        onClose={() => setOpenDrawer(false)}
      />

    </div>
  );
}