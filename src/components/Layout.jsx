import React from "react";
import Header from "./header";

export default function Layout({children}) {
  return (
    <div style={{background: "#f1f1f2"}}>
      <Header />
      <div style={{marginTop: "100px"}}>{children}</div>
    </div>
  );
}
