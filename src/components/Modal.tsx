import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import React from "react";

const modal = document.getElementById("modal");
const Modal = (props: { children: React.ReactNode }) => {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) elRef.current = document.createElement("div");
  useEffect(() => {
    if (elRef.current) modal?.appendChild(elRef.current);
    return () => {
      if (elRef.current) modal?.removeChild(elRef.current);
    };
  });
  return createPortal(<div>{props.children}</div>, elRef.current);
};
export default Modal;
