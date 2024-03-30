import React from "react";

export default function Content({children}: { children: React.JSX.Element }) {
  return (
    <div className="">
      {children}
    </div>
  )
}