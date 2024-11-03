import Typo from "@src/components/common/Typo/Typo";
import GraphCard from "./GraphCard";
import { createContext, useState } from "react";
import SentiReviewCard from "./SentiReviewCard";

export type SentiContextType = {
  senti: number;
  setSenti: (senti: number) => void;
};

export const SentiContext = createContext<SentiContextType | null>(null);

function SentiProvider({ children }: { children: React.ReactNode }) {
  const [senti, setSenti] = useState(0);
  return <SentiContext.Provider value={{ senti, setSenti }}>{children}</SentiContext.Provider>;
}

export const SentimentPage = () => {
  return (
    <SentiProvider>
      <Typo bold style={{ margin: "40px 0 0 30px" }}>
        Sentiment Score
      </Typo>
      <GraphCard />
      <Typo bold style={{ margin: "40px 0 0 30px" }}>
        Review
      </Typo>
      <SentiReviewCard />
    </SentiProvider>
  );
};
