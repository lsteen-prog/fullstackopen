import { useState } from "react"
import Country from "./Country"
import CountryDetails from "./Countrydetails"

const Countries = ({countries}) => {

    const [country, setCountry] = useState(null)

    const showCountry = (country_name) => {
        const selectedCountry = countries.find(country => country.name.common === country_name)
        setCountry(selectedCountry)
    }

    if (countries.length === 1 && country === null){
        setCountry(countries[0])
    }

    if (countries.length > 10 && country !== null) {
        setCountry(null)
    }

    if (countries.length > 10 ) {
        return null
    }

    if (country) {
        return (
            <div>
                <CountryDetails country={country} />
            </div>
        )

    }

    return (      
        <div>
            {countries.map(country => <Country key={country.name.common} country={country} showCountry={() => {showCountry(country.name.common)}}/>)}
        </div>
        )
}

export default Countries