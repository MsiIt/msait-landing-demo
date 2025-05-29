<script setup lang="ts">
definePageMeta({
  layout: 'dark',
})
</script>

<template>
  <div class="page">
    <div class="container">
      <h1 class="main-gradient-text">
        {{ $t('brief.title') }}
      </h1>
      <main>
        <div class="info">
          <p class="description">
            {{ $t('brief.description') }}
          </p>
          <p class="description">
            {{ $t('brief.description.text1') }}
          </p>
          <p class="description">
            {{ $t('brief.description.text2') }}
          </p>
          <p class="description">
            {{ $t('brief.description.text3') }}
          </p>
          <p class="description">
            {{ $t('brief.description.footer') }}
          </p>

          <div class="image-container">
            <NuxtImg src="/images/brief-man.png" width="467" height="747" class="brief-man" />
          </div>
        </div>

        <div class="form">
          <BriefForm />
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  padding-top: 220px;
  padding-bottom: 60px;
  background-color: $color-light-300;

  @include md {
    padding-top: 190px;
  }
  @include sm {
    padding-top: 160px;
  }
}

main {
  display: flex;
  gap: 103px;

  @include md {
    gap: 32px;
  }
  @include sm {
    flex-direction: column;
    gap: 30px;
  }
}

.info {
  flex: 0.479;

  @include md {
    flex: 0.427;
    padding-top: 10px;
  }
  @include sm {
    padding-top: 0;
  }

  h1 {
    @include xxl-bold;

    @include sm {
      @include xl-bold;
    }
  }
  .description {
    @include m-medium;
    margin-top: 32px;
  }

  .image-container {
    position: relative;
    margin-top: 44px;

    @include md {
      margin-top: 52px;
    }
    @include sm {
      display: none;
    }
  }
  .brief-man {
    //position: absolute;
    object-fit: contain;
    top: 0;
    left: 0;

    @include md {
      width: 394px;
      height: auto;
      left: -10px;
      /* top: -30px; */
    }
  }
}

.form {
  flex: 0.521;

  @include md {
    flex: 0.572;
  }
}
</style>
