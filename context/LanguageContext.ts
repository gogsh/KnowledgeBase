import { createContext } from 'react'
import { Translation } from '../types/Language.types'

const LanguageContex: Translation = {
  Auth: {
    createAccount: '',
    iHaveAccount: '',
    register: '',
    logIn: '',
    email: '',
    password: '',
    nickname: '',
  },
}

export default createContext(LanguageContex)
