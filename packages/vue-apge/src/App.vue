<template>
  <div class="wrap">
    <section className="section filters">
      <h2 className="title">Prodcut Search</h2>
      <SearchInput :changeFilters="changeFilters" :filters="state.filters" />
      <div className="block block_filters">
        <FiltersBlock
          v-for="(value, index) in keys"
          :key="index"
          :field="value"
          :changeFilters="changeFilters"
          :filters="state.filters"
        />
      </div>
    </section>
    <GoodsBlock :resetFilters="resetFilters" :filters="state.filters" />
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
import { reactive } from "vue";

const defFilters = {
  type: null,
  size: null,
  color: null,
  name: "",
};

const state = reactive({
  filters: { ...defFilters },
});

function changeFilters(field, value) {
  console.log(field, value, "inv");
  state.filters[field] = value;
}

function resetFilters() {
  state.filters = { ...defFilters };
}

let keys = Object.keys(defFilters).filter((x) => x !== "name");
</script>

<style></style>
