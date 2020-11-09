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
	return (
        <nav id="nav">
            <div className="logo clickable" />
            <ul ref={ulElement}>
                <li className="condensed clickable"></li>
                <li className="condensed clickable"></li>
                <li className="condensed clickable"></li>
            </ul>
        </nav>
	)
}

export default Nav