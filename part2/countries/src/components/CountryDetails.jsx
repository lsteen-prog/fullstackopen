import Language from "./Language"

const CountryDetails = ({country}) => {

    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>
                capital {country.capital[0]}
            </div>
            <div>
                area {country.area}
            </div>
            <h2>languages</h2>
            <ul>
                {Object.values(country.languages).map(language => <Language key={language} language={language} />)} 
            </ul>
            <img src={country.flags.png} alt={country.flags.alt}/>
        </div>
    )
}

export default CountryDetails