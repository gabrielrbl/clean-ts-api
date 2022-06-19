import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeAddSurveyController } from '@/main/factories/controllers/survey/add-survey/add-survey-controller-factory'
import { makeLoadSurveysController } from '@/main/factories/controllers/survey/load-surveys/load-surveys-controller-factory'
import { adminAuth } from '@/main/middlewares/admin-auth'
import { auth } from '@/main/middlewares/auth'
import { RequestHandler, Router } from 'express'

export default (router: Router): void => {
  router.post(
    '/surveys',
    adminAuth as RequestHandler,
    adaptRoute(makeAddSurveyController())
  )
  router.get(
    '/surveys',
    auth as RequestHandler,
    adaptRoute(makeLoadSurveysController())
  )
}
