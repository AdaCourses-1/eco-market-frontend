export const getFromLocalStorage = (key: string) => {
  const object = localStorage.getItem(key)

  if (object) return JSON.parse(object)

  return null
}

export const setToLocalStorage = (key: string, object: unknown) => {
  if (!key || !object) return null

  localStorage.setItem(key, JSON.stringify(object))
}
