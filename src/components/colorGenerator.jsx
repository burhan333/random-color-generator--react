import React, {useEffect, useState} from "react"

const ColorGenerator = () => {

    const [rgb1, setRgb1] = useState('rgba(0, 224, 255, 1)')
    const [rgb2, setRgb2] = useState('rgba(0, 224, 255, 1)')
    const [rgb3, setRgb3] = useState('rgba(0, 224, 255, 1)')

    useEffect(() => {
        getRandomcolor1()
        getRandomcolor2()
        getRandomcolor3()
    }, [])

    const getRandomNumber = (min, max) => {
        const d = max - min + 1;
        const r = Math.random() * d;
        return Math.floor(r) + min;
    }

    const getRandomcolor1 = () => {
        const r = getRandomNumber(0, 255)
        const g = getRandomNumber(0, 255)
        const b = getRandomNumber(0, 255)
        const rgba = `rgba(${r},${g},${b}, 1)`
        setRgb1(rgba)
    }

    const getRandomcolor2 = () => {
        const r = getRandomNumber(0, 255)
        const g = getRandomNumber(0, 255)
        const b = getRandomNumber(0, 255)
        const rgba = `rgba(${r},${g},${b}, 1)`
        setRgb2(rgba)
    }

    const getRandomcolor3 = () => {
        const r = getRandomNumber(0, 255)
        const g = getRandomNumber(0, 255)
        const b = getRandomNumber(0, 255)
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