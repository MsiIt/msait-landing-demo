<script setup lang="ts">
const model = defineModel({ type: Number })
const { displayValue, min, max, thumbLabel } = defineProps({
  displayValue: String,
  min: Number,
  max: Number,
  thumbLabel: String,
})
</script>

<template>
  <div class="slider-input">
    <!--    <div class="marks">-->
    <!--      <p class="min">{{ Number(min).toLocaleString() }}</p>-->
    <!--      <p class="max">{{ Number(max).toLocaleString() }}</p>-->
    <!--    </div>-->
    <v-slider
      v-model="model"
      :ripple="false"
      :thumb-size="18"
      hide-details
      :elevation="0"
      :min="min"
      :max="max"
      :thumb-label="thumbLabel"
    >
      <template v-slot:thumb-label> {{ displayValue }} </template>
    </v-slider>
  </div>
</template>

<style lang="scss" scoped>
.slider-input {
  margin-bottom: -14px;
}
.marks {
  display: flex;
  justify-content: space-between;
  //margin-bottom: -10px;

  color: $color-light-500;
  font-size: 14px;
  line-height: 136%;
}
</style>
