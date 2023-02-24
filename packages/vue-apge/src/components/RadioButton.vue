<template>
  <div className="radio">
    <input
      :onClick="onChange"
      :value="label"
      :name="name"
      type="radio"
      :checked="checked"
      :id="id"
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
    onChange: Function,
    name: String,
  },
  mounted() {
    this.id = this._uid;
  },
};
</script>
