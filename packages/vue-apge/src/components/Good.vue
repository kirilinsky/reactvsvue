<template>
  <div class="good_item">
    <div class="good_item_pic">
      <img :src="good.image" :alt="good.image" />  
    </div>
    <div class="good_item_body">
      <h3 class="good_item_title">{{good.name}}</h3>
      <p class="good_item_desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        corrupti, debitis omnis error sunt nesciunt sequi odio iusto nostrum.
      </p>
      <b class="good_item_price">{{good.price}}.$</b>
      <div class="good_item_tags">
       <!--  <Tag title="{type}" />
        <Tag title="{color}" />
        <Tag title="{size}" />  
        -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodComponent",
  props: {
    good: {
      default: null,
      type: Object
    },
  },
};
</script>

