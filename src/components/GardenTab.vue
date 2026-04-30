<template>
  <div class="garden-tab">
    <!-- Column 4: April Planting Plan -->
    <div class="card">
      <div class="card-header">
        <span class="card-icon">📅</span>
        April Planting Plan
      </div>

      <div class="section-title">🌱 Direct Sow</div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🔴</span>
        <div>
          <div class="plant-name">Radishes <span class="seed-indicator">📦</span></div>
          <div class="plant-details">Quick crop, 25-30 days</div>
        </div>
      </div>
      <div class="plant-item need-seeds">
        <span class="plant-emoji">🥬</span>
        <div>
          <div class="plant-name">Spinach</div>
          <div class="plant-details">Cold-tolerant</div>
        </div>
      </div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🫛</span>
        <div>
          <div class="plant-name">Peas <span class="seed-indicator">📦</span></div>
          <div class="plant-details">Love cool weather</div>
        </div>
      </div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🥕</span>
        <div>
          <div class="plant-name">Carrots <span class="seed-indicator">📦</span></div>
          <div class="plant-details">Thin as they grow</div>
        </div>
      </div>

      <div class="section-title">🌱 Seedlings to Plant</div>
      <div class="seedling-item">
        <div class="plant-name">🥔 Potatoes</div>
        <div class="plant-details">More to plant (location TBD)</div>
      </div>

      <div class="section-title">🏠 Started Indoors</div>
      <div class="plant-item started">
        <span class="plant-emoji">🫑</span>
        <div>
          <div class="plant-name">Bell Peppers ✓ Started</div>
          <div class="plant-details">Growing indoors → transplant late May to greenhouse</div>
        </div>
      </div>
      <div class="plant-item started">
        <span class="plant-emoji">🍅</span>
        <div>
          <div class="plant-name">Tomatoes ✓ Started</div>
          <div class="plant-details">Started: Apr 26 → transplant late May to greenhouse</div>
        </div>
      </div>
      <div class="plant-item started">
        <span class="plant-emoji">🥒</span>
        <div>
          <div class="plant-name">Cucumbers ✓ Started</div>
          <div class="plant-details">Started: Apr 26 → transplant late May to greenhouse</div>
        </div>
      </div>
      <div class="plant-item started">
        <span class="plant-emoji">🎃</span>
        <div>
          <div class="plant-name">Pumpkins ✓ Started</div>
          <div class="plant-details">Started: Apr 26 → transplant late May to boxes</div>
        </div>
      </div>
      <div class="plant-item started">
        <span class="plant-emoji">🥦</span>
        <div>
          <div class="plant-name">Broccoli ✓ Started</div>
          <div class="plant-details">Started: Apr 26 → transplant late May to boxes</div>
        </div>
      </div>
      <div class="plant-item started">
        <span class="plant-emoji">🌈</span>
        <div>
          <div class="plant-name">Chard ✓ Started</div>
          <div class="plant-details">Started: Apr 26 → transplant late May to boxes</div>
        </div>
      </div>
      <div class="plant-item started">
        <span class="plant-emoji">🫘</span>
        <div>
          <div class="plant-name">Borlotti Beans ✓ Started</div>
          <div class="plant-details">Started: Apr 26 → transplant late May to boxes</div>
        </div>
      </div>

      <div class="section-title">🌱 Planted (Direct Sow)</div>
      <div class="plant-item started">
        <span class="plant-emoji">🥕</span>
        <div>
          <div class="plant-name">Parsnips ✓ Planted</div>
          <div class="plant-details">Planted: Apr 26 in Front 3 • Harvest: Oct</div>
        </div>
      </div>
      <div class="plant-item started">
        <span class="plant-emoji">🫛</span>
        <div>
          <div class="plant-name">Sugar Snap Peas ✓ Planted</div>
          <div class="plant-details">Planted: Apr 26 in Front 3 • Harvest: Late Jul</div>
        </div>
      </div>
      <div class="plant-item started">
        <span class="plant-emoji">🥕</span>
        <div>
          <div class="plant-name">Parsnips ✓ Planted</div>
          <div class="plant-details">Planted: Apr 26 in Front 4 • Harvest: Oct</div>
        </div>
      </div>
      <div class="plant-item started">
        <span class="plant-emoji">🥬</span>
        <div>
          <div class="plant-name">Beetroot ✓ Planted</div>
          <div class="plant-details">Planted: Apr 26 in Front 4 • Harvest: Late Jul</div>
        </div>
      </div>
    </div>

    <!-- Column 5: May Planting Plan -->
    <div class="card">
      <div class="card-header">
        <span class="card-icon">🌺</span>
        May Planting Plan
      </div>

      <div class="section-title">🌱 Transplant Outdoors (after last frost ~May 20)</div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🍅</span>
        <div>
          <div class="plant-name">Tomatoes <span class="seed-indicator">📦</span></div>
          <div class="plant-details">From indoor seedlings → greenhouse</div>
        </div>
      </div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🥒</span>
        <div>
          <div class="plant-name">Cucumbers <span class="seed-indicator">📦</span></div>
          <div class="plant-details">From indoor seedlings → greenhouse</div>
        </div>
      </div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🎃</span>
        <div>
          <div class="plant-name">Pumpkins <span class="seed-indicator">📦</span></div>
          <div class="plant-details">From indoor seedlings → boxes</div>
        </div>
      </div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🥦</span>
        <div>
          <div class="plant-name">Broccoli <span class="seed-indicator">📦</span></div>
          <div class="plant-details">From indoor seedlings → boxes</div>
        </div>
      </div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🫑</span>
        <div>
          <div class="plant-name">Bell Peppers <span class="seed-indicator">📦</span></div>
          <div class="plant-details">From seedlings → greenhouse</div>
        </div>
      </div>

      <div class="section-title">🌱 Direct Sow</div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🫘</span>
        <div>
          <div class="plant-name">Broad Beans <span class="seed-indicator">📦</span></div>
          <div class="plant-details">Sow directly outside</div>
        </div>
      </div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🥬</span>
        <div>
          <div class="plant-name">Beetroot <span class="seed-indicator">📦</span></div>
          <div class="plant-details">Succession sowing</div>
        </div>
      </div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🥕</span>
        <div>
          <div class="plant-name">Carrots <span class="seed-indicator">📦</span></div>
          <div class="plant-details">Succession sowing</div>
        </div>
      </div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🔴</span>
        <div>
          <div class="plant-name">Radishes <span class="seed-indicator">📦</span></div>
          <div class="plant-details">Succession sowing</div>
        </div>
      </div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🧅</span>
        <div>
          <div class="plant-name">Spring Onions <span class="seed-indicator">📦</span></div>
          <div class="plant-details">Quick growing</div>
        </div>
      </div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🫘</span>
        <div>
          <div class="plant-name">Borlotti Beans <span class="seed-indicator">📦</span></div>
          <div class="plant-details">Sow after last frost, warm weather crop</div>
        </div>
      </div>

      <div class="section-title">🏠 Start Indoors</div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🧅</span>
        <div>
          <div class="plant-name">Leeks <span class="seed-indicator">📦</span></div>
          <div class="plant-details">Start indoors → transplant Jul-Aug</div>
        </div>
      </div>
    </div>

    <!-- Column 6: June Planting Plan -->
    <div class="card">
      <div class="card-header">
        <span class="card-icon">☀️</span>
        June Planting Plan
      </div>

      <div class="section-title">🏠 Start Indoors (for fall harvest)</div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🥬</span>
        <div>
          <div class="plant-name">Kale <span class="seed-indicator">📦</span></div>
          <div class="plant-details">Start indoors → transplant Jul for fall harvest</div>
        </div>
      </div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🧅</span>
        <div>
          <div class="plant-name">Leeks <span class="seed-indicator">📦</span></div>
          <div class="plant-details">Start indoors → transplant Jul-Aug</div>
        </div>
      </div>

      <div class="section-title">🌱 Direct Sow (succession plantings)</div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🥕</span>
        <div>
          <div class="plant-name">Carrots <span class="seed-indicator">📦</span></div>
          <div class="plant-details">Succession sowing for fall harvest</div>
        </div>
      </div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🥬</span>
        <div>
          <div class="plant-name">Beetroot <span class="seed-indicator">📦</span></div>
          <div class="plant-details">Succession sowing</div>
        </div>
      </div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🔴</span>
        <div>
          <div class="plant-name">Radishes <span class="seed-indicator">📦</span></div>
          <div class="plant-details">Quick succession crop</div>
        </div>
      </div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🫛</span>
        <div>
          <div class="plant-name">Peas <span class="seed-indicator">📦</span></div>
          <div class="plant-details">Second sowing for late summer</div>
        </div>
      </div>
      <div class="plant-item have-seeds">
        <span class="plant-emoji">🥬</span>
        <div>
          <div class="plant-name">Pak Choi <span class="seed-indicator">📦</span></div>
          <div class="plant-details">Fast growing, cool season crop</div>
        </div>
      </div>
    </div>

    <!-- Column 7: Harvesting Plan -->
    <div class="card">
      <div class="card-header">
        <span class="card-icon">🗓️</span>
        Harvesting Plan
      </div>

      <div class="section-title">June 2026</div>
      <div class="plant-item">
        <span class="plant-emoji">🧄</span>
        <div>
          <div class="plant-name">Garlic</div>
          <div class="plant-details">Late June</div>
        </div>
      </div>

      <div class="section-title">July 2026</div>
      <div class="plant-item">
        <span class="plant-emoji">🥔</span>
        <div>
          <div class="plant-name">Potatoes</div>
          <div class="plant-details">Late July (6 boxes)</div>
        </div>
      </div>

      <div class="section-title">August 2026</div>
      <div class="plant-item">
        <span class="plant-emoji">🧅</span>
        <div>
          <div class="plant-name">Onions</div>
          <div class="plant-details">Early August (2 boxes)</div>
        </div>
      </div>
    </div>

    <!-- Column 8: Gardening Shopping -->
    <div class="card">
      <div class="card-header">
        <span class="card-icon">🛒</span>
        Gardening Shopping
      </div>

      <div class="shopping-item">
        <span class="plant-emoji">🥬</span>
        <div class="shopping-item-text">Spinach seeds</div>
      </div>
    </div>

    <!-- Seed Inventory (Full Width) -->
    <div class="card full-width">
      <div class="card-header">
        <span class="card-icon">📦</span>
        Seed Inventory
      </div>

      <div class="seed-grid">
        <div class="seed-item">
          <span class="seed-name">🥬 Beetroot</span>
          <span class="seed-quantity">×6</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">🥦 Broccoli</span>
          <span class="seed-quantity">×3</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">🫑 Bell Peppers</span>
          <span class="seed-quantity">×5</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">🫘 Broad Beans</span>
          <span class="seed-quantity">×1</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">🫘 Borlotti Beans</span>
          <span class="seed-quantity">×3</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">🌿 Rainbow Chard</span>
          <span class="seed-quantity">×1</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">Carrots</span>
          <span class="seed-quantity">×6</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">🌶️ Chilli Pepper</span>
          <span class="seed-quantity">×2</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">🥒 Cucumbers</span>
          <span class="seed-quantity">×1</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">🥬 Kale</span>
          <span class="seed-quantity">×1</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">🧅 Leeks</span>
          <span class="seed-quantity">×4</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">🧅 Spring Onions</span>
          <span class="seed-quantity">×1</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">🫛 Sugar Snap Peas</span>
          <span class="seed-quantity">×4</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">🫛 Peas</span>
          <span class="seed-quantity">×2</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">🥬 Pak Choi</span>
          <span class="seed-quantity">×2</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">🥕 Parsnips</span>
          <span class="seed-quantity">×1</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">Pumpkins</span>
          <span class="seed-quantity">×5</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">Radishes</span>
          <span class="seed-quantity">×2</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">🍅 Tomatoes</span>
          <span class="seed-quantity">×8</span>
        </div>
        <div class="seed-item">
          <span class="seed-name">🎃 Squash</span>
          <span class="seed-quantity">×1</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No interactive elements in this component, all static data
</script>

<style scoped>
.garden-tab {
  display: contents;
}

.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  box-shadow: 0 3px 5px rgba(0,0,0,0.1);
}

.card-header {
  font-size: 17px;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 10px;
  padding-bottom: 7px;
  border-bottom: 2px solid #dbeafe;
  display: flex;
  align-items: center;
  gap: 6px;
}

.card-icon {
  font-size: 20px;
}

.section-title {
  font-weight: 600;
  color: #555;
  margin: 10px 0 6px 0;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.plant-item {
  background: #f8f9fa;
  padding: 7px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  border-left: 3px solid #4caf50;
  display: flex;
  align-items: center;
  gap: 8px;
}

.plant-item.indoor {
  border-left-color: #ff9800;
}

.plant-item.have-seeds {
  background: #d1fae5;
  border-left-color: #10b981;
}

.plant-item.need-seeds {
  background: #fed7aa;
  border-left-color: #f97316;
}

.plant-item.started {
  background: #dbeafe;
  border-left-color: #3b82f6;
}

.plant-emoji {
  font-size: 18px;
}

.plant-name {
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.plant-details {
  font-size: 12px;
  color: #666;
  margin-top: 1px;
}

.seed-indicator {
  font-size: 14px;
  margin-left: 4px;
}

.seedling-item {
  background: #e3f2fd;
  padding: 7px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  border-left: 3px solid #2196f3;
  font-size: 13px;
}

.seedling-item .plant-name {
  font-size: 13px;
}

.seedling-item .plant-details {
  font-size: 11px;
}

.shopping-item {
  background: #fed7aa;
  padding: 8px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  border-left: 3px solid #f97316;
  display: flex;
  align-items: center;
  gap: 8px;
}

.shopping-item-text {
  font-weight: 600;
  color: #333;
  font-size: 13px;
}

.full-width {
  grid-column: 1 / -1;
}

.seed-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.seed-item {
  background: #f8f9fa;
  padding: 7px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  border-left: 3px solid #10b981;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}

.seed-name {
  font-weight: 600;
  color: #333;
}

.seed-quantity {
  background: #10b981;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 600;
}

@media (max-width: 1200px) {
  .seed-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .seed-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
