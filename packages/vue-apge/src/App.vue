<template>
  <div class="wrap">
    <section className="section filters">
      <h2 className="title">Prodcut Search</h2>
      <SearchInput />
      <div className="block block_filters">
         <FiltersBlock v-for="(value, index) in keys" :key="index" :field="value" />
       </div>
    </section>
    <GoodsBlock />
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
import FiltersBlock from "./blocks/FiltersBlock.vue";

const defFilters = {
  type: null,
  size: null,
  color: null,
  name: "",
};

let keys = Object.keys(defFilters).filter(x=>x!=='name')
</script>

<style></style>
