import * as Localization from 'expo-localization'
import { I18n } from 'i18n-js'
import { lang as enUS } from '../lang/enUS'

const translations = {
  en: enUS,
}

const i18n = new I18n(translations)
i18n.locale = Localization.locale
i18n.enableFallback = true

export { i18n }
