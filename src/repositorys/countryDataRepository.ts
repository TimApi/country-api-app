import axios, {type AxiosResponse} from 'axios'

export interface ICountry {
  name: string
  topLevelDomain: string[]
  alpha2Code: string
  alpha3Code: string
  callingCodes: string[]
  capital: string
  altSpellings: string[]
  subregion: string
  region: string
  population: number
  latlng: number[]
  demonym: string
  area: number
  timezones: string[]
  borders: string[]
  nativeName: string
  numericCode: string
  flags: IFlag
  currencies: ICurrencie[]
  languages: ILanguages[]
  translations: ITranslations
  flag: string
  regionalBlocs: IRegionalBlocs[]
  cioc: string
  independent: string
}

export interface IFlag {
  svg: string
  png: string
}

export interface ICurrencie {
  code: string
  name: string
  symbol: string
}

export interface ILanguages {
  iso639_1: string
  iso639_2: string
  name: string
  nativeName: string
}


export interface ITranslations {
  br: string
  pt: string
  nl: string
  hr: string
  fa: string
  de: string
  es: string
  fr: string
  ja: string
  it: string
  hu: string
}

export interface IRegionalBlocs {
  acronym: string
  name: string
}

export class countryDataRepository {
    getCountryData =  (): Promise<AxiosResponse<ICountry[]>> => {
      return axios.get("../src/assets/data.json")
    }
}


export default new countryDataRepository()