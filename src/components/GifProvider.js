import React, { createContext } from "react";

const GifContext = createContext()

function GifProvider(props) {
    return (
        <GifContext.Provider value={props.gifs}>
            {props.children}
        </GifContext.Provider>
    )
}

export { GifContext, GifProvider }