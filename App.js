import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="head" tabIndex="5">
        Steam Rolling with JSX🚀
    </h1>
);

const HeadingComponent = () => (
    <div id="container">
        < Title />
        <h1>Steam Rolling React Functional Components⛳️</h1>
    </div>

);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);