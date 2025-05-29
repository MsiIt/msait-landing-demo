<template>
  <section class="hero-section">
    <div class="container">
      <div class="wrapper">
        <div>
          <h2 class="title main-gradient-text">
            {{ $t('services.header.title') }}
          </h2>
          <p class="subtitle">
            {{ $t('services.header.description') }}
          </p>
        </div>

        <CustomNuxtImg
          src="/images/superhero-with-technologies.png"
          width="482"
          height="316"
          alt="superhero"
          imgClass="superhero"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero-section {
}

.wrapper {
  padding-top: 220px;
  display: flex;
  align-items: center;
  gap: 30px;

  @include sm {
    padding-top: 130px;
    flex-direction: column;
  }
}

.title {
  @include h1-title;
  line-height: 49px;
  margin-bottom: 30px;

  @include sm {
    @include h2-title;
  }
}

.subtitle {
  @include p-body;
}

:deep(.superhero) {
  object-fit: contain;

  @include md {
    width: 435px;
  }

  @include sm {
    max-width: 460px;
    width: 100%;
  }
}
</style>
