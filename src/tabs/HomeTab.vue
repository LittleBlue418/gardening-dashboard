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

    <!-- Column 2: Shopping -->
    <Section emoji="🛒" title="Shopping">
      <div
        v-for="(item, index) in gardenData.shoppingList"
        :key="`shopping-${index}`"
        class="shopping-item"
      >
        <span class="plant-emoji">{{ item.emoji }}</span>
        <div class="shopping-item-text">{{ item.name }}</div>
      </div>
    </Section>

    <!-- Seed Inventory (Full Width) -->
    <div class="full-width">
      <Section emoji="📦" title="Seed Inventory">
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
      </Section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import homeDataRaw from '../data/homeData.json'
import gardenData from '../data/gardenData.json'
import Section from '../components/Section.vue'

interface HomeData {
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

.plant-emoji {
  font-size: 18px;
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
