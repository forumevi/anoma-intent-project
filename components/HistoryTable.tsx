"use client";

type Intent = {
  type: string;
  amount: number;
  token: string;
  tx: string;
  status?: "pending" | "fulfilled";
};

export default function HistoryTable({ intents }: { intents: Intent[] }) {
  return (
    <div className="overflow-x-auto animate-fade-in">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-cardBg">
            <th className="p-3">Type</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Token</th>
            <th className="p-3">Tx</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {intents.map((intent, i) => (
            <tr key={i} className="border-t border-gray-700">
              <td className="p-3">{intent.type}</td>
              <td className="p-3">{intent.amount}</td>
              <td className="p-3">{intent.token}</td>
              <td className="p-3">{intent.tx}</td>
              <td className={`p-3 font-bold ${intent.status === 'fulfilled' ? 'text-green-400' : 'text-yellow-400'}`}>
                {intent.status || 'pending'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
