import { useMutation, useQueryClient } from "@tanstack/react-query";
import { incrementLoves } from "../services/apiProject";

export function useIncrementLoves() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: updateLoves } = useMutation({
    mutationFn: ({ projectId, type }) => incrementLoves(projectId, type),
    onSuccess: () => {
      console.log("success!!!!!");
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  return { isLoading, updateLoves };
}
