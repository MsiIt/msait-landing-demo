import en from './assets/i18n/en'
import ru from './assets/i18n/ru'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  messages: { ru, en },
  flatJson: true,
}))
