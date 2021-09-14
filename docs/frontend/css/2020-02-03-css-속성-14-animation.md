---
icon: ./images/2020-02-03-css-속성-14-animation-icon-0.png
slug: 'css-속성-14-animation'
title: 'CSS 속성 14. animation'
main_category: Frontend
category: 2. CSS
author: Younho Choo
author_title: younho9
author_url: https://github.com/younho9
author_image_url: https://avatars.githubusercontent.com/u/48426991
created_time: 2020-02-03
updated_time: 2021-02-15
---

> ❗️ 해당 글은 [패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/)에서 HTML & CSS, SASS(SCSS) Part의 [박영웅 강사님](https://github.com/ParkYoungWoong)의 강의자료를 정리한 것입니다.

### `animation`

요소에 애니메이션을 설정/제어 - 단축 속성

<br />

#### 속성 값

| 값                        | 의미                              | 기본값  |
| ------------------------- | --------------------------------- | ------- |
| animation-name            | @keyframes 규칙의 이름을 지정     | none    |
| animation-duration        | 애니메이션의 지속 시간 설정       | 0s      |
| animation-timing-function | 타이밍 함수 지정                  | ease    |
| animation-delay           | 애니메이션의 대기 시간 설정       | 0s      |
| animation-iteration-count | 애니메이션의 반복 횟수 설정       | 1       |
| animation-direction       | 애니메이션의 반복 방향 설정       | normal  |
| animation-fill-mode       | 애니메이션의 전후 상태(위치) 설정 | none    |
| animation-play-state      | 애니메이션의 재생과 정지 설정     | running |

> ☝️ animation 속성 자체가 애니메이션을 만들어주는 것은 아니고 @keyframes 에 설정된 애니메이션을 제어하는 개념이다.

<br />

#### 사용법

```plain text
animation: 애니메이션이름 지속시간 [타이밍함수 대기시간 반복횟수 반복방향 전후상태 재생/정지];
```

```plain text
.box {width: 100px;height: 100px;background: tomato;animation: hello 2s linear infinite both;}@keyframes hello {0% { width: 200px; }100% { width: 50px; }}
```

<br />

### `@keyframes`

2개 이상의 애니메이션 중간 상태(프레임)을 지정

<br />

#### 사용법

```plain text
@keyframes 애니메이션이름 {0% { 속성: 값; }50% { 속성: 값; }100% { 속성: 값; }}
```

<br />

#### 예제

```plain text
<div class="box"></div>
```

```plain text
.box {width: 100px;height: 100px;background: tomato;border-radius: 10px;}.box:hover {animation: my-animation 3s infinite alternate;}@keyframes my-animation {0% {width: 100px;background: tomato;}75% {width: 500px;background: dodgerblue;}100% {width: 300px;background: yellowgreen;}}
```

> ☝️ transition 에 비해 @keyframes 를 이용하면 애니메이션을 더 세부적으로 설정할수 있다.

<br />

### `animation-name`

`@keyframes` 규칙(애니메이션 프레임)의 이름을 지정 - 개별 속성

<br />

#### 속성 값

| 값              | 의미                                                | 기본값 |
| --------------- | --------------------------------------------------- | ------ |
| none            | 애니메이션을 지정하지 않음                          | none   |
| @keyframes 이름 | 이름이 일치하는 @keyframes 규칙의 애니메이션을 적용 |        |

### `animation-duration`

애니메이션의 지속 시간 설정 - 개별 속성

<br />

#### 속성 값

| 값   | 의미             | 기본값 |
| ---- | ---------------- | ------ |
| 시간 | 지속 시간을 설정 | 0s     |

### `animation-timing-function`

타이밍 함수(애니메이션 효과를 계산하는 방법) 지정 - 개별 속성

<br />

#### 속성 값

| 값                       | 의미                         | 기본값 | Cubic Bezier 값               |
| ------------------------ | ---------------------------- | ------ | ----------------------------- |
| ease                     | 빠르게 - 느리게              | ease   | cubic-bezier(.25, .1, .25, 1) |
| linear                   | 일정하게                     |        | cubic-bezier(0, 0, 1, 1)      |
| ease-in                  | 느리게 - 빠르게              |        | cubic-bezier(.42, 0, 1, 1)    |
| ease-out                 | 빠르게 - 느리게              |        | cubic-bezier(0, 0, .58, 1)    |
| ease-in-out              | 느리게 - 빠르게 - 느리게     |        | cubic-bezier(.42, 0, .58, 1)  |
| cubic-bezier(n, n, n, n) | 자신만의 값을 정의 ( 0 ~ 1 ) |        |                               |
| steps(n)                 | n 번 분할된 애니메이션       |        |                               |

### `animation-delay`

애니메이션의 대기 시간 설정 - 개별 속성

<br />

#### 속성 값

| 값   | 의미             | 기본값 |
| ---- | ---------------- | ------ |
| 시간 | 대기 시간을 설정 | 0s     |

> ☝️ 음수가 허용된다. 음수가 있을 경우 애니메이션은 바로 시작되지만, 그 값만큼애니메이션이 앞서 시작한다. (애니메이션 주기 도중에 시작)ex) -1s 로 설정시, 2 초짜리 애니메이션은 1초부터 시작함

<br />

### `animation-iteration-count`

애니메이션의 반복 횟수를 설정 - 개별 속성

<br />

#### 속성 값

| 값       | 의미             | 기본값 |
| -------- | ---------------- | ------ |
| 숫자     | 반복 횟수를 설정 | 1      |
| infinite | 무한 반복        |        |

### `animation-direction`

애니메이션의 반복 방향을 설정 - 개별 속성

<br />

#### 속성 값

| 값                | 의미                             | 기본값 |
| ----------------- | -------------------------------- | ------ |
| normal            | 정방향만 반복                    | normal |
| reverse           | 역방향만 반복                    |        |
| alternate         | 정방향에서 역방향으로 반복(왕복) |        |
| alternate-reverse | 역방향에서 정방향으로 반복(왕복) |        |

### `animation-fill-mode`

애니메이션의 전후 상태(위치)를 설정 - 개별 속성

<br />

#### 속성 값

| 값        | 의미                                                                                   | 기본값 |
| --------- | -------------------------------------------------------------------------------------- | ------ |
| none      | 기존 위치에서 시작 -> 애니메이션 시작 위치로 이동 -> 동작 -> 기존 위치에서 끝          | none   |
| forwards  | 기존 위치에서 시작 -> 애니메이션 시작 위치로 이동 -> 동작 -> 애니메이션 끝 위치에서 끝 |        |
| backwards | 애니메이션 시작 위치에서 시작 -> 동작 -> 기존 위치에서 끝                              |        |
| both      | 애니메이션 시작 위치에서 시작 -> 동작 -> 애니메이션 끝 위치에서 끝                     |        |

> 🔗 animation-fill-mode by park young woong

<br />

### `animation-play-state`

애니메이션의 재생과 정지를 설정 - 개별 속성

| 값      | 의미                   | 기본값  |
| ------- | ---------------------- | ------- |
| running | 애니메이션을 동작      | running |
| paused  | 애니메이션 동작을 정지 |         |

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)
