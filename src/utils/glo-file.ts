type ModuleType = Record<string, Record<string, any>>

// const BASE_NAME_REG = /(?<=\/)([^\/]+)\.\w+$/
// safari not support positive lookbehind
const BASE_NAME_REG = /([^\/]+)\.\w+$/

export const createGlobFunc = <T extends PropertyKey>(modules: ModuleType) => {
  const files: Readonly<Record<T, string>> = Object.keys(modules).reduce(
    (acc, key) => {
      BASE_NAME_REG.lastIndex = 0 // reset regexp
      const name = BASE_NAME_REG.exec(key)?.[1] ?? key
      return { ...acc, [name]: modules[key].default }
    },
    {},
  ) as Readonly<Record<T, string>>

  const getFile = (fileKey: T) => files[fileKey]

  return getFile
}
