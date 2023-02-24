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
    <!-- or -->
    <GoodComponent v-else v-for="good in data" :key="good.id" :good="good" />
  </section>
</template>

<script>
export default {
  name: "GoodsBlock",
  props: {
    msg: String,
  },
};
</script>

<script setup>
import GoodComponent from "../components/Good.vue";

import { useFetch } from "@/composables/useFetch";
const { data, loading, getData, error } = useFetch(
  "http://localhost:5001/items"
);
</script>
