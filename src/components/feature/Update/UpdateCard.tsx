import Card from "@src/components/common/Card/Card";
import UpdateContent from "./UpdateContent";

export default function UpdateCard() {
  const updateDataList = [{ updateDate: "2024.08.29", version: "1.00", content: "버그를지웠어염" }];

  return (
    <Card style={{ margin: "20px 20px", padding: "30px 30px", minWidth: "880px" }}>
      {updateDataList && <UpdateContent updateDataList={updateDataList} />}
    </Card>
  );
}
