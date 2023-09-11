import { useMutation, useQueryClient } from "@tanstack/react-query";
import { incrementReaction } from "../services/apiProject";
import { toast } from "react-hot-toast";

export function useIncrementReaction() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: updateLoves } = useMutation({
    mutationFn: ({ projectId, type }) => incrementReaction(projectId, type),
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
    },
    onError: (error) => {
      toast.error("Reactions do not work temporarily", error);
    },
  });

  return { isLoading, updateLoves };
}
