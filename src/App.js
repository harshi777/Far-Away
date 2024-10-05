import { useState } from "react";
import "./index.css";
import Form from "./Form.js";
//import Items from "./Items.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
//   { id: 4, description: "Toothbrush", quantity: 1, packed: false },
//   { id: 5, description: "Toothpaste", quantity: 1, packed: false },
//   { id: 6, description: "Lunchbox", quantity: 1, packed: false },
//   { id: 7, description: "Earpods", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClear() {
    const res = window.confirm("Are you sure you want to clear the list ?");
    if (res) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        handleClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🧳</h1>;
}
