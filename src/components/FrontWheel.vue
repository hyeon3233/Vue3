<script setup>
import Tire from './Tire.vue';
</script>


<template>
    <div class="front-wheel">
        <span>FRONT WHEEL</span>
        <Tire color="RED"/>
    </div>
</template>

<style scoped>
.front-wheel {
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
}
</style>