<template>
  <div class="garden-calendar-tab">
    <div class="card full-width">
      <div class="calendar-header">📅 2026 Growing Season Timeline</div>

      <!-- Unallocated Plants -->
      <div class="unallocated-box">
        <div class="unallocated-title">
          ⚠️ Plants Not Yet Allocated to Timeline
        </div>
        <div class="unallocated-grid">
          <div class="unallocated-plant">🫘 Broad Beans</div>
          <div class="unallocated-plant">🥦 Broccoli</div>
          <div class="unallocated-plant">🥬 Kale</div>
          <div class="unallocated-plant">🥬 Spinach</div>
          <div class="unallocated-plant">🧅 Spring Onions</div>
        </div>
      </div>

      <div class="calendar-container">
        <div class="timeline">
          <div></div>
          <div class="timeline-months-header">
            <div class="month-label">Apr</div>
            <div class="month-label">May</div>
            <div class="month-label">Jun</div>
            <div class="month-label">Jul</div>
            <div class="month-label">Aug</div>
            <div class="month-label">Sep</div>
            <div class="month-label">Oct</div>
          </div>

          <!-- Seedlings Section -->
          <div class="timeline-section-header">🌱 Seedlings (Start Indoors)</div>

          <div class="timeline-label">🍅 Tomato</div>
          <div class="timeline-row">
            <div v-for="n in 49" :key="`tomato-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar greenhouse tomatoes" style="left: 12.5%; width: 14.3%;">Growing → Transplant</div>
          </div>

          <div class="timeline-label">🥒 Cucumber</div>
          <div class="timeline-row">
            <div v-for="n in 49" :key="`cucumber-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar greenhouse" style="left: 12.5%; width: 14.3%;">Growing → Transplant</div>
          </div>

          <div class="timeline-label">🫑 Bell Pepper</div>
          <div class="timeline-row">
            <div v-for="n in 49" :key="`pepper-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar greenhouse peppers" style="left: 12.5%; width: 14.3%;">Growing → Transplant</div>
          </div>

          <div class="timeline-label">🎃 Pumpkin</div>
          <div class="timeline-row">
            <div v-for="n in 49" :key="`pumpkin-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar started pumpkins" style="left: 12.5%; width: 14.3%;">Growing → Transplant</div>
          </div>

          <div class="timeline-label">🥦 Broccoli</div>
          <div class="timeline-row">
            <div v-for="n in 49" :key="`broccoli-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar started" style="left: 12.5%; width: 14.3%;">Growing → Transplant</div>
          </div>

          <div class="timeline-label">🌈 Chard</div>
          <div class="timeline-row">
            <div v-for="n in 49" :key="`chard-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar started chard" style="left: 12.5%; width: 14.3%;">Growing → Transplant</div>
          </div>

          <div class="timeline-label">🫘 Borlotti Beans</div>
          <div class="timeline-row">
            <div v-for="n in 49" :key="`beans-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar started beans" style="left: 12.5%; width: 14.3%;">Growing → Transplant</div>
          </div>

          <div class="timeline-label">🧅 Leeks</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`leeks-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned leeks" style="left: 14.3%; width: 28.6%;">Start → Transplant</div>
          </div>

          <div class="timeline-label">🥬 Kale</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`kale-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned kale" style="left: 28.6%; width: 14.3%;">Start → Transplant</div>
          </div>

          <!-- Garden Beds -->
          <div class="timeline-section-header">🌸 Front Garden</div>

          <!-- Front Garden Boxes -->
          <div class="timeline-label">🌸 Front 1</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`front1-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar onions" style="left: 10.7%; width: 46.4%;">🧅 Onions</div>
            <div class="crop-bar planned beetroot" style="left: 57.1%; width: 42.9%;">Beetroot</div>
          </div>

          <div class="timeline-label">🌸 Front 2</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`front2-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar onions" style="left: 10.7%; width: 46.4%;">🧅 Onions</div>
            <div class="crop-bar planned peas" style="left: 57%; width: 43%;">Sugar Snap Peas</div>
          </div>

          <div class="timeline-label">🌸 Front 3</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`front3-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar parsnips stacked-top" style="left: 12.5%; width: 87.5%;">🥕 Parsnips</div>
            <div class="crop-bar peas stacked-bottom" style="left: 12.5%; width: 44.6%;">🫛 Sugar Snap Peas</div>
          </div>

          <div class="timeline-label">🌸 Front 4</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`front4-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar parsnips stacked-top" style="left: 12.5%; width: 87.5%;">🥕 Parsnips</div>
            <div class="crop-bar beetroot stacked-bottom" style="left: 12.5%; width: 41.1%;">🥬 Beetroot</div>
          </div>

          <div class="timeline-label">🌸 Front 5</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`front5-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned pumpkins stacked-top" style="left: 21.4%; width: 64.3%;">Pumpkins</div>
            <div class="crop-bar planned chard stacked-bottom" style="left: 21.4%; width: 60.7%;">Chard</div>
          </div>

          <div class="timeline-label">🌸 Front 6</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`front6-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned pumpkins stacked-top" style="left: 21.4%; width: 64.3%;">Pumpkins</div>
            <div class="crop-bar planned chard stacked-bottom" style="left: 21.4%; width: 60.7%;">Chard</div>
          </div>

          <div class="timeline-label">🌸 Front 7</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`front7-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned pumpkins stacked-triple-top" style="left: 21.4%; width: 64.3%;">Pumpkins</div>
            <div class="crop-bar planned broccoli stacked-triple-middle" style="left: 21.4%; width: 35.7%;">Broccoli</div>
            <div class="crop-bar planned chard stacked-triple-bottom" style="left: 21.4%; width: 60.7%;">Chard</div>
          </div>

          <div class="timeline-label">🌸 Front 8</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`front8-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned pumpkins stacked-triple-top" style="left: 21.4%; width: 64.3%;">Pumpkins</div>
            <div class="crop-bar planned broccoli stacked-triple-middle" style="left: 21.4%; width: 35.7%;">Broccoli</div>
            <div class="crop-bar planned chard stacked-triple-bottom" style="left: 21.4%; width: 60.7%;">Chard</div>
          </div>

          <!-- Side of House Boxes -->
          <div class="timeline-section-header">🌞 Side of House</div>

          <div class="timeline-label">🌞 Side 1</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`side1-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar potatoes" style="left: 10.7%; width: 46.4%;">🥔 Potatoes</div>
            <div class="crop-bar planned beetroot" style="left: 57.1%; width: 42.9%;">Beetroot</div>
          </div>

          <div class="timeline-label">🌞 Side 2</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`side2-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar potatoes" style="left: 10.7%; width: 46.4%;">🥔 Potatoes</div>
            <div class="crop-bar planned pakchoi" style="left: 57.1%; width: 42.9%;">Pak Choi</div>
          </div>

          <div class="timeline-label">🌞 Side 3</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`side3-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar potatoes" style="left: 10.7%; width: 46.4%;">🥔 Potatoes</div>
            <div class="crop-bar planned carrots" style="left: 57%; width: 43%;">Carrots (planned)</div>
          </div>

          <div class="timeline-label">🌞 Side 4</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`side4-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar potatoes" style="left: 10.7%; width: 46.4%;">🥔 Potatoes</div>
            <div class="crop-bar planned beans" style="left: 57.1%; width: 42.9%;">Beans</div>
          </div>

          <div class="timeline-label">🌞 Side 5</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`side5-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar potatoes" style="left: 10.7%; width: 46.4%;">🥔 Potatoes</div>
            <div class="crop-bar planned beetroot" style="left: 57.1%; width: 42.9%;">Beetroot</div>
          </div>

          <div class="timeline-label">🌞 Side 6</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`side6-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar potatoes" style="left: 10.7%; width: 46.4%;">🥔 Potatoes</div>
            <div class="crop-bar planned pakchoi" style="left: 57.1%; width: 42.9%;">Pak Choi</div>
          </div>

          <!-- Back Garden -->
          <div class="timeline-section-header">🏡 Back Garden</div>

          <div class="timeline-label">🏡 Corner</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`corner-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned beans" style="left: 21.4%; width: 35.7%;">Borlotti Beans</div>
          </div>

          <!-- Greenhouse -->
          <div class="timeline-section-header">🏗️ Greenhouse</div>

          <div class="timeline-label">🏗️ GH Slot 1</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`gh1-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned tomatoes" style="left: 21.4%; width: 64.3%;">Tomato</div>
          </div>

          <div class="timeline-label">🏗️ GH Slot 2</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`gh2-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned tomatoes" style="left: 21.4%; width: 64.3%;">Tomato</div>
          </div>

          <div class="timeline-label">🏗️ GH Slot 3</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`gh3-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned tomatoes" style="left: 21.4%; width: 64.3%;">Tomato</div>
          </div>

          <div class="timeline-label">🏗️ GH Slot 4</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`gh4-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned tomatoes" style="left: 21.4%; width: 64.3%;">Tomato</div>
          </div>

          <div class="timeline-label">🏗️ GH Slot 5</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`gh5-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned tomatoes" style="left: 21.4%; width: 64.3%;">Tomato</div>
          </div>

          <div class="timeline-label">🏗️ GH Slot 6</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`gh6-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned tomatoes" style="left: 21.4%; width: 64.3%;">Tomato</div>
          </div>

          <div class="timeline-label">🏗️ GH Slot 7</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`gh7-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned" style="left: 21.4%; width: 64.3%;">Cucumber</div>
          </div>

          <div class="timeline-label">🏗️ GH Slot 8</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`gh8-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned" style="left: 21.4%; width: 64.3%;">Cucumber</div>
          </div>

          <div class="timeline-label">🏗️ GH Slot 9</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`gh9-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned" style="left: 21.4%; width: 64.3%;">Cucumber</div>
          </div>

          <div class="timeline-label">🏗️ GH Slot 10</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`gh10-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned" style="left: 21.4%; width: 64.3%;">Cucumber</div>
          </div>

          <div class="timeline-label">🏗️ GH Slot 11</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`gh11-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned" style="left: 21.4%; width: 64.3%;">Cucumber</div>
          </div>

          <div class="timeline-label">🏗️ GH Slot 12</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`gh12-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned" style="left: 21.4%; width: 64.3%;">Cucumber</div>
          </div>

          <div class="timeline-label">🏗️ GH Slot 13</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`gh13-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned peppers" style="left: 21.4%; width: 64.3%;">Bell Pepper</div>
          </div>

          <div class="timeline-label">🏗️ GH Slot 14</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`gh14-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned peppers" style="left: 21.4%; width: 64.3%;">Bell Pepper</div>
          </div>

          <div class="timeline-label">🏗️ GH Slot 15</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`gh15-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned peppers" style="left: 21.4%; width: 64.3%;">Bell Pepper</div>
          </div>

          <div class="timeline-label">🏗️ GH Slot 16</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`gh16-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned peppers" style="left: 21.4%; width: 64.3%;">Bell Pepper</div>
          </div>

          <div class="timeline-label">🏗️ GH Slot 17</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`gh17-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned peppers" style="left: 21.4%; width: 64.3%;">Bell Pepper</div>
          </div>

          <div class="timeline-label">🏗️ GH Slot 18</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`gh18-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned peppers" style="left: 21.4%; width: 64.3%;">Bell Pepper</div>
          </div>

          <!-- Wild Area -->
          <div class="timeline-section-header">🌿 Wild Area</div>

          <div class="timeline-label">🌿 Wild 1</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`wild1-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar planned beans" style="left: 21.4%; width: 35.7%;">Borlotti Beans</div>
          </div>

          <div class="timeline-label">🌿 Wild 2</div>
          <div class="timeline-row">
            <div v-for="n in 28" :key="`wild2-${n}`" class="timeline-month" :class="{ 'border-right': n % 4 === 0 }"></div>
            <div class="crop-bar garlic" style="left: 0%; width: 42.9%;">🧄 Garlic</div>
            <div class="crop-bar planned leeks" style="left: 42.9%; width: 57.1%;">Leeks</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No interactive elements in this component, all static calendar data
</script>

<style scoped>
.garden-calendar-tab {
  display: contents;
}

.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  box-shadow: 0 3px 5px rgba(0,0,0,0.1);
}

.full-width {
  grid-column: 1 / -1;
}

.calendar-header {
  font-size: 18px;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 12px;
  text-align: center;
}

.unallocated-box {
  background: #fef3c7;
  border: 2px solid #f59e0b;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
}

.unallocated-title {
  font-size: 16px;
  font-weight: bold;
  color: #92400e;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.unallocated-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.unallocated-plant {
  font-size: 13px;
  color: #374151;
  padding: 4px 0;
  border-bottom: 1px solid #f3f4f6;
}

.unallocated-plant:last-child {
  border-bottom: none;
}

.calendar-container {
  background: white;
  border-radius: 10px;
  padding: 12px;
  overflow-x: auto;
}

.timeline {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 6px;
  min-width: 1000px;
}

.timeline-label {
  font-weight: 600;
  color: #333;
  padding: 6px 8px;
  background: #f8f9fa;
  border-radius: 4px;
  font-size: 11px;
  display: flex;
  align-items: center;
}

.timeline-row {
  position: relative;
  display: grid;
  grid-template-columns: repeat(28, 1fr);
  gap: 0;
  border-left: 1px dotted #d1d5db;
  margin-bottom: 8px;
  height: 40px;
}

.timeline-section-header {
  background: #f3f4f6;
  font-weight: bold;
  color: #374151;
  padding: 12px 8px;
  margin-top: 20px;
  margin-bottom: 8px;
  border-radius: 4px;
  grid-column: 1 / -1;
}

.timeline-section-header:first-of-type {
  margin-top: 0;
}

.timeline-month {
  min-height: 32px;
  position: relative;
}

.timeline-month.border-right {
  border-right: 1px dotted #d1d5db;
}

.timeline-months-header {
  grid-column: 2;
  display: grid;
  grid-template-columns: repeat(28, 1fr);
  gap: 0;
  margin-bottom: 8px;
  font-weight: 600;
  color: #666;
  font-size: 11px;
  text-align: center;
}

.month-label {
  padding: 4px;
  border-right: 1px dotted #d1d5db;
  border-left: 1px dotted #d1d5db;
  grid-column: span 4;
}

.month-label:first-child {
  border-left: 1px dotted #d1d5db;
}

.crop-bar {
  position: absolute;
  height: 22px;
  top: 5px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  color: white;
  padding: 0 6px;
  white-space: nowrap;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.crop-bar.potatoes {
  background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
}

.crop-bar.onions {
  background: linear-gradient(135deg, #7c2d12 0%, #9a3412 100%);
}

.crop-bar.garlic {
  background: linear-gradient(135deg, #581c87 0%, #7e22ce 100%);
}

.crop-bar.empty {
  background: transparent;
}

.crop-bar.tomatoes {
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
}

.crop-bar.peppers {
  background: linear-gradient(135deg, #15803d 0%, #16a34a 100%);
}

.crop-bar.pumpkins {
  background: linear-gradient(135deg, #ea580c 0%, #fb923c 100%);
}

.crop-bar.chard {
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
}

.crop-bar.carrots {
  background: linear-gradient(135deg, #ea580c 0%, #fb923c 100%);
}

.crop-bar.radishes {
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
}

.crop-bar.parsnips {
  background: linear-gradient(135deg, #d4a574 0%, #c19a6b 100%);
}

.crop-bar.peas {
  background: linear-gradient(135deg, #16a34a 0%, #22c55e 100%);
}

.crop-bar.beans {
  background: linear-gradient(135deg, #15803d 0%, #16a34a 100%);
}

.crop-bar.beetroot {
  background: linear-gradient(135deg, #9f1239 0%, #be123c 100%);
}

.crop-bar.leeks {
  background: linear-gradient(135deg, #065f46 0%, #059669 100%);
}

.crop-bar.kale {
  background: linear-gradient(135deg, #064e3b 0%, #047857 100%);
}

.crop-bar.pakchoi {
  background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
}

.crop-bar.planned {
  background: #e5e7eb !important;
  border: none;
  color: #4b5563;
}

.crop-bar.started {
  background: #dbeafe !important;
  border: 2px solid #3b82f6;
  color: #1e40af;
  font-weight: 600;
}

.crop-bar.greenhouse {
  background: #d1fae5 !important;
  border: 2px solid #10b981;
  color: #047857;
  font-weight: 600;
}

/* Stacked crops in same bed */
.crop-bar.stacked-top {
  height: 18px;
  font-size: 11px;
  top: 0;
}

.crop-bar.stacked-bottom {
  height: 18px;
  font-size: 11px;
  top: 20px;
}

/* Triple stacked crops in same bed */
.crop-bar.stacked-triple-top {
  height: 12px;
  font-size: 9px;
  top: 0;
}

.crop-bar.stacked-triple-middle {
  height: 12px;
  font-size: 9px;
  top: 14px;
}

.crop-bar.stacked-triple-bottom {
  height: 12px;
  font-size: 9px;
  top: 28px;
}
</style>
