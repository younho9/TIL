---
id: CSS-속성-15-columns
title: 'CSS 속성 15. columns'
---

> ❗️ 해당 글은 [패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/)에서 HTML & CSS, SASS(SCSS) Part의 [박영웅 강사님](https://github.com/ParkYoungWoong)의 강의자료를 정리한 것입니다.

일반 블록 레이아웃을 확장하여 여러 텍스트 다단으로 쉽게 정리하며, 가독성 확보

![CSS-속성-15-columns-image-0](images/CSS-속성-15-columns-image-0.png)

columns

<br/>

### `columns`

다단을 정의 - 단축 속성

<br/>

#### 속성 값

| 기본값   | 의미                               | 값           |
| -------- | ---------------------------------- | ------------ |
| ['auto'] | 브라우저가 단의 너비와 개수를 설정 | auto         |
| ['auto'] | 단의 최적 너비를 설정              | column-width |
| ['auto'] | 단의 개수를 설정                   | column-count |

#### 사용법

```plain text
columns: 너비 개수;
```

```plain text
.text {columns: 100px 2;}
```

<br/>

### `column-width`

단의 최적 너비를 설정 - 개별 속성

<br/>

#### 속성 값

| 의미                        | 기본값 | 값   |
| --------------------------- | ------ | ---- |
| 브라우저가 단의 너비를 설정 | auto   | auto |
| px , em , cm 등 단위로 지정 |        | 단위 |

#### 사용법

```plain text
column-width: 너비;
```

> ☝️ 각 단이 줄어들 수 있는 최적 너비(최소 너비)를 설정하며, 요소의 너비가 가변하 하나의 단이 최적 너비보다 줄어들 경우 단의 개수가 조정된다.

<br/>

### `column-count`

단의 개수를 설정 - 개별 속성

<br/>

#### 속성 값

| 의미                        | 기본값 | 값   |
| --------------------------- | ------ | ---- |
| 브라우저가 단의 개수를 설정 | auto   | auto |
| 단의 개수를 설정            |        | 숫자 |

#### 사용법

```plain text
column-count: 개수;
```

<br/>

### `column-gap`

단과 단 사이의 간격 설정

<br/>

#### 속성 값

| 의미                                          | 기본값 | 값     |
| --------------------------------------------- | ------ | ------ |
| 브라우저가 단과 단 사이의 간격을 설정 ( 1em ) | normal | normal |
| px , em , cm 등 단위로 지정                   |        | 단위   |

#### 사용법

```plain text
column-gap: 간격;
```

<br/>

### `column-rule`

단과 단 사이의 (구분)선을 지정 - 단축 속성

| 기본값               | 의미             | 값                |
| -------------------- | ---------------- | ----------------- |
| medium               | 선의 두께를 지정 | column-rule-width |
| none                 | 선의 종류를 지정 | column-rule-style |
| 요소의 글자색과 동일 | 선의 색상을 지정 | column-rule-color |

#### 사용법

```plain text
column-rule: 두께 종류 색상;
```

<br/>

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)
