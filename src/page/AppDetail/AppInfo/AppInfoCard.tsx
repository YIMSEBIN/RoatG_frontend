import Card from "@src/components/common/Card/Card";
import Typo from "@src/components/common/Typo/Typo";
import Image from "@src/components/common/Image/Image";
import { Divider } from "@mui/material";
import styled from "@emotion/styled";

export default function AppInfoCard() {
  return (
    <Card style={{ display: "flex", margin: "20px 20px", padding: "30px 30px", minWidth: "880px" }}>
      <Image
        url="https://i.ibb.co/8MqN8P1/image-28.png"
        size={{
          width: "150px",
          height: "150px",
        }}
        style={{
          marginRight: "20px",
        }}
      />
      <TextWrapper>
        <TitleWrapper>
          <Typo size="12px">DEVSISTERS</Typo>
          <Typo bold size="24px">
            쿠키런: 오븐브레이크
          </Typo>
          <Typo size="12px">최근 업데이트 | 2024.09.10</Typo>
        </TitleWrapper>
        <Divider />
        <ContentWrapper>
          <ScoreWrapper>
            <Typo size="12px">PlayStore 평균 별점</Typo>
            <Typo size="20px">4.1</Typo>
          </ScoreWrapper>
          <ScoreWrapper>
            <Typo size="12px">총 리뷰 수</Typo>
            <Typo size="20px">101만개</Typo>
          </ScoreWrapper>
          <ScoreWrapper>
            <Typo size="12px">다운로드 수</Typo>
            <Typo size="20px">1,000만+</Typo>
          </ScoreWrapper>
        </ContentWrapper>
      </TextWrapper>
    </Card>
  );
}

const TextWrapper = styled("div")(() => ({}));
const TitleWrapper = styled("div")(() => ({ margin: "20px 0" }));
const ContentWrapper = styled("div")(() => ({ margin: "20px 0", display: "flex" }));
const ScoreWrapper = styled("div")(() => ({
  marginRight: "40px",
}));
