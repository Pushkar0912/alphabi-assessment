"use client";

export default function GifCard({ gif }) {
  return (
    <div className="rounded-lg shadow-lg">
      <img
        src={gif.images.fixed_height.url}
        alt={gif.title}
        className="w-[354px] h-[236px] rounded-lg"
      />
      <h2 className=" m-4 text-black font-bold text-lg ">{gif.title}</h2>
      <p className="text-sm text-gray-500 m-4 text-center">@{gif.username}</p>
    </div>
  );
}
