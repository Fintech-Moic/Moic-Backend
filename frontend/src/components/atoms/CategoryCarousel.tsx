import WheelPicker from 'react-simple-wheel-picker';

type DataSet = {
  id: string;
  value: string;
};

export default function CategoryCarousel() {
  /**
   * 카테고리 Object
   */
  const setKeyValue = (arr: string[]): DataSet[] => {
    return arr.map((item) => ({
      id: item,
      value: item,
    }));
  };

  /**
   * 새로운 옵션 선택시 Object 변경
   */
  const newOptionGroups = (
    optionGroups: Record<string, string[]>
  ): Record<string, DataSet[]> => {
    const groupKeys = Object.keys(optionGroups);

    const groups: Record<string, DataSet[]> = {};
    groupKeys.forEach((group) => {
      groups[group] = setKeyValue(optionGroups[group]);
    });
    return groups;
  };

  const optionGroups = {
    category: ['쇼핑', '음식', '리빙', '운동', '교육', '여행', '문화'],
  };

  const opGroups = newOptionGroups(optionGroups);

  const pickerColumn = Object.keys(opGroups).map((group) => {
    const data = opGroups[group];

    return (
      <WheelPicker
        key={group}
        data={data}
        onChange={() => {}}
        height={300}
        width={160}
        itemHeight={80}
        selectedID={data[0].id}
        fontSize={32}
        color="#9BA5B7"
        activeColor="#545F71"
        backgroundColor="none"
        shadowColor="none"
      />
    );
  });

  return <div className="flex justify-center">{pickerColumn}</div>;
}
