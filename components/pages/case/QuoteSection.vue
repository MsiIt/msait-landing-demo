<template>
  <section class="container">
    <div class="quote-section">
      <div class="image-wrapper">
        <CustomNuxtImg
          :src="image"
          :alt="personName"
          width="181"
          height="181"
          imgClass="imgClass"
          class="imgClass"
        />
      </div>
      <div class="content">
        <p class="quote">
          {{ quote }}
        </p>
        <div class="footer">
          <div class="author">
            <p class="name">{{ personName }}</p>
            <NuxtLink class="position">{{ jobTitle }}</NuxtLink>
          </div>
          <SvgIcon name="quote" />
        </div>
        <SvgIcon name="triangle" class="triangle" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const { item } = props

const personName = item.properties.personName.value
const jobTitle = item.properties.jobTitle.value
const quote = item.properties.quote.value
const image = item.properties.image.value[0].url
</script>

<style lang="scss" scoped>
.quote-section {
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 35px;
  max-width: 960px;

  @include sm {
    flex-direction: column-reverse;
  }
}

.image-wrapper {
  flex-shrink: 0;
  margin-right: 20px;
}

:deep(.imgClass) {
  border-radius: 50%;
  object-fit: cover;

  @include sm {
    width: 120px;
    height: 120px;
  }
}

.content {
  position: relative;
  padding: 24px;
  background-color: $color-light-100;
  border-radius: 25px;
  box-shadow: 0 30px 40px 0 #1a237e0d;
  flex-grow: 1;
}

.quote {
  @include p-large-body;
  margin-bottom: 24px;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.name {
  @include p-text;
  margin-bottom: 5px;
}

.position {
  @include p-body-xs;
  color: $color-main-100;
}

.triangle {
  position: absolute;
  top: 30px;
  left: -19px;

  @include sm {
    transform: rotate(30deg) translateX(-65%);
    top: unset;
    bottom: -18px;
    left: 50%;
  }
}
</style>
