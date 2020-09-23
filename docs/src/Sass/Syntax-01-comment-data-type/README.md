# Syntax-01-comment-data-type

## Sass(SCSS) Syntax - 1. 주석, 데이터 타입

> ❗️ 해당 글은 패스트캠퍼스 - 프론트엔드 개발 강의에서 HTML & CSS, SASS(SCSS) Part의 박영웅 강사님의 강의자료(Sass(SCSS) 완전 정복!)를 보며 정리한 것입니다.

### 주석(Comment)

CSS에서 주석은 `/* 내용 */` 으로 작성했었다.

Sass(SCSS)는 JavaScript처럼 두 가지 종류의 주석을 사용할 수 있다.

```plain text
// CSS로 컴파일되지 않는 주석
/* CSS로 컴파일되는 주석 */
```

Sass(SCSS)에만 남기고 싶은 주석은 `//` 로, CSS에도 남겨야되는 주석인 경우에는 `/* */` 로 주석을 작성하면 된다.

또한 여러 줄 주석의 경우 Sass와 SCSS 간에 약간의 차이가 있다.

```plain text
/* Sass에서는
 * 여러 줄의 주석을 사용할 때
 * 각 줄에 Asterisk를 사용해야하고,
 * 각 Asterisk의 라인을 맞춰줘야한다. */
 
/* 맞추지 않는 경우
* 에러가 발생하며
  * 컴파일되지 않는다. */
```

```plain text
/*
scss에서는
여러 줄 주석에서 
각 줄에 Asterisk가 없어도 문제되지 않아
CSS와 호환이 쉽다.
*/
```

### 데이터 타입(Data Types)

| 설명 | 예시 | 데이터 |
| --- | --- | --- |
| 숫자 | 1, .82, 20px, 2em… | Numbers |
| 문자 | bold, relative, "/images/a.png", "dotum" | Strings |
| 색상 표현 | red, blue, #FFFF00, rgba(255,0,0,.5) | Colors |
| 논리 | true, false | Booleans |
| 아무것도 없음 | null | Nulls |
| 공백이나 ,로 구분된 값의 목록 | (apple, orange, banana), apple orange | Lists |
| Lists와 유사하나 값이 Key: Value 형태 | (apple: a, orange: o, banana: b) | Maps |


#### 데이터 타입들의 특이사항

- `Numbers` : 숫자에는 단위가 있을 수도 있고 없을 수도 있다.

- `Strings` : 문자에 따옴표가 있을 수도 있고 없을 수도 있다.

- `Nulls` : 속성 값에 `null` 이 사용된 경우 해당 속성을 컴파일하지 않는다.

- `Lists` : `()` 를 붙여도 되고 안붙여도 된다.

- `Maps` : `()` 를 꼭 붙여야 한다.

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)

[Sass(SCSS) 완전 정복!](https://heropy.blog/2018/01/31/sass/)

