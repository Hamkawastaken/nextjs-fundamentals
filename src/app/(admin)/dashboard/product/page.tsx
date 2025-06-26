"use client";

export default function AdminProductPage() {
  const revalidate = async () => {
    await fetch("http://localhost:3000/api/revalidate?tag=products", {
      method: "POST",
    });
  };
  return (
    <div>
      <button
        className="flex justify-center items-center bg-black text-white p-3 mx-auto mt-10 rounded-lg cursor-pointer"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
}
