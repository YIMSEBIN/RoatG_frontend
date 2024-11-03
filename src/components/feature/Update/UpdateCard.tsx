import Card from "@src/components/common/Card/Card";
import UpdateContent from "./UpdateContent";
import Loading from "@src/components/common/Loading";
import { useGetUpdate } from "@src/apis/hooks/useGetUpdate";
import { useParams } from "react-router-dom";
import { UpdateAPIProps } from "@src/types";

export default function UpdateCard() {
  const { appId = "" } = useParams();
  const {
    data: updateData,
    isLoading: isRatingLoading,
    isFetched: isRatingFetched,
  } = useGetUpdate({ appId: Number(appId) });
  if (!isRatingLoading && isRatingFetched && Array.isArray(updateData)) {
    // 여기서 rating은 배열로 확정됨
    const updateDataList: UpdateAPIProps[] = updateData;

    return (
      <Card style={{ margin: "20px 20px", padding: "30px 30px", minWidth: "880px" }}>
        {updateDataList && <UpdateContent updateDataList={updateDataList} />}
      </Card>
    );
  } else {
    return <Loading />;
  }
}
