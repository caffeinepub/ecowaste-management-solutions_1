import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitQuotation() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      organization: string;
      orgType: string;
      service: string;
      email: string;
      description: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      await actor.submitQuotation({
        name: data.name,
        organization: data.organization,
        orgType: data.orgType,
        service: data.service,
        email: data.email,
        description: data.description,
        timestamp: BigInt(Date.now()),
      });
    },
  });
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      await actor.submitInquiry({
        name: data.name,
        email: data.email,
        message: data.message,
        timestamp: BigInt(Date.now()),
      });
    },
  });
}
