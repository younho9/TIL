---
id: Syntax-06-mixins
title: 'Syntax-06-mixins'
---

## Sass(SCSS) Syntax - 6. 재활용(Mixins)

> ❗️ 해당 글은 패스트캠퍼스 - 프론트엔드 개발 강의에서 HTML & CSS, SASS(SCSS) Part의 박영웅 강사님의 강의자료(Sass(SCSS) 완전 정복!)를 보며 정리한 것입니다.

### 재활용(Mixins)

Sass Mixins는 스타일 시트 전체에서 **재사용 할 CSS 선언 그룹을 정의**하는 기능이다.

Mixin 사용법을 두 가지로 나누면 선언하기( `@mixin` )와 포함하기( `@include` )이다.

#### `@mixin`

기본적인 `@mixin` 선언법은 다음과 같은데, SCSS와 Sass의 문법이 조금 차이가 있다.

```plain text
// SCSS
@mixin 믹스인이름 {
  스타일;
}

// Sass
=믹스인이름
  스타일
```

```plain text
// SCSS
@mixin large-text {
  font-size: 22px;
  font-weight: bold;
  font-family: sans-serif;
  color: orange;
}

// Sass
=large-text
  font-size: 22px
  font-weight: bold
  font-family: sans-serif
  color: orange
```

또한 `@mixin` 은 선택자를 포함 가능하고, 상위(부모) 요소 참조( `&` 등)도 가능하다.

```plain text
@mixin large-text {
  font: {
    size: 22px;
    weight: bold;
    family: sans-serif;
  }
  color: orange;

  &::after {
    content: "!!";
  }

  span.icon {
    background: url("/images/icon.png");
  }
}
```

#### `@include`

선언된 `@mixin` 을 사용할 때는 `@include` 를 사용한다. 역시 SCSS와 Sass가 약간의 차이가 있다.

```plain text
// SCSS
@include 믹스인이름;

// Sass
+믹스인이름
```

```plain text
// SCSS
h1 {
  @include large-text;
}
div {
  @include large-text;
}

// Sass
h1
  +large-text
div
  +large-text
```

컴파일하면

```plain text
h1 {font-size: 22px;font-weight: bold;font-family: sans-serif;color: orange;}h1::after {content: "!!";}h1 span.icon {background: url("/images/icon.png");}div {font-size: 22px;font-weight: bold;font-family: sans-serif;color: orange;}div::after {content: "!!";}div span.icon {background: url("/images/icon.png");}
```

#### 인수(Arguments)

Mixin은 함수(Functions)처럼 인수(Arguments)를 가질 수 있다.

```plain text
// SCSS
@mixin 믹스인이름($매개변수) {
  스타일;
}
@include 믹스인이름(인수);

// Sass
=믹스인이름($매개변수)
  스타일

+믹스인이름(인수)
```

```plain text
@mixin dash-line($width, $color) {
  border: $width dashed $color;
}

.box1 { @include dash-line(1px, red); }
.box2 { @include dash-line(4px, blue); }
```

컴파일하면

```plain text
.box1 {border: 1px dashed red;}.box2 {border: 4px dashed blue;}
```

#### 인수의 기본값 설정

인수(Arguments)는 기본값(default value)를 가질 수 있다.

`@include` 포함 단계에서 별도의 인수가 전달되지 않는 경우에 기본값을 사용하게 된다.

```plain text
@mixin 믹스인이름($매개변수: 기본값) {
  스타일;
}
```

```plain text
@mixin dash-line($width: 1px, $color: black) {
  border: $width dashed $color;
}

.box1 { @include dash-line; }
.box2 { @include dash-line(4px); }
```

컴파일하면

```plain text
.box1 {border: 1px dashed black;}.box2 {border: 4px dashed black;}
```

#### 키워드 인수(Keyword Arguments)

`@mixin` 에 매개변수가 여러 개 일 때, `@include` 에서 인수의 값만 입력하면, 여러 매개변수에 인수가 순차적으로 전달되게 된다.

하지만 인수의 값만 입력하는 것이 아니라 명시적으로 키워드(변수)를 입력하여 전달하게 되면, 순서에 상관 없이 원하는 매개변수에 인수를 전달할 수 있다.

이 때, 작성하지 않은 인수가 적용될 수 있도록 `@mixin` 에서 기본값을 설정해 주는 것이 좋다.

```plain text
@mixin 믹스인이름($매개변수A: 기본값, $매개변수B: 기본값) {
  스타일;
}

@include 믹스인이름($매개변수B: 인수);
```

```plain text
@mixin position(
  $p: absolute,
  $t: null,
  $b: null,
  $l: null,
  $r: null
) {
  position: $p;
  top: $t;
  bottom: $b;
  left: $l;
  right: $r;
}

.absolute {
  // 키워드 인수로 설정할 값만 전달
  @include position($b: 10px, $r: 20px);
}
.fixed {
  // 인수가 많아짐에 따라 가독성을 확보하기 위해 줄바꿈
  @include position(
    fixed,
    $t: 30px,
    $r: 40px
  );
}
```

컴파일하면

```plain text
.absolute {position: absolute;bottom: 10px;right: 20px;}.fixed {position: fixed;top: 30px;right: 40px;}
```

#### 인수 리스트(Argument Lists)

때때로 입력할 인수의 개수가 불확실한 경우가 있는데, 그 때를 위해 인수 리스트를 사용할 수 있다.

> 🔗 Argument Lists🔗 Taking Arbitrary Arguments

매개변수 뒤에 `...` 를 붙여주는 것으로 사용할 수 있다.

```plain text
@mixin 믹스인이름($매개변수...) {
  스타일;
}

@include 믹스인이름(인수A, 인수B, 인수C);
```

```plain text
// 인수를 순서대로 하나씩 전달 받다가, 3번째 매개변수($bg-values)는 인수의 개수에 상관없이 받음
@mixin bg($width, $height, $bg-values...) {
  width: $width;
  height: $height;
  background: $bg-values;
}

div {
  // 위의 Mixin(bg) 설정에 맞게 인수를 순서대로 전달하다가 3번째 이후부터는 개수에 상관없이 전달
  @include bg(
    100px,
    200px,
    url("/images/a.png") no-repeat 10px 20px,
    url("/images/b.png") no-repeat,
    url("/images/c.png")
  );
}
```

컴파일하면

```plain text
div {width: 100px;height: 200px;background: url("/images/a.png") no-repeat 10px 20px,url("/images/b.png") no-repeat,url("/images/c.png");}
```

인수 리스트는 `@mixin` 으로 전달할 때도 사용할 수 있다.

```plain text
@mixin font(
  $style: normal,
  $weight: normal,
  $size: 16px,
  $family: sans-serif
) {
  font: {
    style: $style;
    weight: $weight;
    size: $size;
    family: $family;
  }
}
div {
  // 매개변수 순서와 개수에 맞게 리스트로 전달
  $font-values: italic, bold, 16px, sans-serif;
  @include font($font-values...);
}
span {
  // 필요한 값만 맵으로 변수에 담아 전달
  $font-values: (style: italic, size: 22px);
  @include font($font-values...);
}
a {
  // 필요한 값만 맵으로 전달
  @include font((weight: 900, family: monospace)...);
}
```

`$font-values` 는 `div` 에서는 리스트로, `span` , `a` 에서는 맵으로 사용된 변수이다.

`...` 을 변수 뒤에 추가하여 인수로 전달함으로 여러 변수들을 한번에 전달할 수 있다.

#### `@content`

`@mixin` 을 선언할 때 `@content` 를 사용하면 `@include` 를 사용해 원하는 스타일 블록을 추가해서 전달할 수 있다.

```plain text
@mixin 믹스인이름() {
  스타일;
  @content;
}

@include 믹스인이름() {
  // 스타일 블록
  스타일;
}
```

```plain text
@mixin icon($url) {
  &::after {
    content: $url;
    @content;
  }
}
.icon1 {
  // icon Mixin의 기존 기능만 사용
  @include icon("/images/icon.png");
}
.icon2 {
  // icon Mixin에 스타일 블록을 추가하여 사용
  @include icon("/images/icon.png") {
    position: absolute;
  };
}
```

컴파일하면

```plain text
.icon1::after {content: "/images/icon.png";}.icon2::after {content: "/images/icon.png";position: absolute;}
```

`@mixin` 에 전달되는 스타일 블록은 `@mixin` 에 전달되기 전 `@include` 범위에서 평가된다.

즉, `@mixin` 의 매개변수가 아니라 전역변수로 해석된다.

```plain text
$color: red;

@mixin colors($color: blue) {
  // Mixin의 범위
  @content;
  background-color: $color;
  border-color: $color;
}

div {
  @include colors() {
    // 스타일 블록이 정의된 범위
    color: $color;
  }
}
```

컴파일하면

```plain text
div {color: red;background-color: blue;border-color: blue;}
```

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)

[Sass(SCSS) 완전 정복!](https://heropy.blog/2018/01/31/sass/)

[Argument Lists](https://sass-lang.com/documentation/values/lists#argument-lists)

[Taking Arbitrary Arguments](https://sass-lang.com/documentation/at-rules/mixin#taking-arbitrary-arguments)
