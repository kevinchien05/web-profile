<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

let canvas
let ctx
let snowflakes = []
let animationId

const SNOW_COUNT = 120

class Snowflake {
    constructor() {
        this.reset()
    }

    reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 3 + 1
        this.speed = Math.random() * 1 + 0.5
        this.wind = Math.random() * 0.5 - 0.25
    }

    update() {
        this.y += this.speed
        this.x += this.wind

        if (this.y > canvas.height) {
            this.reset()
            this.y = 0
        }
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.fill()
    }
}

const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    snowflakes.forEach(snow => {
        snow.update()
        snow.draw()
    })
    animationId = requestAnimationFrame(animate)
}

onMounted(() => {
    canvas = document.getElementById('snow-canvas')
    ctx = canvas.getContext('2d')

    resize()
    window.addEventListener('resize', resize)

    snowflakes = Array.from({ length: SNOW_COUNT }, () => new Snowflake())
    animate()
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
    cancelAnimationFrame(animationId)
})
</script>

<template>
    <canvas id="snow-canvas" class="snow-canvas"></canvas>
</template>

<style scoped>
.snow-canvas {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9999;
}
</style>
