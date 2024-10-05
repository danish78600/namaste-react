import React from "react"
import ReactDOM from "react-dom/client"


const title = (
    <h1 id="heading">
        Namaste React Series
    </h1>
)

const HeadingComponent = () => {
    return (
        <div>
            {title}
            <h1>Namaste React Funcional Component</h1>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>) 