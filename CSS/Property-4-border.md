# CSS 속성 4. `border`

## `border`

요소의 '테두리 선'을 지정 - 단축 속성 (두께, 종류, 색상)

### 속성 값

| 값              | 의미           | 기본값    |
| -------------- | ------------- | -------- |
| `border-width` | 선의 두께(너비)  | `medium` |
| `border-style` | 선의 종류       | `none`   |
| `border-color` | 선의 색상       | `black`  |

### 사용법

`border` 의 속성 값들은 생략 가능하며 순서에도 상관이 없다. (하지만 기본적으로 `border-style: none;` 이기 때문에 종류는 정해주어야 눈으로 확인 가능하다)

```css
border: 두께 종류 색상;
border: 두께 색상 종류;
border: 종류 두께 색상;
border: 종류 색상 두께;
border: 색상 두께 종류;
border: 색상 종류 두께;
border: 색상 종류;
border: 두께 종류;
...
```

```css
.box {
  border: 1px solid red;
}
```

## `border-top, right, bottom, left`

요소의 해당하는 위치의 '테두리 선'을 지정 - 단축 속성 (두께, 종류, 색상)

### 속성 값

| 값                 | 의미            | 기본값   |
| ------------------ | --------------- | -------- |
| `border-top-width` | 선의 두께(너비) | `medium` |
| `border-top-style` | 선의 종류       | `none`   |
| `border-top-color` | 선의 색상       | `black`  |
| ...                |                 |          |

### 사용법

`border-top, right, bottom, left` 의 속성 값들은 `border` 와 마찬가지로 생략 가능하며 순서에도 상관이 없다.

```css
border-top: 두께 종류 색상;
border-top: 두께 색상 종류;
border-top: 종류 두께 색상;
border-top: 종류 색상 두께;
border-top: 색상 두께 종류;
border-top: 색상 종류 두께;
border-top: 색상 종류;
border-top: 두께 종류;
...
```

```css
.box {
  border-top: 1px solid red;
}
```

## `border-width`

선의 두께(너비)를 지정 - 단축 (위 오른쪽 아래 왼쪽), 개별 속성

### 속성 값

| 값       | 의미          | 기본값   |
| -------- | ------------- | -------- |
| `medium` | 중간 두께     | `medium` |
| `thin`   | 얇은 두께     |          |
| `thick`  | 두꺼운 두께   |          |
| 단위     | `px` , `em` , `cm` 등 단위로 지정 |          |

### 사용법

```css
border-width: 위 우 아래 좌;       /* 시계 방향 */
border-width: 위 [좌, 우] 아래;    /* 위 아래 방향 */
border-width: [위, 아래] [좌, 우]; /* 위,아래 + 좌,우 */
border-width: [위, 아래, 좌, 우];  /* 모든 방향 */
```

```css
.box {
  border-width: 10px 20px 30px 40px;
  border-width: 10px 20px 40px;
  border-width: 10px 40px;
  border-width: 10px;
}
```

```css
.box1 {
  border-width: 10px 20px 30px 40px;	/* 단축 속성 */
}
.box2 {
  /* 개별 속성 */
  border-top-width: 10px;
  border-right-width: 20px;
  border-bottom-width: 10px;
  border-left-width: 10px;
}
```

## `border-style`

선의 종류를 지정 - 단축 (위 오른쪽 아래 왼쪽), 개별 속성

### 속성 값

| 값       | 의미                                    | 기본값 |
| -------- | --------------------------------------- | ------ |
| `none`   | 선 없음                                 | `none` |
| `hidden` | 선 없음과 동일( `table` 요소에서 사용 ) |        |
| `solid`  | 실선(일반선)                            |        |
| `dotted` | 점선                                    |        |
| `dashed` | 파선                                    |        |
| `double` | 두 줄선                                 |        |
| `groove` | 홈이 파여있는 모양(선)                  |        |
| `ridge`  | 솟은 모양(선, `groove` 의 반대)         |        |
| `inset`  | 요소 전체가 들어간 모양(선)             |        |
| `outset` | 요소 전체가 나온 모양(선)               |        |

### 사용법

```css
border-style: 위 우 아래 좌;       /* 시계 방향 */
border-style: 위 [좌, 우] 아래;    /* 위 아래 방향 */
border-style: [위, 아래] [좌, 우]; /* 위,아래 + 좌,우 */
border-style: [위, 아래, 좌, 우];  /* 모든 방향 */
```

```css
.box {
  border-style: solid dotted double inset;
  border-style: solid dotted inset;
  border-style: solid inset;
  border-style: solid;
}
```

```css
.box1 {
  border-style: solid dotted double inset;	/* 단축 속성 */
}
.box2 {
  /* 개별 속성 */
  border-top-style: solid;
  border-right-style: dotted;
  border-bottom-style: double;
  border-left-style: inset;
}
```

## `border-color`

선의 색상을 지정 - 단축 (위 오른쪽 아래 왼쪽), 개별 속성

### 속성 값

| 값            | 의미                            | 기본값  |
| ------------- | ------------------------------- | ------- |
| 색상          | 선의 색상을 지정                | `black` |
| `transparent` | 투명한 선(요소의 배경색이 보임) |         |

### 사용법

```css
border-color: 위 우 아래 좌;       /* 시계 방향 */
border-color: 위 [좌, 우] 아래;    /* 위 아래 방향 */
border-color: [위, 아래] [좌, 우]; /* 위,아래 + 좌,우 */
border-color: [위, 아래, 좌, 우];  /* 모든 방향 */
```

```css
.box {
  border-color: red green blue yellow;
  border-color: red green blue ;
  border-color: red green;
  border-color: red;
}
```

```css
.box1 {
  border-color: red green blue yellow;	/* 단축 속성 */
}
.box2 {
  /* 개별 속성 */
  border-top-color: red;
  border-right-color: green;
  border-bottom-color: blue;
  border-left-color: yellow;
}
```

## 크기 증가

`padding` 과 마찬가지로 `border` 의 값만큼 요소의 크기가 커지는 현상

```html
<div>
  Hello world!
</div>
```

```css
div {
  width: 100px;
  height: 100px;
  background: tomato;
  border: 20px;
}
```

`width` 와 `height` 를 `100px` 로 지정하였으나, `border` 값이 `20px` 로 설정되어 총 `140px` 의 정사각형이 나타나게 되었다.

### 직접 계산

```css
/* 100 x 100 (px) 크기의 요소 만들기 */
.box {
  width: 60px;  /* +40px */
  height: 80px; /* +20px */
  background: tomato;
  border: 10px 20px;
}
```

100 x 100 (px) 크기의 요소를 만들기 위해 직접 계산했다.

### 자동 계산

```css
/* 100 x 100 (px) 크기의 요소 만들기 */
.box {
  width: 100px;
  height: 100px;
  background: tomato;
  border: 10px 20px;
  box-sizing: border-box;
}
```

`box-sizing: border-box;` 는 100 x 100 크기의 요소를 만들고 그 안에서 `border` 이 들어가도록 자동 계산해준다.