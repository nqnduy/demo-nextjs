import React from "react";


export const ArrowsLSvg = () => (

<svg
width="1em"
height="1em"
viewBox="0 0 20 11"
fill="none"
xmlns="http://www.w3.org/2000/svg">

<path
fillRule="evenodd"
clipRule="evenodd"
d="M5.657 11L7.071 9.46965L3.829 6.17544H20V4.24561H3.829L7.071 1.28237L5.657 0L0 5.25105L5.657 11Z"
fill="currentColor"
/></svg>

);

export const ArrowsLIcon = (props) => (

    <Icon component={ArrowsLSvg} {...props} />
}