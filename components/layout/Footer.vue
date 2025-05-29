<template>
  <footer class="footer">
    <div class="container">
      <div class="wrapper">
        <div class="logo-info">
          <CustomNuxtImg src="/images/logo-blue.png" width="110" height="40" alt="logo" />
          <p>2014-2025 © MSA IT</p>
        </div>

        <div class="location">
          <p class="country">{{ $t('footer.office.belarus.country') }}</p>

          <div>
            <p>{{ $t('footer.office.belarus.city') }}</p>
            <p>{{ $t('footer.office.belarus.address') }}</p>
            <p>
              <NuxtLink :to="'tel:+375291370246'" class="phone-link">+375 29 137-02-46</NuxtLink>
            </p>
          </div>
        </div>

        <div class="location">
          <p class="country">{{ $t('footer.office.russia.country') }}</p>

          <div>
            <p>{{ $t('footer.office.russia.city') }}</p>
            <p>{{ $t('footer.office.russia.address') }}</p>
            <p><NuxtLink :to="'tel:+79605543451'" class="phone-link">+7 960 554-34-51</NuxtLink></p>
          </div>
        </div>

        <div class="social-info">
          <p>{{ $t('footer.social-info.title') }}</p>
          <div class="links">
            <a href="https://t.me/Andrey_msait" class="icon-link"><SvgIcon name="telegram" /></a>
            <a href="https://www.linkedin.com/in/alevtushenko/" class="icon-link"
              ><SvgIcon name="linkedin"
            /></a>
            <!--          <a href="http://" class="icon-link"><SvgIcon name="whatsapp" /></a>-->
          </div>
          <!--                  <div class="social-network-icons">-->
          <!--                    <SvgIcon name="telegram" />-->
          <!--                    <SvgIcon name="facebook" />-->
          <!--                  </div>-->
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: auto;
  background-color: $color-background-footer;
}

.wrapper {
  padding: 72px 0;
  color: $color-light-100;
  @include p-body-xs;

  /* grid */
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: space-between;
  align-items: start;

  @include sm {
    padding: 32px 0;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    row-gap: 48px;
    column-gap: 32px;
  }
}

.logo-info {
  display: flex;
  flex-direction: column;
  gap: 31px;

  @include sm {
    gap: 16px;
    grid-column: 1 / 2;
    grid-row: 2;
  }
}

.location {
  max-width: 210px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @include sm {
    gap: 8px;
  }
}
.country {
  @include p-text-s;
}

.phone-link {
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
}

.social-info {
  @include p-text-s;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @include sm {
    grid-column: 2 / 3;
    grid-row: 2;
    justify-self: end;
  }
}
.social-network-icons {
  display: flex;
  gap: 16px;
}
.links {
  display: flex;
  margin-top: 5px;
  gap: 16px;
}
// .icon-link {
//   width: 24px;
//   height: 24px;
// }
</style>
<script setup lang="ts"></script>
