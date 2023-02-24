<template>
  <div class="tag">
    {{title}} 
  </div>
</template>

<script>
export default {
  name: "TagComponent",
  props: {
    title: {
      default: null,
      type: String
    },
  },
};
</script>

