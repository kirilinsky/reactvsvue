<template>
  <div class="wrap">
    <section className="section filters">
      <h2 className="title">Prodcut Search</h2>
      <SearchInput/>
    </section>
    <GoodsBlock/>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
import SearchInput from "./components/SearchInput.vue";
import GoodsBlock from "./blocks/GoodsBlock.vue";
//import HelloWorld from './components/HelloWorld.vue'
const x = 12;
</script>

<style></style>
