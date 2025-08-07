<template>
    <div class="flex flex-col md:flex-row h-screen">
        <!-- Sidebar: Hidden on small screens -->
        <div class="hidden md:flex">
            <Sidebar />
        </div>

        <!-- Sidebar Toggle Button (Optional for mobile) -->
        <!-- You can add a hamburger icon here if you want a mobile sidebar -->

        <!-- Content -->
        <div class="flex-1 overflow-y-auto px-4 py-6 scrollbar-hidden">
            <div class="h-5 md:h-20 text-end cursor-pointer">
                <div class="md:hidden">
                    <i :class="[
                        isDark ? 'pi pi-sun' : 'pi pi-moon',
                    ]" class="text-primary" style="font-size: 1.2rem" @click="toggleDark"></i>
                </div>
            </div>

            <!-- Content Row -->
            <div class="flex flex-col md:flex-row mb-5">
                <!-- Left Text -->
                <div class="md:basis-2/3 content-center">
                    <p class="font-bold text-xl">HI, I'M KEVIN</p>
                    <p class="font-bold text-4xl text-blue-400 my-5">
                        <span v-text="displayText"></span><span class="animate-pulse">|</span>
                    </p>
                    <p class="font-semibold">
                        I'm a junior developer specializing in a web app.
                    </p>
                    <p class="font-semibold">
                        Explore my <span class="text-blue-500">project portofolio</span> and
                        <span class="text-blue-500">online resume</span>.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-4">
                        <Button label="View Portofolio" icon="pi pi-arrow-right" severity="primary" rounded size="large"
                            class="w-48 justify-center" />
                        <Button label="View Resume" icon="pi pi-file" severity="primary" rounded variant="outlined"
                            size="large" class="w-48 justify-center" />
                    </div>
                </div>

                <!-- Rotating Image Card -->
                <div class="relative md:basis-1/3 m-5">
                    <div class="absolute inset-0 bg-blue-400 dark:bg-indigo-300 rounded-lg animate-rotate-slow z-0">
                    </div>
                    <img src="https://i.pravatar.cc/100" class="relative w-full h-full z-10 object-cover rounded-lg" />
                </div>
            </div>
            <div class="pt-5 flex flex-col gap-3 w-full">
                <div class="flex items-center">
                    <div class="text-blue-600 text-6xl">|</div>
                    <div class="font-bold text-6xl pt-3">What i do</div>
                </div>
                <div class="flex flex-row px-1">
                    <div class="w-full">
                        <p class="text-lg text-left">Below is a quick overview of my main technical skill sets and
                            technologies I use. Want to find
                            out more about my experience? Check out my <span class="text-blue-500">online resume</span>
                            and <span class="text-blue-500">project portfolio</span> .</p>
                    </div>
                    <div class="hidden md:block md:w-80"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 px-1">
                    <div v-for="i in skills">
                        <Card class="bg-white dark:bg-gray-600">
                            <template #title>
                                <div class="flex flex-row gap-2">
                                    <div v-for="ic in i.icon">
                                        <i :class="ic.name" :style="{ color: ic.color }" class="text-3xl"></i>
                                    </div>
                                </div>
                            </template>
                            <template #subtitle>{{ i.name }}</template>
                            <template #content>
                                {{ i.content }}
                            </template>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Button from 'primevue/button';
import { ref, onMounted } from 'vue';
import { useDark } from '@vueuse/core';
import Card from 'primevue/card';

const fullText = 'WEB DEVELOPER'
const displayText = ref('')
let isDeleting = false
let index = 0
const isDark = useDark();
const skills = ref([
    {
        "name": "Vue",
        "icon": [{ name: "fa-brands fa-vuejs", color: "#1C9C71" }],
        "content": "",
    },
    {
        "name": "Laravel",
        "icon": [{ name: "fa-brands fa-laravel", color: "#FE1650" }],
        "content": "",
    },
    {
        "name": "Node.Js",
        "icon": [{ name: "fa-brands fa-node", color: "#1ECC53" }],
        "content": "",
    },
    {
        "name": "MySQL",
        "icon": [{ name: "fa-brands fa-node", color: "#1ECC53" }],
        "content": "",
    },
    {
        "name": "PostgreSQL",
        "icon": [{ name: "fa-brands fa-node", color: "#1ECC53" }],
        "content": "",
    },
    {
        "name": "Bootstrap",
        "icon": [{ name: "fa-brands fa-node", color: "#1ECC53" }],
        "content": "",
    },
    {
        "name": "Tailwind",
        "icon": [{ name: "fa-brands fa-node", color: "#1ECC53" }],
        "content": "",
    },
    {
        "name": "HTML & CSS",
        "icon": [{ name: "fa-brands fa-node", color: "#1ECC53" }],
        "content": "",
    },
])

const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    isDark.value = !isDark.value;
}

onMounted(() => {
    typeWriter()
})

function typeWriter() {
    setTimeout(() => {
        if (!isDeleting) {
            displayText.value = fullText.substring(0, index + 1)
            index++
            if (index === fullText.length) {
                isDeleting = true
                setTimeout(typeWriter, 2000) // wait before deleting
                return
            }
        } else {
            displayText.value = fullText.substring(0, index - 1)
            index--
            if (index === 0) {
                isDeleting = false
            }
        }
        typeWriter()
    }, isDeleting ? 100 : 150)
}
</script>
<style>
@layer utilities {
    @keyframes rotate-slow {
        0% {
            transform: rotate(0deg);
        }

        25% {
            transform: rotate(10deg);
        }

        50% {
            transform: rotate(0deg);
        }

        50% {
            transform: rotate(-10deg);
        }

        100% {
            transform: rotate(0deg);
        }
    }

    .animate-rotate-slow {
        animation: rotate-slow 10s linear infinite;
    }
}
</style>
