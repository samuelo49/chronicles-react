import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div",{id: "child1", key: "child1"},[
        React.createElement("h1", {key: "c1-h1" }, "Iam a nested element of type h1 tag!"),
        React.createElement("h2", {key: "c1-h2" }, "Iam a nested element of type h2 tag!"),
    ]),
    React.createElement("div",{id: "child2", key: "child2"},[
        React.createElement("h1", {key: "c2-h1"}, "Iam a nested element of type h1 tag!"),
        React.createElement("h2", {key: "c2-h2"}, "Iam a nested element of type h2 tag!"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);