import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";
import Profile from "./components/Profile"; // 👈 import Profile

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  const [cards, setCards] = useState([
    { title: "Card Title 1", content: "This is some content for card 1." },
    { title: "Card Title 2", content: "This is some content for card 2." },
    { title: "Card Title 3", content: "This is some content for card 3." },
  ]);

  // Add new card
  const handleNewItem = () => {
    const newCard = {
      title: `Card Title ${cards.length + 1}`,
      content: `This is some content for card ${cards.length + 1}.`,
    };
    setCards([...cards, newCard]);
  };

  // Delete a card
  const handleDeleteCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  // Update a card
  const handleUpdateCard = (index, updatedCard) => {
    const newCards = [...cards];
    newCards[index] = updatedCard;
    setCards(newCards);
  };

  // Filter cards by search
  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <Navbar
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onSearch={(query) => setSearchQuery(query)}
        onNewItem={handleNewItem}
      />

      {/* Layout */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onNavigate={(page) => setActivePage(page)}
        />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-950 p-6">
          {activePage === "home" && (
            <Dashboard
              cards={filteredCards}
              onDelete={handleDeleteCard}
              onUpdate={handleUpdateCard}
            />
          )}
          {activePage === "analytics" && <Analytics />}
          {activePage === "settings" && <Settings />}
          {activePage === "profile" && <Profile />} {/* 👈 New Profile Page */}
          {activePage === "logout" && (
            <h2 className="text-2xl font-bold text-red-500">👋 Logged Out</h2>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
