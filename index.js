// // const root = ReactDOM.createRoot(document.getElementById('root'));

// const h5ele = document.createElement("h5");

// h5ele.textContent = "Hello World From JS";

// document.body.appendChild(h5ele);

// console.log(h5ele);

// // const root = document.createElement("h1")

// // root.textContent = "Hello World FROM Java"
// // root.style.backgroundColor='red'
// // root.style.color='blue'

// // document.body.appendChild(root)

// // const heading = React.createElement("h1",
// //     {
// //     id:"heading1",
// //     style:{
// //         color:"blue",
// //         backgroundColor:"red",
// //     },
// // },"Hello World from React");

// // console.log(heading)

// // const root = document.getElementById("root")

// // const reactRoot = ReactDOM.createRoot(root)

// // reactRoot.render(heading)

// {
//   /* <div id="root">
//         <div class="parent">
//             <div class="child1">
//                 <h1>Hello World from React! </h1>
//                 <h2> kjfkfjkjbgskjbgfskbgf</h2>
//             </div>
//             <div class="child2">
//                 <h1>Hello World from React! </h1>
//                 <h2> kjfkfjkjbgskjbgfskbgf</h2>
//             </div>
//         </div>
// </div> */
// }

// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "div",
//   {
//     className: "parent",
//   },
//   [
//     React.createElement(

//       "div",
//       {
//         className: "child1",
//       },
//       [
//         React.createElement(
//           "h1",
//           {
//             id: "heading1",
//             style: {
//               color: "blue",
//               backgroundColor: "red",
//             },
//           },
//           "Modda Kudu1"
//         ),
//         React.createElement(
//           "h2",
//           {
//             id: "heading2",
//             style: {
//               color: "blue",
//               backgroundColor: "red",
//             },
//           },
//           "ksjdfkjsfnhkjsfnhklsnhfbg"
//         ),
//       ]
//     ),
//     React.createElement(
//       "div",
//       {
//         className: "child2",
//       },
//       [
//         React.createElement(
//           "h1",
//           {
//             id: "heading3",
//             style: {
//               color: "blue",
//               backgroundColor: "red",
//             },
//           },
//           "Modda Kudu2 "
//         ),
//         React.createElement(
//           "h2",
//           {
//             id: "heading4",
//             style: {
//               color: "blue",
//               backgroundColor: "red",
//             },
//           },
//           "ksjdfkjsfnhkjsfnhklsnhfbg"
//         ),
//       ]
//     ),
//   ]
// );

// console.log(parent);

// const root = document.getElementById("root");

// const reactRoot = ReactDOM.createRoot(root);

// reactRoot.render(parent);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const heading = (
//   <div>
//     <div>
//       <h1>Hello</h1>
//     </div>
//   </div>
// );

// const Comp = () => {
//   return (
//     <div>
//       <div>
//         <h1>Hello erri</h1>
//       </div>
//     </div>
//   );
// };

// console.log(Comp)

// function hello() {
//   return (
//     <div>
//       <div>
//         <h1>Hello</h1>
//       </div>
//     </div>
//   );
// }



const root = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(<App/>);
