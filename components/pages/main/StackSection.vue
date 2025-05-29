<script setup>
import { useRouter } from '#vue-router'
import { useWindowSize } from '@vueuse/core'

const technologies = [
  [
    {
      name: 'Elasticsearch',
      src: '/images/elasticsearch.png',
      width: 46,
      height: 46,
    },
    {
      name: 'MySQL',
      src: '/images/MySQL.png',
      width: 52,
      height: 35,
    },
    {
      name: 'JavaScript',
      src: '/images/javaScript.png',
      width: 40,
      height: 40,
    },
    {
      name: 'Node.js',
      src: '/images/Node.js.png',
      width: 84,
      height: 24,
    },
    {
      name: 'HTML',
      src: '/images/HTML.png',
      width: 34,
      height: 48,
    },
  ],
  [
    {
      name: 'Vue.js',
      src: '/images/vue.png',
      width: 46,
      height: 40,
    },
    {
      name: 'Git',
      src: '/images/git.png',
      width: 47,
      height: 48,
    },
    {
      name: 'MongoDB',
      src: '/images/mongoDB.png',
      width: 104,
      height: 30,
    },
    {
      name: 'CSS3',
      src: '/images/css.png',
      width: 34,
      height: 48,
    },
    {
      name: 'SQL',
      src: '/images/sql.png',
      width: 47,
      height: 47,
    },
  ],
]

const reducedTechnologies = computed(() =>
  technologies.map((row) =>
    row.map((tech) => ({
      ...tech,
      width: Math.ceil(tech.width * 0.8),
      height: Math.ceil(tech.height * 0.8),
    }))
  )
)

const { width } = useWindowSize()

const arrayTechnologies = computed(() =>
  width.value < 479 ? reducedTechnologies.value : technologies
)

onMounted(() => {
  particlesJS.load('super-section-particles', '/assets/particles/particles.json')
})

const router = useRouter()

function navigateToServices() {
  router.push('/services')
}
</script>

<template>
  <section class="stack-section">
    <div class="container">
      <div class="wrapper">
        <div class="content">
          <p class="title main-gradient-text">{{ $t('main.stack-section.title') }}</p>
          <p class="subtitle">{{ $t('main.stack-section.description') }}</p>

          <client-component>
            <div class="list">
              <div class="technology-row" v-for="(row, index) in arrayTechnologies" :key="index">
                <div class="technology-item" v-for="tech in row" :key="tech.name">
                  <CustomNuxtImg
                    :src="tech.src"
                    :alt="tech.name"
                    :width="tech.width"
                    :height="tech.height"
                  />
                </div>
              </div>
            </div>
          </client-component>

          <PrimaryButton @click="navigateToServices" class="button">{{
            $t('main.stack-section.button.capabilities')
          }}</PrimaryButton>
        </div>

        <div class="picture-block main-gradient">
          <div id="super-section-particles"></div>

          <CustomNuxtImg
            src="/images/superhero-waving-hand.png"
            width="643"
            height="545"
            alt="superhero"
            class="superhero"
            imgClass="superhero-img"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.stack-section {
  background-color: $color-light-300;
  margin: 122px 0 120px;

  @include sm {
    margin: 92px 0 90px;
  }
}

.wrapper {
  display: flex;
  overflow: hidden;
  border-radius: 16px;
  background-color: $color-light-100;

  @include sm {
    flex-direction: column-reverse;
  }
}

.content {
  flex: 1.16;
  padding: 48px;

  .title {
    @include h2-title;
    margin-bottom: 24px;
  }

  .subtitle {
    @include p-large-body;
  }

  @include md {
    flex: 2.8;
  }

  @include sm {
    padding: 32px;
  }
}

.button {
  @include sm {
    width: 100%;
  }
}

.list {
  margin: 36px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .technology-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .technology-item img {
    // Уменьшение размеров на 10% при ширине экрана меньше 479px
    @media (max-width: 479px) {
      width: 90%; // уменьшаем ширину на 10%
      height: 90%; // уменьшаем высоту на 10%
    }
  }
}

.picture-block {
  flex: 1;
  position: relative;

  @include sm {
    overflow: hidden;
    flex-basis: 311px;
  }
}
#super-section-particles {
  position: absolute;
  @include absolute-stretch;
}

.superhero {
  pointer-events: none;
  position: absolute;
  bottom: -107px;
  left: -58px;

  :deep(.superhero-img) {
    @include md {
      width: 652px;
      height: 560px;
    }

    @include sm {
      width: 528px;
      height: 453px;
    }

    @include xs {
      width: 463px;
      height: 392px;
    }
  }

  @include md {
    bottom: -113px;
    left: -59px;
  }

  @include sm {
    bottom: -91px;
    left: -40px;
  }

  @include xs {
    bottom: -78px;
    left: -40px;
  }
}
</style>
