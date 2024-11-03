import { http, HttpResponse } from "msw";
import { UpdateAPIProps } from "@src/types";
import { getUpdatePath } from "../hooks/useGetUpdate";

export const updategMockHandler = [http.get(getUpdatePath({ appId: 1 }), () => HttpResponse.json(UPDATE_DATA))];

const UPDATE_DATA: UpdateAPIProps[] = [
  {
    version: "1.00",
    date: "2024.08.29",
    content: "버그지웠쩌",
  },
  {
    version: "1.01",
    date: "2024.09.02",
    content: "버그 또 지웠쩌",
  },
];
