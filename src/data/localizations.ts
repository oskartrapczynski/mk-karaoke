export type LocalizationsContent = {
  city: string
  mapUrl: string
}

export const LOCALIZATIONS = {
    "katowice" : "katowice",
} as const

export type Localizations = keyof typeof LOCALIZATIONS

export const localizationData: Record<Localizations, LocalizationsContent> = {
    [LOCALIZATIONS.katowice]: {
      city: "Katowice",
      mapUrl: 'https://maps.app.goo.gl/Yyvi3fuaB5gSTVS2A'
    }
    
}
  
