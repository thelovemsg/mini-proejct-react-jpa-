import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
import MyButton from "./MyButton";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const fileterOptionList = [
  { value: "all", name: "전부 다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "안좋은 감정만" },
];

//React.memo로 component를 감싸면 강화된 component를 돌려주는 고차 component가 된다.
//전달받는 prop이 값이 바뀌지 않으면 renderting이 일어나지 않게 memoization해주는 성능 최적화를 도와준다.
const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
});

const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState("latest");
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  //component가 rerendering될 때 함수도 새로 생겨남
  // 그래서 react.memo에서 비교를 했을 때 다른 prop이랑 비교를 하게 되서 다시 rerendering하는거임
  const handleSetSortType = (sortType) => {
    setSortType(sortType);
  };

  const handleSetFilter = (filter) => {
    setFilter(filter);
  };

  const filterCallBack = (item) => {
    if (filter === "good") {
      return parseInt(item.emotion) <= 3;
    } else {
      return parseInt(item.emotion) > 3;
    }
  };

  const getProcessedDiaryList = () => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(diaryList));

    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));

    const sortedList = filteredList.sort(compare);
    console.log("sortedList : ", sortedList);
    return sortedList;
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={fileterOptionList}
          />
        </div>
        <div className="right_col">
          <MyButton
            type={"positive"}
            text={"새 일기 쓰기"}
            onClick={() => navigate("/new")}
          />
        </div>
      </div>
      {getProcessedDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
