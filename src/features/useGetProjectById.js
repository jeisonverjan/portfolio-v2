import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "../services/apiProject";
import { useParams } from "react-router-dom";

export function useGetProjectById() {
  const { projectId } = useParams();
  const { isLoading, data, error } = useQuery({
    queryKey: ["currentProject"],
    queryFn: () => getProjectById(projectId),
    retry: false,
  });

  return { isLoading, data, error };
}
