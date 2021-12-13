import { AccountModel } from '../models'

export interface AddAccount {
  add: (params) => Promise<AccountModel>
}
