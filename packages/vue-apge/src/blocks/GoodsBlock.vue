<template>
  <section className="section list">
    <button @click="getData">affaff </button>

    <GoodComponent v-for="good in data" :key="good.id" :good="good"/>
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
import GoodComponent from '../components/Good.vue'
import { useFetch } from "@/composables/useFetch"; 
 const { data , loading,getData, error } = useFetch(
  "http://localhost:5001/items"
);
  

console.log(data.value,'data');
 </script>
