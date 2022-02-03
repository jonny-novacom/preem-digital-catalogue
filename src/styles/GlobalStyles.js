import { createGlobalStyle } from "styled-components";

import plus from "../images/icons/plus.svg";
import dash from "../images/icons/dash.svg";

const GlobalStyles = createGlobalStyle`
:root {
    --preemGreen: #006341;
    --preemYellow: #ffac3a;
 }

 a {
    color: inherit !important;
    text-decoration: none !important;
    font-family: "Gotham Narrow", "Franklin Gothic Medium", "Tahoma", sans-serif;
}

.t-center{
        text-align: center;
}

.gatsby-image-wrapper-constrained {
    display: block !important;
    vertical-align: top;
}

.accordion-header {
    font-family: "Gotham Narrow", "Franklin Gothic Medium", "Tahoma", sans-serif;
}

.accordion-body {
    padding: 0px !important;
}

.accordion-button {
    padding: 1rem 1.5rem !important;
}

// .accordion-flush .accordion-collapse {
//     border-width: 1px !important;
// }

.accordion-item:last-of-type .accordion-collapse {
    border-bottom-right-radius: 0rem !important;
    border-bottom-left-radius: 0rem !important;
}

.accordion-item:last-of-type .accordion-button.collapsed {
    border-bottom-right-radius: 0rem !important;
    border-bottom-left-radius: 0rem !important;
}

.accordion-item:first-of-type .accordion-button {
    border-top-left-radius: 0rem !important;
    border-top-right-radius: 0rem !important;
}

.inner .accordion-body .accordion-item:last-of-type .accordion-button.collapsed {
    background: #efefef;
    }

.accordion-flush .accordion-item .accordion-button {
    background: var(--preemGreen);
    color: white;
    font-family: "Gotham Narrow", "Franklin Gothic Medium", "Tahoma", sans-serif;
    font-size: 0.95rem;
    border-top: 1px solid black;
}

.accordion-button::after {
    background-color: var(--preemYellow);
    border-radius: 100%;
}

.inner .accordion-item .accordion-button {
    background: white;
    color: #4d4d4d;
    border-top: 0px;
}

.inner .accordion-flush .accordion-item .accordion-button {
    border-top: 1px solid #bfbfbf;
    border-bottom: 1px solid #bfbfbf;
}

.accordion-button::after {
    background-image: url(${plus}) !important;
    color: white;
}

.accordion-button:not(.collapsed)::after {
    background-image: url(${dash}) !important;
}

.accordion-button:focus {
    border: none;
    outline: 0;
    box-shadow: none !important;
}

.accordion-button:not(.collapsed) {
    box-shadow: none !important;
}

.inner .accordion-item .accordion-button[aria-expanded="true"]{
    font-weight: 700;
  }

.inner .accordion-item .accordion-button:not(.collapsed) {
    color: inherit;
    background-color: inherit;
}

.ais-SearchBox {
    border: none !important;
}

.ais-SearchBox form input {
    border: 1px solid #ccc !important;
}

.inner:nth-child(even) .accordion-item .accordion-button {
    background: #efefef;
    color: #4d4d4d;
    border-top: 0px;
}

.accordion-button {
    padding-left: 2.5rem !important;
}

.accordion-item:last-of-type {
    border-bottom-right-radius: 0rem !important;
    border-bottom-left-radius: 0rem !important;
}
.accordion-item:first-of-type {
    border-top-left-radius: 0rem !important;
    border-top-right-radius: 0rem !important;
}

.cats .accordion-item {
    background-color: #fff;
    border: 0px;
    margin-left: -1px;
    margin-right: -1px;

}

.cats .accordion-item .accordion-button {
    background: white;
    color: #4d4d4d;
    border-top: 1px solid #efefef;
}

.cats {
    border-left: 1px solid;
    border-right: 1px solid;
}

.cats .accordion-item:nth-child(odd) .accordion-header .accordion-button {
    background: #efefef;
}

// .cats:nth-child(odd) .accordion-item .accordion-header .accordion-button{
//     background: #efefef;
//     color: #4d4d4d;
//     border-top: 0px;
// }

// .innersearch .accordion-item:nth-child(odd) .accordion-button {
//     background: #efefef;
// }

`;

export default GlobalStyles;
