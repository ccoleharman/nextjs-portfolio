export default function About() {
  return (
    <div className="text-white mt-20">
      <div className="sm:flex sm:items-center sm:justify-center">
        <div className="m-5 rounded-lg bg-neutral-800 p-5 sm:w-1/2 h-full">
          <h1 className="text-3xl mb-5">About Me</h1>
          <p className="indent-8">
            Howdy! I&apos;m Cole Harman, a dedicated and motivated computer
            science student at Texas A&M University, passionate about designing
            and developing innovative, user-focused applications. My expertise
            lies in leveraging modern technologies like Python, React, and Rust
            to craft software solutions that are both functional and elegant.
            Currently, I&apos;m expanding my skills in full-stack development
            and working on projects that merge creativity with technical
            precision. My goal is to contribute to projects that not only solve
            problems but also elevate the user experience, all while
            collaborating with passionate teams to drive innovation.
          </p>
        </div>
        <div className="m-5 rounded-lg bg-neutral-800 p-5 sm:w-1/2 h-full">
          <h1 className="text-3xl mb-5">Skills</h1>
          <ul className="list-disc pl-6">
            <li>Frontend: React, Tailwind CSS, JavaScript, HTML, CSS</li>
            <li>Backend: Node.js, Rust, Next.js, Python</li>
            <li>Tools: Git</li>
          </ul>
          <h1 className="text-3xl my-5">What I&apos;m Working On</h1>
          <p>
            Currently pushing through school, learning new technologies and
            languages, while tackling as many projects as I can. I am preparing
            myself for a career in software engineering and am excited to see
            where my journey takes me.
          </p>
        </div>
      </div>
      <div className="mx-5 mb-5 rounded-lg bg-neutral-800 p-5 text-center">
        <h1 className="text-3xl mb-5">Beyond Coding</h1>
        <p>
          Outside of coding, I&apos;m passionate about weightlifting, which
          helps me build discipline and resilience. I also enjoy following
          college sports, appreciating the community and teamwork they foster.
          Trading, whether in stocks or cryptocurrency, sharpens my analytical
          skills and keeps me engaged with fast-paced problem solving. These
          hobbies help me maintain balance and inspire my approach to both
          personal and professional growth.
        </p>
      </div>
    </div>
  );
}
