<script setup lang="ts">
import gardenPlanDataRaw from '../data/gardenPlanData.json'

interface Week {
  label: string
  tasks: string[]
}

interface Month {
  name: string
  emoji: string
  weeks: Week[]
}

interface GardenPlanData {
  months: Month[]
}

const gardenPlanData = gardenPlanDataRaw as GardenPlanData
</script>

<template>
  <div class="garden-plan-wrapper">
    <div class="card full-width">
      <div class="card-header">
        <span class="card-icon">📅</span>
        2026 Garden Plan
      </div>
      <div class="year-calendar">
        <div
          v-for="month in gardenPlanData.months"
          :key="month.name"
          class="month-card"
        >
          <div class="month-header">
            <span class="month-emoji">{{ month.emoji }}</span>
            <span class="month-name">{{ month.name }}</span>
          </div>
          <div class="month-sections">
            <div
              v-for="week in month.weeks"
              :key="week.label"
              class="week-section"
            >
              <div class="week-label">{{ week.label }}</div>
              <div class="week-content">
                <div
                  v-for="(task, index) in week.tasks"
                  :key="index"
                  class="task-item"
                  :class="{
                    'task-sow': task.includes('DIRECT SOW'),
                    'task-start': task.includes('START INDOORS'),
                    'task-transplant': task.includes('TRANSPLANT'),
                    'task-harvest': task.includes('HARVEST'),
                    'task-plant': task.includes('PLANT') && !task.includes('TRANSPLANT')
                  }"
                >
                  {{ task }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.garden-plan-wrapper {
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

.card-header {
  font-size: 17px;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 15px;
  padding-bottom: 7px;
  border-bottom: 2px solid #dbeafe;
  display: flex;
  align-items: center;
  gap: 6px;
}

.card-icon {
  font-size: 20px;
}

.year-calendar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.month-card {
  background: #f9fafb;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #e5e7eb;
}

.month-header {
  text-align: center;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 2px solid #dbeafe;
}

.month-emoji {
  font-size: 20px;
  margin-right: 6px;
}

.month-name {
  font-weight: 600;
  font-size: 15px;
  color: #1e40af;
}

.month-sections {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.week-section {
  background: white;
  border-radius: 6px;
  padding: 8px;
  border: 1px solid #e5e7eb;
}

.week-label {
  font-size: 11px;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.week-content {
  min-height: 30px;
  font-size: 12px;
  color: #475569;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.task-item {
  padding: 4px 6px;
  border-radius: 4px;
  line-height: 1.4;
  font-size: 11px;
}

.task-sow {
  background: #dcfce7;
  border-left: 3px solid #16a34a;
  color: #14532d;
}

.task-start {
  background: #dbeafe;
  border-left: 3px solid #3b82f6;
  color: #1e3a8a;
}

.task-transplant {
  background: #fef3c7;
  border-left: 3px solid #f59e0b;
  color: #78350f;
}

.task-harvest {
  background: #ffe4e6;
  border-left: 3px solid #f43f5e;
  color: #881337;
}

.task-plant {
  background: #e0e7ff;
  border-left: 3px solid #6366f1;
  color: #312e81;
}

@media (max-width: 1600px) {
  .year-calendar {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1200px) {
  .year-calendar {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .year-calendar {
    grid-template-columns: 1fr;
  }
}
</style>
