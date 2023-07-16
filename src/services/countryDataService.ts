import countryDataRepository from "@/repositorys/countryDataRepository";

export class countryDataService {
    getCountryData = ()  => {
        return countryDataRepository.getCountryData()
    }
}


export default new countryDataService()