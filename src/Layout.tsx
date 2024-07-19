import { ReactNode } from "react";

// import React from 'react'
interface layoutProps {
  children: ReactNode;
}
function Layout({ children }: layoutProps) {
  return <div className="">{children}</div>;
}

export default Layout;
