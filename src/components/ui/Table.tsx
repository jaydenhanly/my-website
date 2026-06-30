'use client';

import React from 'react';

interface TableColumn {
  key: string;
  label: string;
}

interface TableRow {
  [key: string]: string | number | React.ReactNode;
}

interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
}

export default function Table({ columns, rows }: TableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Header Row */}
          <thead>
            <tr className="bg-orange-100">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* Data Rows */}
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className={`${idx < rows.length - 1 ? 'border-b border-gray-200' : ''} hover:bg-gray-50 transition-colors`}>
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 text-sm text-gray-900">
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
