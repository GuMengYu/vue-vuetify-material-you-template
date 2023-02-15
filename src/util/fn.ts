
/**
 * 休眠
 * @param time
 * @returns {Promise<unknown>}
 */
export const sleep = (time = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time)
    }, time)
  })
}

export const arrayToObject = (arr: Record<string, any>[], keyName: string) => {
  const o: Record<string, any> = {}
  arr.forEach((i) => {
    o[i[keyName]] = i
  })
  return o
}
