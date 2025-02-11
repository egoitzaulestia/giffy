import React, {useState} from "react"
import { Link, useLocation } from "wouter"
import {useGifs} from '../../hooks/useGifs'

// const POPULAR_GIFS = ["Matrix", "Venezuela", "Chile", "Colombia", "Ecuador"]

export default function Home () {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const {loading, gifs} = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}` )
        console.log(keyword )
    }

    const handleChange = evt => {}  
        setKeyword(evt.target.value)
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={keyword} /> 
            </form>
            <h3 className="App-title">Los gifs más populares</h3>
            <ul>
            {POPULAR_GIFS}
                <li key={popularGif}>
                    <Link to={`/search/$popularGif`}>Gifs de {popularGif}</Link>
                </li>
            </ul>
        </>
    )
}