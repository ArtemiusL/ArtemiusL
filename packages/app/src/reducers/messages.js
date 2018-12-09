import { addLocaleData } from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'

addLocaleData(enLocaleData)

const initialState = {
  en: {},
}

const messages = (state = initialState) => state

export default messages
