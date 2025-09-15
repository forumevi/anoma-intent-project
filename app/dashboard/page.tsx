import ChainSelector from "../../components/ChainSelector"
import { useState } from "react"
import { CHAINS, ChainConfig } from "../../data/chains"

export default function DashboardPage() {
  const [chain, setChain] = useState<ChainConfig>(CHAINS[0])

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Chain seçici */}
      <ChainSelector onSelect={setChain} />

      <div className="bg-cardBg p-4 rounded-xl">
        <p>Active Chain: <span className="font-semibold">{chain.name}</span></p>
        <p>RPC: {chain.rpc}</p>
        <p>Explorer: {chain.explorer}</p>
      </div>
    </div>
  )
}
