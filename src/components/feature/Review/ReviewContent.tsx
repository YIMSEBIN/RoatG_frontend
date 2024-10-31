import styled from "@emotion/styled";
import { List } from "@mui/material";
import Typo from "@src/components/common/Typo/Typo";

export type ReviewDataProps = {
  reviewContent: string;
  reviewDate: Date;
  reviewUser: string;
  reviewStar: number;
};

export type ReviewDataListProps = {
  reviewDataList: ReviewDataProps[];
};

export default function ReviewContent({ reviewDataList }: ReviewDataListProps) {
  return (
    <List dense sx={{ width: "100%" }}>
      {reviewDataList.map((reviewData) => {
        return <Item reviewData={reviewData} />;
      })}
    </List>
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
