import { Controller, HttpRequest, HttpResponse } from '../../presentation/protocols'
import { LogErrorRepository } from '../../data/protocols/log-error-repository'

export class LogControllerDecorator implements Controller {
  private readonly controller: Controller
  private readonly logErrorRepository: LogErrorRepository

  constructor (controller: Controller, logErrorRepository?: LogErrorRepository) {
    this.controller = controller
    if (logErrorRepository) {
      this.logErrorRepository = logErrorRepository
    }
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest)
    if (httpResponse.statusCode === 500 && this.logErrorRepository) {
      await this.logErrorRepository.log(httpResponse.body.stack)
    }
    return httpResponse
  }
}
