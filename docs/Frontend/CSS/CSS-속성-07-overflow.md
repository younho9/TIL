# CSS 속성 07. overflow

> ❗️ 해당 글은 [패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/)에서 HTML & CSS, SASS(SCSS) Part의 [박영웅 강사님](https://github.com/ParkYoungWoong)의 강의자료를 정리한 것입니다.

### `overflow`

요소의 크기 이상으로 내용(자식요소)이 넘쳤을 때, 내용의 보여짐을 제어 - 단축 속성

#### 속성 값

| 의미                                                                | 기본값  | 값      |
| ------------------------------------------------------------------- | ------- | ------- |
| 넘친 부분을 자르지 않고 그대로 보여줌                               | visible | visible |
| 넘친 부분을 잘라내고, 보이지 않도록 함                              |         | hidden  |
| 넘친 부분을 잘라내고, 스크롤 바를 이용하여 볼 수 있도록 함          |         | scroll  |
| 넘친 부분이 있는 경우만 잘라내 스크롤 바를 이용하여 볼 수 있도록 함 |         | auto    |

#### 사용법

```
overflow: visible;overflow: hidden;overflow: scroll;overflow: auto
```

#### 예제

```
<div class="parent"><div class="child">1</div><div class="child">2</div><div class="child">3</div></div>
```

```
.parent {width: 300px;height: 250px;border: 4px solid;overflow: scroll;}.parent .child {width: 100px;height: 100px;background: tomato;border: 4px solid red;display: flex;justify-content: center;align-items: center;font-size: 40px;}
```

> ☝️ scroll 은 overflow가 발생하지 않는 경우에도 스크롤 바를 생성한다. 반면 auto 는 overflow가 발생하는 경우에만 스크롤 바를 생성한다.

### `overflow-x` , `overflow-y`

x축과 y축에 대해 각각 overflow를 설정할 수 있다.

그런데 `scroll` 과, `auto` 의 경우에 둘 중 하나만 설정하면 모든 방향에 대해 스크롤 바가 적용된다.

```
overflow-x: scroll;
```

```
overflow-y: scroll;
```

```
overflow-x: auto;
```

```
overflow-y: auto;
```

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)
