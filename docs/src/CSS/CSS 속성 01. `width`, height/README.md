# CSS 속성 01. `width`, height

> ❗️ 해당 글은 [패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/)에서 HTML & CSS, SASS(SCSS) Part의 [박영웅 강사님](https://github.com/ParkYoungWoong)의 강의자료를 정리한 것입니다.

### `width`

요소의 가로 너비를 지정

#### 속성 값

| 의미 | 기본값 | 값 |
| --- | --- | --- |
| 브라우저가 너비를 계산 | auto | auto |
| px , em , rem 등 단위로 지정 |     | 단위 |


### `height`

요소의 세로 너비를 지정

#### 속성 값

| 기본값 | 의미 | 값 |
| --- | --- | --- |
| auto | 브라우저가 너비를 계산 | auto |
|     | px , em , rem 등 단위로 지정 | 단위 |


#### 블록 요소와 인라인 요소에서 `width`, `height`의 차이

```plain text
/* 블록요소 */div {width: auto;  /* 100% */height: auto; /* 0(px) */}/* 인라인 요소 */span {width: auto;  /* 0(px) */height: auto; /* 0(px) */}
```

> 블록 요소에서는 height: auto; 가 height: 0(px); 을 의미하고, 내부에 내용의 크기에 따라 height 가 커지게 되고, height: 100px; 과 같이 직접 크기를 지정할 수도 있다.하지만 인라인 요소에서는 width: auto; height: auto; 는 모두 width: 0(px); height: 0(px); 을 의미하며, 내용의 크기에따라 반응할 뿐, 직접 크기를 지정할 수 없다.



### `max-width`

요소의 최대 가로 너비를 지정

#### 속성 값

| 의미 | 기본값 | 값 |
| --- | --- | --- |
| px , em , % 등 단위로 지정 | none | 단위 |
| 브라우저가 너비를 계산 |     | auto |


### `min-width`

요소의 최소 가로 너비를 지정

#### 속성 값

| 기본값 | 의미 | 값 |
| --- | --- | --- |
|     | px , em , % 등 단위로 지정 | 단위 |
|     | 브라우저가 너비를 계산 | auto |


### `max-height`

요소의 최대 세로 너비를 지정

#### 속성 값

| 기본값 | 의미 | 값 |
| --- | --- | --- |
| none | px , em , % 등 단위로 지정 | 단위 |
|     | 브라우저가 너비를 계산 | auto |


### `min-height`

요소의 최소 세로 너비를 지정

#### 속성 값

| 기본값 | 의미 | 값 |
| --- | --- | --- |
|     | px , em , % 등 단위로 지정 | 단위 |
|     | 브라우저가 너비를 계산 | auto |


### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)

