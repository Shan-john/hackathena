import React from 'react';

export default function IslandSidebar({ items, onPlace }) {
  return (
    <div className="island-sidebar" role="navigation" aria-label="Island items">
      <div className="sidebar-title">🏝️ Island</div>
      {items.map((item, i) => (
        <button
          key={i}
          className={`sidebar-item ${item.unlocked ? 'unlocked' : 'locked'}`}
          onClick={() => onPlace(item)}
          disabled={!item.unlocked}
          aria-label={`${item.unlocked ? 'Place' : 'Locked'}: ${item.name}${item.cost ? ` (${item.cost} coins)` : ''}`}
          title={item.unlocked ? `Place ${item.name}` : `Unlock at ${item.cost} 🪙`}
        >
          <span className="sidebar-item-icon">{item.icon}</span>
          {!item.unlocked && (
            <span className="sidebar-lock">🔒 {item.cost}</span>
          )}
        </button>
      ))}
    </div>
  );
}
