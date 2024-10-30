import Typo from "@src/components/common/Typo/Typo";
import AppInfoCard from "./AppInfoCard";
import styled from "@emotion/styled";

export const AppInfoPage = () => {
  return (
    <div>
      <Typo bold style={{ margin: "40px 0 0 30px" }}>
        App Information
      </Typo>
      <CardSection>
        <AppInfoCard />
      </CardSection>
    </div>
  );
};

const CardSection = styled("div")(() => ({ display: "flex", alignContent: "center" }));
