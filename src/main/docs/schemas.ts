import {
  accountSchema,
  addSurveyParamsSchema,
  loginParamsSchema,
  saveSurveyParamsSchema,
  signUpParamsSchema,
  errorSchema,
  surveyAnswerSchema,
  surveyResultSchema,
  surveySchema,
  surveysSchema
} from './schemas/'

export default {
  account: accountSchema,
  addSurveyParams: addSurveyParamsSchema,
  error: errorSchema,
  loginParams: loginParamsSchema,
  saveSurveyParams: saveSurveyParamsSchema,
  signUpParams: signUpParamsSchema,
  surveyAnswer: surveyAnswerSchema,
  surveyResult: surveyResultSchema,
  survey: surveySchema,
  surveys: surveysSchema
}
