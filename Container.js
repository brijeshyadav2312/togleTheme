import React, { useState } from "react"
const Container = () => {
    const [theme, setTheme] = useState(true)

  return (
    <div className={ theme ? "light" : "dark"}>
        <div className="parent">
        <div className="navbaar">
            <span>Overreacted</span>
            <span><button onClick={() => setTheme(!theme)}>Toggle</button></span>
        </div>
        <div className="content">
            <div>
                <h1>The Wet Codebase</h1>
                <p><i>Sunday 4th,2020 11min read</i></p>
                <span>Come waste your time with me</span>
            </div>
            <div>
                <h1>Goodby, Clean Code</h1>
                <p><i>monday 5th,2021 5min</i></p>
                <span>Let clean code guide you,them let it go</span>
            </div>
            <div>
                <h1>My Decates In Review</h1>
                <p><i>Friday 9th,2022 10min</i></p>
                <span>A person reflextion</span>
            </div>
            <div>
                <h1>Goodby, Clean Code</h1>
                <p><i>monday 5th,2021 5min</i></p>
                <span>Let clean code guide you,them let it go</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Container

