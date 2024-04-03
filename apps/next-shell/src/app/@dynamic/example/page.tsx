"use client"

import dynamic from "next/dynamic";

const VERSION = "0.0.0"
const DynamicApp = dynamic(() => {
  // @ts-expect-error It's ok because is added in urlImport
  return import(`http://localhost:8000/example@0.0.0/index.js`);
})

export default function DynamicExample() {
  return <DynamicApp/>;
}
