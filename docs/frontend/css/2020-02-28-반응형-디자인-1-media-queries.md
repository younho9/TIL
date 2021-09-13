---
icon: ./images/2020-02-28-반응형-디자인-1-media-queries-icon-0.png
slug: '반응형-디자인-1-media-queries'
title: '반응형 디자인 1.Media queries'
main_category: Frontend
category: 2. CSS
author: Younho Choo
author_title: younho9
author_url: https://github.com/younho9
author_image_url: https://avatars.githubusercontent.com/u/48426991
created_time: 2020-02-28
updated_time: 2021-02-15
---

> ❗️ 해당 글은
> [패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/)에
> 서 HTML & CSS, SASS(SCSS) Part의
> [박영웅 강사님](https://github.com/ParkYoungWoong)의 강의자료를 정리한 것입니
> 다.

### **`@media`**

다양한 미디어 유형이나 장치에 따라, 서로 다른 스타일 규칙을 적용

#### **사용법**

```css
@media 미디어타입 and (미디어특성) { /* 미디어타입은 생략 가능 */ CSS코드
}
```

#### **예제**

```css
@media screen and (max-width: 1200px) {
  body {
    color: red;
  }
}
```

> ☝️ 일종의 조건문

#### **미디어타입**

| 타입   | 의미                             | 기본값 |
| ------ | -------------------------------- | ------ |
| all    | 모든 미디어 타입에 적용          | all    |
| screen | 컴퓨터 화면, 타블렛, 스마트폰 등 |        |
| print  | 인쇄 전용                        |        |

#### **미디어특성**

| 특성        | 의미                                |
| ----------- | ----------------------------------- |
| width       | 뷰포트 가로너비                     |
| max-width   | 뷰포트 최대 가로 너비(이하)         |
| min-width   | 뷰포트 최소 가로 너비(이상)         |
| height      | 뷰포트 세로 너비                    |
| max-height  | 뷰포트 최대 세로 너비(이하)         |
| min-height  | 뷰포트 최소 세로 너비(이상)         |
| orientation | 뷰포트 방향( portrait , landscape ) |
| 기타        | 다른 특성들..                       |

#### **미디어옵션**

> ☝️ 디바이스 종류에 따른 단위는 '기획 / 디자인' 단계에서 결정하는 것이 효과적이
> 다.

| 종류           | 디바이스         | 단위(px)    |
| -------------- | ---------------- | ----------- |
| Large Devices  | Desktops         | 1024px 이상 |
| Medium Devices | Tablets          | 1024px 이하 |
| Small Devices  | Tablets + Phones | 768px 이하  |

> 🔗 부트스트랩 그리드 시스템

#### **미디어 파일 관리**

`main.css` 안에 반응형을 위한 `@media` 코드를 작성하면, 너무 길어지고 한 속성을
보기 위해 위 아래로 스크롤을 자주해야 하는 단점이 있다.

따라서 `main.css` 내부의 반응형을 위한 코드는 외부의 다른 파일로 추출해내고
, `html` 파일 에 따로 링크하는 방법이 있다.

#### **기존 코드**

`main.css`

```css
/* MEDIA */
@media (max-width: 1024px) {
  /* 선택자와 속성들 */
}
```

#### **바뀐 코드**

`main_midium.css`

```css
/* 선택자와 속성들 */
```

`main_midium.css` 파일에는 `midium` 즉 태블릿 크기의 디바이스를 위한 반응형 코드
들이 들어있는데, 이제 `@media` 부분은 생략하고 반응형 코드만 작성하면 된다.

`index.html`

```html
<link rel="stylesheet" href="css/main.css" />
<link
  rel="stylesheet"
  media="all and (max-width: 1024px)"
  href="css/main_medium.css"
/>
```

`main.css` 를 연결하고, 반응형이 들어있는 `main_midium.css` 도 연결하는데, 이 때
 `midia` 속성을 사용하여 미디어 타입과 특성을 정의해 사용할 수 있다.

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) -
HTML & CSS, SASS(SCSS) Part by
[ParkYoungWoong](https://github.com/ParkYoungWoong)

[CSS Grid 완벽 가이드](https://heropy.blog/2019/08/17/css-grid/)
