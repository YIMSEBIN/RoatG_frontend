import { useQuery } from "@tanstack/react-query";
import { clientInstance } from "../instance";
import { getDynamicAPIPath } from "../apiPath";

export const getRatingPath = (appId: number) => `${getDynamicAPIPath.rating(appId)}`;
const getRating = async (appId: number) => {
  const res = await clientInstance.get(getRatingPath(appId));
  return res.data;
};

export const useGetRating = (appId: number) =>
  useQuery({
    queryKey: [getRatingPath, "rating"],
    queryFn: () => getRating(appId),
  });
