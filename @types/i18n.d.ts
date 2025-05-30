import type ru from '~/assets/i18n/ru.json'

type StringKey<T> = Extract<keyof T, string>
type GenerateKeyPaths<T, Prefix extends string = ''> = T extends object
  ? {
      [K in StringKey<T>]: T[K] extends object
        ? GenerateKeyPaths<T[K], `${Prefix}${K}.`>
        : `${Prefix}${K}`
    }[StringKey<T>]
  : Prefix

type Locale = typeof ru

declare global {
  type I18nKeys = GenerateKeyPaths<Locale>
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $t(key: I18nKeys): string
  }
}
