import React, {useState, useEffect} from 'react'

const CounterA = ({count}) => {

    useEffect(() => {
        console.log(`CounterA update - count : ${count}`)
    })
    return <div>{count}</div>
}

const CounterB = ({obj}) => {
    useEffect(() => {
        console.log(`CounterB update - count : ${obj.count}`)
    })
    return <div>{obj.count}</div>
}

const areEqual = (prevProps , nextProps) => {
    // 이전 프롭스와 현재 프롭스가 같다 => 리렌더링 x
    return prevProps.obj.count === nextProps.obj.count
}

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {

    const [count, setCount] = useState(1);
    const [obj, setObj] = useState({
        count: 1
    })

    return (
        <div style={{ padding: 50}}>
            <div>
                <h2>Counter A</h2>
                <CounterA count={count} />
                <button onClick={() => setCount(count)}> A Button</button>
            </div>
            <div>
                <h2>Counter B</h2>
                <MemoizedCounterB obj={obj} />
                <button onClick={() => setObj({
                    count: obj.count
                })}>B Button</button>
            </div>
        </div>
    )
}

// const TextView = React.memo(({text}) => {
//     useEffect(() => {
//         console.log(`update:: text : ${text}` )
//     })
//     return <div>{text}</div>
// })

// const CountView = React.memo(({count}) => {
//     useEffect(() => {
//         console.log(`update:: count : ${count}` )
//     })
//     return <div>{count}</div>
// })

// const OptimizeTest = () => {

//     const [count, setCount] = useState(1);
//     const [text,setText] = useState('');

//     return <div style={{padding: 50}}>
//         <div>
//             <h2>count</h2>
//             <CountView count={count}/>
//             <button onClick={() =>setCount(count+1)}>+</button>
//         </div>
//         <div>
//             <h2>text</h2>
//             <TextView text={text}/>
//             <input value={text} onChange={(e)=>setText(e.target.value)} />
//         </div>
//     </div>
// }

// export default OptimizeTest;