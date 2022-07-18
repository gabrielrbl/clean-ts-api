import { apiKeyAuth } from './schemas/'
import {
  badRequest,
  forbidden,
  notFound,
  serverError,
  unauthorized
} from './components/'

export default {
  securitySchemes: {
    apiKeyAuth
  },
  badRequest,
  forbidden,
  notFound,
  serverError,
  unauthorized
}
