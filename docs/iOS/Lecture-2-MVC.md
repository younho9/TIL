# Lecture 2. MVC's

## MVC

application의 모든 객체는 3가지 캠프로 나눌 수 있음

캠프 사이의 커뮤니케이션을 관리하는 것이 MVC

### Model

- What your application is (but not how it is displayed)

### Controller

- How your **Model** is presented to the user (UI logic)

### View

- Your Controller's minions

Controllers can always talk directly to their Model

Controllers can also talk directly to their View

The Model and view should never speak to each other

![MVC](https://cphinf.pstatic.net/mooc/20180511_278/1526016689274NyXIr_PNG/mvc.png)

구조체와 클래스의 차이점

- 구조체는 상속성이 없음
- 구조체는 Value type, 클래스는 Reference type
