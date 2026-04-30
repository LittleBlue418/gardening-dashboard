<template>
  <div class="garden-tab">
    <!-- Column 4: April Planting Plan -->
    <div class="card">
      <div class="card-header">
        <span class="card-icon">📅</span>
        April Planting Plan
      </div>

      <div class="section-title">🌱 Direct Sow</div>
      <div
        v-for="(plant, index) in gardenData.aprilPlanting.directSow"
        :key="`april-direct-${index}`"
        class="plant-item"
        :class="plant.type"
      >
        <span class="plant-emoji">{{ plant.emoji }}</span>
        <div>
          <div class="plant-name">
            {{ plant.name }}
            <span v-if="plant.haveSeeds" class="seed-indicator">📦</span>
          </div>
          <div class="plant-details">{{ plant.details }}</div>
        </div>
      </div>

      <div class="section-title">🌱 Seedlings to Plant</div>
      <div
        v-for="(plant, index) in gardenData.aprilPlanting.seedlingsToPlant"
        :key="`april-seedling-${index}`"
        class="seedling-item"
      >
        <div class="plant-name">{{ plant.emoji }} {{ plant.name }}</div>
        <div class="plant-details">{{ plant.details }}</div>
      </div>

      <div class="section-title">🏠 Started Indoors</div>
      <div
        v-for="(plant, index) in gardenData.aprilPlanting.startedIndoors"
        :key="`april-started-${index}`"
        class="plant-item"
        :class="plant.type"
      >
        <span class="plant-emoji">{{ plant.emoji }}</span>
        <div>
          <div class="plant-name">{{ plant.name }}</div>
          <div class="plant-details">{{ plant.details }}</div>
        </div>
      </div>

      <div class="section-title">🌱 Planted (Direct Sow)</div>
      <div
        v-for="(plant, index) in gardenData.aprilPlanting.planted"
        :key="`april-planted-${index}`"
        class="plant-item"
        :class="plant.type"
      >
        <span class="plant-emoji">{{ plant.emoji }}</span>
        <div>
          <div class="plant-name">{{ plant.name }}</div>
          <div class="plant-details">{{ plant.details }}</div>
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
      <div
        v-for="(plant, index) in gardenData.mayPlanting.transplantOutdoors"
        :key="`may-transplant-${index}`"
        class="plant-item"
        :class="plant.type"
      >
        <span class="plant-emoji">{{ plant.emoji }}</span>
        <div>
          <div class="plant-name">
            {{ plant.name }}
            <span v-if="plant.haveSeeds" class="seed-indicator">📦</span>
          </div>
          <div class="plant-details">{{ plant.details }}</div>
        </div>
      </div>

      <div class="section-title">🌱 Direct Sow</div>
      <div
        v-for="(plant, index) in gardenData.mayPlanting.directSow"
        :key="`may-direct-${index}`"
        class="plant-item"
        :class="plant.type"
      >
        <span class="plant-emoji">{{ plant.emoji }}</span>
        <div>
          <div class="plant-name">
            {{ plant.name }}
            <span v-if="plant.haveSeeds" class="seed-indicator">📦</span>
          </div>
          <div class="plant-details">{{ plant.details }}</div>
        </div>
      </div>

      <div class="section-title">🏠 Start Indoors</div>
      <div
        v-for="(plant, index) in gardenData.mayPlanting.startIndoors"
        :key="`may-start-${index}`"
        class="plant-item"
        :class="plant.type"
      >
        <span class="plant-emoji">{{ plant.emoji }}</span>
        <div>
          <div class="plant-name">
            {{ plant.name }}
            <span v-if="plant.haveSeeds" class="seed-indicator">📦</span>
          </div>
          <div class="plant-details">{{ plant.details }}</div>
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
      <div
        v-for="(plant, index) in gardenData.junePlanting.startIndoors"
        :key="`june-start-${index}`"
        class="plant-item"
        :class="plant.type"
      >
        <span class="plant-emoji">{{ plant.emoji }}</span>
        <div>
          <div class="plant-name">
            {{ plant.name }}
            <span v-if="plant.haveSeeds" class="seed-indicator">📦</span>
          </div>
          <div class="plant-details">{{ plant.details }}</div>
        </div>
      </div>

      <div class="section-title">🌱 Direct Sow (succession plantings)</div>
      <div
        v-for="(plant, index) in gardenData.junePlanting.directSow"
        :key="`june-direct-${index}`"
        class="plant-item"
        :class="plant.type"
      >
        <span class="plant-emoji">{{ plant.emoji }}</span>
        <div>
          <div class="plant-name">
            {{ plant.name }}
            <span v-if="plant.haveSeeds" class="seed-indicator">📦</span>
          </div>
          <div class="plant-details">{{ plant.details }}</div>
        </div>
      </div>
    </div>

    <!-- Column 7: Harvesting Plan -->
    <div class="card">
      <div class="card-header">
        <span class="card-icon">🗓️</span>
        Harvesting Plan
      </div>

      <template v-for="(plants, month) in gardenData.harvestingPlan" :key="month">
        <div class="section-title">{{ month }}</div>
        <div
          v-for="(plant, index) in plants"
          :key="`harvest-${month}-${index}`"
          class="plant-item"
        >
          <span class="plant-emoji">{{ plant.emoji }}</span>
          <div>
            <div class="plant-name">{{ plant.name }}</div>
            <div class="plant-details">{{ plant.details }}</div>
          </div>
        </div>
      </template>
    </div>

    <!-- Column 8: Gardening Shopping -->
    <div class="card">
      <div class="card-header">
        <span class="card-icon">🛒</span>
        Gardening Shopping
      </div>

      <div
        v-for="(item, index) in gardenData.shoppingList"
        :key="`shopping-${index}`"
        class="shopping-item"
      >
        <span class="plant-emoji">{{ item.emoji }}</span>
        <div class="shopping-item-text">{{ item.name }}</div>
      </div>
    </div>

    <!-- Seed Inventory (Full Width) -->
    <div class="card full-width">
      <div class="card-header">
        <span class="card-icon">📦</span>
        Seed Inventory
      </div>

      <div class="seed-grid">
        <div
          v-for="(seed, index) in gardenData.seedInventory"
          :key="`seed-${index}`"
          class="seed-item"
        >
          <span class="seed-name">{{ seed.name }}</span>
          <span class="seed-quantity">{{ seed.quantity }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gardenData from '../data/gardenData.json'
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
