import Typo from "@src/components/common/Typo/Typo";
import GraphCard from "./GraphCard";
import ReviewCard from "@src/components/feature/Review/ReviewCard";
import { createContext, useState } from "react";

export type TopicContextType = {
  value: string;
  setValue: (value: string) => void;
};

export const TopicContext = createContext<TopicContextType | null>(null);

function TopicProvider({ children }: { children: React.ReactNode }) {
  const [topic, setTopic] = useState("");
  return <TopicContext.Provider value={{ value: topic, setValue: setTopic }}>{children}</TopicContext.Provider>;
}

export const TopicPage = () => {
  return (
    <TopicProvider>
      <Typo bold style={{ margin: "40px 0 0 30px" }}>
        Review Topic
      </Typo>
      <GraphCard />
      <Typo bold style={{ margin: "40px 0 0 30px" }}>
        Review
      </Typo>
      <ReviewCard />
    </TopicProvider>
  );
};
