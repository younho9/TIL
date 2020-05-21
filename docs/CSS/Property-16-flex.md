# CSS 속성 16. `flex`

> ❗️ 해당 글은 [패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/)에서 HTML & CSS, SASS(SCSS) Part의 [박영웅 강사님](https://github.com/ParkYoungWoong)의 강의자료([CSS Flex(Flexible Box) 완벽 가이드](https://heropy.blog/2018/11/24/css-flexible-box/))를 정리한 것입니다.

`flex` 는 웹 페이지에서 수평 구조 레이아웃을 쉽고 명확하게 구성할 수 있는 방법이다.

## `flex` 이전의 방법들과의 비교

### `inline-block`

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  border: 2px solid red;
  font-size: 0;
}
.container .item {
  width: 100px;
  height: 100px;
  border: 2px solid;
  border-radius: 10px;
  display: inline-block;
  font-size: 16px;
}
```

> ☝️ `inline-block` 은 `block` 요소를 `inline` 요소(텍스트)처럼 다루게 되고, 이는 요소 사이의 공백을 제거하기 위한 `font-size` 수정을 불러오는 등 좋지 않은 방법이다.

### `float` 속성

```html
<div class="container clearfix">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.container {
  border: 2px solid red;
}
.container .item {
  width: 100px;
  height: 100px;
  border: 2px solid;
  border-radius: 10px;
  float: left;
}
```

> ☝️ `float` 이라는 속성이 요소를 수평화하는데 전문적으로 사용되는 속성이 아니다.

### `flex`

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  border: 2px solid red;
  display: flex;
}
.container .item {
  width: 100px;
  height: 100px;
  border: 2px solid;
  border-radius: 10px;
  float: left;
}
```

> ☝️ `flex` 가 수평 구조를 만드는 가장 간편하고 명확한 방법이다.

## CSS3 Flexible Box

`flex` 는 요소의 크기가 불분명하거나 동적인 경우에도, 각 요소를 정렬할 수 있는 효율적인 방법이다.

`flex` 는 2개의 개념으로 나뉘는데 1. `container`, 2. `items` 이다.

`container` 는 `items` 를 감싸는 부모 요소이고, 각 `item` 을 정렬하기 위해 `container` 가 필수적이다.

`container` 와 `items` 에 적용하는 속성이 구분되어 있는데, `container` 에는 `display` , `flex-flow` , `justify-content` 등의 속성을 사용할 수 있고, `items` 에는 `order` , `flex` , `align-self` 등의 속성을 사용할 수 있다.

![container-items](https://heropy.blog/images/screenshot/css-flexible-box/flex-base.jpg)

## `flex container`

### 속성

| 속성              | 의미                                                     |
| ----------------- | -------------------------------------------------------- |
| `display`         | `flex container` 를 정의                                 |
| `flex-flow`       | `flex-direction` 와 `flex-wrap` 의 단축 속성             |
| `flex-direction`  | `flex items` 의 주 축(main-axis)을 설정                  |
| `flex-wrap`       | `flex items` 의 여러 줄 묶음(줄 바꿈) 설정               |
| `justify-content` | 주 축(main-axis)의 정렬 방법을 설정                      |
| `align-content`   | 교차 축(cross-axis)의 정렬 방법을 설정(2줄 이상)         |
| `align-items`     | 교차 축(cross-axis)에서 `items` 의 정렬 방법을 설정(1줄) |

### `display`

`display` 속성으로 `flex container` 를 정의한다.

보통 `display: block;` , `display: inline` , `display: inline-block` , `display: none;` 으로 사용했었는데, ( [Property-06-display](./Property-06-display.md) 참조) `display: flex;` 또는 `display: inline-flex;` 도 사용할 수 있다.

#### 속성 값

| 값            | 의미                                     | 기본값 |
| ------------- | ---------------------------------------- | ------ |
| `flex`        | `Block` 특성의 `flex container` 를 정의  |        |
| `inline-flex` | `Inline` 특성의 `flex container` 를 정의 |        |

`flex` 와 `inline-flex` 의 차이는 다음과 같다.

![flex-display](https://heropy.blog/images/screenshot/css-flexible-box/flex-display.jpg)

`display: flex;` 로 지정된 `flex container` 는 `block` 요소와 같이 수직으로 쌓이며,

`display: inline-flex;` 로 지정된 `flex container` 는 `inline` 요소와 같이 수평으로 쌓인다.

> ☝️ `flex` 와 `inline-flex` 의 내부에 `items` 가 쌓이는 방식은 둘이 완전히 같다.

### `flex-flow`

`flex items` 의 주 축(main-axis)와 `items` 의 여러 줄 묶음(줄 바꿈) 설정 - 단축 속성

#### 속성 값

| 값               | 의미                                 | 기본값   |
| ---------------- | ------------------------------------ | -------- |
| `flex-direction` | `items` 의 주 축(main-axis)을 설정   | `row`    |
| `flex-wrap`      | `items`의 여러 줄 묶음(줄 바꿈) 설정 | `nowrap` |

#### 사용법

```css
flex-flow: 주축 여러줄묶음;
```

```css
.flex-container {
  flex-flow: row-reverse wrap;
}
```

### `flex-direction`

`Items` 의 주 축(main-axis) 설정

#### 속성 값

| 값               | 의미                                            | 기본값 |
| ---------------- | ----------------------------------------------- | ------ |
| `row`            | `Items` 를 수평축(왼쪽에서 오른쪽으로)으로 표시 | `row`  |
| `row-reverse`    | `Items` 를 `row` 의 반대 축으로 표시            |        |
| `column`         | `Items` 를 수직축(위에서 아래로)으로 표시       |        |
| `column-reverse` | `Items` 를 `column` 의 반대 축으로 표시         |        |

![flex-direction](https://heropy.blog/images/screenshot/css-flexible-box/flex-direction.jpg)

#### 주 축(main-axis)과 교차 축(cross-axis)

`row` 는 `items` 를 수평축으로 표시하므로 주 축이 수평이며 교차 축은 수직이 된다.

반대로 `column` 은 `items` 를 수직축으로 표시하므로 주 축은 수직이며 교차 축은 수평이 된다.

> ☝️ 방향에 따라 주 축과 교차 축이 달라진다.

![flex-direction-main-axis](https://heropy.blog/images/screenshot/css-flexible-box/flex-direction-main-axis.jpg)

#### 시작점(flex-start)과 끝점(flex-end)

주 축(main-axis)이나 교차 축(cross-axis)의 시작하는 지점과 끝나는 지점을 지칭.

이 역시 방향에 따라 시작점(flex-start)과 끝점(flex-end)이 달라진다.

![flex-direction-main-start](https://heropy.blog/images/screenshot/css-flexible-box/flex-direction-main-start.jpg)

![flex-direction-cross-start](https://heropy.blog/images/screenshot/css-flexible-box/flex-direction-cross-start.jpg)

> ☝️ 교차축의 시작점(flex-start)과 끝점(flex-end)은 달라지지 않는다.

### `flex-wrap`

`items` 의 여러 줄 묶음(줄 바꿈)을 설정한다.

#### 속성 값

| 값             | 의미                                              | 기본값   |
| -------------- | ------------------------------------------------- | -------- |
| `nowrap`       | 모든 `items` 를 여러 줄로 묶지 않음(한 줄에 표시) | `nowrap` |
| `wrap`         | `items` 를 여러 줄로 묶음                         |          |
| `wrap-reverse` | `items` 를 `wrap` 의 역 방향으로 여러 줄로 묶음   |          |

> ☝️ 기본값으로 `nowrap` 이 설정되어 있기 때문에 `items` 는 한 줄에서만 표시되고 줄 바꿈 되지 않으며 지정된 크기(주 축에 따라 `width` 나 `height` )를 무시하고 한 줄 안에서만 가변한다.

![flex-wrap](https://heropy.blog/images/screenshot/css-flexible-box/flex-wrap.jpg)

#### 예제

```html
<div class="container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
  <div class="item">E</div>
</div>
```

```css
.container {
  border: 4px solid;
  display: flex;
  flex-wrap: wrap;
}
.container .item {
  width: 150px;
  height: 100px;
  background: tomato;
  border: 4px dashed red;
}
```

### `justify-content`

주 축(main-axis)의 정렬 방법을 설정한다.

#### 속성 값

| 값              | 의미                                                                                              | 기본값       |
| --------------- | ------------------------------------------------------------------------------------------------- | ------------ |
| `flex-start`    | `items` 를 시작점(flex-start)으로 정렬                                                            | `flex-start` |
| `flex-end`      | `items` 를 끝점(flex-end)으로 정렬                                                                |              |
| `center`        | `items` 를 가운데 정렬                                                                            |              |
| `space-between` | 시작 `item` 은 시작점에, 마지막 `item` 은 끝점에 정렬되고, 나머지 `items` 는 사이에 고르게 정렬됨 |              |
| `space-around`  | `items` 를 균등한 여백을 포함하여 정렬                                                            |              |

![flex-justify-content](https://heropy.blog/images/screenshot/css-flexible-box/flex-justify-content.jpg)

#### 예제

```html
<div class="container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
</div>
```

```css
.container {
  border: 4px solid;
  display: flex;
  justify-content: center;
}
.container .item {
  width: 100px;
  height: 100px;
  background: tomato;
  border: 4px dashed red;
  border-radius: 10px;
}
```

### `align-content`

교차 축(cross-axis)의 정렬 방법을 설정

`flex-wrap` 속성을 통해 `items` 가 여러 줄(2줄 이상)이고 여백이 있을 경우만 사용할 수 있다.

> ☝️ `items` 가 한 줄일 경우 `align-items` 를 사용

#### 속성 값

| 값              | 의미                                                                                             | 기본값    |
| --------------- | ------------------------------------------------------------------------------------------------ | --------- |
| `stretch`       | `container` 의 교차 축을 채우기 위해 `items` 를 늘림                                             | `stretch` |
| `flex-start`    | `items` 를 시작점(flex-start)으로 정렬                                                           |           |
| `flex-end`      | `items` 를 끝점(flex-end)으로 정렬                                                               |           |
| `center`        | `items` 를 가운데 정렬                                                                           |           |
| `space-between` | 시작 `item` 은 시작점에, 마지막 `item` 은 끝점에 정렬되고 나머지 `items` 는 사이에 고르게 정렬됨 |           |
| `space-around`  | `items` 를 균등한 여백을 포함하여 정렬                                                           |           |

> ☝️ `stretch` 는 교차 축에 해당하는 너비(속성 `width` 혹은 `height` )가 값이 `auto` (기본값)일 경우 교차 축을 채우기 위해 자동으로 늘어난다.

![flex-align-content](https://heropy.blog/images/screenshot/css-flexible-box/flex-align-content.jpg)

#### 예제

```html
<div class="container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
  <div class="item">E</div>
  <div class="item">F</div>
</div>
```

```css
.container {
  height: 400px;
  border: 4px solid;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.container .item {
  width: 120px;
  height: 100px;
  background: tomato;
  border: 4px dashed red;
  border-radius: 10px;
}
```

### `align-items`

교차 축(cross-axis)에서 `items` 의 정렬 방법을 설정한다.

`items` 가 한 줄일 경우 많이 사용한다.

> ☝️ `items` 가 `flex-wrap` 을 통해 여러 줄(2줄 이상)일 경우에는 `align-content` 속성이 우선한다.
>
> 따라서 `align-items` 를 사용하려면 `align-content` 속성을 기본값( `stretch` )으로 설정해야 한다.

#### 속성 값

| 값           | 의미                                                 | 기본값    |
| ------------ | ---------------------------------------------------- | --------- |
| `stretch`    | `container` 의 교차 축을 채우기 위해 `items` 를 늘림 | `stretch` |
| `flex-start` | `items` 를 시작점(flex-start)으로 정렬               |           |
| `flex-end`   | `items` 를 끝점(flex-end)으로 정렬                   |           |
| `center`     | `items` 를 가운데 정렬                               |           |
| `baseline`   | `items` 를 문자 기준선에 정렬                        |           |

![flex-align-items](https://heropy.blog/images/screenshot/css-flexible-box/flex-align-items.jpg)

#### 예제

```html
<div class="container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
  <div class="item">E</div>
  <div class="item">F</div>
</div>
```

```css
.container {
  height: 400px;
  border: 4px solid;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}
.container .item {
  width: 120px;
  height: 100px;
  background: tomato;
  border: 4px dashed red;
  border-radius: 10px;
  font-size: 30px;
}
.container .item:nth-child(3n) {
  font-size: 50px;
}
```

## `flex items`

### 속성

| 속성          | 의미                                                    |
| ------------- | ------------------------------------------------------- |
| `order`       | `flex item` 의 순서를 설정                              |
| `flex`        | `flex-grow` , `flex-shrink` , `flex-basis` 의 단축 속성 |
| `flex-grow`   | `flex item` 의 증가 너비 비율을 설정                    |
| `flex-shrink` | `flex item` 의 감소 너비 비율을 설정                    |
| `flex-basis`  | `flex item` 의 (공간 배분 전) 기본 너비 설정            |
| `align-self`  | 교차 축(cross-axis)에서 `item` 의 정렬 방법을 설정      |

### `order`

`item` 의 순서를 설정

`item` 에 숫자를 지정하고 숫자가 클수록 순서가 밀린다. (음수가 허용)

> ☝️ HTML 구조보다 우선해서 순서를 변경할 수 있기 때문에 유용
>
> `order` 의 숫자가 같으면 HTML 구조에 따라 정렬된다

#### 속성 값

| 값   | 의미                  | 기본값 |
| ---- | --------------------- | ------ |
| 숫자 | `item` 의 순서를 설정 | `0`    |

![flex-order](https://heropy.blog/images/screenshot/css-flexible-box/flex-order.jpg)

### `flex`

`item` 의 너비(증가, 감소, 기본)를 설정 - 단축 속성

#### 속성 값

| 값            | 의미                                 | 기본값 |
| ------------- | ------------------------------------ | ------ |
| `flex-grow`   | `item` 의 증가 너비 비율을 설정      | `0`    |
| `flex-shrink` | `item` 의 감소 너비 비율을 설정      | `1`    |
| `flex-basis`  | `item` (공간 배분 전) 기본 너비 설정 | `auto` |

#### 사용법

```css
flex: 증가너비 감소너비 기본너비;
```

```css
.item {
  flex: 1 1 20px; /* 증가너비 감소너비 기본너비 */
  flex: 1 1; /* 증가너비 감소너비 */
  flex: 1 20px; /* 증가너비 기본너비 (단위를 사용하면 flex-basis가 적용 */
  flex: 1; /* 증가너비 */
}
```

> ☝️ `flex` 단축 속성을 사용한 경우, `flex-basis` 의 기본값은 `0` 이다. (개별 속성을 사용하면 `auto` )

### `flex-grow`

`item` 의 증가 너비 비율을 설정.

숫자가 크면 더 많은 너비를 가짐

`item` 이 가변 너비가 아니거나, 값이 `0` 일 경우 효과가 없다.

#### 속성 값

| 값   | 의미                            | 기본값 |
| ---- | ------------------------------- | ------ |
| 숫자 | `item` 의 증가 너비 비율을 설정 | `0`    |

![flex-grow](https://heropy.blog/images/screenshot/css-flexible-box/flex-grow.jpg)

모든 `items` 의 총 증가 너비( `flex-grow` )에서 각 item 의 증가 너비의 비율만큼 너비를 가질 수 있는데,

첫 번째 그림처럼 `item` 이 3개이고 증가 너비가 각각 `1` , `2` , `1` 이면

첫 번째 `item` 은 총 너비의 25% (1/4),

두 번째 `item` 은 총 너비의 50% (2/4),

세 번째 `item` 은 총 너비의 25% (1/4)을 가지고,

두 번째 그림처럼 `item` 이 3개이고 증가 너비가 각각 `1` , `3` , `2` 이면

첫 번째 `item` 은 총 너비의 16.6% (1/6),

두 번째 `item` 은 총 너비의 50% (1/2),

세 번째 `item` 은 총 너비의 33.3% (1/3)를 가진다.

#### 예제

```html
<div class="container">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
</div>
```

```css
.container {
  border: 4px solid;
  display: flex;
}
.container .item {
  width: 100px; /* 모든 아이템의 기본 너비가 지정되어 있는 상태 */
  height: 100px;
  background: tomato;
  border: 4px dashed red;
  border-radius: 10px;
}
.item1 {
  flex-grow: 1;
}
.item2 {
  flex-grow: 2;
}
```

> ☝️ 아이템의 **기본 너비가 지정되어 있는 상태**일 경우 위 예제처럼 `item1` 과 `item2` 의 `flex-grow` 값이 `1` , `2` 이라고해서 정확하게 2배 차이가 나는 것이 아니다.

```css
.container {
  border: 4px solid;
  display: flex;
}
.container .item {
  /*   width: 100px; */
  height: 100px;
  background: tomato;
  border: 4px dashed red;
  border-radius: 10px;
}
.item1 {
  flex-grow: 1;
}
.item2 {
  flex-grow: 2;
}
.item3 {
  width: 100px;
}
```

> ☝️ 위 예제를 이렇게 바꾸면 정확히 2배 차이가 나게 된다.
>
> 하지만 가로 너비를 지정하는 `width` 와 요소의 기본 너비를 지정해주는 `flex-basis` 속성의 영향을 받을 수 있기 때문에 `flex-grow` 는 완벽하게 **2배, 3배의 크기를 지정하기 위해 사용하는 개념은 아니고 증가 너비 비율을 설정**하는 개념이다.

```css
.container {
  border: 4px solid;
  display: flex;
}
.container .item {
  height: 100px;
  background: tomato;
  border: 4px dashed red;
  border-radius: 10px;
}
.item1 {
  flex-grow: 1;
}
.item2 {
  width: 100px;
}
```

> 💡 이렇게 한 `item` 은 고정 너비 `width` 를 지정하고 한 `item` 은 `flex-grow` 속성을 지정하면, `container` 의 사이즈가 변할 때 지정한 `item` 만 가변 사이즈를 지니도록 만들 수 있다.

### `flex-shrink`

`item` 의 감소 너비 비율을 설정.

숫자가 크면 더 많은 너비가 감소

`item` 이 가변 너비가 아니거나, 값이 `0` 일 경우 효과가 없다.

#### 속성 값

| 값   | 의미                            | 기본값 |
| ---- | ------------------------------- | ------ |
| 숫자 | `item` 의 감소 너비 비율을 설정 | `1`    |

![flex-shrink](https://heropy.blog/images/screenshot/css-flexible-box/flex-shrink.jpg)

> ☝️ 오른쪽 그림처럼 기본 너비( `flex-basis` )의 크기에 따라 비율 계산이 달라진다.

### `flex-basis`

`item` 의 (공간 배분 전) 기본 너비를 설정.

값이 `auto` 일 경우 `width` , `height` 등의 속성으로 `item` 의 너비를 설정할 수 있다.

하지만 단위 값이 주어진 경우 설정할 수 없다.

#### 속성 값

| 값     | 의미                              | 기본값 |
| ------ | --------------------------------- | ------ |
| `auto` | 가변 `item` 과 같은 너비          | `auto` |
| 단위   | `px` , `em` , `cm` 등 단위로 지정 |        |

> ☝️ `flex` 단축 속성에서 `flex-basis` 를 생략하면 값이 `0` 이 된다.

![flex-basis](https://heropy.blog/images/screenshot/css-flexible-box/flex-basis.jpg)

> ☝️ `item` 전체가 비율대로( `flex-grow` ) 증가하려면 `flex-basis` 가 `0` 인 것이 중요하다.

#### 예제

```html
<div class="container">
  <div class="item item1">Good job!</div>
  <div class="item item2">A</div>
  <div class="item item3">Hello world!</div>
</div>
```

```css
.container {
  border: 4px solid;
  display: flex;
}
.container .item {
  height: 100px;
  background: tomato;
  border: 4px dashed red;
  border-radius: 10px;
  flex-grow: 1;
  flex-basis: 0;
}
```

> ☝️ `flex-basis: auto;` 이면 콘텐츠를 제외한 영역의 비율에 따라 `item` 의 너비가 설정된다. `flex-basis: 0;` 이면 `item` 전체가 비율에 따라 설정된다.

### `align-self`

교차 축(cross-axis)에서 개별 `item` 의 정렬 방법을 설정

`align-items` 는 `container` 내 모든 `item` 의 정렬 방법을 설정하는데, 필요에 의해 일부 `item` 만 정렬 방법을 변경하려고 할 경우 `align-self` 를 사용할 수 있다.

이 속성은 `align-items` 속성보다 우선한다.

#### 속성 값

| 값           | 의미                                             | 기본값 |
| ------------ | ------------------------------------------------ | ------ |
| `auto`       | `Container` 의 `align-items` 속성을 상속받음     | `auto` |
| `stretch`    | `Container` 의 교차 축을 채우기 위해 item을 늘림 |        |
| `flex-start` | `item` 을 각 줄의 시작점(flex-start)으로 정렬    |        |
| `flex-end`   | `item` 을 각 줄의 끝점(flex-end)으로 정렬        |        |
| `center`     | `item` 을 가운데 정렬                            |        |
| `baseline`   | `item` 을 문자 기준선에 정렬                     |        |

![flex-align-self](https://heropy.blog/images/screenshot/css-flexible-box/flex-align-self.jpg)

## Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)

[CSS Flex(Flexible Box) 완벽 가이드](https://heropy.blog/2018/11/24/css-flexible-box/)
