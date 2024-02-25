import Image from "next/image";
import { useEffect, useState } from "react";

async function getData() {
  const data = await fetch(`${process.env.BACKEND_URL}/`).then(val => val.json());
  return data.Hello;
}

export default async function Home() {
    const val = await getData();
    return <>{val}</>;
}
