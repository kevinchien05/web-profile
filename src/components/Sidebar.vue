<template>
    <div class="flex">
        <div
            class="scrollbar-hidden relative h-screen w-50 lg:w-80 bg-white dark:bg-gray-600 text-white flex flex-col items-center py-6 overflow-y-auto">
            <!-- 🌙 Top-right Icon -->
            <div class="absolute top-4 right-4 cursor-pointer">
                <i :class="[
                    isDark ? 'pi pi-sun' : 'pi pi-moon',
                ]" class="text-primary" style="font-size: 1.2rem" @click="toggleDark"></i>
            </div>

            <!-- Avatar + Name -->
            <div class="relative mt-8">
                <img src="../assets/image/S__69730311.jpg" class="w-24 h-24 rounded-full border-4 border-blue-500" />
            </div>

            <!-- Name & Title -->
            <div class="mt-4 text-center">
                <h2 class="text-xl font-bold text-black dark:text-white">Kevin</h2>
                <p class="text-sm text-gray-600 dark:text-gray-300">Web Developer</p>
            </div>

            <!-- Social Icons -->
            <div class="flex gap-4 mt-4">
                <button
                    class="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-500">
                    <i class="pi pi-github"></i>
                </button>
                <button
                    class="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-pink-500">
                    <i class="pi pi-instagram"></i>
                </button>
                <button
                    class="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-500">
                    <i class="pi pi-whatsapp"></i>
                </button>
                <button
                    class="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600">
                    <i class="pi pi-linkedin"></i>
                </button>
            </div>

            <hr class="w-40 lg:w-65 border-gray-600 dark:border-white my-6" />

            <!-- Menu Items -->
            <nav class="w-full px-6 space-y-3">
                <SidebarItem icon="pi pi-user" text="About Me" active/>
                <SidebarItem icon="pi pi-briefcase" text="Portfolio"/>
                <SidebarItem icon="fa-regular fa-id-badge" text="Resume" />
                <SidebarItem icon="pi pi-envelope" text="Contact" />
            </nav>
        </div>
        <div class="basis-1/64 h-screen bg-gradient-to-b from-blue-400 via-purple-50 dark:from-blue-500 to-blue-300">
        </div>
    </div>
</template>
<script setup>
import SidebarItem from '@/components/SidebarItem.vue';
import { useDark } from '@vueuse/core'
const isDark = useDark();
const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    isDark.value = !isDark.value;
}

</script>