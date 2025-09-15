"use client"
import { useState } from "react"
import { CHAINS, ChainConfig } from "../data/chains"

type Props = {
  onSelect: (chain: ChainConfig) => void
}

export default function ChainSelector({ onSelect }: Props) {
  const [selected, setSelected] = useState<ChainConfig>(CHAINS[0])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const chain = CHAINS.find(c => c.id === Number(e.target.value))!
    setSelected(chain)
    onSelect(chain)
  }

  return (
    <div className="p-2 bg-cardBg rounded-xl text-white">
      <label className="mr-2">Select Chain:</label>
      <select
        value={selected.id}
        onChange={handleChange}
        className="bg-bgDark text-white p-2 rounded-lg"
      >
        {CHAINS.map(chain => (
          <option key={chain.id} value={chain.id}>
            {chain.name}
          </option>
        ))}
      </select>
    </div>
  )
}
