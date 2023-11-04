import React, { useRef, useState } from "react";

function GifSearch({onSearch}) {

    const [input, setInput] = useState('')
    const inputElement = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        onSearch(input)
        setInput('')
    }

    // function focusInput() {
    //     console.log(inputElement.current)
    //     inputElement.current.focus()
    // }

    return (
        <div className="col-3">
            <form className="m-4" onSubmit={handleSubmit}>
                <label className="form-label m-2">Enter a Search Term</label>
                <input className="form-control m-2" value={input} ref={inputElement} onChange={ (e) => setInput(e.target.value)} type="text"required ></input>
                <input type="submit" className="btn btn-success m-2"/>
            </form>
        </div>
    )
}

export default GifSearch