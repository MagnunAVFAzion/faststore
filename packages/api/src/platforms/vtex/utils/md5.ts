import MD5 from "crypto-js/md5"

export const md5 = (payload: string) => MD5(payload).toString()