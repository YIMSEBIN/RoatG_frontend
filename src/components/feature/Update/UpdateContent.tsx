import styled from "@emotion/styled";
import { Divider, List } from "@mui/material";
import Typo from "@src/components/common/Typo/Typo";

export type UpdateDataProps = {
  updateDate: string;
  version: string;
  content: string;
};

export type UpdateDataListProps = {
  updateDataList: UpdateDataProps[];
};

export default function UpdateContent({ updateDataList }: UpdateDataListProps) {
  return (
    <List dense sx={{ width: "100%" }}>
      {updateDataList.map((updateData) => {
        return <Item updateData={updateData} />;
      })}
    </List>
  );
}

type Props = {
  updateData: UpdateDataProps;
};

function Item({ updateData }: Props) {
  const { updateDate, version, content } = updateData;
  return (
    <ItemWrapper>
      <SideWrapper>
        <TextWrapper>
          <Typo>version</Typo>
          <Typo>{version}</Typo>
        </TextWrapper>
        <TextWrapper>
          <Typo>update Date</Typo>
          <Typo>{updateDate}</Typo>
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
