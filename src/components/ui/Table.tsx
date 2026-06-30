'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface TableColumn {
  key: string;
  label: string;
}

interface TableRow {
  description?: string;
  [key: string]: string | number | React.ReactNode | undefined;
}

interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
}

export default function Table({ columns, rows }: TableProps) {
  const prefersReducedMotion = useReducedMotion();
  const firstExpandableIndex = rows.findIndex((row) => typeof row.description === 'string');
  const [openIndex, setOpenIndex] = useState<number | null>(
    firstExpandableIndex === -1 ? null : firstExpandableIndex
  );
  const expandable = firstExpandableIndex !== -1;

  const toggle = (index: number) => setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Header Row */}
          <thead>
            <tr className="bg-orange-100">
              {columns.map((column) => (
                <th key={column.key} className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  {column.label}
                </th>
              ))}
              {expandable && <th className="w-12 px-6 py-3" aria-hidden="true" />}
            </tr>
          </thead>

          {/* Data Rows */}
          <tbody>
            {rows.map((row, idx) => {
              const hasDescription = typeof row.description === 'string';
              const isOpen = openIndex === idx;
              const panelId = `table-row-panel-${idx}`;
              const notLast = idx < rows.length - 1;

              return (
                <React.Fragment key={idx}>
                  <tr
                    className={`${!isOpen && notLast ? 'border-b border-gray-200' : ''} ${
                      hasDescription ? 'cursor-pointer hover:bg-gray-50 focus:outline-none focus-visible:bg-gray-50' : ''
                    } transition-colors`}
                    {...(hasDescription
                      ? {
                          role: 'button',
                          tabIndex: 0,
                          'aria-expanded': isOpen,
                          'aria-controls': panelId,
                          onClick: () => toggle(idx),
                          onKeyDown: (e: React.KeyboardEvent) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              toggle(idx);
                            }
                          },
                        }
                      : {})}
                  >
                    {columns.map((column) => (
                      <td key={column.key} className="px-6 py-4 text-sm text-gray-900">
                        {row[column.key]}
                      </td>
                    ))}
                    {expandable && (
                      <td className="px-6 py-4 text-right">
                        {hasDescription && (
                          <svg
                            className={`inline-block h-4 w-4 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </td>
                    )}
                  </tr>

                  {hasDescription && (
                    <tr>
                      <td colSpan={columns.length + 1} className={`p-0 ${isOpen && notLast ? 'border-b border-gray-200' : ''}`}>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={panelId}
                              initial={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                              animate={prefersReducedMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                              exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <p className="px-6 pb-5 text-sm leading-relaxed text-gray-600">{row.description}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
