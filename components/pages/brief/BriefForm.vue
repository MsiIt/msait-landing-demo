<script lang="ts" setup>
import useVuelidate from '@vuelidate/core'
import { email, required, helpers, numeric, integer } from '@vuelidate/validators'
import { ContentEntityName } from '~/constants'
import { transformListToDict } from '~/utils/entity'
import { useMainStore } from '~/store/main'

const numericOnly = helpers.regex(/^\+?[0-9]*$/)

const state = reactive({
  types: [],
  description: '',
  currency: null,
  budget: null,

  name: '',
  phone: '',
  email: '',
})

const rules = {
  // types: { required },
  description: { required },
  // currency: { required },
  // budget: { required },

  name: { required },
  phone: { required, numericOnly },
  email: { required, email },
}

const { $contentApi } = useNuxtApp()
const mainStore = useMainStore()
const v$ = useVuelidate(rules, state)
const { $toast } = useNuxtApp()

const submit = async () => {
  const isValide = await v$.value.$validate()
  const typesString = state.types?.length ? state.types.map((type) => type.value).join(', ') : ''

  if (isValide) {
    const data = {
      email: state.email,
      message: state.description,
      data: [
        {
          name: 'Что планируется сделать',
          value: typesString,
        },
        {
          name: 'Бюджет',
          value: Math.ceil(state.budget || 0),
        },
        {
          name: 'Валюта',
          value: state.currency?.value || '',
        },
        {
          name: 'Ваше имя',
          value: state.name,
        },
        {
          name: 'Телефон для связи',
          value: state.phone,
        },
      ],
    }
    try {
      await $contentApi.createAppeal(data)
      resetForm()
      $toast.success('Сообщение отправлено')
    } catch (e) {
      $toast.error('Произошла ошибка, попробуйте позже')
      console.warn(e)
    }
  }
}

const resetForm = () => {
  state.name = ''
  state.email = ''
  state.description = ''
  state.phone = ''
  state.types = []
  state.currency = null
  state.budget = null
  v$.value.$reset()
}

const currencies = [
  { id: 1, value: 'BYN' },
  { id: 2, value: 'USD' },
  { id: 3, value: 'RUB' },
]

const budgetText = computed(() => Number(Math.round(state.budget)).toLocaleString())

const template = mainStore.contentTemplates.find((t) => t.symbolCode === ContentEntityName.Project)
const tags = transformListToDict(template.properties).projectComponents.type.valueVariants
</script>

<template>
  <div class="brief-form">
    <div class="section">
      <p class="title">
        <!-- <NuxtImg src="/images/note.png" width="28" height="28" /> -->
        {{ $t('brief.form.section.idea.title') }}
      </p>

      <TagsInput v-model="state.types" :items="tags" multiple />

      <TextareaInput
        v-model="state.description"
        :error="v$.description.$error"
        :error-messages="v$.description.$errors.map((e) => e.$message)"
        :label="$t('brief.form.section.idea.field.description.label')"
      />
    </div>

    <div class="section">
      <p class="title">
        <!-- <NuxtImg src="/images/budget.png" width="28" height="28" /> -->
        {{ $t('brief.form.section.budget.title') }}
      </p>

      <div class="budget">
        <TagsInput v-model="state.currency" :items="currencies" />
        <!--        <SliderInput-->
        <!--          v-model="state.budget"-->
        <!--          :min="0"-->
        <!--          :max="99999999"-->
        <!--          thumb-label="always"-->
        <!--          :display-value="budgetText"-->
        <!--        />-->
        <TextInput
          v-model="state.budget"
          :error="v$.budget?.$error"
          :error-messages="v$.budget?.$errors.map((e) => e.$message)"
          :label="$t('brief.form.section.budget.input')"
          inputmode="numeric"
          pattern="[0-9]*"
          @input="state.budget = state.budget.replace(/[^0-9]/g, '')"
        />
      </div>
    </div>

    <div class="section">
      <p class="title">
        <!-- <NuxtImg src="/images/phone-contact.png" width="28" height="28" /> -->
        {{ $t('brief.form.section.contacts.title') }}
      </p>

      <div class="contacts-form">
        <TextInput
          v-model="state.name"
          :error="v$.name.$error"
          :error-messages="v$.name.$errors.map((e) => e.$message)"
          :label="$t('brief.form.section.contacts.field.name.label')"
        />
        <TextInput
          v-model="state.phone"
          :error="v$.phone.$error"
          :error-messages="v$.phone.$errors.map((e) => e.$message)"
          :label="$t('brief.form.section.contacts.field.phone.label')"
          inputmode="tel"
          pattern="[\d\+\-]*"
          @input="state.phone = state.phone.replace(/[^0-9+-]/g, '')"
        />
        <TextInput
          v-model="state.email"
          :error="v$.email.$error"
          :error-messages="v$.email.$errors.map((e) => e.$message)"
          :label="$t('brief.form.section.contacts.field.email.label')"
        />
      </div>
    </div>

    <div class="footer">
      <div class="button-container">
        <PrimaryButton @click="submit">
          {{ $t('brief.form.buttons.send') }}
        </PrimaryButton>
      </div>
      <p class="disclaimer">
        <span class="pre-line"
          ><i18n-t keypath="brief.form.disclaimer.base" scope="global">
            <template #link>
              <a
                target="_blank"
                href="https://api.baseapp.pro/file-storage/static/msa_it%2Fprivacy-policy.pdf"
                >{{ $t('brief.form.disclaimer.policy-link') }}</a
              >
            </template>
          </i18n-t></span
        >
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.brief-form {
  /* form */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  padding: 36px;
  gap: 48px;

  /* colors/light/100 */
  background: $color-light-100;
  /* Context */
  box-shadow: 0px 30px 40px rgba(26, 35, 126, 0.05);
  border-radius: 24px;

  @include sm {
    padding: 24px;
  }
}

.section {
  display: flex;
  flex-direction: column;
  gap: 32px;

  .title {
    @include l-bold;
    display: flex;
    gap: 12px;
    align-items: center;
  }
}

.budget {
  display: flex;
  flex-direction: column;
  gap: 34px;
}

.contacts-form {
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr;

  @include sm {
    display: flex;
    flex-direction: column;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-container {
  align-self: flex-start;
}
.disclaimer {
  @include xs-medium;
  text-align: right;

  a {
    color: inherit;
    text-decoration: underline;
  }
}
</style>
