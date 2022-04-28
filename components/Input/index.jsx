import React from "react";

export default function Input({ ...e }) {
    return <input className="inputCommon" {...e} />;
}
// eslint-disable-next-line react/display-name
Input.TextArea = ({ ...e }) => {
    return <textarea className="textAreaCommon" {...e} />;
};
// eslint-disable-next-line react/display-name
