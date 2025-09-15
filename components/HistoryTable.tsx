"use client";

import React from "react";
import { Intent } from "../types/Intent";
import { motion } from "framer-motion";

interface HistoryTableProps {
  intents: Intent[];
}

export default function HistoryTable({ intents }: HistoryTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg shadow-lg bg-cardBg p-4">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">Type</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">Amount</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">Token</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">Tx</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {intents.map((intent, index) => (
            <motion.tr
              key={intent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="hover:bg-gray-700 transition-colors"
            >
              <td className="px-4 py-2">{intent.type}</td>
              <td className="px-4 py-2">{intent.amount}</td>
              <td className="px-4 py-2">{intent.token}</td>
              <td className="px-4 py-2">{intent.tx}</td>
              <td className="px-4 py-2 capitalize">{intent.status}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
