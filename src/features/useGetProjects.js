import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../services/apiProject";

export function useGetProjects() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return { isLoading, data, error };
}
