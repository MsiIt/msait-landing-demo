<template>
  <section class="cases-section">
    <div class="container">
      <div class="wrapper">
        <div>
          <h2 class="title main-gradient-text">{{ $t('cases.header.title') }}</h2>
          <p class="subtitle">{{ $t('cases.header.description') }}</p>
        </div>

        <CustomNuxtImg
          src="/images/superhero-like.png"
          width="482"
          height="316"
          alt="superhero"
          class="superhero-container"
          imgClass="superhero"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cases-section {
  padding: 191.5px 0 91.5px;

  @include md {
    padding-bottom: 61.5px;
  }

  @include sm {
    padding: 130px 0 30px;
  }

  @include xs {
    padding: 130px 0 0px;
  }
}

.wrapper {
  display: flex;
  align-items: center;
  gap: 30px;

  @include sm {
    flex-direction: column;
  }

  @include xs {
    gap: 0;
  }
}

.title {
  @include h1-title;
  margin-bottom: 30px;

  @include sm {
    @include h2-title;
  }
}

.subtitle {
  @include p-body;
}

.superhero-container {
  @include md {
    margin-right: -23px;
  }

  @include sm {
    margin-right: 0;
  }
}

:deep(.superhero) {
  object-fit: contain;

  @include sm {
    max-width: 460px;
    width: 100%;
  }
}
</style>
