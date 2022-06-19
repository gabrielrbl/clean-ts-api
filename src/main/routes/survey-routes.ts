import { RequestHandler, Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAddSurveyController } from '../factories/controllers/survey/add-survey/add-survey-controller-factory'
import { makeLoadSurveysController } from '../factories/controllers/survey/load-surveys/load-surveys-controller-factory'
import { adminAuth } from '../middlewares/admin-auth'
import { auth } from '../middlewares/auth'

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
