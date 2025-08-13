<template>
    <div class="flex flex-col md:flex-row h-screen">
        <!-- Sidebar: Hidden on small screens -->
        <div class="hidden md:flex">
            <Sidebar :activeSection="activeSection" @navigate="scrollToSection" />
        </div>

        <!-- Sidebar Toggle Button (Optional for mobile) -->
        <!-- You can add a hamburger icon here if you want a mobile sidebar -->

        <!-- Content -->
        <div ref="scrollContainer" class="flex-1 overflow-y-auto px-4 py-6 scrollbar-hidden">
            <div class="h-5 md:h-20 text-end cursor-pointer">
                <div class="md:hidden">
                    <i :class="[
                        isDark ? 'pi pi-sun' : 'pi pi-moon',
                    ]" class="text-primary" style="font-size: 1.2rem" @click="toggleDark"></i>
                </div>
            </div>

            <!-- Content Row -->
            <section id="about">
                <div class="flex flex-col md:flex-row mb-5">
                    <!-- Left Text -->
                    <div class="md:basis-2/3 content-center top">
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
                            <Button label="View Portofolio" icon="pi pi-arrow-right" severity="primary" rounded
                                size="large" class="w-48 justify-center" @click="scrollToSection('portfolio')" />
                            <Button label="View Resume" icon="fa-regular fa-id-badge" severity="primary" rounded
                                variant="outlined" size="large" class="w-48 justify-center"
                                @click="scrollToSection('resume')" />
                        </div>
                    </div>

                    <!-- Rotating Image Card -->
                    <div class="relative md:basis-1/3 m-5">
                        <div class="absolute inset-0 bg-blue-400 dark:bg-indigo-300 rounded-lg animate-rotate-slow z-0">
                        </div>
                        <img src="../assets/image/S__69730311.jpg"
                            class="relative w-full h-full z-10 object-cover rounded-lg" />
                    </div>
                </div>
                <div class="pt-5 flex flex-col gap-3 w-full">
                    <div class="flex items-center">
                        <div class="text-blue-600 text-6xl">|</div>
                        <div class="font-bold text-4xl md:text-6xl pt-3">What i do</div>
                    </div>
                    <div class="flex flex-row px-1">
                        <div class="w-full">
                            <p class="text-lg text-left">Below is a quick overview of my main technical skill sets and
                                technologies I use. Want to find
                                out more about my experience? Check out my <span
                                    class="text-blue-500 font-semibold">online
                                    resume</span>
                                and <span class="text-blue-500 font-semibold">project portfolio</span> .</p>
                        </div>
                        <div class="hidden xl:block xl:w-80"></div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 px-1">
                        <div v-for="i in skills" class="opacity-0 skill-card">
                            <Card class="bg-white dark:bg-gray-600">
                                <template #title>
                                    <div class="flex flex-row gap-2">
                                        <div v-for="ic in i.icon">
                                            <img v-if="ic.link" :src="ic.link" class="w-8 h-8">
                                        </div>
                                    </div>
                                </template>
                                <template #subtitle>{{ i.name }}</template>
                                <template #content>
                                    <div>
                                        <p class="mb-2">Expertise</p>
                                        <div class="flex flex-row gap-1">
                                            <i v-for="n in 5" :key="n" :class="getStarClass(i.star, n)"></i>
                                        </div>
                                        <p class="mt-1">{{ i.level }}</p>
                                    </div>
                                </template>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            <div class="h-10"></div>
            <section id="portfolio">
                <div class="pt-5 flex flex-col gap-3 w-full">
                    <div class="flex items-center">
                        <div class="text-blue-600 text-6xl">|</div>
                        <div class="font-bold text-4xl md:text-6xl pt-3">Featured Project</div>
                    </div>
                    <div class="flex flex-col gap-3 xl:flex-row px-1">
                        <div class="w-full">
                            <p class="text-lg text-left">Explore a highlight of one of my key technical achievements.
                                This
                                featured
                                project showcases the tools, technologies, and problem-solving skills I bring to every
                                build.
                            </p>
                        </div>
                        <div class="block xl:w-80">
                        </div>
                    </div>
                    <div class="h-5"></div>
                    <div class="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-4 px-1">
                        <div class="project-card flex flex-col justify-items-center gap-5 relative opacity-0"
                            v-for="(i, index) in projects" :key="index">
                            <img :src="i.image" alt=""
                                class="w-full h-100 object-fill transition-transform duration-500 ease-in-out hover:scale-[1.05]" />

                            <div class="flex flex-row gap-5 mx-2 items-center relative">
                                <div class="basis-5/6 flex flex-col gap-3">
                                    <div class="flex flex-row gap-2">
                                        <Button v-for="stack in i.stacks" :key="stack" :label="stack" variant="outlined"
                                            severity="contrast" rounded size="small" />
                                    </div>
                                    <p class="font-bold text-2xl">{{ i.name }}</p>
                                </div>

                                <div class="basis-1/6 justify-end relative">
                                    <Button icon="pi pi-arrow-up-right" rounded @click="toggleDescription(index)"
                                        class="btn-rotate bg-neutral-300 text-black border-neutral-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white dark:bg-neutral-500 dark:text-white dark:border-neutral-500 dark:hover:bg-blue-300 dark:hover:border-blue-300 dark:hover:text-black" />
                                </div>
                            </div>

                            <!-- Full-width floating description -->
                            <Transition name="slide-fade">
                                <div v-if="activeDescriptionIndex === index"
                                    class="absolute left-0 right-0 top-full mt-2 p-4 rounded-lg shadow-lg bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-600 z-50">
                                    <p class="text-sm text-gray-700 dark:text-gray-200">
                                        {{ i.description }}
                                    </p>
                                </div>
                            </Transition>
                        </div>
                    </div>
                </div>
            </section>
            <div class="h-10"></div>
            <section id="resume">
                <div class="pt-5 flex flex-col gap-3 w-full">
                    <div class="flex items-center">
                        <div class="text-blue-600 text-6xl">|</div>
                        <div class="font-bold text-4xl md:text-6xl pt-3">Career Highlights</div>
                    </div>
                    <div class="flex flex-col xl:flex-row px-1">
                        <div class="w-full">
                            <p class="text-lg text-left">A curated summary of my most impactful roles and projects, with
                                my full
                                resume available for a complete breakdown of my professional experience.
                            </p>
                        </div>
                        <div class="block xl:w-80"></div>
                    </div>
                    <div class="h-5"></div>
                    <div class="flex flex-col w-full gap-3 exp-card opacity-100">
                        <div class="flex flex-col sm:flex-row h-auto gap-3">
                            <div
                                class="md:basis-[50%] lg:basis-[38%] xl:basis-[28%] flex justify-center sm:justify-start">
                                <img src="../assets/image/bbma.png" class="relative w-auto h-60 company-img" />
                            </div>
                            <div class="flex items-center">
                                <div class="gap-3 px-5 xl:px-0">
                                    <p class="font-bold text-2xl">PT. Bilah Baja Makmur Abadi</p>
                                    <p class="text-gray-600 dark:text-gray-300 text-lg">IT Support</p>
                                    <p>2024 - Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center sm:justify-start mt-4 px-1">
                        <Button label="Download Resume" class="opacity-0 resume-btn" icon="pi pi-download" size="large"
                            @click="showPDF" />
                    </div>
                </div>
            </section>
            <div class="h-10"></div>
            <section id="contact">
                <div class="pt-5 flex flex-col gap-3 w-full">
                    <div class="flex items-center">
                        <div class="text-blue-600 text-6xl">|</div>
                        <div class="font-bold text-4xl md:text-6xl pt-3">Get In Touch</div>
                    </div>
                    <div class="flex flex-col xl:flex-row px-1">
                        <div class="w-full">
                            <p class="text-lg text-left">Let’s connect! Whether you have a question, feedback, or just
                                want
                                to say
                                hello, I’d be happy to hear from you.
                            </p>
                        </div>
                        <div class="block xl:w-80"></div>
                    </div>
                    <div class="h-5"></div>

                    <div class="flex flex-col-reverse xl:flex-row">
                        <div class="contact-form basis-1/2 bg-white dark:bg-gray-600">
                            <div class="mx-5 my-6">
                                <h1 class="font-bold text-xl">Contact Form</h1>
                                <form @submit.prevent="sendEmail">
                                    <div class="flex flex-col mt-2 gap-2">
                                        <label for="fullname">Fullname</label>
                                        <InputText v-model="contact.fullname" id="fullname" placeholder="Fullname"
                                            type="text" :invalid="submitted && !contact.fullname" />
                                    </div>
                                    <div class="flex flex-col mt-2 gap-2">
                                        <label for="email">Email Address</label>
                                        <InputText v-model="contact.email" id="email" placeholder="Email" type="email"
                                            :invalid="submitted && !contact.email" />
                                    </div>
                                    <div class="flex flex-col mt-2 gap-2">
                                        <label for="subject">Subject</label>
                                        <InputText v-model="contact.subject" id="subject" placeholder="Subject"
                                            type="text" :invalid="submitted && !contact.subject" />
                                    </div>
                                    <div class="flex flex-col mt-2 gap-2">
                                        <label for="message">Message</label>
                                        <Textarea id="message" v-model="contact.message" rows="5" placeholder="Message"
                                            :invalid="submitted && !contact.message" />
                                    </div>
                                    <div class="flex justify-center mt-5">
                                        <Toast />
                                        <Button label="Send Message" type="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="basis-1/2">
                            <div class="mx-5 my-6">
                                <h1 class="font-bold text-xl">Contact Details</h1>
                                <div class="flex flex-col mt-2 gap-2">
                                    <div class="mt-2">
                                        <p><i class="pi pi-map-marker mr-3"></i>Medan, North Sumatra</p>
                                    </div>
                                    <div class="mt-2">
                                        <p><i class="pi pi-envelope mr-3"></i>kevinchien24@gmail.com</p>
                                    </div>
                                    <div class="mt-2">
                                        <p><i class="pi pi-phone mr-3"></i>+6281375250181</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="h-20"></div>
            <Footer class="mt-5" />
        </div>
    </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Button from 'primevue/button';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useDark } from '@vueuse/core';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Footer from '@/components/Footer.vue';
import emailjs from "@emailjs/browser";
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const fullText = 'WEB DEVELOPER'
const displayText = ref('')
let isDeleting = false
let index = 0
const isDark = useDark();
const activeDescriptionIndex = ref(null)
const contact = ref({
    fullname: "",
    email: "",
    subject: "",
    message: ""
});
const success = ref(false);
const submitted = ref(false);
const failed = ref(false);

const scrollContainer = ref(null)
const activeSection = ref('about')
const sectionIds = ['about', 'portfolio', 'resume', 'contact'];
const serviceKey = import.meta.env.VITE_SERVICE_KEY;
const temaplateKey = import.meta.env.VITE_TEMPLATE_KEY;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const sendEmail = async () => {
    submitted.value = true;
    if (contact.value.fullname != "" && contact.value.email != "" && contact.value.subject != "" && contact.value.message != "") {
        try {
            const result = await emailjs.send(
                `${serviceKey}`,      // Your Service ID
                `${temaplateKey}`,     // Your Template ID
                {
                    fullname: contact.value.fullname,
                    email: contact.value.email,
                    subject: contact.value.subject,
                    message: contact.value.message
                },
                `${publicKey}`       // Your Public Key
            );
            toast.add({ severity: 'success', summary: 'Done', detail: 'Message Succcessfully Sent !', life: 3000 });
            console.log(result.text);
        } catch (error) {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Message Sent Failed', life: 3000 });
            console.error("Error sending email:", error);
        }
    }
}

const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el || !scrollContainer.value) return
    // scroll the container to the element's offsetTop
    scrollContainer.value.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
    // optimistic UI update
    activeSection.value = id
}

const updateActiveSection = () => {
    const container = scrollContainer.value
    if (!container) return
    const scrollPos = container.scrollTop + container.clientHeight / 2

    for (const id of sectionIds) {
        const sec = document.getElementById(id)
        if (!sec) continue
        const top = sec.offsetTop
        const bottom = top + sec.offsetHeight
        if (scrollPos >= top && scrollPos < bottom) {
            activeSection.value = id
            break
        }
    }
}

onMounted(() => {
    typeWriter();
    cardEntry('.skill-card');
    cardEntry('.project-card');
    cardEntry('.exp-card');
    buttonEntry();
    if (scrollContainer.value) {
        scrollContainer.value.addEventListener('scroll', updateActiveSection)
        // update once in case user loads in middle
        updateActiveSection()
    }
})

onBeforeUnmount(() => {
    if (scrollContainer.value) {
        scrollContainer.value.removeEventListener('scroll', updateActiveSection)
    }
})

const toggleDescription = (index) => {
    activeDescriptionIndex.value = activeDescriptionIndex.value === index ? null : index;
    document
        .querySelectorAll('.project-card')
        .forEach((el, idx) => {
            el.classList.toggle('show-description', idx === index);
        });
}

const showPDF = () => {
    window.open('/resume.pdf', '_blank');
}

const skills = ref([
    {
        "name": "Vue",
        "icon": [{ link: "/logo/icons8-vue-js.svg" }],
        "star": 3,
        "level": "Intermediate"
    },
    {
        "name": "Laravel",
        "icon": [{ link: "/logo/icons8-laravel-64.png" }],
        "star": 2.5,
        "level": "Novice"
    },
    {
        "name": "Node.Js",
        "icon": [{ link: "/logo/icons8-nodejs.svg" }],
        "star": 3,
        "level": "Intermediate"
    },
    {
        "name": "MySQL & PostgreSQL",
        "icon": [{ link: "/logo/icons8-mysql-logo.svg" }, { link: "/logo/icons8-postgresql.svg" }],
        "star": 3.5,
        "level": "Intermediate"
    },
    {
        "name": "Spring Boot",
        "icon": [{ link: "/logo/icons8-spring-boot.svg" }],
        "star": 3,
        "level": "Intermediate"
    },
    {
        "name": "Bootstrap",
        "icon": [{ link: "/logo/icons8-bootstrap.svg" }],
        "star": 3,
        "level": "Intermediate"
    },
    {
        "name": "Tailwind",
        "icon": [{ link: "/logo/icons8-tailwind-css.svg" }],
        "star": 3.5,
        "level": "Intermediate"
    },
    {
        "name": "HTML & CSS",
        "icon": [{ link: "/logo/icons8-html-5.svg" }, { link: "/logo/icons8-css-logo.svg" }],
        "star": 4,
        "level": "Advanced"
    },
]);

const projects = [
    {
        "image": "/image/jaegar.png",
        "name": "CasHiLo Web App for Money Management",
        "stacks": ["Vue", "Spring", "PostgreSQL"],
        "description": "A financial management platform that simplifies money management with features like multi-account support, detailed financial record tracking, and an interactive dashboard for real-time insights. Developed with Spring Boot, Vue, Tailwind, and PostgreSQL to deliver performance, scalability, and a modern user experience."
    },
    {
        "image": "/image/jaegar.png",
        "name": "Jaegar Resto for Restaurant Management",
        "stacks": ["Laravel", "Bootstrap 5", "PostgreSQL"],
        "description": "A comprehensive restaurant management system that streamlines operations with features like table management, menu organization, real-time menu availability control, and an interactive sales dashboard. Developed with Laravel, Bootstrap, and PostgreSQL for performance, scalability, and ease of use."
    },
    {
        "image": "/image/jaegar.png",
        "name": "POS App",
        "stacks": ["Node Js", "Bootstrap 5", "MySQL"],
        "description": "A web-based system that simplifies store operations by providing real-time inventory tracking, seamless transaction management, and automated cash report generation. Developed using Node.js, MySQL, and Bootstrap for efficiency and reliability."
    },
    {
        "image": "/image/jaegar.png",
        "name": "UniPhone Marketplace",
        "stacks": ["Node Js", "Bootstrap 5", "MySQL"],
        "description": "A web-based marketplace platform that offers seamless shopping with features like a cart, wishlist, and secure payment system. Developed using Node.js, MySQL, and Bootstrap to ensure performance, scalability, and user-friendly design."
    },
];

const getStarClass = (rating, position) => {
    if (rating >= position) {
        return "fa-solid fa-star text-yellow-300 dark:text-yellow-500"
    } else if (rating >= position - 0.5) {
        return "fa-solid fa-star-half-stroke text-yellow-300 dark:text-yellow-500"
    } else {
        return "fa-regular fa-star"
    }
}


const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    isDark.value = !isDark.value;
}

function cardEntry(item) {
    const cards = document.querySelectorAll(item);
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-popIn');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
}

function buttonEntry() {
    const btn = document.querySelector('.resume-btn');
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                btn.classList.add('animate-slideUp');
                observer.unobserve(btn);
            }
        },
        { threshold: 0.2 }
    );
    observer.observe(btn);
}

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