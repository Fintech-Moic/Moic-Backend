import React, { useState } from "react";
import WheelPicker from "react-simple-wheel-picker";
import styled from "styled-components";

export default function CardCarousel() {

  /**
   * 함수 정의
   */
  const setKeyValue = (arr : string[]) => {
    return arr.map(item => {
      const dataSet = {
        id: item,
        value: item
      };
      return dataSet;
    });
  };

  /**
   * 함수 정의
   */
  const newOptionGroups = (optionGroups : string[]) => {
    let groups : {id? : string, value? : string} = {};
    let group : string;
    for (group in optionGroups) {
      groups[group] = setKeyValue(optionGroups[group]);
    }
    return groups;
  };
  const optionGroups = {
    category: ["카페", "베이커리", "서점", "맛집"],
  };

  const opGroups = newOptionGroups(optionGroups);

  /**
   * 현재 선택된 옵션
   */
  const handleOnChange = (target) => {
    console.log(target);
  };

  let pickerColumn = [];
  for (const group in opGroups) {
    const data = opGroups[group];

    pickerColumn.push(
      <StyledWheelPicker
        key={group}
        data={data}
        onChange={handleOnChange}
        height={100}
        width={364}
        itemHeight={36}
        selectedID={data[0].id}
        color="#999999"
        activeColor="#fff"
      />
    );
  }

  return (
    <div>
      <PickerContainer>{pickerColumn}</PickerContainer>
    </div>
  );
}

const PickerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledWheelPicker = styled(WheelPicker)`
  box-shadow: none;
  background-color: red;
`;
