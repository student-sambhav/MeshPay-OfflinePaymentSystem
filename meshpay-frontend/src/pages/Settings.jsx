import ProfileCard from "../components/settings/ProfileCard";
import SecurityCard from "../components/settings/SecurityCard";
import PreferencesCard from "../components/settings/PreferencesCard";
import NotificationCard from "../components/settings/NotificationCard";
import AppearanceCard from "../components/settings/AppearanceCard";
import AboutCard from "../components/settings/AboutCard";

export default function Settings() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-white">
          Settings
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your MeshPay account and application preferences.
        </p>

      </div>

      <div className="grid gap-6 xl:grid-cols-3">

        <div className="space-y-6">

          <ProfileCard />

          <SecurityCard />

        </div>

        <div className="space-y-6">

          <PreferencesCard />

          <NotificationCard />

        </div>

        <div className="space-y-6">

          <AppearanceCard />

          <AboutCard />

        </div>

      </div>

    </div>
  );
}