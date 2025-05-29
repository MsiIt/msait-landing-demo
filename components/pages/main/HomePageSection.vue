<template>
  <section class="main-gradient home-section">
    <div id="home-section-particles"></div>

    <div class="container content">
      <div class="wrapper">
        <div>
          <p class="title">{{ $t('main.header.title') }}</p>
          <p class="subtitle">{{ $t('main.header.description') }}</p>
          <LightButton @click="navigateToCases" class="button">{{ $t('button.more') }}</LightButton>
        </div>

        <div class="pictures">
          <CustomNuxtImg
            src="/images/notebook.png"
            width="482"
            height="314"
            alt="notebook"
            imgClass="notebook"
          />
          <CustomNuxtImg
            src="/images/superhero-flying.png"
            width="400"
            height="489"
            alt="superhero-flying"
            imgClass="superhero"
          />
        </div>
      </div>
    </div>

    <NuxtImg src="/assets/vectors/subtract.svg" class="bottom-round" alt="bottom-section" />
  </section>
</template>

<script setup lang="ts">
import { useRouter } from '#vue-router'

onMounted(() => {
  particlesJS.load('home-section-particles', '/assets/particles/particles.json')
})

const router = useRouter()

function navigateToCases() {
  router.push('/cases')
}
</script>

<style scoped lang="scss">
.home-section {
  position: relative;
}

#home-section-particles {
  position: absolute;
  @include absolute-stretch;
}

.content {
  position: relative;
  pointer-events: none;
}

.wrapper {
  padding: 191px 0 173px;
  display: flex;
  align-items: center;
  gap: 30px;
  color: $color-light-100;

  @include md {
    padding: 223px 0 170px;
    gap: 0;
  }

  @include sm {
    padding: 156px 0 141px;
    gap: 74px;
    flex-direction: column;
  }
}

.title {
  @include h1-title;
}

.subtitle {
  @include p-large-body;
  margin: 24px 0 36px;
}

.pictures {
  position: relative;
}

.button {
  pointer-events: auto;

  @include sm {
    width: 100%;
  }
}

:deep(.notebook) {
  @include md {
    width: 399px;
    height: 260px;
  }

  @include sm {
    width: 329px;
    height: 214px;
  }
}

:deep(.superhero) {
  position: absolute;
  top: -68px;
  left: 57px;

  @include md {
    top: -94px;
    left: 66px;

    width: 360px;
    height: 437px;
  }

  @include sm {
    top: -74px;
    left: 16px;

    width: 297px;
    height: 381px;
  }
}

.bottom-round {
  pointer-events: none;
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  width: 100%;
}
</style>
