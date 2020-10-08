import { ValueTransformer } from '@angular/compiler/src/util'

export class NewUser{
  first_name: string
  last_name: string
  email: string
  nickname: string
  password: string
  password_confirmation: string

  constructor(value: any) {
    this.first_name = value.first_name
    this.last_name = value.last_name
    this.email = value.email
    this.nickname = value.nickname
    this.password = value.password
    this.password_confirmation = value.password_confirmation
  }
}
