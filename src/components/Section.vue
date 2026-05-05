<script setup lang="ts">
defineProps<{
    emoji: string,
    title: string,
}>()
</script>

<template>
    <div class="card">
        <div class="card-header">
            <span class="card-icon">{{ emoji }}</span>
            {{ title }}
        </div>
        <slot />
    </div>
</template>

<style scoped>
.card {
    background: white;
    border-radius: 10px;
    padding: 14px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
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
</style>