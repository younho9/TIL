---
id: CSS-속성-06-display
title: 'CSS 속성 06. display'
---

> ❗️ 해당 글은 [패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/)에서 HTML & CSS, SASS(SCSS) Part의 [박영웅 강사님](https://github.com/ParkYoungWoong)의 강의자료를 정리한 것입니다.

### `display`

요소의 박스 타입(유형)을 설정

#### 속성 값

| 기본값 | 의미                                   | 값           |
| ------ | -------------------------------------- | ------------ |
|        | 블록 요소( div 등)                     | block        |
|        | 인라인 요소( span 등)                  | inline       |
|        | 인라인-블록 요소( input 등)            | inline-block |
|        | table , table-cell , flex 등           | 기타         |
|        | 요소의 박스 타입이 없음(요소가 사라짐) | none         |

> ☝️ inline-block 은 기본적으로 inline 으로 수평으로 쌓이는데, width , height 를 사용할 수 있고 margin , padding 의 top , bottom 을 사용할 수 있는 block 의 특성을 갖고 있다

#### 인라인(Inline) 요소과 블록(Block) 요소의 `margin` `padding`

- 인라인 요소

```plain text
<span></span>
```

```plain text
span {background: orange;padding-top: 10px;padding-right: 10px;padding-bottom: 10px;padding-left: 10px;}
```

인라인 요소에서 `padding-top` 은 값을 바꾸어도 계속 0 이었고, `padding-right` , `padding-left` 는 값에 따라 변화했다. `padding-bottom` 은 `padding-right` 또는 `padding-left` 이 0 이 아닌 경우에 값에 따라 변화했다.

```plain text
span {background: orange;padding: 10px;margin-top: 10px;margin-right: 10px;margin-bottom: 10px;margin-left: 10px;}
```

인라인 요소에서 `margin-top` 과 `margin-bottom` 이 모두 값을 바꾸어도 변화하지 않았고, `margin-left` 와 `margin-right` 는 모두 값에 따라 변화했다.

- 블록 요소

```plain text
<div></div>
```

```plain text
div {width: 100px;height: 100px;padding: 100px 100px 100px 100px;margin: 100px 100px 100px 100px;background: tomato;}
```

블록 요소의 `padding` , `margin` 은 모두 값에 따라 변화했다.

- 인라인-블록 요소

```plain text
<input type="text">
```

```plain text
input {width: 100px;height: 100px;margin: 50px 0;padding: 10px 0;}
```

인라인-블록 요소인 `input` 태그는 인라인 요소가 갖지 못하는 `width` , `height` , `margin-top` , `margin-bottom` , `padding-top` , `padding-bottom` 의 속성을 모두 가질 수 있다.

#### `display: none;`

`display: none;` 은 `opacity: 0;` 가 존재하지만 보이지 않게만 하는 것과는 달리 요소가 완벽히 존재하지 않는 것처럼 만들어준다.

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)
