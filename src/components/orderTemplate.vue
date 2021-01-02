<template>
  <div class="mb-11">
    <div class="d-flex justify-content-center flex-column flex-lg-row mt-11">
      <TemplateCard v-bind:name="'WAITING'" v-bind:color="'waiting'" />
      <TemplateCard v-bind:name="'DONE'" v-bind:color="'done'" />
      <TemplateCard v-bind:name="'IN PROGRESS'" v-bind:color="'in-progress'" />
    </div>
    <div class="d-flex justify-content-center flex-column flex-lg-row mt-lg-11">
      <TemplateCard v-bind:name="'DONE'" v-bind:color="'done'" />
      <TemplateCard v-bind:name="'CANCELLED'" v-bind:color="'cancelled'" />
      <TemplateCard v-bind:name="'CANCELLED'" v-bind:color="'cancelled'" />
    </div>
  </div>
</template>
<script>
import TemplateCard from "../components/templateCard";
export default {
  name: "OrderTemplate",
  components: {
    TemplateCard,
  },
};
</script>