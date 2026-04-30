<template>
  <div class="home-tab">
    <!-- Column 1: Upcoming -->
    <div class="card">
      <div class="card-header">
        <span class="card-icon">📆</span>
        Upcoming
      </div>

      <div class="upcoming-date-section">Monday, Apr 27</div>
      <div class="upcoming-item future">Ultrasound appointment</div>

      <div class="upcoming-date-section">Wednesday, Apr 29</div>
      <div class="upcoming-item future">Knitting evening with Jo</div>

      <div class="upcoming-date-section">Saturday, May 2</div>
      <div class="upcoming-item future">Aisling's wedding</div>
    </div>

    <!-- Column 2: Prioritised Tasks -->
    <div class="card">
      <div class="card-header">
        <span class="card-icon">⭐</span>
        Prioritised Tasks
      </div>

      <div class="section-title">Priority 1</div>
      <div class="priority-item">
        <label>
          <input type="checkbox" v-model="checkboxes.priority0" @change="saveCheckbox('priority-0')">
          Assemble wedding skirt
        </label>
      </div>

      <div class="priority-item">
        <label>
          <input type="checkbox" v-model="checkboxes.priority1" @change="saveCheckbox('priority-1')">
          New mockup for wedding corset
        </label>
      </div>

      <div class="priority-item">
        <label>
          <input type="checkbox" v-model="checkboxes.priority2" @change="saveCheckbox('priority-2')">
          Make pattern for wedding waistcoat
        </label>
      </div>

      <div class="section-title">Priority 2</div>
      <div class="priority-item">
        <label>
          <input type="checkbox" v-model="checkboxes.priority3" @change="saveCheckbox('priority-3')">
          Book dentist appointment
        </label>
      </div>
    </div>

    <!-- Column 3: General To-Do -->
    <div class="card">
      <div class="card-header">
        <span class="card-icon">📝</span>
        General To-Do
      </div>

      <div class="todo-item">
        <label>
          <input type="checkbox" v-model="checkboxes.personal0" @change="saveCheckbox('personal-0')">
          Move the firewood
        </label>
      </div>

      <div class="todo-item">
        <label>
          <input type="checkbox" v-model="checkboxes.personal1" @change="saveCheckbox('personal-1')">
          Recycle scraps from deck building
        </label>
      </div>

      <div class="todo-item">
        <label>
          <input type="checkbox" v-model="checkboxes.personal2" @change="saveCheckbox('personal-2')">
          Organize bookcase
        </label>
      </div>

      <div class="todo-item">
        <label>
          <input type="checkbox" v-model="checkboxes.personal3" @change="saveCheckbox('personal-3')">
          Empty sauna
        </label>
      </div>

      <div class="todo-item">
        <label>
          <input type="checkbox" v-model="checkboxes.personal4" @change="saveCheckbox('personal-4')">
          Unblock wood chipper
        </label>
      </div>

      <div class="todo-item">
        <label>
          <input type="checkbox" v-model="checkboxes.personal5" @change="saveCheckbox('personal-5')">
          Mount small greenhouse
        </label>
      </div>

      <div class="todo-item">
        <label>
          <input type="checkbox" v-model="checkboxes.personal6" @change="saveCheckbox('personal-6')">
          Take down Christmas decorations in office
        </label>
      </div>

      <div class="todo-item">
        <label>
          <input type="checkbox" v-model="checkboxes.personal7" @change="saveCheckbox('personal-7')">
          Unpack the office boxes
        </label>
      </div>

      <div class="todo-item">
        <label>
          <input type="checkbox" v-model="checkboxes.personal8" @change="saveCheckbox('personal-8')">
          Dye hair
        </label>
      </div>
    </div>

    <!-- Column 9: Garden To-Do -->
    <div class="card">
      <div class="card-header">
        <span class="card-icon">🌿</span>
        Garden To-Do
      </div>

      <div class="todo-item">
        <label>
          <input type="checkbox" v-model="checkboxes.garden0" @change="saveCheckbox('garden-0')">
          Start tomato seeds indoors
        </label>
      </div>

      <div class="todo-item">
        <label>
          <input type="checkbox" v-model="checkboxes.garden1" @change="saveCheckbox('garden-1')">
          Start cucumber seeds indoors
        </label>
      </div>

      <div class="todo-item">
        <label>
          <input type="checkbox" v-model="checkboxes.garden2" @change="saveCheckbox('garden-2')">
          Start pumpkin seeds indoors
        </label>
      </div>

      <div class="todo-item">
        <label>
          <input type="checkbox" v-model="checkboxes.garden3" @change="saveCheckbox('garden-3')">
          Start broccoli & cauliflower indoors
        </label>
      </div>

      <div class="todo-item">
        <label>
          <input type="checkbox" v-model="checkboxes.garden4" @change="saveCheckbox('garden-4')">
          Direct sow: radishes, spinach, peas
        </label>
      </div>

      <div class="todo-item">
        <label>
          <input type="checkbox" v-model="checkboxes.garden5" @change="saveCheckbox('garden-5')">
          Direct sow: carrots, chard
        </label>
      </div>

      <div class="todo-item">
        <label>
          <input type="checkbox" v-model="checkboxes.garden6" @change="saveCheckbox('garden-6')">
          Plant onion sets (~2 boxes)
        </label>
      </div>

      <div class="todo-item">
        <label>
          <input type="checkbox" v-model="checkboxes.garden7" @change="saveCheckbox('garden-7')">
          Finish planting remaining potatoes
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Checkboxes {
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
  const keys = Object.keys(checkboxes.value) as Array<keyof Checkboxes>
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
