<template>
  <div class="home-tab">
    <!-- Column 1: Garden To-Do -->
    <Section emoji="🌿" title="Garden To-Do">
      <div
        v-for="task in homeData.gardenTodo"
        :key="task.id"
        class="todo-item"
      >
        <label>
          <input
            type="checkbox"
            v-model="checkboxes[task.id]"
            @change="saveCheckbox(task.id.replace(/(\d+)$/, '-$1'))"
          >
          {{ task.title }}
        </label>
      </div>
    </Section>

    <!-- Column 2: Upcoming -->
    <Section emoji="📆" title="Upcoming">
      <div v-if="homeData.upcomingEvents.length === 0" class="upcoming-item">
        No upcoming events
      </div>
      <template v-else v-for="(dateSection, index) in homeData.upcomingEvents" :key="index">
        <div class="upcoming-date-section">{{ dateSection.date }}</div>
        <div
          v-for="(event, eventIndex) in dateSection.events"
          :key="`${index}-${eventIndex}`"
          class="upcoming-item"
          :class="event.type"
        >
          {{ event.title }}
        </div>
      </template>
    </Section>

    <!-- Column 3: Prioritised Tasks -->
    <Section emoji="⭐" title="Prioritised Tasks">
      <div class="section-title">Priority 1</div>
      <template v-for="task in priority1Tasks" :key="task.id">
        <div class="priority-item">
          <label>
            <input
              type="checkbox"
              v-model="checkboxes[task.id]"
              @change="saveCheckbox(task.id.replace(/(\d+)$/, '-$1'))"
            >
            {{ task.title }}
          </label>
        </div>
      </template>

      <div class="section-title">Priority 2</div>
      <template v-for="task in priority2Tasks" :key="task.id">
        <div class="priority-item">
          <label>
            <input
              type="checkbox"
              v-model="checkboxes[task.id]"
              @change="saveCheckbox(task.id.replace(/(\d+)$/, '-$1'))"
            >
            {{ task.title }}
          </label>
        </div>
      </template>
    </Section>

    <!-- Column 4: General To-Do -->
    <Section emoji="📝" title="General To-Do">
      <div
        v-for="task in homeData.generalTodo"
        :key="task.id"
        class="todo-item"
      >
        <label>
          <input
            type="checkbox"
            v-model="checkboxes[task.id]"
            @change="saveCheckbox(task.id.replace(/(\d+)$/, '-$1'))"
          >
          {{ task.title }}
        </label>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import homeDataRaw from '../data/homeData.json'
import Section from '../components/Section.vue'

interface UpcomingEvent {
  title: string
  type: string
}

interface DateSection {
  date: string
  events: UpcomingEvent[]
}

interface HomeData {
  upcomingEvents: DateSection[]
  prioritisedTasks: Array<{
    id: string
    title: string
    isPriority2?: boolean
  }>
  generalTodo: Array<{
    id: string
    title: string
  }>
  gardenTodo: Array<{
    id: string
    title: string
  }>
}

const homeData = homeDataRaw as HomeData

interface Checkboxes {
  [key: string]: boolean
  priority0: boolean
  priority1: boolean
  priority2: boolean
  priority3: boolean
  personal0: boolean
  personal1: boolean
  personal2: boolean
  personal3: boolean
  personal4: boolean
  personal5: boolean
  personal6: boolean
  personal7: boolean
  personal8: boolean
  garden0: boolean
  garden1: boolean
  garden2: boolean
  garden3: boolean
  garden4: boolean
  garden5: boolean
  garden6: boolean
  garden7: boolean
}

const checkboxes = ref<Checkboxes>({
  priority0: false,
  priority1: false,
  priority2: false,
  priority3: false,
  personal0: false,
  personal1: false,
  personal2: false,
  personal3: false,
  personal4: false,
  personal5: false,
  personal6: false,
  personal7: false,
  personal8: false,
  garden0: false,
  garden1: false,
  garden2: false,
  garden3: false,
  garden4: false,
  garden5: false,
  garden6: false,
  garden7: false,
})

const priority1Tasks = computed(() =>
  homeData.prioritisedTasks.filter(task => !task.isPriority2)
)

const priority2Tasks = computed(() =>
  homeData.prioritisedTasks.filter(task => task.isPriority2)
)

const saveCheckbox = (id: string) => {
  const key = id.replace('-', '')
  const value = checkboxes.value[key as keyof Checkboxes]
  localStorage.setItem(`checkbox-${id}`, String(value))
}

const loadCheckboxes = () => {
  const keys = Object.keys(checkboxes.value) as string[]
  keys.forEach((key) => {
    const id = key.replace(/(\d+)$/, '-$1')
    const saved = localStorage.getItem(`checkbox-${id}`)
    if (saved === 'true') {
      checkboxes.value[key] = true
    }
  })
}

onMounted(() => {
  loadCheckboxes()
})
</script>

<style scoped>
.home-tab {
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

.upcoming-date-section {
  font-weight: 600;
  color: #555;
  margin: 10px 0 6px 0;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.upcoming-date-section:first-child {
  margin-top: 0;
}

.upcoming-item {
  padding: 8px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  font-size: 13px;
  color: #333;
}

.upcoming-item.today {
  background: #fee2e2;
  border-left: 3px solid #dc2626;
}

.upcoming-item.future {
  background: #dbeafe;
  border-left: 3px solid #3b82f6;
}

.priority-item {
  background: #fef3c7;
  padding: 8px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  border-left: 3px solid #f59e0b;
}

.priority-item input[type="checkbox"] {
  margin-right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.priority-item label {
  font-size: 13px;
  font-weight: 600;
}

.todo-item {
  background: #fff9e6;
  padding: 8px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  border-left: 3px solid #ffc107;
}

.todo-item input[type="checkbox"] {
  margin-right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.todo-item label {
  font-size: 13px;
}
</style>
