import React from "react";
import { useSelector } from "react-redux";

export default function Display(){
  const count = useSelector((state) => {
    return state.count;
  });
  return(
    <h1>{count}</h1>
  )
}