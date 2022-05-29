import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount");

    return () => {
      // Unmount 시점에 실행됨
      console.log("Unmount!");
    };
  }, []);

  return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;

// import React, { useEffect, useState } from "react";

// const Lifecycle = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   //생성시 작동
//   useEffect(() => {
//     console.log("Mount!");
//   }, []);

//   //update시 작동
//   useEffect(() => {
//     console.log("Update!");
//   });

//   useEffect(() => {
//     console.log(`count is updated : ${count}`);
//     if (count > 5) {
//       alert("count가 5를 넘엇습니다. 따라서 1로 초기화합니다.");
//       setCount(1);
//     }
//   }, [count]);

//   useEffect(() => {
//     console.log(`text is update : ${text}`);
//   }, [text]);

//   return (
//     <div style={{ padding: 20 }}>
//       <div>
//         {count}
//         <button onClick={() => setCount(count + 1)}></button>
//       </div>
//       <div>
//         <input value={text} onChange={(e) => setText(e.target.value)} />
//       </div>
//     </div>
//   );
// };

// export default Lifecycle;
