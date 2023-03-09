<template>
  <div className="radio">
    <input
      :value="label"
      :name="name"
      type="radio"
      :checked="checked"
      :id="id"
      @change="handleOptionSelected"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    label: String,
    checked: Boolean,
    changeFilters: Function,
    name: String,
    id: String,
  },

  methods: {
    handleOptionSelected({ target: { name, value } }) {
      this.changeFilters(name, value);
    },
  },
};
</script>
