<script lang="ts" setup>
defineProps({
  title: String,
  address: String,
  phone: String,
  phoneLink: String,
  email: String,
})
</script>

<template>
  <div class="address-container">
    <p class="title">
      {{ title }}
    </p>

    <p class="address">
      {{ address }}
    </p>

    <div class="contacts">
      <div class="phone-container">
        <a :href="phoneLink">{{ phone }}</a>

        <div class="links">
          <a href="https://t.me/Andrey_msait" class="icon-link"><SvgIcon name="telegram" /></a>
          <a href="https://www.linkedin.com/in/alevtushenko/" class="icon-link"
            ><SvgIcon name="linkedin"
          /></a>
          <!--          <a href="http://" class="icon-link"><SvgIcon name="whatsapp" /></a>-->
        </div>
      </div>

      <a :href="`mailto:${email}`" class="email">
        {{ email }}
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.address-container {
  display: flex;
  flex-direction: column;
  gap: 24px;

  @include md {
    gap: 16px;
  }
  @include sm {
    gap: 24px;
  }
}

.title {
  @include l-demibold;
}

.address,
.phone-container,
.email {
  font-size: p2r(16);
  line-height: p2r(22);
}

.contacts {
  display: flex;
  flex-direction: column;
  gap: 24px;

  @include md {
    flex-direction: row;
  }
  @include md {
    flex-direction: column;
  }
}

.phone-container {
  display: flex;
  gap: 19px;
  align-items: center;

  a {
    color: $color-dark-200;
  }
}

.links {
  display: flex;
  gap: 8px;
}

.email {
  color: $color-dark-200;
}
</style>
