---
id: CSS-속성-14-animation
title: 'CSS 속성 14. animation'
---

> ❗️ 해당 글은 [패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/)에서 HTML & CSS, SASS(SCSS) Part의 [박영웅 강사님](https://github.com/ParkYoungWoong)의 강의자료를 정리한 것입니다.

### `animation`

요소에 애니메이션을 설정/제어 - 단축 속성

<br/>

#### 속성 값

| 기본값  | 의미                              | 값                        |
| ------- | --------------------------------- | ------------------------- |
| none    | @keyframes 규칙의 이름을 지정     | animation-name            |
| 0s      | 애니메이션의 지속 시간 설정       | animation-duration        |
| ease    | 타이밍 함수 지정                  | animation-timing-function |
| 0s      | 애니메이션의 대기 시간 설정       | animation-delay           |
| 1       | 애니메이션의 반복 횟수 설정       | animation-iteration-count |
| normal  | 애니메이션의 반복 방향 설정       | animation-direction       |
| none    | 애니메이션의 전후 상태(위치) 설정 | animation-fill-mode       |
| running | 애니메이션의 재생과 정지 설정     | animation-play-state      |

> ☝️ animation 속성 자체가 애니메이션을 만들어주는 것은 아니고 @keyframes 에 설정된 애니메이션을 제어하는 개념이다.

<br/>

#### 사용법

```plain text
animation: 애니메이션이름 지속시간 [타이밍함수 대기시간 반복횟수 반복방향 전후상태 재생/정지];
```

```plain text
.box {width: 100px;height: 100px;background: tomato;animation: hello 2s linear infinite both;}@keyframes hello {0% { width: 200px; }100% { width: 50px; }}
```

<br/>

### `@keyframes`

2개 이상의 애니메이션 중간 상태(프레임)을 지정

<br/>

#### 사용법

```plain text
@keyframes 애니메이션이름 {0% { 속성: 값; }50% { 속성: 값; }100% { 속성: 값; }}
```

<br/>

#### 예제

```plain text
<div class="box"></div>
```

```plain text
.box {width: 100px;height: 100px;background: tomato;border-radius: 10px;}.box:hover {animation: my-animation 3s infinite alternate;}@keyframes my-animation {0% {width: 100px;background: tomato;}75% {width: 500px;background: dodgerblue;}100% {width: 300px;background: yellowgreen;}}
```

> ☝️ transition 에 비해 @keyframes 를 이용하면 애니메이션을 더 세부적으로 설정할 수 있다.

<br/>

### `animation-name`

`@keyframes` 규칙(애니메이션 프레임)의 이름을 지정 - 개별 속성

<br/>

#### 속성 값

| 의미                                                | 기본값 | 값              |
| --------------------------------------------------- | ------ | --------------- |
| 애니메이션을 지정하지 않음                          | none   | none            |
| 이름이 일치하는 @keyframes 규칙의 애니메이션을 적용 |        | @keyframes 이름 |

### `animation-duration`

애니메이션의 지속 시간 설정 - 개별 속성

<br/>

#### 속성 값

| 기본값 | 의미             | 값   |
| ------ | ---------------- | ---- |
| 0s     | 지속 시간을 설정 | 시간 |

### `animation-timing-function`

타이밍 함수(애니메이션 효과를 계산하는 방법) 지정 - 개별 속성

<br/>

#### 속성 값

| 의미                         | 기본값 | Cubic Bezier 값               | 값                       |
| ---------------------------- | ------ | ----------------------------- | ------------------------ |
| 빠르게 - 느리게              | ease   | cubic-bezier(.25, .1, .25, 1) | ease                     |
| 일정하게                     |        | cubic-bezier(0, 0, 1, 1)      | linear                   |
| 느리게 - 빠르게              |        | cubic-bezier(.42, 0, 1, 1)    | ease-in                  |
| 빠르게 - 느리게              |        | cubic-bezier(0, 0, .58, 1)    | ease-out                 |
| 느리게 - 빠르게 - 느리게     |        | cubic-bezier(.42, 0, .58, 1)  | ease-in-out              |
| 자신만의 값을 정의 ( 0 ~ 1 ) |        |                               | cubic-bezier(n, n, n, n) |
| n 번 분할된 애니메이션       |        |                               | steps(n)                 |

### `animation-delay`

애니메이션의 대기 시간 설정 - 개별 속성

<br/>

#### 속성 값

| 의미             | 기본값 | 값   |
| ---------------- | ------ | ---- |
| 대기 시간을 설정 | 0s     | 시간 |

> ☝️ 음수가 허용된다. 음수가 있을 경우 애니메이션은 바로 시작되지만, 그 값만큼 애니메이션이 앞서 시작한다. (애니메이션 주기 도중에 시작)ex) -1s 로 설정시, 2초짜리 애니메이션은 1초부터 시작함

<br/>

### `animation-iteration-count`

애니메이션의 반복 횟수를 설정 - 개별 속성

<br/>

#### 속성 값

| 기본값 | 의미             | 값       |
| ------ | ---------------- | -------- |
| 1      | 반복 횟수를 설정 | 숫자     |
|        | 무한 반복        | infinite |

### `animation-direction`

애니메이션의 반복 방향을 설정 - 개별 속성

<br/>

#### 속성 값

| 기본값 | 의미                             | 값                |
| ------ | -------------------------------- | ----------------- |
| normal | 정방향만 반복                    | normal            |
|        | 역방향만 반복                    | reverse           |
|        | 정방향에서 역방향으로 반복(왕복) | alternate         |
|        | 역방향에서 정방향으로 반복(왕복) | alternate-reverse |

### `animation-fill-mode`

애니메이션의 전후 상태(위치)를 설정 - 개별 속성

<br/>

#### 속성 값

| 의미                                                                                   | 기본값 | 값        |
| -------------------------------------------------------------------------------------- | ------ | --------- |
| 기존 위치에서 시작 -> 애니메이션 시작 위치로 이동 -> 동작 -> 기존 위치에서 끝          | none   | none      |
| 기존 위치에서 시작 -> 애니메이션 시작 위치로 이동 -> 동작 -> 애니메이션 끝 위치에서 끝 |        | forwards  |
| 애니메이션 시작 위치에서 시작 -> 동작 -> 기존 위치에서 끝                              |        | backwards |
| 애니메이션 시작 위치에서 시작 -> 동작 -> 애니메이션 끝 위치에서 끝                     |        | both      |

> 🔗 animation-fill-mode by park young woong

<br/>

### `animation-play-state`

애니메이션의 재생과 정지를 설정 - 개별 속성

| 의미                   | 기본값  | 값      |
| ---------------------- | ------- | ------- |
| 애니메이션을 동작      | running | running |
| 애니메이션 동작을 정지 |         | paused  |

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)
