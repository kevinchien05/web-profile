<template>
    <div :class="[
        'flex items-center justify-between w-full px-4 py-3 rounded-lg cursor-pointer',
        active ? 'bg-blue-500 dark:bg-sky-600 text-white' : 'hover:bg-sky-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
    ]">
        <div class="flex items-center gap-3">
            <i :class="[icon, 'text-lg']"></i>
            <span>{{ text }}</span>
        </div>
        <span v-if="badge" class="bg-green-400 text-xs text-black px-2 py-0.5 rounded-full">{{ badge }}</span>
    </div>
</template>

<script setup>
defineProps({
    icon: String,
    text: String,
    badge: [String, Number],
    active: Boolean,
});
</script>
