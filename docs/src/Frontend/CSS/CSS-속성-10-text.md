# CSS 속성 10. text

> ❗️ 해당 글은 [패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/)에서 HTML & CSS, SASS(SCSS) Part의 [박영웅 강사님](https://github.com/ParkYoungWoong)의 강의자료를 정리한 것입니다.

### `color`

문자의 색상을 지정

> ☝️ 요소의 색상은 background-color

#### 속성 값

| 기본값       | 의미               | 값   |
| ------------ | ------------------ | ---- |
| rgb(0, 0, 0) | 문자의 색상을 지정 | 색상 |

#### 색상 표현

| 예시                     | 의미                              | 표현         |
| ------------------------ | --------------------------------- | ------------ |
| red , blue , …           | 브라우저에서 제공하는 색상의 이름 | 색상이름     |
| #000000 ~ #ffffff        | 16 진수 색상 (Hexadecimal Colors) | Hex 색상코드 |
| rgb(255, 255, 255)       | 빛의 3원색                        | RGB          |
| rgba(255, 0, 0, .5)      | 빛의 3원색 + 투명도               | RGBA         |
| hsl(120, 100%, 50%)      | 색상, 채도, 명도                  | HSL          |
| hsla(120, 100%, 50%, .3) | 색상, 채도, 명도, 투명도          | HSLA         |

> ☝️ 색상이름은 브라우저 별로 상이할 수 있으므로, 정확한 색상 값을 위해서는 사용하지 않는 것을 추천함.✌️ 위 표는 색상을 이용하는 모든 속성(property)의 값으로 사용할 수 있음.RGBA : Red, Green, Blue, Alpha channelHSLA : Hue, Saturation, Lightness, Alpha channel

### `text-align`

문자 정렬 방식을 지정

| 의미        | 기본값 | 값      |
| ----------- | ------ | ------- |
| 왼쪽 정렬   | left   | left    |
| 오른쪽 정렬 |        | right   |
| 가운데 정렬 |        | center  |
| 양쪽 맞춤   |        | justify |

> ☝️ direction 속성(텍스트 방향 및 쓰기 방향 지정 / ltr , rtl )의 값에 의해서 text-align 속성의 ’기본값’이 변경될 수 있다.✌️ 일반적으로 left 가 기본값으로 사용된다.

### `text-decoration`

문자의 장식(line)을 설정

| 기본값 | 의미                       | 값           |
| ------ | -------------------------- | ------------ |
| none   | 선 없음                    | none         |
|        | 밑줄을 지정                | underline    |
|        | 윗줄을 지정                | overline     |
|        | 중앙 선(가로지르는)을 설정 | line-through |

### `text-indent`

(첫 번째 줄의) 들여쓰기를 지정

> ☝️ 음수 값을 사용할 수 있다. 음수 값을 사용하면 첫째 줄은 왼쪽으로 들여쓰기(내어쓰기) 된다.

```
div {text-indent: -10px;}
```

#### `background: url("");` 로 이미지 삽입 시 `alt` 입력법

```
<img src="이미지 링크" alt="대체 텍스트">
```

HTML의 이미지 태그를 사용시에는 이렇게 alt를 사용해 대체 텍스트를 입력할 수 있다.

그런데 CSS의 `background: url("");` 속성을 사용 시에는 어떻게 대체 텍스트를 입력할 수 있을까?

```
<div class="class-name">대체 텍스트</div>
```

```
.class-name {width: 100px;height: 100px;text-indent: -9999px;background: url("이미지 링크");}
```

> ☝️ HTML 요소의 내용에 대체 텍스트를 입력하고 text-indent: -9999px; 로 텍스트를 들여쓰기하면 ’명시적’으로 텍스트를 보이지 않게 하겠다는 의미로 사용가능하다.

### `letter-spacing`

문자의 자간(글자 사이 간격)을 설정

#### 속성 값

| 의미                        | 기본값 | 값     |
| --------------------------- | ------ | ------ |
| 단어 사이의 일반 간격       | normal | normal |
| px , em , cm 등 단위로 지정 |        | 단위   |

> ☝️ normal 은 단위로 보면 0 에 해당하고 폰트마다 다르게 보일 수 있다.음수 값도 가능하다.

### `word-spacing`

단어 사이(띄어쓰기)의 간격을 설정

#### 속성 값

| 기본값 | 의미                        | 값     |
| ------ | --------------------------- | ------ |
| normal | 단어 사이의 일반 간격       | normal |
|        | px , em , cm 등 단위로 지정 | 단위   |

> ☝️ normal 은 마찬가지로 단위로 보면 0 에 해당하는데, 띄어쓰기의 너비가 0 이라는 뜻이 아니라 ‘기본 띄어쓰기 너비 + 0’ 이라는 뜻이다

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)
