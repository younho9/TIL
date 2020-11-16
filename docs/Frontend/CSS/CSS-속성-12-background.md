---
id: CSS-속성-12-background
title: 'CSS 속성 12. background'
---

> ❗️ 해당 글은 [패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/)에서 HTML & CSS, SASS(SCSS) Part의 [박영웅 강사님](https://github.com/ParkYoungWoong)의 강의자료를 정리한 것입니다.

### `background`

요소의 배경을 설정 - 단축 속성

#### 속성 값

| 기본값      | 의미                            | 값                    |
| ----------- | ------------------------------- | --------------------- |
| transparent | 배경 색상                       | background-color      |
| none        | 하나 이상의 배경 이미지         | background-image      |
| repeat      | 배경 이미지의 반복              | background-repeat     |
| 0 0         | 배경 이미지의 위치              | background-position   |
| scroll      | 배경 이미지의 스크롤 여부(특성) | background-attachment |

#### 사용법

```plain text
background: 색상 이미지경로 반복 위치 스크롤특성;
```

```plain text
.box1 {background: red url("../img/image.jpg") no-repeat left top scroll;/* 색상 이미지경로 반복 위치 스크롤특성 */}.box2 {background: url("../img/image.jpg") no-repeat right 100px;/* 이미지경로 반복 위치 */}.box3 {background: red;/* 색상 */}
```

### `background-color`

요소의 배경 색상을 지정 - 개별 속성

#### 속성 값

| 의미             | 기본값      | 값          |
| ---------------- | ----------- | ----------- |
| 요소의 배경 색상 |             | 색상        |
| 투명             | transparent | transparent |

> ☝️ 기본값이 transparent 이기 때문에 요소에 사이즈만 설정할 경우 보이지 않았다.

#### 예제

```plain text
<div></div>
```

```plain text
div {width: 200px;height: 100px;background-color: tomato;}
```

### `background-image`

요소의 배경에 하나 이상의 이미지를 삽입 - 개별 요소

#### 속성 값

| 의미             | 기본값 | 값          |
| ---------------- | ------ | ----------- |
| 이미지 없음      | none   | none        |
| 이미지 경로(URL) |        | url("경로") |

#### 사용법

```plain text
background-image: url("경로");
```

```plain text
.box {background-image: url("../img/image.jpg");width: 120px;height: 80px;}.box1 {/* 개별 속성 */background-image: url("../img/image1.jpg"),url("../img/image2.jpg"),url("../img/image3.jpg");}.box2 {/* 단축 속성 */background: url("../img/image1.jpg") no-repeat,url("../img/image2.jpg") no-repeat 100px 50px,url("../img/image3.jpg") repeat-x;}
```

> ☝️ 배경 이미지 삽입 시, 요소의 크기가 설정되어 있어야 배경 이미지가 보일 수 있다.✌️ 하나 이상의 배경 이미지를 삽입할 경우 , 로 구분한다. 먼저 작성된 이미지가 더 위에 쌓인다. 이런 ’다중 배경 이미지’는 IE8 이하 버전에 사용할 수 없다.

### `background-repeat`

배경 이미지의 반복을 설정 - 개별 요소

#### 속성 값

| 기본값 | 의미                              | 값        |
| ------ | --------------------------------- | --------- |
| repeat | 배경 이미지를 수직, 수평으로 반복 | repeat    |
|        | 배경 이미지를 수평으로 반복       | repeat-x  |
|        | 배경 이미지를 수직으로 반복       | repeat-y  |
|        | 반복 없음                         | no-repeat |

#### 예제

```plain text
<div></div>
```

```plain text
.box {background-image:url("https://heropy.blog/css/images/logo.png");background-size: 100px;background-repeat: no-repeat;width: 550px;height: 300px;border: 2px dashed lightgray;}
```

### `background-position`

배경 이미지의 위치를 설정 - 개별 요소

#### 속성 값

| 기본값 | 의미                                                           | 값   |
| ------ | -------------------------------------------------------------- | ---- |
| 0% 0%  | 왼쪽 상단 모서리는 0% 0% , 오른쪽 하단 모서리는 100% 100%      | %    |
|        | 방향을 입력하여 위치 설정 top , bottom , left , right , center | 방향 |
|        | px , em , cm 등 단위로 지정                                    | 단위 |

#### 사용법

값이 방향일 경우

```plain text
background-position: 방향1 방향2;
```

> 가운데에 위치시킬 때는 center center; 로 해도 되지만 center 를 한번만 입력해도 가능하다.

값이 단위( `%` , `px` 등)일 경우

```plain text
background-position: X축 Y축;
```

> ☝️ 값이 방향일 경우에는 순서를 바꿔도 상관이 없지만 값이 단위일 경우에는 순서가 X축, Y축으로 정해져 있다.

단위와 방향을 혼합해서 사용할 경우

```plain text
background-position: X축(left, right, center) Y축(top, bottom, center);
```

> ☝️ 단위와 방향을 혼합해서 사용할 경우 left , right 와 같은 X축 방향을 첫 번째로, top , bottom 같은 Y축 방향을 두 번째로 작성해야 한다. center 는 X축과 Y축 위치에 따라 동작한다.

#### 예제

```plain text
<div class="box"></div>
```

```plain text
.box {width: 550px;height: 300px;border: 2px dashed lightgray;background-image:url("https://heropy.blog/css/images/logo.png");background-size: 100px;background-repeat: no-repeat;background-position: center;}
```

### `background-attachment`

요소가 스크롤될 때 배경 이미지의 스크롤 여부(특성) 설정 - 개별 속성

#### 속성 값

| 의미                                                                   | 기본값 | 값     |
| ---------------------------------------------------------------------- | ------ | ------ |
| 배경 이미지가 요소를 따라서 같이 스크롤 됨                             | scroll | scroll |
| 배경 이미지가 뷰포트(viewport)에 고정되어, 요소와 같이 스크롤되지 않음 |        | fixed  |
| 요소 내 스크롤 시 배경 이미지가 같이 스크롤 됨                         |        | local  |

#### 예제

- `fixed`

```plain text
<section class="section1"></section><section class="section2"></section><section class="section3"></section><section class="section4"></section><section class="section5"></section>
```

```plain text
section {height: 300px;border: 2px dashed lightgray;}.section2 {background-image: url("https://www.istarbucks.co.kr/common/img/main/fav_prod_bg_new.jpg");background-size: auto 100%;background-position: right bottom;background-attachment: fixed;}.section3 {background-image:url("https://www.istarbucks.co.kr/common/img/main/reserve_bg.jpg");background-size: auto 100%;background-position: right bottom;background-attachment: fixed;}
```

- `local`

```plain text
<div class="container"><div class="for-scroll"></div></div>
```

```plain text
.container {width: 400px;height: 300px;border: 4px solid red;margin: 50px;overflow: auto;background-image: url("https://heropy.blog/css/images/logo.png");background-size: 50%;background-attachment: local;}.for-scroll {height: 2000px;}
```

> 사용 빈도 낮음.

### `background-size`

배경 이미지의 크기를 지정 - 개별 속성

#### 속성 값

| 의미                                                                                                                              | 기본값 | 값      |
| --------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| 배경 이미지가 원래의 크기로 표시됨                                                                                                | auto   | auto    |
| - px , em , % 등 단위로 지정- width height 형태로 입력 가능(E.g. 120px 370px )- width 만 입력하면 비율에 맞게 지정됨(E.g. 120px ) |        | 단위    |
| - 배경 이미지의 크기 비율을 유지하며, 요소의 더 넓은 너비에 맞춰짐- 이미지가 잘릴 수 있음                                         |        | cover   |
| - 배경 이미지의 크기 비율을 유지하며, 요소의 더 짧은 너비에 맞춰짐- 이미지가 잘리지 않음                                          |        | contain |

#### 예제

```plain text
<div class="box"></div>
```

```plain text
.box {width: 400px;height: 300px;border: 2px solid red;margin: 50px;background-image:url("https://heropy.blog/css/images/logo.png");/* 500x500 */background-repeat: no-repeat;background-size: contain;}
```

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)
