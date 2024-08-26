import { useState } from "react"

const Filter = ({value, onChange, numberOfCountries}) => {

    const [message, setMessage] = useState('')

    if (value === '' && message !== ''){
        setMessage('')
    }
    else if (value !== '' && message === '' && numberOfCountries > 10) {
        setMessage('Too many matches, specify another filter')
    }
    else if (message !== '' && numberOfCountries <= 10) {
        setMessage('')
    }

    return (
        <div>
            Find countries   
            <input
                value={value}
                onChange={onChange}
            />
            <div>
                {message}
            </div>
        </div>
        
    )
}

export default Filter