import styled from "@emotion/styled";
import { Divider, List } from "@mui/material";
import Card from "@src/components/common/Card/Card";
import Typo from "@src/components/common/Typo/Typo";
import { UpdateAPIProps } from "@src/types";

export default function UpdateContent({ updateDataList }: { updateDataList: UpdateAPIProps[] }) {
  return (
    <List dense sx={{ width: "100%" }}>
      {updateDataList.map((updateData: UpdateAPIProps) => {
        return <Item updateData={updateData} />;
      })}
    </List>
  );
}

function Item({ updateData }: { updateData: UpdateAPIProps }) {
  const { date, version, content } = updateData;
  return (
    <Card style={{ margin: "20px 20px", padding: "30px 30px", minWidth: "880px" }}>
      <ItemWrapper>
        <SideWrapper>
          <TextWrapper style={{ marginBottom: "10px" }}>
            <Typo size={"12px"}>version</Typo>
            <Typo bold>{version}</Typo>
          </TextWrapper>
          <TextWrapper>
            <Typo size={"12px"}>update Date</Typo>
            <Typo bold>{date}</Typo>
          </TextWrapper>
        </SideWrapper>
        <Divider orientation="vertical" flexItem />
        <ContentWrapper>
          <Typo>{content}</Typo>
        </ContentWrapper>
      </ItemWrapper>
    </Card>
  );
}

const ItemWrapper = styled("div")(() => ({
  display: "flex",
  width: "100%",
}));
const SideWrapper = styled("div")(() => ({
  width: "150px",
}));
const TextWrapper = styled("div")(() => ({}));
const ContentWrapper = styled("div")(() => ({ padding: "10px 20px" }));
