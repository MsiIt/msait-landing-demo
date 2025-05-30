import type { AxiosInstance } from 'axios'

export class ApiBase {
  instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }
}
