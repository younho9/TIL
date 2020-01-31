# CSS 속성 13. `transition` & `transform`

> ❗️ 해당 글은 [패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/)에서 HTML & CSS, SASS(SCSS) Part의 [박영웅 강사님](https://github.com/ParkYoungWoong)의 강의자료를 정리한 것입니다. 

## `transition`

CSS 속성의 시작과 끝을 지정(전환 효과)하여 중간 값을 애니메이션 - 단축 속성

### 속성 값

| 값                           | 의미                         | 기본값 |
| ---------------------------- | ---------------------------- | ------ |
| `transition-property`        | 전환 효과를 사용할 속성 이름 | `all`  |
| `transition-duration`        | 전환 효과의 지속시간 설정    | `0s`   |
| `transition-timing-function` | 타이밍 함수 지정             | `ease` |
| `transition-delay`           | 전환 효과의 대기시간 설정    | `0s`   |

### 예제

```html
<div class="box"></div>
```

```css
.box {
  width: 100px;
  height: 100px;
  background: tomato;
  margin: 50px;
  transition: width 1s, background 2s;
}
.box:hover {
  width: 300px;
  background: dodgerblue;
}
```

> ☝️ `transition` 이 일어나기 전 단계에 속성을 지정한다.

## `transition-property`

전환 효과를 사용할 속성 이름을 설정 - 개별 속성

### 속성 값

| 값        | 의미                         | 기본값 |
| --------- | ---------------------------- | ------ |
| `all`     | 모든 속성에 적용             | `all`  |
| 속성 이름 | 전환 효과를 사용할 속성 이름 |        |

## `transition-duration`

전환 효과의 지속시간을 설정 - 개별 속성

### 속성 값

| 값   | 의미                      | 기본값 |
| ---- | ------------------------- | ------ |
| 시간 | 전환 효과가 지속되는 시간 | `0s`   |

> ☝️ `ms` 단위도 가능

## `transition-timing-function`

타이밍 함수(애니메이션 전환 효과를 계산하는 방법) 지정 - 개별 속성

### 속성 값

| 값                         | 의미                             | 기본값 | Cubic Bezier 값                 |
| -------------------------- | -------------------------------- | ------ | ------------------------------- |
| `ease`                     | 빠르게 - 느리게                  | `ease` | `cubic-bezier(.25, .1, .25, 1)` |
| `linear`                   | 일정하게                         |        | `cubic-bezier(0, 0, 1, 1)`      |
| `ease-in`                  | 느리게 - 빠르게                  |        | `cubic-bezier(.42, 0, 1, 1)`    |
| `ease-out`                 | 빠르게 - 느리게                  |        | `cubic-bezier(0, 0, .58, 1)`    |
| `ease-in-out`              | 느리게 - 빠르게 - 느리게         |        | `cubic-bezier(.42, 0, .58, 1)`  |
| `cubic-bezier(n, n, n, n)` | 자신만의 값을 정의 ( `0` ~ `1` ) |        |                                 |
| `steps(n)`                 | `n` 번 분할된 애니메이션         |        |                                 |

> [Easing Functions Cheat Sheet](https://easings.net/)

## `transition-delay`

전환 효과가 몇 초 뒤에 시작할지 대기시간을 설정 - 개별 속성

### 속성 값

| 값   | 의미                        | 기본값 |
| ---- | --------------------------- | ------ |
| 시간 | 전환 효과의 대기시간을 설정 | `0s`   |

> ☝️ `transition: 2s 3s;` 로 입력하면 앞에 오는 시간이 `duration` , 뒤에 오는 시간이 `delay` 이다.

## `transform`

요소의 변환 효과(변형)을 지정 - 단축 속성

### `transform` 2D 변환 함수

| 값(변환함수)               | 의미             | 단위       |
| -------------------------- | ---------------- | ---------- |
| `translate(x, y)`          | 이동(X축, Y축)   | 단위       |
| `translate(x)`             | 이동(X축)        | 단위       |
| `translate(y)`             | 이동(Y축)        | 단위       |
| `scale(x, y)`              | 크기(X축, Y축)   | 없음(배수) |
| `scaleX(x)`                | 크기(X축)        | 없음(배수) |
| `scaleY(y)`                | 크기(Y축)        | 없음(배수) |
| `rotate(degree)`           | 회전(각도)       | `deg`      |
| `skew(x-deg, y-deg)`       | 기울임(X축, Y축) | `deg`      |
| `skewX(x-deg)`             | 기울임(X축)      | `deg`      |
| `skewY(y-deg)`             | 기울임(Y축)      | `deg`      |
| `matrix(n, n, n, n, n, n)` | 2차원 변환 효과  | 없음       |

### `transform` 3D 변환 함수

| 값(변환함수)                                               | 의미                            | 단위        |
| ---------------------------------------------------------- | ------------------------------- | ----------- |
| `translate3d(x, y, z)`                                     | 이동(X축, Y축, Z축)             | 단위        |
| `translateZ(z)`                                            | 이동(Z축)                       | 단위        |
| `scale3d(x, y, z)`                                         | 크기(X축, Y축, Z축)             | 없음(배수)  |
| `scaleZ(z)`                                                | 크기(Z축)                       | 없음(배수)  |
| `rotate3d(x, y, z, a)`                                     | 회전(X벡터, Y벡터, Z벡터, 각도) | 없음, `deg` |
| `rotateX(x)`                                               | 회전(X축)                       | `deg`       |
| `rotateY(y)`                                               | 회전(Y축)                       | `deg`       |
| `rotateZ(z)`                                               | 회전(Z축)                       | `deg`       |
| `perspective(n)`                                           | 원근법(거리)                    | 단위        |
| `matrix3d(n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n)` | 3차원 변환 효과                 | 없음        |

### 사용법

```css
transform: 변환함수1 변환함수2 변환함수3 ...;
transform: 원근법 이동 크기 회전 기울임;
```

```css
.box {
  transform: rotate(20deg) translate(10px, 0);
}
```

> 2D 변형 효과, 3D 변형 효과가 있다.

### 2D 예제

```html
<div class="box">123</div>
```

```css
.box {
  width: 200px;
  height: 200px;
  background: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  transition: 1s;
}
.box:hover {
  transform: translate(30px, 30px);
}
```

> ☝️ `translate(30px, 30px)` vs `position: relative; left: 30px; top: 30px;` : `position` 은 어느 위치에 배치해놓고 위치가 다시 변하지 않는 경우에 사용하고 (애니메이션에 최적화되어 있지 않다.) `translate` 는 위치가 수시로 변할 수 있는 경우에 사용한다.

### 3D 예제

```html
<img src="https://heropy.blog/css/images/logo.png" alt="HEROPY">
```

```css
img {
  width: 300px;
  border: 1px solid lightgray;
  transform: perspective(500px) rotateX(45deg);
}
```

> ☝️ `perspective()` 는 `transform`의 속성 값 중에 제일 앞에 와야 한다. 

### `transform` 변환 속성

| 속성                  | 의미                                               |
| --------------------- | -------------------------------------------------- |
| `transform-origin`    | 요소 변환의 기준점을 설정                          |
| `transform-style`     | 3D 변환 요소의 자식 요소도 3D 변환을 사용할지 설정 |
| `perspective`         | 하위 요소를 관찰하는 원근 거리를 설정              |
| `perspective-origin`  | 원근 거리의 기준점을 설정                          |
| `backface-visibility` | 3D 변환으로 회전된 요소의 뒷면 숨김을 설정         |

## `transform-origin`

요소 변환의 기준점을 설정

### 속성 값

| 값   | 의미                                     | 기본값 |
| ---- | ---------------------------------------- | ------ |
| X축  | `left` , `right` , `center` , `%` , 단위 | `50%`  |
| Y축  | `top` , `bottom` , `center` , `%` , 단위 | `50%`  |
| Z축  | 단위                                     | `0`    |

### 예제

```html
<img src="https://heropy.blog/css/images/logo.png" alt="HEROPY">
```

```css
img {
  width: 200px;
  border: 1px solid lightgray;
  transition: 1s;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}
```

## `transform-style`

3D 변환 요소의 자식 요소도 3D 변환을 사용할지 설정

### 속성 값

| 값            | 의미                                | 기본값 |
| ------------- | ----------------------------------- | ------ |
| `flat`        | 자식 요소의 3D 변환을 사용하지 않음 | `flat` |
| `preserve-3d` | 자식 요소의 3D 변환을 사용함        |        |

### 예제

```html
<div class="perspective">
  <div class="grand-parent">
    <div class="parent">
      <img src="https://heropy.blog/css/images/logo.png" alt="HEROPY">
    </div>
  </div>
</div>
```

```css
.perspective {
  width: 200px;
  perspective: 500px;
  padding: 70px;
}
.grand-parent{
  width: 200px;
  border: 3px solid dodgerblue;
  transition: 1s;
  transform: rotateX(-45deg);
  transform-style: preserve-3d;
}
.parent {
  width: 200px;
  border: 3px solid tomato;
  transition: 1s;
  transform: rotateY(45deg);
  transform-style: preserve-3d; 
}
img {
  width: 200px;
  border: 3px solid lightgray;
  transition: 1s;
  transform: rotateX(45deg);
}
```

## `perspective`

하위 요소를 관찰하는 원근 거리를 설정

### 속성 값

| 값   | 의미                              | 기본값 |
| ---- | --------------------------------- | ------ |
| 단위 | `px` , `em` , `cm` 등 단위로 지정 |        |

### `perspective` 속성과 함수의 차이점

| 속성/함수                  | 적용대상              | 기준점 설정          |
| -------------------------- | --------------------- | -------------------- |
| `perspective`              | 관찰 대상의 부모 요소 | `perspective-origin` |
| `transform: perspective()` | 관찰 대상             | `transform-origin`   |

## `perspective-origin`

원근 거리의 기준점을 설정

### 속성 값

| 값    | 의미                                     | 기본값 |
| ----- | ---------------------------------------- | ------ |
| `X축` | `left` , `right`, `center`, `%` , 단위   | `50%`  |
| `Y축` | `top` , `bottom` , `center` , `%` , 단위 | `50%`  |

## `backface-visibility`

3D 변환으로 회전된 요소의 뒷면 숨김을 설정

### 속성 값

| 값        | 의미             | 기본값    |
| --------- | ---------------- | --------- |
| `visible` | 뒷면 숨기지 않음 | `visible` |
| `hidden`  | 뒷면 숨김        |           |

## `matric(a, b, c, d, e, f)`

요소의 2차원 변환(Transforms) 효과를 지정

`scale()` , `skew()` , `translate()` , `rotate()` 를 지정

![matrix-function](images/matrix-function.png)

> ☝️ 요소의 일반 변환(Transforms) 함수(2D, 3D)를 사용하더라도 브라우저에 의해 `matrix` 함수로 계산되어 적용된다. (2D 변환 함수는 `matrix` 로, 3D 변환 함수는 `matrix3d` 로) 따라서 일반적인 경우는 `matrix` 함수가 아닌 일반 변환 함수를 사용하면 된다.

## Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)
