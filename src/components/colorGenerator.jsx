import React, {useEffect, useState} from "react"

const ColorGenerator = () => {

    const [rgb1, setRgb1] = useState('')
    const [rgb2, setRgb2] = useState('')
    const [rgb3, setRgb3] = useState('')

    useEffect(() => {
        getRandomcolor1()
        getRandomcolor2()
        getRandomcolor3()
    }, [])

    const getRandomNumber = () => {
        return Math.floor(Math.random() * 256) + 1
    }

    const getRandomcolor1 = () => {
        const r = getRandomNumber()
        const g = getRandomNumber()
        const b = getRandomNumber()
        const rgba = `rgba(${r},${g},${b}, 1)`
        setRgb1(rgba)
    }

    const getRandomcolor2 = () => {
        const r = getRandomNumber()
        const g = getRandomNumber()
        const b = getRandomNumber()
        const rgba = `rgba(${r},${g},${b}, 1)`
        setRgb2(rgba)
    }

    const getRandomcolor3 = () => {
        const r = getRandomNumber()
        const g = getRandomNumber()
        const b = getRandomNumber()
        const rgba = `rgba(${r},${g},${b}, 1)`
        setRgb3(rgba)
    }

    const refreshColor1 = () => {
        getRandomcolor1()
        getRandomcolor2()
    }

    const refreshColor2 = () => {
        getRandomcolor3()
    }

    return(
        <div className="main">
            <div className="box">
                <h2>Random Gradiant And Color Generator</h2>
                <h5>Gradiant</h5>
                <div className="box1" style={{background: `linear-gradient(to right,  ${rgb1} 0%,${rgb2} 100%)`}}></div>
                <button onClick={refreshColor1}>REFRESH</button>
                <h5>Solid Color</h5>
                <div className="box2" style={{background: `${rgb3}`}}></div>
                <button onClick={refreshColor2}>REFRESH</button>
            </div>
        </div>        
    )
}

export default ColorGenerator