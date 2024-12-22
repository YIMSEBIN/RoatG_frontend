import { http, HttpResponse } from "msw";
import { UpdateAPIProps } from "@src/types";
import { getUpdatePath } from "../hooks/useGetUpdate";

export const updategMockHandler = [http.get(getUpdatePath({ appId: 1 }), () => HttpResponse.json(UPDATE_DATA))];

const UPDATE_DATA: UpdateAPIProps[] = [
  {
    version: "1.00",
    date: "2024.08.29",
    content:
      "1.신규 길드 대항 이벤트 「길드 대항전」을 추가하였습니다. 길드 레벨 2레벨 이상 길드 멤버 10인 이상인 길드는 참가 자격을 획득할 수 있으니 길드원과 함께 협력하여 푸짐한 보상을 받아 가세요! 더 많은 이벤트 정보는 게임 내에서 확인하실 수 있습니다.  2.「음모의 파도」 시즌 세력 명성-물귀신파 세력 퀘스트를 추가하였습니다. 메인 퀘스트 [결전 불사호] 및 서브 퀘스트 [새출발] 완료 후 “기도서” 화면에서 명성 퀘스트를 수락하고 세력 명성 레벨",
  },
  {
    version: "1.01",
    date: "2024.09.02",
    content: "게임 최적화 및 버그 수정",
  },
];
