import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(
        () => {
            getGifs(category)
                .then(imgs => setState({ data: imgs, loading: false }))
                .catch(err => setState({ data: [], loading: true }))
        },
        [category]
    );

    return state;
}