import { loginPath, signUpPath, surveyPath } from './paths'
import {
  badRequest,
  forbidden,
  notFound,
  serverError,
  unauthorized
} from './components'
import {
  accountSchema,
  apiKeyAuth,
  loginParamsSchema,
  signUpParamsSchema,
  errorSchema,
  surveyAnswerSchema,
  surveySchema,
  surveysSchema
} from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description:
      'API do curso do Mango para realizar enquetes entre programadores.',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0',
    url: 'https://www.gnu.org/licenses/gpl-3.0.html'
  },
  servers: [{ url: '/api' }],
  tags: [{ name: 'Login' }, { name: 'Enquete' }],
  paths: { '/login': loginPath, '/signup': signUpPath, '/surveys': surveyPath },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    error: errorSchema,
    surveyAnswer: surveyAnswerSchema,
    survey: surveySchema,
    surveys: surveysSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth
    },
    badRequest,
    forbidden,
    notFound,
    serverError,
    unauthorized
  }
}
