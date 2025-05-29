<script setup>
const { t: $t } = useI18n()

const principles = [
  {
    id: 1,
    number: '01',
    title: $t('services.principles-section.first.title'),
    description: $t('services.principles-section.first.description'),
  },
  {
    id: 2,
    number: '02',
    title: $t('services.principles-section.second.title'),
    description: $t('services.principles-section.second.description'),
  },
  {
    id: 3,
    number: '03',
    title: $t('services.principles-section.third.title'),
    description: $t('services.principles-section.third.description'),
  },
  {
    id: 4,
    number: '04',
    title: $t('services.principles-section.fourth.title'),
    description: $t('services.principles-section.fourth.description'),
  },
  {
    id: 5,
    number: '05',
    title: $t('services.principles-section.fifth.title'),
    description: $t('services.principles-section.fifth.description'),
  },
]
</script>

<template>
  <section class="principles-section">
    <div class="container">
      <div class="wrapper">
        <div class="header">
          <h2 class="title main-gradient-text">{{ $t('services.principles-section.title') }}</h2>
          <p class="subtitle">{{ $t('services.principles-section.description') }}</p>
        </div>

        <div class="principles">
          <div v-for="principle in principles" :key="principle.id" class="principle">
            <div class="principle-number main-gradient-text">{{ principle.number }}</div>
            <div class="principle-title">{{ principle.title }}</div>

            <div class="principle-description">{{ principle.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.principles-section {
  margin: 120px 0;

  @include sm {
    margin: 60px 0;
  }
}

.title {
  @include h2-title;
  margin-bottom: 24px;
}

.subtitle {
  @include p-large-body;
}

.principles {
  margin-top: 60px;

  @include sm {
    margin-top: 30px;
  }
}
.wrapper-title {
  @include xs {
    display: flex;
    align-items: center;
  }
}
.principle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35.5px 0;
  border-top: 1px solid $color-main-100;

  &:last-child {
    border-bottom: 1px solid $color-main-100;
  }

  @include md {
    gap: 72px;
  }

  @include sm {
    flex-wrap: wrap;
    gap: 16px;
    justify-content: flex-start;
  }
}

.principle-number {
  @include h1-title;
}

.principle-title {
  min-width: 360px;
  @include p-large-text;

  @include sm {
    margin-left: 8px;
  }
  @include xs {
    min-width: auto;
  }
}

.principle-description {
  width: 649px;
  @include p-body-s;
}
</style>
