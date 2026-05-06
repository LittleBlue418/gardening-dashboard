<template>
  <div class="garden-tab">
    <!-- Column 2: February Planting Plan -->
    <Section emoji="❄️" title="February Planting Plan">
      <div class="section-title">🏠 Start Indoors</div>
      <div
        v-for="(plant, index) in gardenData.februaryPlanting.startIndoors"
        :key="`feb-start-${index}`"
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
        v-for="(plant, index) in gardenData.februaryPlanting.directSow"
        :key="`feb-direct-${index}`"
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
    </Section>

    <!-- Column 3: March Planting Plan -->
    <Section emoji="🌱" title="March Planting Plan">
      <div class="section-title">🏠 Start Indoors</div>
      <div
        v-for="(plant, index) in gardenData.marchPlanting.startIndoors"
        :key="`march-start-${index}`"
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
    </Section>

    <!-- Column 4: April Planting Plan -->
    <Section emoji="📅" title="April Planting Plan">
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
    </Section>

    <!-- Column 5: May Planting Plan -->
    <Section emoji="🌺" title="May Planting Plan">
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
    </Section>

    <!-- Column 6: June Planting Plan -->
    <Section emoji="☀️" title="June Planting Plan">
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
    </Section>

    <!-- Column 7: Harvesting Plan -->
    <Section emoji="🗓️" title="Harvesting Plan">
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
    </Section>
  </div>
</template>

<script setup lang="ts">
import gardenData from '../data/gardenData.json'
import Section from '../components/Section.vue'
</script>

<style scoped>
.garden-tab {
  display: contents;
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
</style>
