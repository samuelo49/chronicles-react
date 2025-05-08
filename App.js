/**
 * <div id="parent">
 *      <div id="child">
 *         <h1>I am h1!</h1>
 *          <h2>I am h2!</h1>
 *       </div>
 * 
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser Understants)
 * 
 * 
 */
const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    [React.createElement(
        "div",
        {id: "child1"},
        [React.createElement("h1", {}, "Iam a nested element of type h1 tag!"),
        React.createElement("h2", {}, "Iam a nested element of type h2 tag!")]
    ),
    React.createElement(
        "div",
        {id: "child2"},
        [React.createElement("h1", {}, "Iam a nested element of type h1 tag!"),
        React.createElement("h2", {}, "Iam a nested element of type h2 tag!")]
    )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);