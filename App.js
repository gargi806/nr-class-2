import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{},"hello");

const heading2 = React.createElement("h2",{},"everyone");

const heading3 = React.createElement("h2",{},[heading,heading2]);

const root = ReactDOM.createRoot(document.getElementById("first"));
root.render(heading3);