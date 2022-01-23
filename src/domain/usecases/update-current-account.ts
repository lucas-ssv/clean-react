import { AccountModel } from '@/domain/models'

export interface UpdateCurrentAccount {
  save: (accountModel: AccountModel) => Promise<void>
}
