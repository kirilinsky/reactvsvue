<template>
  <span v-if="error">error</span>
  <div v-else-if="loading">Loading...</div>
  <div v-else className="radio_block">
    <h2>{{ field }}</h2>
    <div className="radio_block_buttons">
      <RadioButton
        v-for="(label, i) in data"
        :label="label"
        :key="i"
        :name="field"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: { RadioButton },
  name: "FiltersBlock",
};
</script>

<script setup>
import { defineProps, toRefs } from "vue";

import RadioButton from "../components/RadioButton.vue";

import { useFetch } from "@/composables/useFetch";

const props = defineProps({
  field: String,
});
const { field } = toRefs(props);

 

const { data, loading, getData, error } = useFetch(
  `http://localhost:5001/${field.value}`
);
</script>
