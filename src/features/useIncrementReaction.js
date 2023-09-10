import { useMutation, useQueryClient } from "@tanstack/react-query";
import { incrementReaction } from "../services/apiProject";

export function useIncrementReaction() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: updateLoves } = useMutation({
    mutationFn: ({ projectId, type }) => incrementReaction(projectId, type),
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
    },
  });

  return { isLoading, updateLoves };
}
