<template>
  <label v-bind:for="input.id"
    >{{ input.label }}
    <input
      v-model="input.value"
      v-bind:type="input.type"
      class="input"
      v-bind:id="input.id"
      v-bind:placeholder="input.placeholder"
      autocomplete="off"
    />
  </label>
</template>
<script>
export default {
  props: {
    inputsParm: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style>
</style>