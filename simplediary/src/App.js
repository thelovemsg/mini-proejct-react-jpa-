import "./App.css";
import DairyEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useEffect, useMemo, useRef, useState } from "react";
// import OptimizeTest from "./OptimizeTest";
// import Lifecycle from "./Lifecycle";


function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const getData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json());

    const initData = res.slice(0,20).map((it) => {
      return {
        author : it.email,
        content : it.body,
        emotion : Math.floor(Math.random() * 5) + 1,
        create_date : new Date().getTime(),
        id: dataId.current++ 
      }
    }) 

    setData(initData);
  }

  useEffect(() => {
    getData();
  }, [])

  const onCreate = (author, content, emotion) => {
    const create_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      create_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  //callback을 받아서 연산 최적화. 이제 이건 함수가 아니므니다
  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / badCount) * 100
    return {goodCount, badCount, goodRatio} 
  }, [data.length]) // 오직 data.length가 변할 때 만 getDiaryAnalysis가 작동함

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis

  return (
    <div className="App">
      {/* <OptimizeTest />/ */}
      <DairyEditor onCreate={onCreate} /> 
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio} </div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
