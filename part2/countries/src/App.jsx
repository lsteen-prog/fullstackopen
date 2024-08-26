import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Countries from './components/Countries'
import Filter from './components/Filter'

const App = () => {

  const [countries, setCountries] = useState(null)
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    countryService
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [])

  if (!countries) {
    return null
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase())
  }


  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filter))
  
  return (
    <div>
      <Filter value={filter} 
              onChange={handleFilterChange} 
              numberOfCountries={countriesToShow.length}/>
      <div>
        <Countries countries={countriesToShow}/>
      </div>
    </div>
  )
}

export default App