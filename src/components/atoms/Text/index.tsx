import React, { FC } from "react";
import { ITextProps } from "./interface";

const Text: FC<ITextProps> = ({ type = "block", children, className }) => {
  if (type === "block")
    return <p className={`${className}`}>{children}</p>;
  if (type === "inline")
    return <span className={`${className}`}>{children}</span>;
};

export default Text;
