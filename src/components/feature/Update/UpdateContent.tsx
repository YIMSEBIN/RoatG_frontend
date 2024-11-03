import styled from "@emotion/styled";
import { Divider, List } from "@mui/material";
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
    <ItemWrapper>
      <SideWrapper>
        <TextWrapper>
          <Typo>version</Typo>
          <Typo>{version}</Typo>
        </TextWrapper>
        <TextWrapper>
          <Typo>update Date</Typo>
          <Typo>{date}</Typo>
        </TextWrapper>
      </SideWrapper>
      <Divider orientation="vertical" variant="middle" flexItem />
      <ContentWrapper>{content}</ContentWrapper>
    </ItemWrapper>
  );
}

const ItemWrapper = styled("div")(() => ({
  display: "flex",
  width: "100%",
}));
const SideWrapper = styled("div")(() => ({
  width: "200px",
}));
const TextWrapper = styled("div")(() => ({}));
const ContentWrapper = styled("div")(() => ({}));
