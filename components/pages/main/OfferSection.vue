<template>
  <section class="offer-section">
    <div class="container">
      <div class="wrapper">
        <p class="text">{{ $t('propose-project-section.description') }}</p>
        <PrimaryButton @click="this.$router.push('/brief')">
          {{ $t('propose-project-section.button.propose') }}
        </PrimaryButton>
        <CustomNuxtImg
          src="/images/superhero-head.png"
          width="301"
          height="169"
          alt="superhero-head"
          class="superhero-head"
          imgClass="superhero-head-img"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OfferSection',
}
</script>

<style scoped lang="scss">
.offer-section {
}

.wrapper {
  position: relative;
  width: 100%;
  display: flex;
  gap: 24px;
  padding: 24px;
  background-color: $color-light-100;
  border-radius: 25px;
  align-items: center;

  @include md {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 870px) {
    padding-bottom: 50px;
  }
  @media screen and (max-width: 830px) {
    padding-bottom: 100px;
  }
  @media screen and (max-width: 660px) {
    padding-bottom: 150px;
  }
  @media screen and (max-width: 470px) {
    padding-bottom: 190px;
  }
}

.text {
  max-width: 640px;
  @include p-large-body;
  line-height: 140%;
  color: $color-dark-200;

  @include md {
    max-width: 600px;
  }
}

.superhero-head {
  position: absolute;
  bottom: 0;
  right: 19px;

  :deep(.superhero-head-img) {
    @include md {
      width: 385px;
      height: 216px;
    }

    @include sm {
      width: 328px;
      height: 184px;
    }
  }

  @include md {
    right: 15px;
  }

  @include sm {
    right: 15px;
  }
}
</style>
