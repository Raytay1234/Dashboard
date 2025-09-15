import React from "react";

const Dashboard = ({ cards, onDelete }) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <h3 className="text-lg font-semibold p-4 border-b border-gray-200 text-gray-800">
              {card.title}
            </h3>
            <div className="p-4 flex flex-col gap-4">
              <p className="text-gray-600">{card.content}</p>
              <button
                onClick={() => onDelete(index)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
