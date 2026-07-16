import React, { useState } from "react";

const colorData = [
  { id: 1, name: "Charcoal Black", code: "#1F2937", order: 1 },
  { id: 2, name: "Walnut Brown", code: "#6B4226", order: 2 },
  { id: 3, name: "Ivory White", code: "#F8F5F0", order: 3 },
  { id: 4, name: "Forest Green", code: "#166534", order: 4 },
  { id: 5, name: "Royal Blue", code: "#1D4ED8", order: 5 },
];

export default function ViewColor() {
  const [search, setSearch] = useState("");

  const filtered = colorData.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        {/* Header */}
        <div className="flex flex-col gap-3 border-b border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-bold text-gray-800">View Colors</h3>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search color..."
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 sm:w-64"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-600">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Color Name</th>
                <th className="px-4 py-3">Preview</th>
                <th className="px-4 py-3">Color Code</th>
                <th className="px-4 py-3">Order</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-6 text-center text-gray-400">
                    No colors found.
                  </td>
                </tr>
              ) : (
                filtered.map((color, index) => (
                  <tr key={color.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-500">{index + 1}</td>
                    <td className="px-4 py-3 font-medium text-gray-800">
                      {color.name}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className="inline-block h-6 w-6 rounded-full border border-gray-300"
                        style={{ backgroundColor: color.code }}
                      />
                    </td>
                    <td className="px-4 py-3 font-mono uppercase text-gray-600">
                      {color.code}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{color.order}</td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-2">
                        <button className="rounded bg-blue-600 px-3 py-1 text-xs font-medium text-white hover:bg-blue-700">
                          Edit
                        </button>
                        <button className="rounded bg-red-600 px-3 py-1 text-xs font-medium text-white hover:bg-red-700">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
