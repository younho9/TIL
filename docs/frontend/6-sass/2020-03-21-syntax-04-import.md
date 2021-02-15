---
icon: ./images/2020-03-21-syntax-04-import-icon-0.png
slug: 'syntax-04-import'
title: 'Syntax-04-import'
main_category: Frontend
category: 6. Sass
author: younho9
created_time: 2020-03-21
updated_time: 2021-02-15
---

## Sass(SCSS) Syntax - 4. 가져오기( `@import` )

> ❗️ 해당 글은 패스트캠퍼스 - 프론트엔드 개발 강의에서 HTML & CSS, SASS(SCSS) Part의 박영웅 강사님의 강의자료(Sass(SCSS) 완전 정복!)를 보며 정리한 것입니다.

### 가져오기( `@import` )

CSS에서 `@import` 로 외부 CSS를 불러오는 것처럼 Sass에서도 `@import` 를 사용해서 여러 Sass파일들을 불러올 수 있는데, CSS와 문법이나 작동방식이 다르다.

CSS와 다른 점은, Sass는 기본적으로 외부의 Sass(또는 SCSS) 파일의 내용을 가져와 **파일의 내용을 현재 파일에 추가**하는 개념이고, CSS의 `@import` 는 다른 CSS **파일의 로딩을 http에 요청**하는 개념이다.

따라서 Sass에서 `@import` 를 사용하면 최종적으로 하나의 CSS로 컴파일해주기 때문에 여러 번의 요청을 보낼 필요가 없어서 성능적으로도 좋다. 또한 가져온 파일에 정의된 모든 변수 또는 Mixins 등을 주 파일에서 사용할 수 있으므로 유용하다.

> 🔗 CSS - Overview - @import 방식 참조

Sass는 기본적으로 Sass(또는 SCSS) 파일을 가져오지만, 몇 가지 경우에는 CSS `@import` 문법으로 변환되므로 주의해야한다.

- 파일 확장자가 `.css` 일 때

- 파일 이름이 `http://` 로 시작하는 경우

- `url()` 이 붙었을 경우

- 미디어쿼리가 있는 경우

```plain text
@import "hello.css";
@import "http://hello.com/hello";
@import url(hello);
@import "hello" screen;
```

#### 여러 파일 가져오기

하나의 `@import` 로 여러 파일을 가져올 수도 있다.

파일 이름은 `,` 로 구분한다.

```plain text
@import "header", "footer";
```

> ☝️ 확장자 없이 파일 이름만으로 가져오기를 하면, 파일명.scss , 파일명.sass , *파일명.scss , *파일명.sass 이 있는지 검색하고 가져온다. 여러 파일이 존재하면 에러가 발생한다.

#### 파일 분할(Partials)

프로젝트 규모가 커지면 파일들을 `header.scss` , `side-menu.scss` … 처럼 각 기능과 부분으로 나눠 유지보수가 쉽도록 관리하게 되는데, 이렇게 되면 파일이 많아지고 컴파일시 각각의 `~.css` 파일로 저장된다면 관리나 성능 차원에서 문제가 될 수 있다.

이를 위해 Sass에서는 파일 분할(Partials) 기능을 지원한다.

파일 이름 앞에 `_` 를 붙여( `_header.scss` 처럼) `@import` 로 가져오면 컴파일 시 `~.css` 파일로 컴파일하지 않는다.

#### 예제

만약 파일 구조가 이러할 때,

```plain text
Sass-App# ...├─scss│  ├─header.scss│  ├─side-menu.scss│  └─main.scss# ...
```

`main.scss` 로 다른 파일들을 `@import` 하고

```plain text
// main.scss
@import "header", "side-menu"
```

`node-sass` 로 컴파일하면

```plain text
$ node-sass scss --output css
```

아래와 같이 `scss/`에 있던 파일들이 `css/` 안에 각 하나씩의 파일로 컴파일된다.

```plain text
Sass-App# ...├─css│  ├─header.css│  ├─side-menu.css│  └─main.css├─scss│  ├─header.scss│  ├─side-menu.scss│  └─main.scss# ...
```

이번엔 가져올 파일 이름에 `_` 를 붙이고, 메인 파일인 `main.scss` 에만 `_` 를 붙이지 않는다.

```plain text
Sass-App# ...├─scss│  ├─_header.scss│  ├─_side-menu.scss│  └─main.scss# ...
```

```plain text
// main.scss
@import "header", "side-menu";
```

컴파일하면…

```plain text
$ node-sass scss --output css
```

아래처럼 별도의 파일로 컴파일되지 않는다.

```plain text
Sass-App# ...├─css│  └─main.css  # main + header + side-menu├─scss│  ├─header.scss│  ├─side-menu.scss│  └─main.scss# ...
```

> ☝️ Webpack 이나 Parcel , Gulp 같은 일반적인 빌드툴에서는 Partials 기능을 사용할 필요 없이, 설정된 값에 따라 빌드되지만 되도록 \_ 를 사용할 것을 권장

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)

[Sass(SCSS) 완전 정복!](https://heropy.blog/2018/01/31/sass/)
