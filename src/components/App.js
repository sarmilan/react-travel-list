import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handlePackedItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleAddItems(item) {
    setItems(() => [...items, item]);
  }

  function handleDeleteItems(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(() => updatedItems);
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onPackedItem={handlePackedItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
