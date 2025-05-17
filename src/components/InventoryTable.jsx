import React from 'react';

function InventoryTable({ items }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th><th>Qty</th><th>Price</th><th>Location</th>
            </tr>
            </thead>
            <tbody>
            {items.map(item => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price}</td>
                    <td>{item.location}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default InventoryTable;
