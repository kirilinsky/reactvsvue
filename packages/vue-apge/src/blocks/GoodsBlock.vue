<template>
  <section className="section list">
    <div v-if="error">Error while loading</div>
    <div v-else-if="loading" className="error-box">
      <img
        className="load"
        :src="require('../assets/loading.png')"
        alt="loading"
      />
    </div>
    <div v-else-if="state.filtredGoods.length === 0" className="error-box">
      <h3>No results</h3>
      <button @click="resetFilters">
        reset filters
        <img :src="require('../assets/reset.png')" alt="reset" />
      </button>
    </div>
    <!-- or -->
    <GoodComponent
      v-else
      v-for="good in state.filtredGoods"
      :key="good.id"
      :good="good"
    />
  </section>
</template>

<script>
export default {
  name: "GoodsBlock",
 
};
</script>

<script setup>
import GoodComponent from "../components/Good.vue";

import { useFetch } from "@/composables/useFetch";
import { reactive, toRaw, toRefs, watchEffect } from "vue";
const { data, loading, getData, error } = useFetch(
  "http://localhost:5001/items"
);
const state = reactive({
  filtredGoods: [],
  log: data,
});
function filterByKey(arr, key, value) {
  return arr.filter((item) => item[key] === value);
}

watchEffect(() => {
  let filters = props.filters;
  let tempData = toRaw(state.log);

  let keys = Object.keys(filters);
  keys.forEach((key) => {
    if (filters[key]) {
      if (key === "name") {
        tempData = tempData.filter(({ name }) => {
          return name.toLowerCase().includes(filters[key].toLowerCase());
        });
      } else {
        tempData = filterByKey(tempData, key, filters[key]);
      }
    }
  });
  state.filtredGoods = tempData;
});

const props = defineProps({
  filters: Object,
  resetFilters: Function
});
const { filters,resetFilters } = toRefs(props);
</script>
