export interface Country {
  /** ISO 3166-1 alpha-2, used as the option value (dial codes repeat). */
  iso: string;
  dial: string;
  es: string;
  en: string;
  /** Allowed length of the national number (digits only). */
  min: number;
  max: number;
}

/** Value of the "other country" option: the user types the full +code number. */
export const OTHER_COUNTRY = "other";

// Short, curated list (Americas first, then Europe and a few others) instead
// of the ~240 entries of a full picker. Anyone else uses "Other".
export const COUNTRIES: Country[] = [
  { iso: "CO", dial: "57", es: "Colombia", en: "Colombia", min: 10, max: 10 },
  { iso: "US", dial: "1", es: "Estados Unidos", en: "United States", min: 10, max: 10 },
  { iso: "CA", dial: "1", es: "Canadá", en: "Canada", min: 10, max: 10 },
  { iso: "MX", dial: "52", es: "México", en: "Mexico", min: 10, max: 10 },
  { iso: "AR", dial: "54", es: "Argentina", en: "Argentina", min: 10, max: 11 },
  { iso: "BO", dial: "591", es: "Bolivia", en: "Bolivia", min: 8, max: 8 },
  { iso: "BR", dial: "55", es: "Brasil", en: "Brazil", min: 10, max: 11 },
  { iso: "CL", dial: "56", es: "Chile", en: "Chile", min: 9, max: 9 },
  { iso: "CR", dial: "506", es: "Costa Rica", en: "Costa Rica", min: 8, max: 8 },
  { iso: "DO", dial: "1", es: "República Dominicana", en: "Dominican Republic", min: 10, max: 10 },
  { iso: "EC", dial: "593", es: "Ecuador", en: "Ecuador", min: 9, max: 9 },
  { iso: "SV", dial: "503", es: "El Salvador", en: "El Salvador", min: 8, max: 8 },
  { iso: "GT", dial: "502", es: "Guatemala", en: "Guatemala", min: 8, max: 8 },
  { iso: "HN", dial: "504", es: "Honduras", en: "Honduras", min: 8, max: 8 },
  { iso: "NI", dial: "505", es: "Nicaragua", en: "Nicaragua", min: 8, max: 8 },
  { iso: "PA", dial: "507", es: "Panamá", en: "Panama", min: 7, max: 8 },
  { iso: "PY", dial: "595", es: "Paraguay", en: "Paraguay", min: 9, max: 9 },
  { iso: "PE", dial: "51", es: "Perú", en: "Peru", min: 9, max: 9 },
  { iso: "PR", dial: "1", es: "Puerto Rico", en: "Puerto Rico", min: 10, max: 10 },
  { iso: "UY", dial: "598", es: "Uruguay", en: "Uruguay", min: 8, max: 9 },
  { iso: "VE", dial: "58", es: "Venezuela", en: "Venezuela", min: 10, max: 10 },
  { iso: "ES", dial: "34", es: "España", en: "Spain", min: 9, max: 9 },
  { iso: "GB", dial: "44", es: "Reino Unido", en: "United Kingdom", min: 9, max: 10 },
  { iso: "DE", dial: "49", es: "Alemania", en: "Germany", min: 6, max: 13 },
  { iso: "FR", dial: "33", es: "Francia", en: "France", min: 9, max: 9 },
  { iso: "IE", dial: "353", es: "Irlanda", en: "Ireland", min: 7, max: 9 },
  { iso: "IT", dial: "39", es: "Italia", en: "Italy", min: 6, max: 11 },
  { iso: "NL", dial: "31", es: "Países Bajos", en: "Netherlands", min: 9, max: 9 },
  { iso: "PT", dial: "351", es: "Portugal", en: "Portugal", min: 9, max: 9 },
  { iso: "CH", dial: "41", es: "Suiza", en: "Switzerland", min: 9, max: 9 },
  { iso: "AU", dial: "61", es: "Australia", en: "Australia", min: 9, max: 9 },
  { iso: "IN", dial: "91", es: "India", en: "India", min: 10, max: 10 },
];

export function findCountry(iso: string): Country | undefined {
  return COUNTRIES.find((c) => c.iso === iso);
}

/** Default selection by site language. */
export function defaultCountry(locale: string): string {
  return locale === "en" ? "US" : "CO";
}
