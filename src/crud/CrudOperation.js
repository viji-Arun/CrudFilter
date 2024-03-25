import React, { useState } from 'react';

function CrudComponent() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    // Other initial items...
  ]);
  const [newItemName, setNewItemName] = useState('');

  const handleAddItem = () => {
    const newItem = {
      id: items.length + 1,
      name: newItemName
    };
    setItems([...items, newItem]);
    setNewItemName('');
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default CrudComponent;
