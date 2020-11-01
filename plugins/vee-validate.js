import { required, confirmed, length, email } from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'

extend('required', {
  ...required,
  message: '필수 입력항목입니다.'
})

extend('email', {
  ...email,
  message: 'This field must be a valid email'
})

extend('confirmed', {
  ...confirmed,
  message: 'This field confirmation does not match'
})

extend('length', {
  ...length,
  message: 'This field must have 2 options'
})
