import data from "@/app/data";
import Image from "next/image";
import PropertyGallery from "../_components/toggle";

export default function Page({ params }) {
  const { id } = params;
  const project = data.find((item) => item.id.toString() === id);

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <div className="container mx-auto xl:max-w-[1400px] px-5 ">
      <div className="grid md:grid-cols-2 items-center ">
        <div>
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <p className="text-gray-600 mt-2">{project.description}</p>
        </div>
        <div className="">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
      <PropertyGallery />
    </div>
  );
}
