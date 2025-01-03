import Image from "next/image";

type ProjectProps = {
  title?: string;
  description?: string;
  link?: string;
  image?: string;
  icons?: string[];
};

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  link,
  image,
  icons = [],
}) => {
  return (
    <div className="p-5 mx-5 my-2 rounded-lg bg-neutral-800 items-center text-center max-w-[500px]">
      <h1 className="text-2xl">{title}</h1>
      <a href={link}>
        <Image
          className="mx-auto my-5 max-w-[300px]"
          src={image || "/home.png"}
          alt={title || "Project image"}
          width={500}
          height={500}
        />
      </a>
      <ul>
        {icons.map((item) => (
          <li className="rounded bg-gradient-to-r to-sky-500 from-sky-600 px-2 py-1 inline-block m-2">
            {item}
          </li>
        ))}
      </ul>
      <p>{description}</p>
    </div>
  );
};

export default Project;
