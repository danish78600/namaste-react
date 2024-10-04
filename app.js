import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement('div', { id: "parent" },
    React.createElement("div", { id: "child" },
        [
            React.createElement('h1', {}, "i am h1 tag"),
            React.createElement('h2', {}, "i am h2 tag")
        ]
    ))

//JSX - as the above code will become cluttered if it is long
//React is only written using JSX


const heading = React.createElement("h1", { id: "heading", xyz: "danish" }, "Heading from Danish")

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)
