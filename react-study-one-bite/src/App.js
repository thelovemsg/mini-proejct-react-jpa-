import React from 'react';
import './App.css';
import Container from './Container';
import Counter from './Counter';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader'
function App() {

  const counterProps ={
    a:1,
    b:3,
    c:5,
    initialValue : 10
  }

  return (
    <Container>
      <div>
          <MyHeader />
          <Counter {...counterProps}/>
          <MyFooter />
      </div>
    </Container>
  );
}

export default App;
