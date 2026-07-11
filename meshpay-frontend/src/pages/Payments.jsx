import PaymentStats from "../components/payments/PaymentStats";
import PaymentForm from "../components/payments/PaymentForm";
import PaymentTimeline from "../components/payments/PaymentTimeline";
import RoutePreview from "../components/payments/RoutePreview";
import RecentPayments from "../components/payments/RecentPayments";

export default function Payments() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-white">
          Payments
        </h1>

        <p className="text-slate-400">
          Send and monitor offline mesh payments
        </p>

      </div>

      <PaymentStats />

      <div className="grid gap-6 xl:grid-cols-2">

        <PaymentForm />

        <PaymentTimeline />

      </div>

      <RoutePreview />

      <RecentPayments />

    </div>
  );
}