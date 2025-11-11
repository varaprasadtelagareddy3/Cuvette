// const root = ReactDOM.createRoot(document.getElementById('root'));
const h5ele = document.createElement("h5");
h5ele.textContent = "Hello World From JS";
document.body.appendChild(h5ele);
console.log(h5ele);
const parent = React.createElement("div", {
    className: "parent"
}, [
    React.createElement("div", {
        className: "child1"
    }, [
        React.createElement("h1", {
            id: "heading1",
            style: {
                color: "blue",
                backgroundColor: "red"
            }
        }, "Modda Kudu"),
        React.createElement("h2", {
            id: "heading2",
            style: {
                color: "blue",
                backgroundColor: "red"
            }
        }, "ksjdfkjsfnhkjsfnhklsnhfbg")
    ]),
    React.createElement("div", {
        className: "child2"
    }, [
        React.createElement("h1", {
            id: "heading3",
            style: {
                color: "blue",
                backgroundColor: "red"
            }
        }, "Modda Kudu"),
        React.createElement("h2", {
            id: "heading4",
            style: {
                color: "blue",
                backgroundColor: "red"
            }
        }, "ksjdfkjsfnhkjsfnhklsnhfbg")
    ])
]);
console.log(parent);
const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(parent);

//# sourceMappingURL=React.85b9616c.js.map
