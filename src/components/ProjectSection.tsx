import { useQuery } from "@tanstack/react-query";
import { getGithubData } from "./project/github";

export default function ProjectSection() {
  const query = useQuery({
    queryKey: ["github"],
    queryFn: getGithubData,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  console.log(query.data);
  return (
    <section id="project" className="z-100 relative w-full h-svh">
      <div></div>
    </section>
  );
}
