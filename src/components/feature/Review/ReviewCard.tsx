import Card from "@src/components/common/Card/Card";
import { Pagination, styled } from "@mui/material";
import { useState } from "react";
import Typo from "@src/components/common/Typo/Typo";
import { useGetReviews } from "@src/apis/hooks/useGetReviews";
import Loading from "@src/components/common/Loading";
import List from "@src/components/common/List/List";

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

export default function ReviewCard() {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);

  const appId = 1;
  const month = 1;
  const { data: reviewList, isLoading: isLoading } = useGetReviews({ page: currentPage, size: 2, appId, month });
  const reviewListData: ReviewDataProps[] = reviewList;

  const handlePageChange = (e: React.ChangeEvent<unknown>) => {
    const input = e.target as HTMLElement;
    const currentPageIndex = Number(input.innerText);
    setCurrentPage(currentPageIndex);
  };
  console.log(isLoading);
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      reviewListData && (
        <Card style={{ margin: "20px 20px", padding: "30px 30px", minWidth: "880px" }}>
          <List
            items={reviewListData}
            renderItem={(reviewData: ReviewDataProps) => <Item key={reviewData.reviewId} reviewData={reviewData} />}
          />
          <Pagination page={currentPage} count={LAST_PAGE} defaultPage={DEFAULT_PAGE} onChange={handlePageChange} />
        </Card>
      )
    );
  }
}

type Props = {
  reviewData: ReviewDataProps;
};

function Item({ reviewData }: Props) {
  const { userName, date, content, rating } = reviewData;
  return (
    <ItemWrapper>
      <TextWrapper>
        <Typo>작성자</Typo>
        <Typo>{userName}</Typo>
      </TextWrapper>
      <TextWrapper>
        <Typo>작성날짜</Typo>
        <Typo>{date.toString()}</Typo>
      </TextWrapper>
      <TextWrapper>
        <Typo>별점</Typo>
        <Typo>{rating}</Typo>
      </TextWrapper>
      <TextWrapper>
        <Typo>내용</Typo>
        <Typo>{content}</Typo>
      </TextWrapper>
    </ItemWrapper>
  );
}

const ItemWrapper = styled("div")(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
}));
const TextWrapper = styled("div")(() => ({}));
