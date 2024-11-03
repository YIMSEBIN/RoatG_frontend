import React, { useState, useEffect } from "react";
import Select, { SingleValue } from "react-select";

// 옵션 데이터 타입 정의
type OptionType = {
  value: string;
  label: string;
};

// 옵션 데이터
const options: OptionType[] = [
  { value: "2024-1", label: "January" },
  { value: "2024-4", label: "April" },
  { value: "2024-5", label: "May" },
  { value: "2024-6", label: "June" },
  { value: "2024-7", label: "July" },
  { value: "2024-8", label: "August" },
];

const Dropdown = () => {
  // selectedOption의 초기값을 localStorage에서 불러오고, 없으면 기본적으로 첫 번째 옵션 사용
  const [selectedOption, setSelectedOption] = useState<SingleValue<OptionType>>(() => {
    const storedValue = localStorage.getItem("monthChoice");
    return options.find((option) => option.value === storedValue) || options[0];
  });

  // 선택된 값이 변경될 때마다 localStorage에 저장
  useEffect(() => {
    if (selectedOption) {
      localStorage.setItem("monthChoice", selectedOption.value);
    }
  }, [selectedOption]);

  return (
    <div style={{ width: "150px", margin: "400px 10px 0 10px" }}>
      <Select
        options={options}
        value={selectedOption}
        onChange={(newValue) => setSelectedOption(newValue)}
        menuPlacement="top" // 드롭다운을 위로 펼치게 설정
        styles={{
          container: (base) => ({
            ...base,
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            color: "transparent", // 캐럿 색상을 투명으로 설정
            caretColor: "transparent", // 캐럿 자체를 투명으로 만들기
            lineHeight: "normal",
            fontSize: "16px",
            boxSizing: "border-box",
          }),
          control: (base) => ({
            ...base,
            padding: "5px",
            borderColor: "#ccc",
            borderRadius: "4px",
            boxShadow: "none",
          }),
          menu: (base) => ({
            ...base,
            borderRadius: "4px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            maxHeight: "132px", // 아이템 3개 높이 총합
            overflowY: "auto", // Y축 스크롤만 자동으로 허용
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? "#e0e0e0" : "white",
            color: "black",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }),
        }}
      />
    </div>
  );
};

export default Dropdown;
