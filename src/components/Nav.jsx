import React, { useEffect, useRef } from 'react'
import "../styles/Nav.sass"

const Nav = () => {
    const ulElement = useRef()
    useEffect(() => {
        const liElement = ulElement.current.children
        const menu = ["profile", "website", "application"]
        for (let i = 0; i < liElement.length; i++) {
            const liText = menu[i].split("")
            liText.forEach((text, idx) => {
                liText[idx] = text + "<br />"
            })
            liElement[i].innerHTML = liText.join("")
        }
    }, [])
    const handleClick = (number) => {
        let target
        if (number === 0) {
            target = document.getElementById("root")
        } else if ( number === 1) {
            target = document.getElementById("section0Index")
        } else if ( number === 2) {
            target = document.getElementById("section1Index")
        } else if ( number === 3) {
            target = document.getElementById("section3Index")
        }
        const clientRect = target.getBoundingClientRect()
        const relativeTop = clientRect.top
        const scrolledTopLength = window.pageYOffset
        const absoluteTop = scrolledTopLength + relativeTop
        window.scrollTo(0, absoluteTop)
    }
	return (
        <nav id="nav">
            <div className="logo clickable" onClick={() => handleClick(0)} />
            <ul ref={ulElement}>
                <li className="condensed clickable" onClick={() => handleClick(1)}></li>
                <li className="condensed clickable" onClick={() => handleClick(2)}></li>
                <li className="condensed clickable" onClick={() => handleClick(3)}></li>
            </ul>
        </nav>
	)
}

export default Nav