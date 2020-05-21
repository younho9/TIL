# Sass(SCSS) Syntax - 3. 변수

> ❗️ 해당 글은 [패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/)에서 HTML & CSS, SASS(SCSS) Part의 [박영웅 강사님](https://github.com/ParkYoungWoong)의 강의자료([Sass(SCSS) 완전 정복!](https://heropy.blog/2018/01/31/sass/))를 보며 정리한 것입니다.

## 변수(Variables)

반복적으로 사용되는 값을 변수로 지정할 수 있다.

변수 이름 앞에 항상 `$` 를 붙여야 한다.

```scss
$변수이름: 속성값;
```

```scss
$color-primary: #e96900;
$url-images: "/assets/images/";
$w: 200px;

.box {
  width: $w;
  margin-left: $w;
  background: $color-primary url($url-images + "bg.jpg");
}
```

컴파일하면

```css
.box {
  width: 200px;
  margin-left: 200px;
  background: #e96900 url("/assets/images/bg.jpg");
}
```

### 변수 유효범위(Variable Scope)

변수는 유효범위가 있어서 선언된 블록 ( `{}` ) 내부에서만 사용할 수 있다.

```scss
.box1 {
  $color: #111;
  background: $color;
}
// Error
.box2 {
  background: $color;
}
```

> ☝️ 변수 `$color` 가 `.box1` 의 블록 안에서 설정되었기 때문에 블록 밖인 `.box2` 에서는 사용할 수 없다.

> 🔗 [중첩 벗어나기 `@at-root`](./Syntax-2-nesting.md) 참조

### 변수 재 할당(Variable Reassignment)

변수에 변수를 할당할 수 있다.

```scss
$red: #ff0000;
$blue: #0000ff;

$color-primary: $blue;
$color-danger: $red;

.box {
  color: $color-primary;
  background: $color-danger;
}
```

> ☝️ `$color-primary` 변수에 `$blue` 변수가 할당되었다.

컴파일하면

```css
.box {
  color: #0000ff;
  background: #ff0000;
}
```

### 전역설정 `!global`

`!global` 플래그를 사용하면 특정 블록 내부에 정의된 변수라 하더라도 유효범위를 전역으로 설정할 수 있다.

```scss
.box1 {
  $color: #111 !global;
  background: $color;
}
.box2 {
  background: $color;
}
```

컴파일하면

```css
.box1 {
  background: #111;
}
.box2 {
  background: #111;
}
```

기존의 같은 이름의 변수가 사용되고 있을 경우 값이 덮어져 사용될 수 있다.

```scss
$color: #000;
.box1 {
  $color: #111 !global;
  background: $color;
}
.box2 {
  background: $color;
}
.box3 {
  $color: #222;
  background: $color;
}
```

컴파일하면

```css
.box1 {
  background: #111;
}
.box2 {
  background: #111;
}
.box3 {
  background: #222;
}
```

### 초깃값 설정 `!default`

`!default` 는 기존에 변수가 할당되어 있으면, 기존 할당 값을 사용하게 하고, 기존에 변수가 할당되어 있지 않으면 초깃값으로 설정한다.

```scss
$color-primary: red;

.box {
  $color-primary: blue !default;
  background: $color-primary;
}
```

컴파일하면

```css
.box {
  background: red;
}
```

> ☝️ `$color-primary` 가 전역에서 `red` 로 **기존에 할당되어** 있기 때문에 `.box` 블록 내부에서 `blue` 가 아니라 `red` 로 컴파일된다.

> ☝️ '변수와 값을 설정하겠지만, 혹시 기존 변수가 있을 경우는 현재 설정하는 변수의 값은 사용하지 않겠다' 라는 의미
>
> ✌️ 외부 라이브러리의 경우, 라이브러리를 불러온 사용자가 기존에 설정한 변수와 이름이 같을 경우에 사용자의 설정을 우선해서 사용하도록 `!default` 플래그를 설정해 놓는다.

### 문자 보간 `#{}`

`#{}` 키워드를 사용해 코드의 공간 어디든지 변수 값을 넣을 수 있다.

```scss
$family: unquote("Droid+Sans");
@import url("http://fonts.googleapis.com/css?family=#{$family}");
```

컴파일하면

```css
@import url("http://fonts.googleapis.com/css?family=Droid+Sans");
```

> ☝️ `unquote()` 는 문자에서 따옴표를 제거하는 Sass의 내장 함수.
>
> `$family` 변수의 값을 url 주소 사이에 끼워 넣었다.

## Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)

[Sass(SCSS) 완전 정복!](https://heropy.blog/2018/01/31/sass/)
