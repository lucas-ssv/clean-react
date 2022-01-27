import { SetStorage } from '@/data/protocols/cache'

export class SetStorageMock implements SetStorage {
  key: any
  value: string

  set (key: string, value: any): void {
    this.key = key
    this.value = value
  }
}
