import React, { useState } from "react";
import WheelPicker from "react-simple-wheel-picker";

export default function CardCarousel() {

  /**
   * 카테고리 Object
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
   * 새로운 옵션 선택시 Object 변경
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
    category: ["쇼핑", "음식", "리빙", "스포츠", "교육", "여행", "문화"],
  };

  const opGroups = newOptionGroups(optionGroups);

  let pickerColumn = [];
  for (const group in opGroups) {
    const data = opGroups[group];

    pickerColumn.push(
      <WheelPicker
        key={group}
        data={data}
        onChange={()=>{}}
        height={240}
        width={180}
        itemHeight={48}
        selectedID={data[0].id}
        fontSize={24}
        color="#9BA5B7"
        activeColor="#545F71"
        backgroundColor="none"
        shadowColor="none"
      />
    );
  }

  return (
    <div>
      <div className="flex content-around">{pickerColumn}</div>
    </div>
  );
}
