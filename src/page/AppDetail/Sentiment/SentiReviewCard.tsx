import Card from "@src/components/common/Card/Card";
import { Pagination, styled } from "@mui/material";
import { useContext, useState } from "react";
import { useGetTopicReviews } from "@src/apis/hooks/useGetTopicReviews";
import Loading from "@src/components/common/Loading";
import List from "@src/components/common/List/List";
import { useParams } from "react-router-dom";
import { TopicContext, TopicContextType } from "@src/page/AppDetail/Topic/TopicPage";

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
  const context = useContext(TopicContext);

  if (!context) {
    throw new Error("MyConsumer must be used within a MyProvider");
  }

  const { value: topic }: TopicContextType = context;

  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const { appId } = useParams();
  const id = Number(appId);
  const date = localStorage.getItem("monthChoice") || "2024-1";
  // const topicId = localStorage.getItem("currentTopic") || "1"; // localStorage에서 topicId를 가져옵니다.

  console.log("ㅋㅋ", topic);

  const { data: reviewData, isLoading: isLoading } = useGetTopicReviews({
    page: currentPage,
    size: REVIEW_SIZE,
    appId: id,
    date: date,
    topicId: Number(topic),
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
  const { userName, date, content, rating } = reviewData;
  return (
    <ItemWrapper>
      <TextWrapper width="15%">{userName}</TextWrapper>
      <TextWrapper width="15%">{date.toString()}</TextWrapper>
      <TextWrapper width="10%">{rating}</TextWrapper>
      <TextWrapper width="60%">{content}</TextWrapper>
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
      <TextWrapper width="15%">작성자</TextWrapper>
      <TextWrapper width="15%">작성날짜</TextWrapper>
      <TextWrapper width="10%">별점</TextWrapper>
      <TextWrapper width="60%">내용</TextWrapper>
    </ItemWrapper>
  );
}
