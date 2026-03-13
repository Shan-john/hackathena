import React from 'react';

export default function IslandSidebar({ items, onPlace, coins, placingItem }) {
  return (
    <div className="island-sidebar" role="navigation" aria-label="Island items store">
      <div className="sidebar-title">🏘️ Build Store</div>
      {items.map((item, i) => {
        const canAfford = coins >= item.cost;
        const isPlacing = placingItem === item.name;
        
        return (
          <button
            key={i}
            className={`sidebar-item ${canAfford ? 'unlocked' : 'locked'} ${isPlacing ? 'placing-active' : ''}`}
            onClick={() => onPlace(item)}
            disabled={!canAfford && !isPlacing}
            aria-label={`${canAfford ? 'Buy' : 'Locked'}: ${item.name} (${item.cost} coins)`}
            title={canAfford ? `Buy & Place ${item.name}` : `Need ${item.cost} 🪙`}
            style={isPlacing ? { background: '#ef4444', borderColor: '#b91c1c' } : {}}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1.2' }}>
              <span style={{ fontSize: '1.5rem', marginBottom: '2px' }}>{item.icon}</span>
              <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#fff' }}>{item.name}</span>
            </div>
            <span className="sidebar-lock">
              {isPlacing ? 'CANCEL' : `🪙 ${item.cost}`}
            </span>
          </button>
        );
      })}
    </div>
  );
}
