import { APP_ID, ContentEntityName } from '~/constants'
import { ApiBase } from './base'

export default class ContentApi extends ApiBase {
  getTemplate() {
    return this.instance.get(`/public/content-entities-templates/list/${APP_ID}`)
  }

  getList(entityName: ContentEntityName, data = {}) {
    return this.instance.post(`/public/content-entities/list/${entityName}/${APP_ID}`, data)
  }

  createAppeal(data = {}) {
    return this.instance.post(`/appeals/${APP_ID}`, data)
  }
}
