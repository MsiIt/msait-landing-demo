<script setup lang="ts">
const { t: $t } = useI18n()

const technologies = [
  {
    name: 'technology-1',
    size: 166,
  },
  {
    name: 'technology-2',
    size: 165,
  },
  {
    name: 'technology-3',
    size: 169,
  },
  {
    name: 'technology-4',
    size: 185,
  },
]
const statistics = [
  {
    count: $t('main.company-info.statistics.first.count'),
    text: $t('main.company-info.statistics.first.text'),
  },
  {
    count: $t('main.company-info.statistics.second.count'),
    text: $t('main.company-info.statistics.second.text'),
  },
  {
    count: $t('main.company-info.statistics.third.count'),
    text: $t('main.company-info.statistics.third.text'),
  },
  {
    count: $t('main.company-info.statistics.fourth.count'),
    text: $t('main.company-info.statistics.fourth.text'),
  },
]

onMounted(() => {
  particlesJS.load('statistics-section-particles', '/assets/particles/particles.json')
})
</script>

<template>
  <section class="about-us-section">
    <div class="container">
      <div class="wrapper">
        <div class="section about-company">
          <p class="company-info-text">{{ $t('main.company-info.paragraph1') }}</p>
          <br />
          <p class="company-info-text">{{ $t('main.company-info.paragraph2') }}</p>
          <CustomNuxtImg
            :src="`/images/${item.name}.png`"
            :width="item.size"
            :height="item.size"
            :alt="item.name"
            class="technology hidden--sm"
            :class="item.name"
            :imgClass="`${item.name}-img`"
            v-for="item in technologies"
            :key="item.name"
          />
        </div>

        <div class="statistics-section main-gradient">
          <div id="statistics-section-particles"></div>

          <div v-for="(item, index) in statistics" :key="index" class="statistics-item">
            <p class="statistic-count">{{ item.count }}</p>
            <p class="statistic-text">{{ item.text }}</p>
          </div>
        </div>

        <div class="section services-description">
          <p class="company-info-text">
            {{ $t('main.company-info.paragraph3') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-us-section {
  background-color: $color-light-300;
  padding: 120px 0;

  @include sm {
    padding: 90px 0;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 120px;
  text-align: center;

  @include sm {
    gap: 90px;
  }
}

.section {
  @include p-large-body;
  max-width: 688px;
  margin: 0 auto;
  color: $color-dark-200;
}

.about-company {
  position: relative;
  padding: 2px 0;

  @include sm {
    padding: 3px 0;
  }
}
.technology {
  position: absolute;
}
.technology-1 {
  top: -38px;
  left: -218px;

  @include md {
    top: -187px;
    left: 23px;
  }

  :deep(.technology-1-img) {
    @include md {
      width: 128px;
      height: 128px;
    }
  }
}
.technology-2 {
  top: -41px;
  right: -212px;

  @include md {
    top: unset;
    bottom: -100px;
    right: -57px;
  }

  :deep(.technology-2-img) {
    @include md {
      width: 126px;
      height: 126px;
    }
  }
}
.technology-3 {
  bottom: -123px;
  right: -188px;

  @include md {
    top: unset;
    bottom: -730px;
    right: -120px;
  }

  :deep(.technology-3-img) {
    @include md {
      width: 131px;
      height: 131px;
    }
  }
}
.technology-4 {
  bottom: -179px;
  left: -245px;
  z-index: 1;
  pointer-events: none;

  @include md {
    top: 229px;
    left: -46px;
  }

  :deep(.technology-4-img) {
    @include md {
      width: 138px;
      height: 138px;
    }
  }
}

.statistics-section {
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 48px;
  border-radius: 24px;
  color: $color-light-100;

  @include md {
    padding: 48px 24px;
  }

  @include sm {
    margin: 0 -10px;
    padding: 48px 0;
    flex-wrap: wrap;
    border-radius: 0;
    gap: 48px;
  }
}
#statistics-section-particles {
  position: absolute;
  @include absolute-stretch;
}
.statistics-item {
  padding: 31.5px 0 35.5px;

  &:not(:last-child) {
    border-right: 1px solid #ffffff40;
    margin-right: 72px;
    padding-right: 72px;

    @include md {
      margin-right: 30px;
      padding-right: 30px;
    }

    @include sm {
      border-right: none;
      margin-right: 0;
      padding-right: 0;
    }
  }

  .statistic-count {
    @include h1-hero;

    @include sm {
      font-size: 62px;
    }
  }

  .statistic-text {
    //height: 50px;
    margin-top: 8px;
    @include p-large-text;

    @include sm {
      margin-top: 19px;
    }
  }

  @include sm {
    padding: 0;
    max-width: 168px;
  }
}

.company-info-text {
  @include sm {
    padding: 0 10px;
  }
}
</style>
