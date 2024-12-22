import Card from "@src/components/common/Card/Card";
import { Pagination, styled } from "@mui/material";
import { useContext, useState } from "react";
import Loading from "@src/components/common/Loading";
import List from "@src/components/common/List/List";
import { useParams } from "react-router-dom";
import { SentiContext, SentiContextType } from "./SentimentPage";
import { useGetSentiReviews } from "@src/apis/hooks/useGetSentiReviews";
import Typo from "@src/components/common/Typo/Typo";

export type ReviewDataProps = {
  reviewId: number;
  userName: string;
  date: Date;
  content: string;
  rating: number;
  thumbs: number;
};

const LAST_PAGE = 5;
const DEFAULT_PAGE = 1;
const REVIEW_SIZE = 3;

export default function ReviewCard() {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const context = useContext(SentiContext);

  if (!context) {
    throw new Error("MyConsumer must be used within a MyProvider");
  }

  const { senti }: SentiContextType = context;

  console.log(senti);
  const { appId } = useParams();
  const id = Number(appId);
  const { data: reviewData, isLoading: isLoading } = useGetSentiReviews({
    page: currentPage,
    size: REVIEW_SIZE,
    appId: id,
    sentiId: Number(senti),
  });

  const handlePageChange = (e: React.ChangeEvent<unknown>) => {
    const input = e.target as HTMLElement;
    const currentPageIndex = Number(input.innerText);
    setCurrentPage(currentPageIndex);
  };

  if (Array.isArray(reviewData) && !isLoading) {
    const reviewListData: ReviewDataProps[] = reviewData;
    console.log("?");
    console.log(reviewListData);
    console.log(reviewData);
    return (
      reviewListData && (
        <Card style={{ margin: "20px 20px", padding: "30px 30px", maxWidth: "1200px" }}>
          <ReviewHeader />
          <List
            items={reviewListData}
            renderItem={(reviewData: ReviewDataProps) => <Item key={reviewData.reviewId} reviewData={reviewData} />}
          />
          <Pagination page={currentPage} count={LAST_PAGE} defaultPage={DEFAULT_PAGE} onChange={handlePageChange} />
        </Card>
      )
    );
  } else {
    return <Loading />;
  }
}

type Props = {
  reviewData: ReviewDataProps;
};

function Item({ reviewData }: Props) {
  const { date, content } = reviewData;
  return (
    <ItemWrapper>
      <TextWrapper width="20%">
        <Typo>{new Date(date).toLocaleDateString()}</Typo>
      </TextWrapper>
      <TextWrapper width="80%">
        <Typo>{content}</Typo>
      </TextWrapper>
    </ItemWrapper>
  );
}

const ItemWrapper = styled("div")(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  padding: "10px 0", // 아이템 간 간격을 위해 상하 패딩 추가
}));
const TextWrapper = styled("div")(({ width }: { width: string }) => ({
  flex: "1",
  maxWidth: width, // TextWrapper에 너비를 동적으로 할당
  wordBreak: "break-word",
  textAlign: "left", // 텍스트를 왼쪽 정렬
}));

function ReviewHeader() {
  return (
    <ItemWrapper
      style={{
        fontWeight: "bold", // 헤더 폰트 굵게
        borderBottom: "2px solid #ccc", // 헤더 아래에 경계선 추가
        paddingBottom: "5px", // 경계선과 텍스트 사이 간격
      }}
    >
      <TextWrapper width="20%">
        <Typo bold>작성날짜</Typo>
      </TextWrapper>
      <TextWrapper width="80%">
        <Typo bold>내용</Typo>
      </TextWrapper>
    </ItemWrapper>
  );
}
