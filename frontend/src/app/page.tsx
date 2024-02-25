"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [val, setVal] = useState("");
  useEffect(() => {
    fetch('http://localhost:8000/').then(val => val.json()).then(data => setVal(data['Hello']))
  }, []);
  return (
    <>
      {val}
    </>
  );
}
