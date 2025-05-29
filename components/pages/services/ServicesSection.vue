<script setup>
const lvlLogo = { name: 'levelkitchen', src: '/images/levelkitchen-logo.png', width: 60 }
const talantLogo = { name: 'talant', src: '/images/talant.png', width: 60 }
const myfoodLogo = { name: 'myfood', src: '/images/myfood-logo.png', width: 60 }
const meoLogo = { name: 'meo', src: '/images/meo-logo.png', width: 60 }
const pfLogo = { name: 'perfomance-food', src: '/images/perfomance-food-logo.png', width: 100 }
const hatimakiLogo = { name: 'hatimaki', src: '/images/hatimaki-logo.png', width: 80 }
const cfLogo = { name: 'cf', src: '/images/cf.png', width: 80 }
const likebuffetLogo = { name: 'like-buffet', src: '/images/like-buffet.png', width: 60 }
const fitassistLogo = { name: 'fit-assist', src: '/images/fit-assist.png', width: 80 }
const elontaskLogo = { name: 'elon-task', src: '/images/elon-task.png', width: 80 }

const services = [
  {
    title: 'Создание сайтов на SPA и non-SPA технологиях',
    description:
      'Мы создаем сайты с применением самых современных технологий, чтобы сделать их пользование как можно более удобным. Наша компания специализируется на разработке фронт-энда на Vue.js (Nuxt.js), также работаем с React, Angular',
    companies: [lvlLogo, talantLogo],
  },
  {
    title: 'Создание CRM-систем',
    description:
      'Мы разрабатываем CRM-системы под ключ и без использования готовых коробочных решений. Наша команда выполняет полный цикл работ, начиная от бизнеса анализа, и заканчивая поддержкой отдела продаж на уже внедренной CRM-системе.',
    companies: [myfoodLogo, meoLogo],
  },
  {
    title: 'Аутсорсинг, IT-разработки',
    description:
      'У вас есть задача, проект или идея, которая так и ждет своей реализации? Вам к нам! Мы поможем в создании проекта любой сложности, начиная от подмены контента, и заканчивая разработкой интернет- магазина. Мы также можем войти в состав вашей команды разработки на фулл/парт тайме.',
    companies: [pfLogo, hatimakiLogo],
  },
  {
    title: 'Создание бэкенда приложения',
    description:
      'Мы оказываем услуги по разработке бэк-энда приложений, помогаем создавать архитектуру и обеспечивать корректную работу всех функций вашего проекта. Наша компания специализируется на разработке бэк-энда на Node.js (Express.js).',
    companies: [lvlLogo, cfLogo],
  },
  {
    title: 'Интеграция с внешними сервисами',
    description:
      'Мы поможем сделать любую интеграцию, чтобы ваше взаимодействие с покупателем стало простым и удобным. Нас не остановит ни отсутствие правильного API и документации, ни трудности со специалистами на стороне интегрируемого сервиса.',
    companies: [meoLogo, myfoodLogo],
  },
  //
  {
    title: 'Создание фронтенда приложения',
    description:
      'Мы специализируется на разработке фронтенд-приложений с использованием React Native, что позволяет создавать высокопроизводительные, кроссплатформенные мобильные приложения. Предлагаем полный цикл разработки, начиная от проектирования и заканчивая внедрением, обеспечивая качественные и надежные решения.',
    companies: [hatimakiLogo, likebuffetLogo],
  },
  {
    title: 'Создание собственных IT-продуктов',
    description:
      'Наша компания занимается разработкой и выпуском собственных IT продуктов для внешнего и внутреннего рынка. Это включает планирование, анализ требований, дизайн, разработку, тестирование, внедрение и поддержку. Эти этапы помогают создать эффективные и надежные решения.',
    companies: [fitassistLogo, elontaskLogo],
  },
]
</script>

<template>
  <section class="services-section">
    <div class="container">
      <div class="wrapper">
        <div class="scroll-aside">
          <ScrollAside />
        </div>

        <HorizontalSwiper :list="services">
          <template #default="{ item }">
            <div class="project-item">
              <div>
                <h3 class="title">{{ item.title }}</h3>
                <p class="subtitle">{{ item.description }}</p>
              </div>
              <div class="clients">
                <CustomNuxtImg
                  v-for="(item, index) in item.companies"
                  :src="item.src"
                  :alt="item.name"
                  :width="item.width"
                  :height="item.height"
                  :key="index"
                />
              </div>
            </div>
          </template>
        </HorizontalSwiper>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.services-section {
  margin: 120px 0;
  overflow: hidden;

  @include sm {
    margin: 60px 0;
  }
  @include xs {
    margin: 10px 0;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.project-item {
  width: 360px;
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  padding: 24px;
  background-color: $color-light-100;
  scroll-snap-align: start;
  flex-shrink: 0;
  box-sizing: border-box;

  @include xs {
    width: 306px;
    //height: px;
  }

  /* transition */
  @include transition;
  transition-property: box-shadow;

  &:hover {
    box-shadow: 0 30px 40px 0 #1a237e0d;
  }
}

.title {
  color: $color-main-200;
  @include p-large-text;
  margin-bottom: 32px;
  @include xs {
    @include p-text;
    margin-bottom: 24px;
  }
}

.subtitle {
  @include p-body;

  @include xs {
    @include p-body-s;
  }
}

.clients {
  display: flex;
  gap: 38px;
  align-items: center;
}
</style>
