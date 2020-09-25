# Syntax-09-flow-control

## Sass(SCSS) Syntax - 9. 흐름 제어(Flow Control)

> ❗️ 해당 글은 패스트캠퍼스 - 프론트엔드 개발 강의에서 HTML & CSS, SASS(SCSS) Part의 박영웅 강사님의 강의자료(Sass(SCSS) 완전 정복!)를 보며 정리한 것입니다.

### 흐름 제어(Flow Control)

#### if (함수)

조건의 값( `true` , `false` )에 따라 두 개의 표현식 중 하나만 반환한다.

JS의 조건부 삼항 연산자(conditional ternary operator)와 비슷한 개념

조건의 값이 `true` 이면 `표현식1` 을,

조건의 값이 `false` 이면 `표현식2` 를 실행한다.

```
if(조건, 표현식1, 표현식2)
```

```
$width: 555px;
div {
  width: if($width > 300px, $width, null);
}
```

컴파일하면

```
div {width: 555px;}
```

#### `@if`

`@if` 는 조건이 따른 분기 처리가 가능하다.

같이 사용할 수 있는 지시어로는 `@else` , `@else if` 가 있다.

```
// @if
@if (조건) {
  /* 조건이 참일 때 구문 */
}

// @if @else
@if (조건) {
  /* 조건이 참일 때 구문 */
} @else {
  /* 조건이 거짓일 때 구문 */
}

// @if @else if
@if (조건1) {
  /* 조건1이 참일 때 구문 */
} @else if (조건2) {
  /* 조건 1이 거짓이고, 조건2가 참일 때 구문 */
} @else {
  /* 모두 거짓일 때 구문 */
}
```

조건에 `()` 는 생략 가능하다.

```
$color: orange;
div {
  @if $color == strawberry {
    color: #FE2E2E;
  } @else if $color == orange {
    color: #FE9A2E;
  } @else if $color == banana {
    color: #FFFF00;
  } @else {
    color: #2A1B0A;
  }
}
```

컴파일하면

```
div {color: #FE9A2E;}
```

논리 연산자 `and` , `or` , `not` 을 사용할 수 있다.

```
@function limitSize($size) {
  @if $size >= 0 and $size <= 200px {
    @return 200px;
  } @else {
    @return 800px;
  }
}

div {
  width: limitSize(180px);
  height: limitSize(340px);
}
```

컴파일하면

```
div {width: 200px;height: 800px;}
```

내장 함수 `unitless()` (숫자에 단위가 있는지 여부를 반환하는 함수)를 사용하는 예제

```
@mixin pCenter($w, $h, $p: absolute) {
  @if
    $p == absolute
    or $p == fixed
    or not $p == relative
    or not $p == static
  {
    width: if(unitless($w), #{$w}px, $w);
    height: if(unitless($h), #{$h}px, $h);
    position: $p;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}

.box1 {
  @include pCenter(10px, 20px);
}
.box2 {
  @include pCenter(50, 50, fixed);
}
.box3 {
  @include pCenter(100, 200, relative);
}
```

컴파일하면

```
.box1 {width: 10px;height: 20px;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;}.box2 {width: 50px;height: 50px;position: fixed;top: 0;bottom: 0;left: 0;right: 0;margin: auto;}
```

#### `@for`

`@for` 는 스타일을 반복적으로 출력한다.

`@for` 는 `through` 를 사용하는 형식과 `to` 를 사용하는 형식으로 나뉜다.

두 형식은 종료 조건이 해석되는 방식이 다르다.

```
// through
// 종료 만큼 반복
@for $변수 from 시작 through 종료 {
  // 반복 내용
}

// to
// 종료 직전까지 반복
@for $변수 from 시작 to 종료 {
  // 반복 내용
}
```

차이점을 이해하기 위한 다음 예제

변수는 관례상 `$i` 를 사용한다.

```
// 1부터 3번 반복
@for $i from 1 through 3 {
  .through:nth-child(#{$i}) {
    width : 20px * $i
  }
}

// 1부터 3 직전까지만 반복(2번 반복)
@for $i from 1 to 3 {
  .to:nth-child(#{$i}) {
    width : 20px * $i
  }
}
```

컴파일하면

```
.through:nth-child(1) { width: 20px; }.through:nth-child(2) { width: 40px; }.through:nth-child(3) { width: 60px; }.to:nth-child(1) { width: 20px; }.to:nth-child(2) { width: 40px; }
```

`to` 는 주어진 값 직전까지만 반복해야할 경우 사용.

하지만 `:nth-child()` 에서 특히 유용하게 사용되는 `@for` 는 일반적으로 `through` 를 사용한다.

#### `@each`

`@each` 는 List와 Map 데이터를 반복할 때 사용.

`for in` 문과 유사하다.

```
@each $변수 in 데이터 {
  // 반복 내용
}
```

List 데이터를 반복하는 예제.

```
// List Data
$fruits: (apple, orange, banana, mango);

.fruits {
  @each $fruit in $fruits {
    li.#{$fruit} {
      background: url("/images/#{$fruit}.png");
    }
  }
}
```

컴파일하면

```
.fruits li.apple {background: url("/images/apple.png");}.fruits li.orange {background: url("/images/orange.png");}.fruits li.banana {background: url("/images/banana.png");}.fruits li.mango {background: url("/images/mango.png");}
```

매번 반복마다 `Index` 값이 필요할 경우에 `index()` 내장 함수를 사용할 수 있다.

```
$fruits: (apple, orange, banana, mango);

.fruits {
  @each $fruit in $fruits {
    $i: index($fruits, $fruit);
    li:nth-child(#{$i}) {
      left: 50px * $i;
    }
  }
}
```

컴파일하면

```
.fruits li:nth-child(1) {left: 50px;}.fruits li:nth-child(2) {left: 100px;}.fruits li:nth-child(3) {left: 150px;}.fruits li:nth-child(4) {left: 200px;}
```

동시에 여러 개의 List 데이터를 반복 처리할 수도 있다.

```
$apple: (apple, korea);
$orange: (orange, china);
$banana: (banana, japan);

@each $fruit, $country in $apple, $orange, $banana {
  .box-#{$fruit} {
    background: url("/images/#{$country}.png");
  }
}
```

컴파일하면

```
.box-apple {background: url("/images/korea.png");}.box-orange {background: url("/images/china.png");}.box-banana {background: url("/images/japan.png");}
```

Map 데이터를 반복할 경우에는 하나의 데이터에 두 개의 변수가 필요하다.

```
@each $key변수, $value변수 in 데이터 {
  // 반복 내용
}
```

```
$fruits-data: (
  apple: korea,
  orange: china,
  banana: japan
);

@each $fruit, $country in $fruits-data {
  .box-#{$fruit} {
    background: url("/images/#{$country}.png");
  }
}
```

컴파일하면

```
.box-apple {background: url("/images/korea.png");}.box-orange {background: url("/images/china.png");}.box-banana {background: url("/images/japan.png");}
```

#### `@while`

`@while` 은 조건이 `false` 로 평가될 때까지 내용을 반복한다. `while` 문과 유사하게 잘못된 조건으로 인해 컴파일 중 무한 루프에 빠질 수 있다.

```
@while 조건 {
  // 반복 내용
}
```

```
$i: 6;

@while $i > 0 {
  .item-#{$i} {
    width: 2px * $i;
  }
  $i: $i - 2;
}
```

컴파일하면

```
.item-6 { width: 12px; }.item-4 { width: 8px; }.item-2 { width: 4px; }
```

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)

[Sass(SCSS) 완전 정복!](https://heropy.blog/2018/01/31/sass/)
