<script lang="ts" setup>
import useVuelidate from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

const { $contentApi } = useNuxtApp()

const state = reactive({
  name: '',
  email: '',
  message: '',
})
const rules = {
  name: { required },
  email: { required, email },
  message: { required },
}

const v$ = useVuelidate(rules, state)
const { $toast } = useNuxtApp()

const submit = async () => {
  const isValide = await v$.value.$validate()

  if (isValide) {
    try {
      const data = {
        email: state.email,
        message: state.message,
        data: [
          {
            name: 'Ваше имя',
            value: state.name,
          },
        ],
      }

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
  state.message = ''
  v$.value.$reset()
}
</script>

<template>
  <div class="brief-form">
    <TextInput
      v-model="state.name"
      :error="v$.name.$error"
      :error-messages="v$.name.$errors.map((e) => e.$message)"
      :label="$t('contacts.form.name.label')"
    />
    <TextInput
      v-model="state.email"
      :error="v$.email.$error"
      :error-messages="v$.email.$errors.map((e) => e.$message)"
      :label="$t('contacts.form.email.label')"
    />
    <TextareaInput
      v-model="state.message"
      :error="v$.message.$error"
      :error-messages="v$.message.$errors.map((e) => e.$message)"
      :label="$t('contacts.form.message.label')"
    />

    <div class="button-container">
      <PrimaryButton @click="submit">
        {{ $t('contacts.form.button.send') }}
      </PrimaryButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.brief-form {
  padding: 24px;
  background-color: $color-light-100;
  border-radius: 24px;
  gap: 20px;

  /* form */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  padding: 24px;

  /* Context */
  box-shadow: 0px 30px 40px rgba(26, 35, 126, 0.05);

  /* Inside auto layout */
  /* flex: none;
  order: 1;
  flex-grow: 0; */
}

.button-container {
  align-self: flex-start;
}
</style>
