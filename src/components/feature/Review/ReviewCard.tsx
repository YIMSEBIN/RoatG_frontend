import Card from "@src/components/common/Card/Card";
import ReviewContent from "./ReviewContent";

export default function ReviewCard() {
  const reviewDataList = [
    {
      reviewContent: "이건 댓글입니다.",
      reviewDate: new Date("2022-3-24"),
      reviewUser: "홍길동",
      reviewStar: 3,
    },
  ];

  return (
    <Card style={{ margin: "20px 20px", padding: "30px 30px", minWidth: "880px" }}>
      {reviewDataList && <ReviewContent reviewDataList={reviewDataList} />}
    </Card>
  );
}
