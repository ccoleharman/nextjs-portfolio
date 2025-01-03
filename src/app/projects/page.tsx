import Project from "../components/project";

export default function Projects() {
  return (
    <div className="text-white mt-20">
      <div className="text-center mx-auto sm:max-w-1/2">
        <h1 className="bg-gradient-to-r to-sky-500 from-sky-600 py-1 rounded-lg inline-block px-7 text-3xl">
          Projects
        </h1>
        <p className="mt-3">
          Here are some of the projects I've worked on. You can find more on my
          &nbsp;
          <a
            className="hover:bg-gradient-to-r hover:to-sky-500 hover:from-sky-600 hover:text-white rounded inline-block px-2 italic"
            href="https://github.com/ccoleharman/"
          >
            GitHub
          </a>
          &nbsp; There are many more projects to come!
        </p>
      </div>
      <div className="flex items-center justify-center my-5 flex-wrap">
        <Project
          title="Advent of Code in Rust"
          description="Completed all challenges using Rust, demonstrating expertise in algorithms, data structures, and problem-solving with Rust."
          link="https://github.com/coleharman/advent-of-code-2024"
          image="/aocRust.png"
          icons={["Rust", "Algorithms", "Data Structures", "Git"]}
        />
        <Project
          title="This Portfolio"
          description="Created a professional portfolio website, demonstrating front-end web capabilities and knowledge of Next.js and Tailwind CSS."
          link="https://github.com/coleharman/advent-of-code-2024"
          image="/home.svg"
          icons={["React", "Next.js", "Tailwind CSS", "HTML", "CSS"]}
        />
      </div>
    </div>
  );
}
