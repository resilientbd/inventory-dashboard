import React from 'react';

function StatsPanel({ items }) {
    const totalItems = items.length;
    const outOfStock = items.filter(i => i.quantity === 0).length;

    return (
        <div style={{ marginBottom: '1rem' }}>
            <h3>Total Items: {totalItems}</h3>
            <h4>Out of Stock: {outOfStock}</h4>
        </div>
    );
}

export default StatsPanel;
