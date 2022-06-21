import { SurveyModel } from '@/domain/models/survey'

export interface LoadSurveyyById {
  loadById: (id: string) => Promise<SurveyModel>
}
