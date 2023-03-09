<template>
  <div class="block block_input">
    <input v-model="filters.name" id="searchInput" />
    <label for="searchInput">Search by keyword:</label>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
};
</script>
<script setup>
import { toRefs } from "vue";

const props = defineProps({
  filters: Object,
});
const { filters } = toRefs(props);
</script>
