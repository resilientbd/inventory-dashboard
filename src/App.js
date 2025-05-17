import React, { useState } from 'react';
import inventoryItems from './data/mockData';
import InventoryTable from './components/InventoryTable';
import StatsPanel from './components/StatusPanel';

function App() {
  const [items, setItems] = useState(inventoryItems);

  return (
      <div style={{ padding: '2rem' }}>
        <h1>Inventory Dashboard V: 0.0.2</h1>
        <StatsPanel items={items} />
        <InventoryTable items={items} />
      </div>
  );
}

export default App;
