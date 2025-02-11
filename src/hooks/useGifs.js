import {useEffect, useState} from 'react'
import GetGifs from '../services/getGifs'

export default function useGifs({ keyword } = { keyword: null }) {
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(function () {
        setLoading(true)

        const keyword = keyword || localStorage.getItem('lastKeyword')

        getGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword])

    return {loading, gifs}
}    