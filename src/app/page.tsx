import routesConfig from "@/app/routesConfig";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-24">
      <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {routesConfig.map((route) => (
          <a
            className=" rounded-xl bg-white shadow-md hover:drop-shadow-xl transition duration-900 ease-in-out flex flex-col justify-between items-center"
            key={route.id}
            href={route.route}
          >
            <Image
              alt="logo"
              src={route.image}
              width={200}
              height={200}
              className="h-2/3 w-full object-cover rounded-t-xl"
            />
            <h1 className="h-1/3 w-full px-2 text-start flex items-center">
              {route.title}
            </h1>
          </a>
        ))}
      </ul>
    </main>
  );
}
