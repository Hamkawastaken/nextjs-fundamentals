"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=Hamka12345",
      {
        method: "POST",
      }
    );

    if (!res.ok) {
      setStatus("Revalidate Failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revaltidate Succes");
      }
    }
  };
  return (
    <div>
      <h1 className="font-bold text-center my-3">{status}</h1>
      <button
        className="flex justify-center items-center bg-black text-white p-3 mx-auto mt-10 rounded-lg cursor-pointer"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
}
