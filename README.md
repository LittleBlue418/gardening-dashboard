# Personal Dashboard

A personal dashboard built with Vue 3, TypeScript, and Vite featuring garden planning and task management.

## Features

- **Home Tab**: Upcoming events, prioritised tasks, general to-do list, and garden to-do list
- **Garden Tab**: Monthly planting plans, harvesting schedule, seed inventory, and shopping list
- **Garden Calendar**: Interactive timeline showing the 2026 growing season with all planned crops

## Tech Stack

- Vue 3 with Composition API (`<script setup>`)
- TypeScript
- Vite
- LocalStorage for data persistence

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── HomeTab.vue           # Home tab content
│   ├── GardenTab.vue          # Garden planning content
│   └── GardenCalendarTab.vue  # Growing season timeline
├── App.vue                    # Main app with tab navigation
├── main.ts                    # App entry point
└── style.css                  # Global styles
```
