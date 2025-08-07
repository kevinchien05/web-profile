<template>
    <div class="card flex justify-content-center">
        <div class="basis-1/4">
            <ScrollPanel style="width: 100%; height: 100vh" :pt="{
                wrapper: {
                    style: { 'border-right': '10px solid blue' }
                },
                bary: 'hover:bg-primary-400 bg-primary-300 opacity-100'
            }">
                <div>
                    <Card style="width: 100%;" class="flex justify-center">
                        <template #header>
                            <Avatar image="https://primefaces.org/cdn/primevue/images/usercard.png" class="mr-2" size="xlarge" shape="circle"/>
                            <!-- <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" /> -->
                        </template>
                        <template #title>Kevin</template>
                        <template #subtitle>Web Developer</template>
                        <template #content>
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
                                error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis,
                                culpa ratione quam perferendis esse, cupiditate neque
                                quas!
                            </p>
                        </template>
                    </Card>
                </div>
            </ScrollPanel>
        </div>
        <div class="basis-3/4"><Button @click="toggleDark">Dark Mode</Button></div>
    </div>
</template>
<script setup>
import Button from 'primevue/button';
import Card from 'primevue/card';
import { ScrollPanel } from 'primevue';
import Avatar from 'primevue/avatar';

const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
}
</script>