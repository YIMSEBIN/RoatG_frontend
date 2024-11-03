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
    const updateDataList: UpdateAPIProps[] = updateData;

    return updateDataList && <UpdateContent updateDataList={updateDataList} />;
  } else {
    return <Loading />;
  }
}
