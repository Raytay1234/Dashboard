import React, { useState } from "react";

const Dashboard = ({ cards, onDelete, onUpdate }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState({ title: "", content: "" });

  const startEditing = (index, card) => {
    setEditingIndex(index);
    setEditData({ title: card.title, content: card.content });
  };

  const handleSave = (index) => {
    onUpdate(index, editData);
    setEditingIndex(null);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        📋 Dashboard
      </h2>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {/* Card Header */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              {editingIndex === index ? (
                <input
                  type="text"
                  value={editData.title}
                  onChange={(e) =>
                    setEditData({ ...editData, title: e.target.value })
                  }
                  className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ) : (
                <h3 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h3>
              )}
            </div>

            {/* Card Body */}
            <div className="p-5 flex flex-col gap-4">
              {editingIndex === index ? (
                <textarea
                  value={editData.content}
                  onChange={(e) =>
                    setEditData({ ...editData, content: e.target.value })
                  }
                  className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows="4"
                />
              ) : (
                <p className="text-gray-600 leading-relaxed">
                  {card.content}
                </p>
              )}

              {/* Buttons */}
              <div className="flex gap-2 mt-2">
                {editingIndex === index ? (
                  <>
                    <button
                      onClick={() => handleSave(index)}
                      className="flex-1 bg-green-500 text-white px-3 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
                    >
                      💾 Save
                    </button>
                    <button
                      onClick={() => setEditingIndex(null)}
                      className="flex-1 bg-gray-400 text-white px-3 py-2 rounded-lg font-medium hover:bg-gray-500 transition-colors"
                    >
                      ✖ Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => startEditing(index, card)}
                      className="flex-1 bg-blue-500 text-white px-3 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => onDelete(index)}
                      className="flex-1 bg-red-500 text-white px-3 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors"
                    >
                      🗑 Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
