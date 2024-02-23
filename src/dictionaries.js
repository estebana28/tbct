import 'server-only'

const dictionaries = {
  'es-AR': () =>
    import('../dictionaries/es-AR.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()
