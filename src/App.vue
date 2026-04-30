<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HomeTab from './components/HomeTab.vue'
import GardenTab from './components/GardenTab.vue'
import GardenCalendarTab from './components/GardenCalendarTab.vue'
import quickStatsData from './data/quickStats.json'

const activeTab = ref<'home' | 'garden' | 'calendar'>('home')

const switchTab = (tabName: 'home' | 'garden' | 'calendar') => {
  activeTab.value = tabName
  localStorage.setItem('activeTab', tabName)
}

onMounted(() => {
  const savedTab = localStorage.getItem('activeTab') as 'home' | 'garden' | 'calendar' | null
  if (savedTab) {
    activeTab.value = savedTab
  }
})

// Get current date
const currentDate = new Date().toLocaleDateString('en-GB', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

const quickStats = quickStatsData
</script>

<template>
  <div class="dashboard">
    <div class="header">
      <h1>Holly's Dashboard</h1>
      <div class="date">{{ currentDate }}</div>
    </div>

    <div class="grid">
      <!-- Quick Stats -->
      <div class="card full-width">
        <div class="quick-stats">
          <div class="stat-box">
            <div class="stat-number">{{ quickStats.weeksUntilLastFrost }}</div>
            <div class="stat-label">Until Last Frost</div>
          </div>

          <div class="timeline-container">
            <div class="timeline-labels">
              <span>{{ quickStats.lastFrostEmoji }} Last Frost ({{ quickStats.lastFrostDate }})</span>
              <span>{{ quickStats.firstFrostEmoji }} First Frost ({{ quickStats.firstFrostDate }})</span>
            </div>
            <div class="timeline-bar">
              <div class="timeline-marker" :style="{ left: quickStats.timelineMarkerPosition }"></div>
            </div>
          </div>

          <div class="stat-box">
            <div class="stat-number">{{ quickStats.growingDays }}</div>
            <div class="stat-label">Growing Days</div>
          </div>
        </div>
        <div class="weather-note">
          {{ quickStats.weatherNote }}
        </div>
      </div>

      <!-- Tab Navigation -->
      <div class="tabs">
        <button
          class="tab-button"
          :class="{ active: activeTab === 'home' }"
          @click="switchTab('home')"
        >
          🏠 Home
        </button>
        <button
          class="tab-button"
          :class="{ active: activeTab === 'garden' }"
          @click="switchTab('garden')"
        >
          🌱 Garden
        </button>
        <button
          class="tab-button"
          :class="{ active: activeTab === 'calendar' }"
          @click="switchTab('calendar')"
        >
          📅 Garden Calendar
        </button>
      </div>

      <!-- Tab Content -->
      <HomeTab v-if="activeTab === 'home'" />
      <GardenTab v-if="activeTab === 'garden'" />
      <GardenCalendarTab v-if="activeTab === 'calendar'" />
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  max-width: 1600px;
  margin: 0 auto;
}

.header {
  text-align: center;
  color: white;
  margin-bottom: 15px;
}

.header h1 {
  font-size: 28px;
  margin-bottom: 3px;
}

.header .date {
  font-size: 14px;
  opacity: 0.9;
}

.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
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

.quick-stats {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 20px;
  align-items: center;
  margin-bottom: 12px;
}

.stat-box {
  text-align: center;
}

.stat-number {
  font-size: 24px;
  font-weight: bold;
  color: #1e40af;
}

.stat-label {
  font-size: 12px;
  color: #64748b;
  margin-top: 4px;
}

.timeline-container {
  flex: 1;
}

.timeline-labels {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #475569;
}

.timeline-bar {
  height: 20px;
  background: linear-gradient(90deg, #dbeafe 0%, #60a5fa 20%, #3b82f6 50%, #60a5fa 80%, #dbeafe 100%);
  border-radius: 10px;
  position: relative;
}

.timeline-marker {
  position: absolute;
  top: -5px;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  background: white;
  border: 4px solid #3b82f6;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.4);
}

.weather-note {
  background: #fef3c7;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  font-size: 13px;
  color: #92400e;
  font-weight: 500;
}

.tabs {
  grid-column: 1 / -1;
  display: flex;
  gap: 8px;
  justify-content: center;
}

.tab-button {
  background: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: #64748b;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.tab-button:hover {
  background: #f0f9ff;
  color: #1e40af;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.15);
}

.tab-button.active {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
}

@media (max-width: 1600px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .quick-stats {
    grid-template-columns: 1fr;
  }
}
</style>
