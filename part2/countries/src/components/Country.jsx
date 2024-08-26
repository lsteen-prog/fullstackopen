const Country = ({country, showCountry}) => {
    return (
        <div>
            {country.name.common}
            <button onClick={showCountry}>show</button>
        </div>
    )
}

export default Country