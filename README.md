# mini-proejct-react-jpa-

처음에는 단순 게시판을 만들 것입니다.

그리고 이 게시판에 기능을 붙이는 형식으로 프로젝트를 구현할 것입니다.

firebase를 이용해서 간단하게 배포 예정. 사이트 주소는 추후 정리할 것임.

테이블 설계는 cloud erd를 이용해서 계속 업데이트 예정

주소 : https://www.erdcloud.com/d/upPqDABfZ4CeBHHkN

React 학습 내용 정리 : https://tech-monster.tistory.com/category/programming%20language/react

//전체 예상 계획

실제 react 로 구현한 front부분과 spring 으로 만든 backend는 react-spring이라는 폴더 안에 정리할 예정

1. react 적용
 => 디자인 선정, 배치 선정, 
 component 구조 나누기 
 적용사항 정리
 (6월 중순 예상)
2. entity 구조 생성, jpa 연동
 테이블 설계,
 vo설계
 기능 생각 및 구현하기
 (7월 예상)
  => api 연동,

  논점
  jpa 와 mybatis둘로 연결해서 분리하기
3. spring security 문서 파악 및 적용

4. 실시간 이벤트 기반 스트리밍(아파치 카프카 적용)
을 통한 실시간 상담 어플리케이션 구현

5. xml => json, json => xml 변환을 통한 통신 구현
=> 공공 데이터 이용

6. 생각나는 대로 적을것....
 
 --------------------------------------- 
06/04

 npx create-react-app (bolider plate)로 설치하기

=> 현재 한입 크기로 잘라먹는 react공부중....  6/10일까지 마무리 예상
06/04 에 수강 완료

일정
=> 디자인 정리 및 component배치 하기(게시판 url 설정 및 배치하기. )
(06/04 ~ 현재 진행형 => 불발! )

=> react+spring 연동 하기
(예정)

------------------

06/11 기준

현재 React의 Hook이나 기능에 대해서 다시 공부하고 있음

Redux-saga를 통해 적용 할 예정이기에 이를 위해서 선행 지식이 제대로 자리잡지 않았음.

고로 다시 학습하고 있는 중...

React로 프로젝트를 만드는데 무엇보다 중요한 것은 전체적인 component 배치를 결정하는 것이라고 깨달았다.

어느 배치에 잘 해놓느냐에 따라 re-rendering 관리라던지, 최적화 문제와 직결되기 때문이다. 

현재 다시 react 프로젝트의 경우 삭제를 했다. 그 이유는 배치라던지, 전체적인 윤곽을 어떻게 결정해야할지를 갈피를 못 잡았기 때문이다.
