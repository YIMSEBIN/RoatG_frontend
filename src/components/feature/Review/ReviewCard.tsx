import Card from "@src/components/common/Card/Card";
// import { useGetReviews } from "@src/apis/hooks/useGetReviews";
import { Pagination, styled } from "@mui/material";
import { useState } from "react";
import Typo from "@src/components/common/Typo/Typo";
import { useGetReviews } from "@src/apis/hooks/useGetReviews";

export type ReviewDataProps = {
  reviewContent: string;
  reviewDate: Date;
  reviewUser: string;
  reviewStar: number;
};

const LAST_PAGE = 5;
const DEFAULT_PAGE = 1;
export default function ReviewCard() {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);

  const appId = 1;
  const month = 1;
  const { data: reviewList } = useGetReviews({ page: currentPage, size: 2, appId, month });
  const reviewListData: ReviewDataProps[] = reviewList;

  const handlePageChange = (e: React.ChangeEvent<unknown>) => {
    const input = e.target as HTMLElement;
    const currentPageIndex = Number(input.innerText);
    setCurrentPage(currentPageIndex);
  };

  return (
    <Card style={{ margin: "20px 20px", padding: "30px 30px", minWidth: "880px" }}>
      {reviewListData &&
        reviewListData.map((reviewData: ReviewDataProps) => (
          <Item key={reviewData.reviewUser} reviewData={reviewData} />
        ))}
      {reviewListData && (
        <Pagination page={currentPage} count={LAST_PAGE} defaultPage={DEFAULT_PAGE} onChange={handlePageChange} />
      )}
    </Card>
  );
}

type Props = {
  reviewData: ReviewDataProps;
};

function Item({ reviewData }: Props) {
  const { reviewContent, reviewDate, reviewUser, reviewStar } = reviewData;
  return (
    <ItemWrapper>
      <TextWrapper>
        <Typo>작성자</Typo>
        <Typo>{reviewUser}</Typo>
      </TextWrapper>
      <TextWrapper>
        <Typo>작성날짜</Typo>
        <Typo>{reviewDate.toString()}</Typo>
      </TextWrapper>
      <TextWrapper>
        <Typo>별점</Typo>
        <Typo>{reviewStar}</Typo>
      </TextWrapper>
      <TextWrapper>
        <Typo>내용</Typo>
        <Typo>{reviewContent}</Typo>
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
