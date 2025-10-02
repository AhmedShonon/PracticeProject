import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-80 mx-auto max-w-[300px] mt-40 border border-gray-400">
      <div>
        <h1>Sabbir </h1>
        <p>I am an Intern. I am trying my best to learn react and nextJS</p>
      </div>
      <div className="relative">
        <Image className="absolute min-h-50 min-w-10 w-full h-full" src= "/sabbir.jpg" fill alt="Loading image"/>
      </div>
    </div>
  );
}
