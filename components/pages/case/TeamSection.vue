<template>
  <section class="team-section container">
    <h3 class="title main-gradient-text">{{ $t('case.team-section.title') }}</h3>
    <div class="team">
      <div v-for="(group, index) in team" :key="index" class="team-group">
        <h4>{{ group.title }}</h4>
        <ul>
          <li v-for="(member, idx) in group.members" :key="idx">{{ member }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps({
  team: Array,
})
</script>

<style lang="scss" scoped>
.team-section {
  margin: 120px auto;

  @include sm {
    margin: 90px auto;
  }
}

.title {
  @include h2-title;
}

.team {
  margin-top: 64px;
  display: flex;
  gap: 32px;
  justify-content: space-between;
  flex-wrap: wrap;

  @include sm {
    margin-top: 32px;
    gap: 24px;
  }
}

.team-group {
  max-width: 264px;
  width: 100%;

  @include md {
    max-width: 200px;
  }

  @include sm {
    max-width: 100%;
  }
}

h4 {
  @include p-text-xs;
  color: $color-main-100;
  margin-bottom: 22px;
}

li {
  @include p-body;
  margin-top: 8px;
}
</style>
