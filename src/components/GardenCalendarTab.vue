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
          <div
            v-for="(plant, index) in calendarData.unallocatedPlants"
            :key="`unallocated-${index}`"
            class="unallocated-plant"
          >
            {{ plant }}
          </div>
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

          <template v-for="(seedling, index) in calendarData.seedlings" :key="`seedling-${index}`">
            <div class="timeline-label">{{ seedling.label }}</div>
            <div class="timeline-row">
              <div
                v-for="n in (seedling.months || 49)"
                :key="`${index}-${n}`"
                class="timeline-month"
                :class="{ 'border-right': n % 4 === 0 }"
              ></div>
              <div
                v-for="(bar, barIndex) in seedling.bars"
                :key="`bar-${index}-${barIndex}`"
                class="crop-bar"
                :class="bar.class"
                :style="bar.style"
              >
                {{ bar.label }}
              </div>
            </div>
          </template>

          <!-- Garden Beds -->
          <div class="timeline-section-header">🌸 Front Garden</div>

          <template v-for="(bed, index) in calendarData.beds.frontGarden" :key="`front-${index}`">
            <div class="timeline-label">{{ bed.label }}</div>
            <div class="timeline-row">
              <div
                v-for="n in bed.months"
                :key="`front-${index}-${n}`"
                class="timeline-month"
                :class="{ 'border-right': n % 4 === 0 }"
              ></div>
              <div
                v-for="(bar, barIndex) in bed.bars"
                :key="`front-bar-${index}-${barIndex}`"
                class="crop-bar"
                :class="bar.class"
                :style="bar.style"
              >
                {{ bar.label }}
              </div>
            </div>
          </template>

          <!-- Side of House Boxes -->
          <div class="timeline-section-header">🌞 Side of House</div>

          <template v-for="(bed, index) in calendarData.beds.sideOfHouse" :key="`side-${index}`">
            <div class="timeline-label">{{ bed.label }}</div>
            <div class="timeline-row">
              <div
                v-for="n in bed.months"
                :key="`side-${index}-${n}`"
                class="timeline-month"
                :class="{ 'border-right': n % 4 === 0 }"
              ></div>
              <div
                v-for="(bar, barIndex) in bed.bars"
                :key="`side-bar-${index}-${barIndex}`"
                class="crop-bar"
                :class="bar.class"
                :style="bar.style"
              >
                {{ bar.label }}
              </div>
            </div>
          </template>

          <!-- Back Garden -->
          <div class="timeline-section-header">🏡 Back Garden</div>

          <template v-for="(bed, index) in calendarData.beds.backGarden" :key="`back-${index}`">
            <div class="timeline-label">{{ bed.label }}</div>
            <div class="timeline-row">
              <div
                v-for="n in bed.months"
                :key="`back-${index}-${n}`"
                class="timeline-month"
                :class="{ 'border-right': n % 4 === 0 }"
              ></div>
              <div
                v-for="(bar, barIndex) in bed.bars"
                :key="`back-bar-${index}-${barIndex}`"
                class="crop-bar"
                :class="bar.class"
                :style="bar.style"
              >
                {{ bar.label }}
              </div>
            </div>
          </template>

          <!-- Greenhouse -->
          <div class="timeline-section-header">🏗️ Greenhouse</div>

          <template v-for="(bed, index) in calendarData.beds.greenhouse" :key="`gh-${index}`">
            <div class="timeline-label">{{ bed.label }}</div>
            <div class="timeline-row">
              <div
                v-for="n in bed.months"
                :key="`gh-${index}-${n}`"
                class="timeline-month"
                :class="{ 'border-right': n % 4 === 0 }"
              ></div>
              <div
                v-for="(bar, barIndex) in bed.bars"
                :key="`gh-bar-${index}-${barIndex}`"
                class="crop-bar"
                :class="bar.class"
                :style="bar.style"
              >
                {{ bar.label }}
              </div>
            </div>
          </template>

          <!-- Wild Area -->
          <div class="timeline-section-header">🌿 Wild Area</div>

          <template v-for="(bed, index) in calendarData.beds.wildArea" :key="`wild-${index}`">
            <div class="timeline-label">{{ bed.label }}</div>
            <div class="timeline-row">
              <div
                v-for="n in bed.months"
                :key="`wild-${index}-${n}`"
                class="timeline-month"
                :class="{ 'border-right': n % 4 === 0 }"
              ></div>
              <div
                v-for="(bar, barIndex) in bed.bars"
                :key="`wild-bar-${index}-${barIndex}`"
                class="crop-bar"
                :class="bar.class"
                :style="bar.style"
              >
                {{ bar.label }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import calendarData from '../data/calendarData.json'
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
