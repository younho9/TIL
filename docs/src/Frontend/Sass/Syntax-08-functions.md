# Syntax-08-functions

## Sass(SCSS) Syntax - 8. 함수(Functions)

> ❗️ 해당 글은 패스트캠퍼스 - 프론트엔드 개발 강의에서 HTML & CSS, SASS(SCSS) Part의 박영웅 강사님의 강의자료(Sass(SCSS) 완전 정복!)를 보며 정리한 것입니다.

### 함수(Functions)

함수와 `@mixins` 은 거의 유사하지만 반환되는 내용이 다르다

`@mixin` 은 지정한 스타일(Style)을 반환하는 반면,

함수는 보통 연산된(Computed) 값을 `@return` 지시어를 통해 반환한다.

```
// Mixins
@mixin 믹스인이름($매개변수) {
  스타일;
}

// Functions
@function 함수이름($매개변수) {
  @return 값
}
```

`@mixin` 은 `@include` 지시어를 사용하는 반면,

함수는 함수이름으로 바로 사용한다.

```
// Mixin
@include 믹스인이름(인수);

// Functions
함수이름(인수)
```

```
$max-width: 980px;

@function columns($number: 1, $columns: 12) {
  @return $max-width * ($number / $columns)
}

.box_group {
  width: $max-width;

  .box1 {
    width: columns();
  }
  .box2 {
    width: columns(8);
  }
  .box3 {
    width: columns(3);
  }
}
```

컴파일하면

```
.box_group {/* 총 너비 */width: 980px;}.box_group .box1 {/* 총 너비의 약 8.3% */width: 81.66667px;}.box_group .box2 {/* 총 너비의 약 66.7% */width: 653.33333px;}.box_group .box3 {/* 총 너비의 25% */width: 245px;}
```

함수는 `@include` 같은 별도의 지시어 없이 사용하기 때문에 내장 함수(Built-in Functions)의 이름이 충돌할 가능성이 있다.

따라서 지정한 함수에는 별도의 접두어를 붙여 충돌을 방지하는 것이 좋다.

예를 들어, `red()` 라는 내장 함수가 있다.

같은 이름을 사용하면 이름이 충돌하기 때문에 별도의 접두어를 붙여 `extract-red()` 같은 이름을 만든다.

```
// 내가 정의한 함수
@function extract-red($color) {
  // 내장 함수
  @return rgb(red($color), 0, 0);
}

div {
  color: extract-red(#D55A93);
}
```

혹은 특별한 이름을 접두어로 사용할 수도 있다.

`my-custom-func-red()`

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)

[Sass(SCSS) 완전 정복!](https://heropy.blog/2018/01/31/sass/)
