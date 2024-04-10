/* eslint-disable import/no-unresolved */
import {  useEffect, useRef } from "react";

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    async function initialize() {
       import("example").then(({ default: teste }) => {
        teste(ref.current)
       }).catch((error) => {
        console.log("error", error);
       });
    }

    initialize()
  }, [])
  return <div ref={ref}/>;
}
