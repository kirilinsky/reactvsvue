<template>
  <div class="good_item">
    <div class="good_item_pic">
      <img :src="good.image" :alt="good.image" />
    </div>
    <div class="good_item_body">
      <h3 class="good_item_title">{{ good.name }}</h3>
      <p class="good_item_desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        corrupti, debitis omnis error sunt nesciunt sequi odio iusto nostrum.
      </p>
      <b class="good_item_price">{{ good.price }}.$</b>
      <div class="good_item_tags">
        <TagComponent :title="good.type"/>
        <TagComponent :title="good.color"/>
        <TagComponent :title="good.size"/> 
      </div>
                <button className="good_item_action">Buy</button>

    </div>
  </div>
</template>

<script>

export default {
  name: "GoodComponent",
  props: {
    good: {
      default: null,
      type: Object,
    },
  },
};
</script>
<script setup>
import TagComponent from "./Tag.vue";


</script>
