type FileKeys = 'logo' | '1' | 'presents' | 'r-star'

const assetsModule = import.meta.glob<true, string, Record<string, any>>('~/assets/*.png', { eager: true })

export const getIcon = createGlobFunc<FileKeys>(assetsModule)
