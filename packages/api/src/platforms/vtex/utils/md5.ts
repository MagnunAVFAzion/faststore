// @ts-nocheck
import Md5 from './md5Hash'

export const md5 = (payload: string) =>
  (new Md5()).update(payload).digest('hex')