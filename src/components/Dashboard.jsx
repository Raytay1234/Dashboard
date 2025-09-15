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
    <>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            {/* Card Header */}
            <h3 className="text-lg font-semibold p-4 border-b border-gray-200 text-gray-800">
              {editingIndex === index ? (
                <input
                  type="text"
                  value={editData.title}
                  onChange={(e) =>
                    setEditData({ ...editData, title: e.target.value })
                  }
                  className="w-full border rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-300"
                />
              ) : (
                card.title
              )}
            </h3>

            {/* Card Body */}
            <div className="p-4 flex flex-col gap-4">
              {editingIndex === index ? (
                <textarea
                  value={editData.content}
                  onChange={(e) =>
                    setEditData({ ...editData, content: e.target.value })
                  }
                  className="w-full border rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-300"
                  rows="3"
                />
              ) : (
                <p className="text-gray-600">{card.content}</p>
              )}

              <div className="flex gap-2">
                {editingIndex === index ? (
                  <>
                    <button
                      onClick={() => handleSave(index)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingIndex(null)}
                      className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 transition"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => startEditing(index, card)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
