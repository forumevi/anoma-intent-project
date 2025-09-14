import SwapForm from '../../components/SwapForm';
import IntentCard from '../../components/IntentCard';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-2xl font-bold">Swap / Intent Demo</h1>
      <SwapForm />
      <div className="mt-6">
        <IntentCard intent={{ type: 'example', amount: 100, token: 'ETH', tx: 'TX123' }} />
      </div>
    </div>
  );
}
