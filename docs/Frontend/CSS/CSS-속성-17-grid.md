# CSS 속성 17. grid

> ❗️ 해당 글은 [패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/)에서 HTML & CSS, SASS(SCSS) Part의 [박영웅 강사님](https://github.com/ParkYoungWoong)의 강의자료를 정리한 것입니다.

CSS `grid` (그리드)는 2차원(행과 열)의 레이아웃 시스템을 제공한다.

`flexible box` 는 비교적 단순한 1차원 레이아웃을 위하여 사용되고, 좀 더 복잡한 레이아웃을 위해서는 `grid` 를 사용할 수 있다.

> 💡 CSS grid 는 예전부터 핵(Hack)으로 불린 다양한 레이아웃 대체 방식들을 해결하기 위해 만들어진 특별한 CSS 모듈이다.

### CSS Grid

> ☝️ grid 의 효율적인 학습을 위해서는 파이어폭스 브라우저가 좋다.

`grid` 도 `flex` 와 마찬가지로 `container` 와 `item` 이라는 두 가지 개념으로 나뉜다. `container` 는 `items` 를 감싸는 부모 요소이고 그 안에 각 `item` 을 배치할 수 있다.

### `grid container`

#### 속성

| 의미                                            | 속성                        |
| ----------------------------------------------- | --------------------------- |
| grid container 를 정의                          | display                     |
| 명시적 행(Track)의 크기를 정의                  | grid-template-rows          |
| 명시적 열(Track)의 크기를 정의                  | grid-template-columns       |
| 영역(Area) 이름을 참조해 템플릿 생성            | grid-template-areas         |
| grid-template-xxx 의 단축 속성                  | grid-template               |
| 행과 행 사이의 간격(Line)을 정의                | row-gap(grid-row-gap)       |
| 열과 열 사이의 간격(Line)을 정의                | column-gap(grid-column-gap) |
| xxx-gap 의 단축 속성                            | gap(grid-gap)               |
| 암시적인 행(Track)의 크기를 정의                | grid-auto-rows              |
| 암시적인 열(Track)의 크기를 정의                | grid-auto-columns           |
| 자동 배치 알고리즘 방식을 정의                  | grid-auto-flow              |
| grid-template-xxx 와 grid-auto-xxx 의 단축 속성 | grid                        |
| 그리드 콘텐츠(Grid Contents)를 수직(열 축) 정렬 | align-content               |
| 그리드 콘텐츠(Grid Contents)를 수평(행 축) 정렬 | justify-content             |
| align-content 와 justify-content 의 단축 속성   | place-content               |
| 그리드 아이템(item)들을 수직(열 축) 정렬        | align-items                 |
| 그리드 아이템(item)들을 수평(행 축) 정렬        | justify-items               |
| align-items 와 justify-items 의 단축 속성       | place-items                 |

#### `display`

`display` 속성으로 `grid container` 를 정의한다.

정의된 컨테이너의 자식 요소들은 자동으로 `grid item` 로 정의된다.

#### 속성 값

| 의미                                 | 값          |
| ------------------------------------ | ----------- |
| block 특성의 grid container 를 정의  | grid        |
| inline 특성의 grid container 를 정의 | inline-grid |

> ☝️ flex , inline-flex 와 마찬가지로 gird container 의 쌓이는 방식을 정의하며, 내부에 쌓이는 방식은 둘이 완전히 같다.

#### `grid-template-rows` , `grid-template-columns`

명시적 행, 열(Track)의 크기를 정의

동시에 라인(Line)의 이름도 정의할 수 있고, `fr` (fraction, 공간 비율) 단위를 사용할 수 있다.

#### 사용법

```
grid-template-rows: 1행크기 2행크기 ...;grid-template-rows: [선이름] 1행크기 [선이름] 2행크기 [선이름] ...;grid-template-columns: 1열크기 2열크기 ...;grid-template-columns: [선이름] 1열크기 [선이름] 2열크기 [선이름] ...;
```

```
/* 각 행과 열의 크기를 정의합니다. */.container {grid-template-rows: 100px 200px;grid-template-columns: 100px 200px;}/* 동시에 각 라인의 이름도 정의할 수 있습니다. */.container {grid-template-rows: [first] 100px [second] 200px [third];grid-template-columns: [first] 100px [second] 200px [third];}/* 라인에 중복된 이름을 지정할 수 있습니다. */.container {grid-template-rows: [row1-start] 100px [row1-end row2-start] 200px [row2-end];grid-template-columns: [col1-start] 100px [col1-end col2-start] 200px [col2-end];}
```

> 그리드 라인에 이름 짓기 - Layout using named grid lines

#### 예제

```
<div class="container"><div class="item">1</div><div class="item">2</div><div class="item">3</div><div class="item">4</div><div class="item">5</div><div class="item">6</div></div>
```

```
.container {display: grid;grid-template-rows: 100px 100px;grid-template-columns: repeat(3, 1fr);border: 4px solid lightgray;}.item {border: 2px dashed red;}
```

> ☝️ px 단위로 값을 입력할 수도 있지만 fr 단위를 입력하면 container 의 너비가 가변할 때 행, 열의 크기가 가변하게 된다.✌️ repeat() 함수는 2번째 인수를 1번째 인수만큼 반복한다.

#### `grid-template-areas`

지정된 그리드 영역 이름( `grid-area` )을 참조해 그리드 템플릿을 생성

> ☝️ grid-area 는 grid container 가 아닌 grid item 에 적용하는 속성이다.

#### 예제

```
<div class="container"><div class="item">Header</div><div class="item">Main</div><div class="item">Aside</div><div class="item">Footer</div></div>
```

```
.container {width: 600px;display: grid;grid-template-rows: repeat(3, 100px);grid-template-columns: repeat(3, 1fr);grid-template-areas:"header header header""main main aside""footer footer footer";}.item {border: 10px solid red;}.item:nth-child(1) {grid-area: header;}.item:nth-child(2) {grid-area: main;}.item:nth-child(3) {grid-area: aside;}.item:nth-child(4) {grid-area: footer;}
```

![CSS-속성-17-grid-image-0](https://heropy.blog/images/screenshot/css-grid/grid-template-areas-1.jpg)

grid-template-areas-1

> ☝️ . (마침표)를 사용하거나 명시적으로 none 을 입력해 빈 영역을 정의할 수 있다.

#### `grid-template`

`grid-template-rows` , `grid-template-columns` , `grid-template-areas` 의 단축 속성

#### 사용법

```
.container {grid-template: <grid-template-rows> / <grid-template-columns>;grid-template: <grid-template-areas>;}
```

또는

```
.container {grid-template:[1행시작선이름] "AREAS" 행너비 [1행끝선이름][2행시작선이름] "AREAS" 행너비 [2행끝선이름]/ <grid-template-columns>;}
```

#### 예제

```
<div class="container"><header>HEADER</header><main>MAIN</main><aside>ASIDE</aside><footer>FOOTER</footer></div>
```

```
.container {display: grid;grid-template:"header header header" 80px"main main aside" 350px"footer footer footer" 130px/ 2fr 100px 1fr;}.container > * {border: 10px solid red;}header { grid-area: header; }main   { grid-area: main; }aside  { grid-area: aside; }footer { grid-area: footer; }
```

#### `row-gap(grid-row-gap)` , `column-gap(grid-column-gap)` , `gap(grid-gap)`

각 행과 행 사이, 열과 열 사이의 간격(Gutter)을 지정

> 더 명확하게 그리드 선(Grid Line)의 크기를 지정

`gap` 은 `row-gap` 과 `column-gap` 의 단축 속성이다.

#### 사용법

```
.container {row-gap: 크기;column-gap: 크기;gap: <grid-row-gap> <grid-column-gap>;}
```

```
.container {display: grid;grid-template-rows: repeat(2, 150px);grid-template-columns: repeat(3, 1fr);gap: 20px 10px;}/* 하나의 값으로 통일할 수 있습니다. */.container {gap: 10px;  /* row-gap: 10px; + column-gap: 10px; */}/* 하나의 값만 적용하고자 한다면 다음과 같이 사용할 수 있습니다. */.container {gap: 10px 0; /* row-gap */gap: 0 10px; /* column-gap */}
```

> ☝️ 접두사 grid- 는 더 이상 사용되지 않지만, 일부 버전의 브라우저 지원을 위해 접두사의 사용을 고려할 수 있다.

#### `grid-auto-rows` , `grid-auto-columns`

암시적 행, 열(Track)의 크기를 정의

`item` 이 `grid-template-rows` 나 `grid-template-columns` 로 정의한 명시적 행, 열 외부에 배치되는 경우 암시적 행, 열의 크기가 적용된다.

#### 예제

```
<div class="container"><div class="item">1</div><div class="item">2</div><div class="item">3</div><div class="item">4</div><div class="item">5</div><div class="item">6</div></div>
```

```
.container {width: 600px;display: grid;grid-template-rows: repeat(2, 100px);  /* 명시적 행 */grid-template-columns: repeat(3, 1fr);  /* 명시적 열 */grid-auto-rows: 100px;  /* 암시적 행 */grid-auto-columns: 100px;  /* 암시적 열 */}.item {border: 10px solid red;}.item:nth-child(1) {grid-column: 1 / 3;}.item:nth-child(2) {grid-column: 3 / 5;}.item:nth-child(3) {grid-column: span 2;}.item:nth-child(4) {grid-row: 5 / 7;grid-column: 6 / 7;}
```

> ☝️ 암시적 크기가 적용된 행과 열은 양수 라인 번호만 사용할 수 있고, 음수는 사용할 수 없다.

#### `grid-auto-flow`

배치하지 않은 `item` 을 어떤 방식의 ’자동 배치 알고리즘’으로 처리할지 정의

> 배치한 item 은 grid-area (이하 개별 속성 포함)를 사용한 item

#### 속성값

| 의미                                       | 기본값 | 값               |
| ------------------------------------------ | ------ | ---------------- |
| 각 행 축을 따라 차례로 배치                | row    | row              |
| 각 열 축을 따라 차례로 배치                |        | column           |
| 각 행 축을 따라 차례로 배치, 빈 영역 메움! |        | row dense(dense) |
| 각 열 축을 따라 차례로 배치, 빈 영역 메움! |        | column dense     |

![CSS-속성-17-grid-image-1](https://heropy.blog/images/screenshot/css-grid/grid-auto-flow-1.jpg)

grid-auto-flow-1

![CSS-속성-17-grid-image-2](https://heropy.blog/images/screenshot/css-grid/grid-auto-flow-2.jpg)

grid-auto-flow-2

#### 예제

```
<div class="container"><div class="item">1</div><div class="item">2</div><div class="item">3</div><div class="item">4</div></div>
```

```
.container {width: 600px;display: grid;grid-template-rows: repeat(3, 100px);grid-template-columns: repeat(3, 1fr);grid-auto-flow: column;}.item {border: 10px solid red;}.item:nth-child(1) {grid-column: span 2;}.item:nth-child(2) {grid-column: -1 / -3;}
```

#### `grid`

`grid-template-xxx` 와 `grid-auto-xxx` 의 단축 속성

#### 사용법

```
.container {grid: <grid-template>;grid: <grid-template-rows> / <grid-auto-flow> <grid-auto-columns>;grid: <grid-auto-flow> <grid-auto-rows> / <grid-template-columns>;}
```

1. `grid-template-rows` & `grid-template-columns` 설정

1. `grid-template-rows` & `grid-auto-flow: column;` & `grid-auto-columns` 설정

1. `grid-auto-flow: row;` & `grid-auto-rows` & `grid-template-columns` 설정

1. `grid-template` 설정

> ☝️ grid-auto-flow 를 작성할 때는 auto-flow 키워드를 사용하는데, / 로 구분해 작성하는 위치가 곧 row , column 값을 의미한다. dense 값은 auto-flow 뒤에 붙여주면 된다.

#### `align-content`

그리드 콘텐츠(contents)를 수직(열 축) 정렬한다.

그리드 콘텐츠의 세로 너비가 그리드 `container` 보다 작아야 한다.

#### 속성 값

| 의미                                                                  | 기본값 | 값            |
| --------------------------------------------------------------------- | ------ | ------------- |
| stretch 와 같다                                                       | normal | normal        |
| 시작점(위쪽) 정렬                                                     |        | start         |
| 수직 가운데 정렬                                                      |        | center        |
| 끝점(아래쪽) 정렬                                                     |        | end           |
| 각 행 위아래에 여백을 고르게 정렬                                     |        | space-around  |
| 첫 행은 시작점에, 끝 행은 끝점에 정렬되고 나머지 여백으로 고르게 정렬 |        | space-between |
| 모든 여백을 고르게 정렬                                               |        | space-evenly  |
| 열 축을 채우기 위해 그리드 콘텐츠를 늘림                              |        | stretch       |

![CSS-속성-17-grid-image-3](https://heropy.blog/images/screenshot/css-grid/align-content-1.jpg)

align-content

#### `justify-content`

그리드 콘텐츠(contents)를 수평(행 축) 정렬한다.

그리드 콘텐츠의 가로 너비가 그리드 `container` 보다 작아야 한다.

#### 속성 값

| 의미                                                                  | 기본값 | 값            |
| --------------------------------------------------------------------- | ------ | ------------- |
| stretch와 같다                                                        | normal | normal        |
| 시작점(왼쪽) 정렬                                                     |        | start         |
| 수평 가운데 정렬                                                      |        | center        |
| 끝점(오른쪽) 정렬                                                     |        | end           |
| 각 열 좌우에 여백을 고르게 정렬                                       |        | space-around  |
| 첫 열은 시작점에, 끝 열은 끝점에 정렬되고 나머지 여백으로 고르게 정렬 |        | space-between |
| 모든 여백을 고르게 정렬                                               |        | space-evenly  |
| 행 축을 채우기 위해 그리드 콘텐츠를 늘림                              |        | stretch       |

![CSS-속성-17-grid-image-4](https://heropy.blog/images/screenshot/css-grid/justify-content-1.jpg)

justify-content

#### `align-items`

그리드 `Item` 들을 수직(열 축) 정렬한다. 그리드 `Item` 의 세로 너비가 자신이 속한 그리드 행(Track)의 크기보다 작아야 한다.

| 의미                                     | 기본값 | 값      |
| ---------------------------------------- | ------ | ------- |
| stretch와 같다                           | normal | normal  |
| 시작점(위쪽) 정렬                        |        | start   |
| 수직 가운데 정렬                         |        | center  |
| 끝점(아래쪽) 정렬                        |        | end     |
| 열 축을 채우기 위해 그리드 아이템을 늘림 |        | stretch |

![CSS-속성-17-grid-image-5](https://heropy.blog/images/screenshot/css-grid/align-items-1.jpg)

align-items

#### `justify-items`

그리드 `Item` 들을 수평(행 축) 정렬한다. 그리드 `Item` 의 가로 너비가 자신이 속한 그리드 열(Track)의 크기보다 작아야 한다.

| 의미                                     | 기본값 | 값      |
| ---------------------------------------- | ------ | ------- |
| stretch와 같다.                          | normal | normal  |
| 시작점(왼쪽) 정렬                        |        | start   |
| 수평 가운데 정렬                         |        | center  |
| 끝점(오른쪽) 정렬                        |        | end     |
| 행 축을 채우기 위해 그리드 아이템을 늘림 |        | stretch |

![CSS-속성-17-grid-image-6](https://heropy.blog/images/screenshot/css-grid/justify-items-1.jpg)

justify-items

### `grid Item`

#### 속성

| 의미                                                             | 속성              |
| ---------------------------------------------------------------- | ----------------- |
| 그리드 아이템(Item)의 행 시작 위치 지정                          | grid-row-start    |
| 그리드 아이템의 행 끝 위치 지정                                  | grid-row-end      |
| grid-row-xxx의 단축 속성(행 시작/끝 위치)                        | grid-row          |
| 그리드 아이템의 열 시작 위치 지정                                | grid-column-start |
| 그리드 아이템의 열 끝 위치 지정                                  | grid-column-end   |
| grid-column-xxx의 단축 속성(열 시작/끝 위치)                     | grid-column       |
| 영역(Area) 이름을 설정하거나, grid-row와 grid-column의 단축 속성 | grid-area         |
| 단일 그리드 아이템을 수직(열 축) 정렬                            | align-self        |
| 단일 그리드 아이템을 수평(행 축) 정렬                            | justify-self      |
| align-self와 justify-self의 단축 속성                            | place-self        |
| 그리드 아이템의 배치 순서를 지정                                 | order             |
| 그리드 아이템의 쌓이는 순서를 지정                               | z-index           |

#### `grid-row-start` , `grid-column-start` , `grid-row-end` , `grid-column-end`

`item` 을 배치하기 위해 선(Line)의 ’시작 위치’와 ’끝 위치’를 지정한다.

’숫자’를 지정하거나 ’선 이름’을 지정하거나, `span` 키워드를 사용한다.

#### 사용법

```
.item {grid-row-start: 1;grid-row-end: 3;grid-column-start: 2;grid-column-end: 4;}
```

> ☝️ span 키워드와 ’숫자’를 조합하면 ’숫자’만큼 라인을 확장하는 개념인데, 만약 ’끝 위치’를 지정해놓고, ’시작 위치’에 span + ’숫자’를 사용하면 ’끝 위치’까지 가기 전 span 숫자만큼 확장한다.

#### `grid-row` , `grid-column`

`item` 을 원하는 위치에 놓기 위해 사용하는 속성

각각 `grid-row-start`, `grid-row-end` ,`grid-column-start`, `grid-column-end` 의 단축 속성이다.

각 속성을 `/` 로 구분한다.

`span` 키워드를 사용해 ’숫자’를 지정하거나 ’선 이름’을 지정해 사용할 수 있다.

#### 사용법

```
.item {grid-row: <grid-row-start> / <grid-row-end>;grid-column: <grid-column-start> / <grid-column-end>;}
```

#### `grid-area`

`grid-row-start` , `grid-column-start` , `grid-row-end` , `grid-column-end` 의 단축 속성으로 사용할 수도 있고, `grid-template-areas` 가 참조할 영역(Area) 이름을 설정할 수도 있다.

영역 이름을 설정할 경우 `grid-row` , `grid-column` 의 개념은 무시된다.

#### 사용법

```
.item {grid-area: <grid-row-start> / <grid-column-start> / <grid-row-end> / <grid-column-end>;grid-area: 영역이름;}
```

> ☝️ 단축 속성의 순서에 유의한다.

#### `align-self`

단일 그리드 `Item` 을 수직(열 축) 정렬. 그리드 `Item` 의 세로 너비가 자신이 속한 그리드 행(Track)의 크기보다 작아야 한다.

| 기본값 | 의미                                     | 값      |
| ------ | ---------------------------------------- | ------- |
| normal | stretch와 같다                           | normal  |
|        | 시작점(위쪽) 정렬                        | start   |
|        | 수직 가운데 정렬                         | center  |
|        | 끝점(아래쪽) 정렬                        | end     |
|        | 열 축을 채우기 위해 그리드 아이템을 늘림 | stretch |

![CSS-속성-17-grid-image-7](https://heropy.blog/images/screenshot/css-grid/align-self-1.jpg)

align-self

#### `justify-self`

단일 그리드 `Item` 을 수평(행 축) 정렬한다. 그리드 `Item` 의 가로 너비가 자신이 속한 그리드 열(Track)의 크기보다 작아야 한다.

| 기본값 | 의미                                     | 값      |
| ------ | ---------------------------------------- | ------- |
| normal | stretch와 같다                           | normal  |
|        | 시작점(왼쪽) 정렬                        | start   |
|        | 수평 가운데 정렬                         | center  |
|        | 끝점(오른쪽) 정렬                        | end     |
|        | 행 축을 채우기 위해 그리드 아이템을 늘림 | stretch |

![CSS-속성-17-grid-image-8](https://heropy.blog/images/screenshot/css-grid/justify-self-1.jpg)

justify-self

#### `order`

그리드 아이템이 자동 배치되는 순서를 변경 숫자가 작을수록 앞서 배치됨

```
.container {display: grid;grid-template-rows: repeat(2, 1fr);grid-template-columns: repeat(3, 1fr);}.item:nth-child(1) { order: 1; }.item:nth-child(3) { order: 5; }.item:nth-child(5) { order: -1; }
```

> ☝️ 음수도 사용 가능

![CSS-속성-17-grid-image-9](https://heropy.blog/images/screenshot/css-grid/order-1.jpg)

order

#### `z-index`

`item` 이 쌓이는 순서를 변경

![CSS-속성-17-grid-image-10](https://heropy.blog/images/screenshot/css-grid/z-index-1.jpg)

z-index

> ☝️ position 에서 배운 개념과 동일

### Grid function

#### `repeat`

`repeat()` 함수는 행/열(Track)의 크기 정의를 반복한다.

’반복되는 횟수’와 ’행/열의 크기 정의’를 인수로 사용

`grid-template-rows` 와 `grid-template-columns` 에서 사용

```
/* 9컬럼 그리드 */
.container {
  grid-template-columns: 100px 100px 100px 100px 100px 100px 100px 100px 100px;
}
.container {
  grid-template-columns: repeat(9, 100px);
}
```

```
.container {grid-template-rows: [row-start] 200px [row-end row-start] 200px [row-end];grid-template-columns: [col-start] 100px [col-end col-start] 100px [col-end col-start] 100px [col-end];}.container {grid-template-rows: repeat(2, [row-start] 200px [row-end]);grid-template-columns: repeat(3, [col-start] 100px [col-end]);}.container {grid-template: repeat(2, [row-start] 200px [row-end]) / repeat(3, [col-start] 100px [col-end]);}
```

```
.container {/* 12컬럼 그리드 */grid-template-columns: 1fr 2fr 1fr 2fr 1fr 2fr 1fr 2fr 1fr 2fr 1fr 2fr;}.container {grid-template-columns: repeat(6, 1fr 2fr);}
```

#### `minmax`

`minmax()` 함수는 행/열(Track)의 ’최소/최대 크기’를 정의한다.

첫 번째 인수는 ’최솟값’이고 두 번째 인수는 ’최댓값’이다.

`grid-template-row` , `grid-template-columns` , `grid-auto-rows` 그리고 `grid-auto-columns` 에서 사용한다.

일반 요소에 `min-width` 와 `max-width` 속성을 동시에 지정하는 것과 유사하다.

![CSS-속성-17-grid-image-11](https://heropy.blog/images/screenshot/css-grid/minmax-1.jpg)

minmax

> ☝️ minmax()를 통해 암시적 행/열(Track) 크기를 좀 더 유연하게 사용할 수 있다. 다음 예제는 암시적 ‘행/열’의 크기를 최소 ‘200px/300px’으로 지정하지만 auto를 통해 그리드 아이템의 크기에 따라 확장될 수 있다.

```
.container {grid-auto-rows: minmax(200px, auto);grid-auto-columns: minmax(300px, auto);}
```

#### `fit-content`

`fit-content()` 함수는 행/열(Track)의 크기를 그리드 `Item` 이 포함하는 내용(contents) 크기에 맞춘다. ‘내용의 최대 크기’를 인수로 사용한다.

> ☝️ minmax(auto, max-content) 와 유사

```
.container {grid-template-columns: fit-content(300px) fit-content(300px);}
```

### Grid Units

그리드에서 사용하는 주요 단위들에 대해서 알아봅시다.

#### `fr`

`fr` (fractional unit)은 **사용 가능한 공간에 대한 비율**을 말한다.

#### 예제

```
.container {grid-template-columns: 1fr 2fr 100px 25%;}
```

![CSS-속성-17-grid-image-12](https://heropy.blog/images/screenshot/css-grid/fr-1.jpg)

fr

#### `min-content`

그리드 `Item` 이 포함하는 내용(contents)의 최소 크기

```
<div class="container"><div class="item">Hello HEROPY~</div><!-- ... --></div>
```

```
.container {grid-template-columns: min-content 1fr;}
```

![CSS-속성-17-grid-image-13](https://heropy.blog/images/screenshot/css-grid/min-content-1.jpg)

min-content

> ☝️ 한글을 사용하는 경우 container 에 word-break: keep-all; 을 설정하면 정상적으로 동작

#### `max-content`

그리드 `Item` 이 포함하는 내용(contents)의 최대 크기

```
<div class="container"><div class="item">Hello HEROPY~</div><!-- ... --></div>
```

```
.container {grid-template-columns: max-content 1fr;}
```

![CSS-속성-17-grid-image-14](https://heropy.blog/images/screenshot/css-grid/max-content-1.jpg)

max-content

#### `auto-fill` , `auto-fit`

행/열(Track)의 개수를 그리드 `container` 및 행/열 크기에 맞게 자동으로(암시적) 조정한다. `repeat()` 함수와 같이 사용하며, 행/열과 `Item` 개수가 명확할 필요가 없거나 명확하지 않은 경우 유용.(반응형 그리드)

> ☝️ auto-fill 과 auto-fit 은 간단한 차이점을 제외하면 동일하게 동작한다

다음 4컬럼 그리드 예제에서 컨테이너의 크기가 아이템들을 수용하기 충분하지 않은 경우 아이템은 넘치기 시작한다.

```
.container {grid-template-columns: repeat(4, minmax(120px, 1fr));}
```

![CSS-속성-17-grid-image-15](https://heropy.blog/images/screenshot/css-grid/auto-fill-1.jpg)

auto-fill

만약 4컬럼 그리드를 고집할 필요가 없다면, 다음과 같이 ‘반복횟수’( `repeat()` 함수의 첫 번째 인수)를 `auto-fill` 이나 `auto-fit` 으로 수정할 수 있다. 이는 컨테이너의 크기가 아이템들을 수용하기 충분하지 않을 경우 아이템을 자동으로 줄 바꿈 처리하며, 그에 맞게 암시적 행/열도 자동으로 수정한다.

```
.container {grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));}
```

![CSS-속성-17-grid-image-16](https://heropy.blog/images/screenshot/css-grid/auto-fill-2.jpg)

auto-fill

#### `auto-fill` 과 `auto-fit` 의 차이

`auto-fill`과 `auto-fit`은 차이점은 그리드 컨테이너가 하나의 행/열(Track)에 모든 아이템을 수용하고 **남는 공간이 있을 때** 발생한다. 다음과 같이 `auto-fill` 은 남는 공간(빈 트랙)을 그대로 유지하고, `auto-fit` 은 남는 공간을 축소한다.

```
.container.auto-fill {grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));}.container.auto-fit {grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));}
```

![CSS-속성-17-grid-image-17](https://heropy.blog/images/screenshot/css-grid/auto-fill-3.jpg)

auto-fill

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)

[CSS Grid 완벽 가이드](https://heropy.blog/2019/08/17/css-grid/)
