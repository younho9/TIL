# CSS 속성 3. `padding`

## `padding`

요소의 '내부(안쪽) 여백'을 지정 - 단축 속성 (위 오른쪽 아래 왼쪽)

### 속성 값

| 값   | 의미                                | 기본값 |
| ---- | ----------------------------------- | ------ |
| 단위 | `px` , `em` , `cm` 등 단위로 지정   | `0`    |
| `%`  | 부모 요소의 너비에 대한 비율로 지정 |        |

### 사용법

```css
padding: 위 우 아래 좌;       /* 시계 방향 */
padding: 위 [좌, 우] 아래;    /* 위 아래 방향 */
padding: [위, 아래] [좌, 우]; /* 위,아래 + 좌,우 */
padding: [위, 아래, 좌, 우];  /* 모든 방향 */
```

```css
.box {
  padding: 10px 20px 30px 40px;
  padding: 10px 20px 40px;
  padding: 10px 40px;
  padding: 10px;
}
```

## `padding-top, right, bottom, left`

요소의 '외부(바깥 위쪽 여백)'을 지정

```css
.box1 {
  padding: 10px 20px 30px 40px;	/* 단축 속성 */
}
.box2 {
  /* 개별 속성 */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 10px;
}
```

## 크기 증가

추가된 `padding` 값만큼 요소의 크기가 커지는 현상

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
  padding: 20px;
}
```

`width` 와 `height` 를 `100px` 로 지정하였으나, `padding` 값이 `20px` 로 설정되어 총 `140px` 의 정사각형이 나타나게 되었다.

### 직접 계산

```css
/* 100 x 100 (px) 크기의 요소 만들기 */
.box {
  width: 60px;  /* +40px */
  height: 80px; /* +20px */
  background: tomato;
  padding: 10px 20px;
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
  padding: 10px 20px;
  box-sizing: border-box;
}
```

`box-sizing: border-box;` 는 100 x 100 크기의 요소를 만들고 그 안에서 `padding` 이 들어가도록 자동 계산해준다.