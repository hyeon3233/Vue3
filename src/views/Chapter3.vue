<script setup>
import { ref } from 'vue';

const fruits = 'apple avocado';
const fruitsArr = [ 'banana', 'blueberry'];

const visible = ref({ fruit: true, pointer: true });
const hidden = { fruit: false};

const changeVisible = () => {
    console.log(visible.fruit)
    visible.value.fruit = !visible.value.fruit;
}
const rect = 'background-color: red; width: 200px; height: 100px;'
const rectObj = {
backgroundColor: 'red',
width: '200px',
height: '100px',
marginTop: '10px'
};
rectObj.backgroundColor = 'blue';
let loading = true;
</script>

<template>
    <h1>chapter3</h1>

    <div :class="fruits">사과 / 아보카도</div>
    <div :class="fruitsArr" :title="fruitsArr">바나나 / 블루베리</div>
    <hr>
    <div :class="visible" @click="changeVisible">사과 {{ visible.fruit }}</div>
    <div :class="hidden">오이</div>
    <div :style="rect">rect</div>
    <div v-bind:style="rectObj">rectObj</div>

    <div v-if="loading">
        <div>
            ㅋㅋㅋㅋ
            <div>로딩중</div>
        </div>
    </div>
    <div v-else>로딩 완료!</div>

    <div v-show="loading">show lodaing</div>


</template>

<style scoped>
.fruit { color: red;}
</style>