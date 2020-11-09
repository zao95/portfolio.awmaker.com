import React, { useEffect, useRef } from 'react'
import "../styles/Nav.sass"

const Nav = () => {
    const ulElement = useRef()
    useEffect(() => {
        const temp = ulElement.current.children
        for (let i of temp) {
            console.log(String(i.innerText))
            const liText = String(i.innerText).split("")
            liText.forEach((text, idx) => {
                liText[idx] = text + "<br />"
                console.log(liText[idx])
            })
            i.innerHTML = liText.join("")
        }
    }, [])
	return (
        <nav id="nav">
            <div className="logo clickable" />
            <ul ref={ulElement}>
                <li className="condensed clickable">PROFILE</li>
                <li className="condensed clickable">WEBSITE</li>
                <li className="condensed clickable">APPLICATION</li>
            </ul>
        </nav>
	)
}

export default Nav