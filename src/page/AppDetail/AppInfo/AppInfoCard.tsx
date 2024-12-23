import Card from "@src/components/common/Card/Card";
import Typo from "@src/components/common/Typo/Typo";
import Image from "@src/components/common/Image/Image";
import { Divider } from "@mui/material";
import styled from "@emotion/styled";
import { AppInfoProps } from "./AppInfoPage";

type Props = {
  appInfoData: AppInfoProps;
};

export default function AppInfoCard({ appInfoData }: Props) {
  return (
    <Card style={{ display: "flex", margin: "20px 20px", padding: "30px 30px" }}>
      <div
        style={{
          width: "200px",
          marginRight: "20px",
        }}
      >
        <Image
          url={appInfoData.banner}
          size={{
            width: "200px",
            height: "200px",
          }}
        />
      </div>
      <TextWrapper>
        <TitleWrapper>
          <Typo size="12px" style={{ marginBottom: "3px" }}>
            {appInfoData.publisher}
          </Typo>
          <Typo bold size="24px" style={{ marginBottom: "10px" }}>
            {appInfoData.name}
          </Typo>
          {appInfoData && (
            <Typo size="12px">최근 업데이트 | {new Date(appInfoData.recentUpdate).toLocaleDateString()}</Typo>
          )}
        </TitleWrapper>
        <Divider />
        <ContentWrapper>
          <ScoreWrapper>
            <Typo size="12px">PlayStore 평균 별점</Typo>
            <Typo size="20px">{appInfoData.ratingAvg}</Typo>
          </ScoreWrapper>
          <ScoreWrapper>
            <Typo size="12px">총 리뷰 수</Typo>
            <Typo size="20px">{appInfoData.reviewCount}개</Typo>
          </ScoreWrapper>
          <ScoreWrapper>
            <Typo size="12px">다운로드 수</Typo>
            <Typo size="20px">{appInfoData.downloadCount}</Typo>
          </ScoreWrapper>
          <ScoreWrapper>
            <Typo size="12px">카테고리</Typo>
            <Typo size="20px">{appInfoData.category}</Typo>
          </ScoreWrapper>
        </ContentWrapper>
      </TextWrapper>
    </Card>
  );
}

const TextWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
}));
const TitleWrapper = styled("div")(() => ({
  margin: "20px 0",
}));
const ContentWrapper = styled("div")(() => ({ margin: "20px 0", display: "flex" }));
const ScoreWrapper = styled("div")(() => ({
  marginRight: "40px",
}));
