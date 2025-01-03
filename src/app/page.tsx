import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white">
      <div className="sm:flex bg-neutral-800 p-1 sm:px-5 sm:py-2 sm:items-center sm:justify-center max-h-[91vh]">
        <div className="sm:w-1/2 text-center">
          <h1 className="sm:text-6xl text-2xl mb-6 sm:mt-0 mt-2">
            Cole Harman | Aspiring Software Engineer
          </h1>
          <p className="sm:text-xl italic">
            &quot;Driven by curiosity, powered by technology.&quot;
          </p>
          <ul>
            <li className="rounded bg-gradient-to-r to-sky-500 from-sky-600 px-2 py-1 inline-block m-2 ml-0">
              Python
            </li>
            <li className="rounded bg-gradient-to-r to-sky-500 from-sky-600 px-2 py-1 inline-block m-2">
              TypeScript
            </li>
            <li className="rounded bg-gradient-to-r to-sky-500 from-sky-600 px-2 py-1 inline-block m-2">
              Java
            </li>
            <li className="rounded bg-gradient-to-r to-sky-500 from-sky-600 px-2 py-1 inline-block m-2">
              JavaScript
            </li>
            <li className="rounded bg-gradient-to-r to-sky-500 from-sky-600 px-2 py-1 inline-block m-2">
              React
            </li>
            <li className="rounded bg-gradient-to-r to-sky-500 from-sky-600 px-2 py-1 inline-block m-2">
              Node.js
            </li>
            <li className="rounded bg-gradient-to-r to-sky-500 from-sky-600 px-2 py-1 inline-block m-2">
              NextJS
            </li>
            <li className="rounded bg-gradient-to-r to-sky-500 from-sky-600 px-2 py-1 inline-block m-2">
              Rust
            </li>
            <li className="rounded bg-gradient-to-r to-sky-500 from-sky-600 px-2 py-1 inline-block m-2">
              Tailwind CSS
            </li>
            <li className="rounded bg-gradient-to-r to-sky-500 from-sky-600 px-2 py-1 inline-block m-2">
              HTML
            </li>
            <li className="rounded bg-gradient-to-r to-sky-500 from-sky-600 px-2 py-1 inline-block m-2">
              CSS
            </li>
            <li className="rounded bg-gradient-to-r to-sky-500 from-sky-600 px-2 py-1 inline-block m-2">
              Git
            </li>
          </ul>
        </div>
        <div className="w-1/2 sm:block hidden">
          <Image
            className="max-h-[90vh]"
            src="/home.svg"
            alt="Drawing of Me"
            width={1080}
            height={1080}
          />
        </div>
      </div>
      <div className="items-center p-5 flex flex-col sm:w-96 text-center mx-auto w-64">
        <a
          className="p-2 m-2 rounded bg-gradient-to-r to-sky-500 from-sky-600 sm:text-xl w-full text-md"
          href="/about"
          aria-label="About"
        >
          Learn more about me &nbsp; &nbsp; &rarr;
        </a>
        <a
          className="p-2 m-2 rounded bg-gradient-to-r to-sky-500 from-sky-600 sm:text-xl w-full text-md"
          href="/projects"
          aria-label="Projects"
        >
          View some of my work &nbsp; &nbsp; &rarr;
        </a>
      </div>
    </div>
  );
}
