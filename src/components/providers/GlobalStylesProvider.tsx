import { Global } from "@emotion/react";
import { queryClient } from "@src/apis/instance";
import { globalStyle } from "@src/assets/styles/global";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyle} />
      {children}
    </QueryClientProvider>
  );
}
