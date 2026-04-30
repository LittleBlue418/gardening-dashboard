<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HomeTab from './components/HomeTab.vue'
import GardenTab from './components/GardenTab.vue'
import GardenCalendarTab from './components/GardenCalendarTab.vue'

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
</script>

<template>
  <div class="dashboard">
    <div class="header">
      <h1>Holly's Dashboard</h1>
      <div class="date">{{ currentDate }}</div>
    </div>

    <div class="tab-navigation">
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

    <div class="tab-content">
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

.tab-navigation {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
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
</style>
