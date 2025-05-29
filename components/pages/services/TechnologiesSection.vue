<script setup>
const { t: $t } = useI18n()

const technologies = [
  {
    id: 1,
    name: 'Elasticsearch',
    src: '/images/elasticsearch.png',
    width: 67,
    height: 67,
    description: $t('services.technologies-section.elasticsearch'),
    usedBy: [
      { company: 'Сайт комапании Level Kitchen', year: 2023 },
      { company: 'Сайт комапании Level Kitchen', year: 2023 },
    ],
  },
  {
    id: 2,
    name: 'MySQL',
    src: '/images/MySQL.png',
    width: 75,
    height: 51,
    description: $t('services.technologies-section.mysql'),
    usedBy: [
      { company: 'Company A', year: 2022 },
      { company: 'Company B', year: 2021 },
    ],
  },
  {
    id: 3,
    name: 'JavaScript',
    src: '/images/javaScript.png',
    width: 58,
    height: 58,
    description: $t('services.technologies-section.javaScript'),
    usedBy: [
      { company: 'Company C', year: 2022 },
      { company: 'Level Kitchen', year: 2023 },
    ],
  },
  {
    id: 4,
    name: '',
    src: '/images/Node.js.png',
    width: 122,
    height: 35,
    description: $t('services.technologies-section.node'),
    usedBy: [{ company: 'Company D', year: 2023 }],
  },
  {
    id: 5,
    name: 'HTML',
    src: '/images/HTML.png',
    width: 49,
    height: 70,
    description: $t('services.technologies-section.html'),
    usedBy: [{ company: 'Company E', year: 2021 }],
  },
  {
    id: 6,
    name: 'Vue.js',
    src: '/images/vue.png',
    width: 67,
    height: 58,
    description: $t('services.technologies-section.vue'),
    usedBy: [
      { company: 'Company F', year: 2022 },
      { company: 'Level Kitchen', year: 2023 },
    ],
  },
  {
    id: 7,
    name: 'Git',
    src: '/images/git.png',
    width: 68,
    height: 70,
    description: $t('services.technologies-section.git'),
    usedBy: [
      { company: 'Company G', year: 2023 },
      { company: 'Company H', year: 2022 },
    ],
  },
  {
    id: 8,
    name: '',
    src: '/images/mongoDB.png',
    width: 151,
    height: 43,
    description: $t('services.technologies-section.mongodb'),
    usedBy: [{ company: 'Company I', year: 2022 }],
  },
  {
    id: 9,
    name: 'CSS3',
    src: '/images/css.png',
    width: 49,
    height: 70,
    description: $t('services.technologies-section.css'),
    usedBy: [{ company: 'Company J', year: 2023 }],
  },
  {
    id: 10,
    name: 'SQL',
    src: '/images/sql.png',
    width: 68,
    height: 68,
    description: $t('services.technologies-section.sql'),
    usedBy: [{ company: 'Company K', year: 2022 }],
  },
  {
    id: 11,
    name: 'React',
    src: '/images/react.png',
    width: 68,
    height: 68,
    description: $t('services.technologies-section.react'),
    usedBy: [{ company: 'Company K', year: 2022 }],
  },
  {
    id: 12,
    name: '',
    src: '/images/express.png',
    width: 180,
    height: 100,
    description: $t('services.technologies-section.express'),
    usedBy: [{ company: 'Company K', year: 2022 }],
  },
  {
    id: 13,
    name: 'Python',
    src: '/images/python.png',
    width: 68,
    height: 68,
    description: $t('services.technologies-section.python'),
    usedBy: [{ company: 'Company K', year: 2022 }],
  },
  {
    id: 14,
    name: 'Redis',
    src: '/images/redis.png',
    width: 68,
    height: 68,
    description: $t('services.technologies-section.redis'),
    usedBy: [{ company: 'Company K', year: 2022 }],
  },
  {
    id: 15,
    name: 'Elastic',
    src: '/images/elastic.png',
    width: 68,
    height: 68,
    description: $t('services.technologies-section.elastic'),
    usedBy: [{ company: 'Company K', year: 2022 }],
  },
  {
    id: 16,
    name: '',
    src: '/images/no-sql.png',
    width: 90,
    height: 80,
    description: $t('services.technologies-section.noSQL'),
    usedBy: [{ company: 'Company K', year: 2022 }],
  },
  {
    id: 17,
    name: 'CI/CD',
    src: '/images/ci-cd.png',
    width: 80,
    height: 80,
    description: $t('services.technologies-section.cicd'),
    usedBy: [{ company: 'Company K', year: 2022 }],
  },
  {
    id: 18,
    name: '',
    src: '/images/react-native.png',
    width: 80,
    height: 80,
    description: $t('services.technologies-section.reactNative'),
    usedBy: [{ company: 'Company K', year: 2022 }],
  },
  {
    id: 19,
    name: 'Kotlin',
    src: '/images/kotlin.png',
    width: 68,
    height: 68,
    description: $t('services.technologies-section.kotlin'),
    usedBy: [{ company: 'Company K', year: 2022 }],
  },
  {
    id: 20,
    name: 'Swift',
    src: '/images/swift.png',
    width: 68,
    height: 68,
    description: $t('services.technologies-section.swift'),
    usedBy: [{ company: 'Company K', year: 2022 }],
  },
  {
    id: 21,
    name: '',
    src: '/images/ux-ui.png',
    width: 120,
    height: 83,
    description: $t('services.technologies-section.uiux'),
    usedBy: [{ company: 'Company K', year: 2022 }],
  },
  {
    id: 22,
    name: 'Nest JS',
    src: '/images/nestjs.png',
    width: 68,
    height: 68,
    description: $t('services.technologies-section.nest'),
    usedBy: [{ company: 'Company K', year: 2022 }],
  },
  {
    id: 23,
    name: 'Nuxt.js',
    src: '/images/nuxtjs.png',
    width: 68,
    height: 68,
    description: $t('services.technologies-section.nuxtjs'),
    usedBy: [{ company: 'Company K', year: 2022 }],
  },
  {
    id: 24,
    name: 'TypeScript',
    src: '/images/typescript.png',
    width: 68,
    height: 68,
    description: $t('services.technologies-section.typescript'),
    usedBy: [{ company: 'Company K', year: 2022 }],
  },
  {
    id: 25,
    name: 'PostgreSQL',
    src: '/images/postgresql.png',
    width: 68,
    height: 68,
    description: $t('services.technologies-section.postgresql'),
    usedBy: [{ company: 'Company K', year: 2022 }],
  },
  {
    id: 26,
    name: 'Ionic',
    src: '/images/ionic.png',
    width: 68,
    height: 68,
    description: $t('services.technologies-section.ionic'),
    usedBy: [{ company: 'Company K', year: 2022 }],
  },
]
const activeTechnology = ref(technologies[0])

const handleTechnologyChange = (technology) => {
  activeTechnology.value = technology
}
</script>

<template>
  <section class="technologies-section">
    <div class="container">
      <div class="wrapper">
        <div class="description">
          <h2 class="title main-gradient-text">{{ $t('services.technologies-section.title') }}</h2>
          <p class="subtitle">{{ $t('services.technologies-section.description') }}</p>
          <div class="active-technologies">
            <div class="technology">
              <p class="technologies-title">{{ $t('services.technologies-section.technology') }}</p>
              <p class="technologies-description">{{ activeTechnology.description }}</p>
            </div>
            <!--            <div class="used">-->
            <!--              <p class="technologies-title">{{ $t('services.technologies-section.where-used') }}</p>-->
            <!--              <div class="used-list">-->
            <!--                <div v-for="item in activeTechnology.usedBy" class="used-item">-->
            <!--                  <p>{{ item.company }}</p>-->
            <!--                  <p class="item-year">{{ item.year }}</p>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </div>-->
          </div>
        </div>
        <TechnologiesSwiper
          :technologies="technologies"
          @technologyChange="handleTechnologyChange"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.technologies-section {
  margin: 120px 0;
  background-color: $color-light-100;
  overflow: hidden;

  @include md {
    margin: 120px 0 90px;
  }

  @include sm {
    margin: 70px 0;
    padding: 28px 0;
  }
}

.wrapper {
  padding: 0 60px;
  display: flex;
  align-items: center;
  gap: 24px;
  min-height: 624px;

  @include md {
    padding: 0;
  }

  @include sm {
    min-height: 615px;
    flex-direction: column;
    justify-content: space-between;
    gap: 11px;
  }
}

.description {
  max-width: 550px;
}

.title {
  @include h2-title;
  margin-bottom: 24px;
}

.subtitle {
  @include p-large-body;
}

.active-technologies {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.technologies-title {
  @include p-body-xs;
  color: $color-main-100;
  margin-bottom: 10px;
}

.technologies-description {
  @include p-body-s;
}

.used-list {
  margin-top: 24px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  @include sm {
    gap: 16px;
  }
}

.used-item {
  @include p-body-s;
  max-width: 263px;
  width: 100%;
  padding: 16px;
  background-color: #f7f9f980;
  border-radius: 15px;

  @include sm {
    max-width: 222px;
  }
}

.item-year {
  margin-top: 9px;
  color: $color-main-100;
}
</style>
