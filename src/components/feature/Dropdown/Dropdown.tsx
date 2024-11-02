import React, { useState, useEffect } from "react";

const Dropdown = () => {
  // useState를 사용하여 현재 선택된 값을 상태로 관리합니다.
  const [selectedValue, setSelectedValue] = useState(() => {
    // localStorage에서 저장된 값을 불러옵니다. 값이 없으면 기본적으로 'a'를 선택합니다.
    return localStorage.getItem("myChoice") || "a";
  });

  // useEffect를 사용하여 selectedValue가 변경될 때마다 localStorage에 값을 저장합니다.
  useEffect(() => {
    localStorage.setItem("myChoice", selectedValue);
  }, [selectedValue]); // selectedValue가 변경될 때만 실행됩니다.

  return (
    <div>
      <select
        value={selectedValue} // select 태그의 value를 selectedValue 상태로 설정합니다.
        onChange={(e) => setSelectedValue(e.target.value)} // 선택값이 바뀌면 상태를 업데이트합니다.
      >
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </select>
    </div>
  );
};

export default Dropdown;
