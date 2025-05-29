<script setup lang="ts">
definePageMeta({
  layout: 'dark',
})
</script>

<template>
  <div class="page">
    <main class="main">
      <div class="container">
        <div class="contacts-form">
          <div class="contacts">
            <h1 class="title main-gradient-text">
              {{ $t('contacts.title') }}
            </h1>
            <p class="description">
              {{ $t('contacts.description') }}
            </p>

            <div class="address-contacts-container">
              <ContactAddress
                :title="$t('contacts.office.belarus.title')"
                :address="$t('contacts.office.belarus.address')"
                phone="+375 29 137-02-46"
                phone-link="tel:+375291370246"
                email="msait.evtushenko@gmail.com"
              />
              <ContactAddress
                :title="$t('contacts.office.russia.title')"
                :address="$t('contacts.office.russia.address')"
                phone="+7 960 554-34-51"
                phone-link="tel:+79605543451 "
                email="msait.evtushenko@gmail.com"
              />
            </div>
          </div>

          <div class="form-container">
            <ContactForm />
          </div>
        </div>
      </div>

      <div class="offer">
        <OfferSection />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.page {
  padding-top: 220px;
  padding-bottom: 60px;
  background-color: $color-light-300;

  @include sm {
    padding-top: 130px;
  }
}

.main {
}

.title {
  @include xxl-bold;

  @include sm {
    @include xl-bold;
  }
}

.description {
  @include m-medium;
  margin-top: p2r(30);
}

.contacts-form {
  display: flex;
  gap: 30px;
  align-items: flex-start;
  margin-bottom: 120px;

  @include md {
    margin-bottom: 24px;
  }
  @include sm {
    flex-direction: column;
  }

  .contacts {
    flex: 1;
    padding-top: 25px;

    @include md {
      padding-top: 0;
    }
  }

  .address-contacts-container {
    margin-top: 48px;
    display: flex;
    gap: 48px;

    @include md {
      gap: 32px;
      flex-direction: column;
      margin-top: 32px;
    }
    @include sm {
      margin-top: 48px;
      gap: 48px;
    }

    .address-container {
      flex: 1;
    }
  }

  .form-container {
    width: 360px;

    @include sm {
      width: auto;
      align-self: stretch;
    }
  }
}
</style>
