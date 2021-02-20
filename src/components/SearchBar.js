import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/AppContext'

const SearchBar = () => {
    const {store} = useContext(Context)

    const [input, setInput] = useState('')
    const [suggestions, setSuggestions] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const onChange = (e) => {
        setInput(e.target.value)
        if (input.length === 0) setSuggestions([])
        const regex = new RegExp(`^${input}`, 'gi')
        const allItems = store.planets.concat(store.people)
        const sug = allItems.filter(item => item.name.match(regex))
        setSuggestions([...sug])
    }

    return (
        <form onSubmit={(e) => onSubmit(e)} className="d-flex flex-column">
            <input 
            className="form-control dropdown-toggle search-bar"
            data-toggle="dropdown"
            aria-haspopup="true"
            
            type="search"
            onChange={e => onChange(e)}
            value={input}
            />
            <ul style={{left:'auto'}} className="search-bar list dropdown-menu">
                {suggestions.map((each, i) => 
                    <Link to={`/sw-blog/${each.climate ? 'planet' : 'person'}/${each.created}`}>
                        <li 
                        onClick={(e) => setInput('')}
                        key={i}
                        className="dropdown-item search-bar"
                        >{each.name}</li>
                    </Link>)
                }
            </ul>
        </form>
    )
}

export default SearchBar