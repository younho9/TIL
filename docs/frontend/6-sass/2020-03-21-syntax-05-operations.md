---
icon: ./images/2020-03-21-syntax-05-operations-icon-0.png
slug: 'syntax-05-operations'
title: 'Syntax-05-operations'
main_category: Frontend
category: 6. Sass
author: younho9
created_time: 2020-03-21
updated_time: 2021-02-15
---

## Sass(SCSS) Syntax - 5. 연산(Operations)

> ❗️ 해당 글은 패스트캠퍼스 - 프론트엔드 개발 강의에서 HTML & CSS, SASS(SCSS) Part의 박영웅 강사님의 강의자료(Sass(SCSS) 완전 정복!)를 보며 정리한 것입니다.

### 연산(Operations)

Sass에서는 기본적인 연산 기능이 가능하다.

레이아웃 작업시 상황에 맞게 크기를 계산하거나 정해진 값을 나눠서 작성할 경우 유용.

Sass에서 사용 가능한 연산자 종류

산술 연산자:

| 종류 | 설명   | 주의사항                             |
| ---- | ------ | ------------------------------------ |
| +    | 더하기 |                                      |
| -    | 빼기   |                                      |
| \*   | 곱하기 | 하나 이상의 값이 반드시 숫자(Number) |
| /    | 나누기 | 오른쪽 값이 반드시 숫자(Number)      |
| %    | 나머지 |                                      |

> ☝️ 10px \* 10px = error! , 10px / 2px = error!

비교 연산자:

| 종류 | 설명                            |
| ---- | ------------------------------- |
| ==   | 동등                            |
| !=   | 부등                            |
| <    | 대소 / 보다 작은                |
| >    | 대소 / 보다 큰                  |
| <=   | 대소 및 동등 / 보다 작거나 같은 |
| >=   | 대소 및 동등 / 보다 크거나 같은 |

논리(불린, Boolean) 연산자:

| 종류 | 설명   |
| ---- | ------ |
| and  | 그리고 |
| or   | 또는   |
| not  | 부정   |

#### 숫자(Numbers)

#### 상대적 단위 연산

일반적으로는 절대값을 나타내는 `px` 단위로 연산을 하는데, 상대적 단위( `%` , `em` , `vw` 등)와 `px` 단위를 같이 연산할 경우 CSS의 `calc()` 로 연산해야 한다.

```plain text
width: 50% - 20px;  // 단위 모순 에러(Incompatible units error)
width: calc(50% - 20px);  // 연산 가능
```

#### 나누기 연산의 주의사항

CSS는 속성 값의 숫자를 분리하는 방법으로 `/` 를 허용하기 때문에 `/` 가 나누기 연산으로 사용되지 않을 수 있다.

예를 들어, `font: 16px / 22px serif;` 같은 경우 `font-size: 16px` 와 `line-height: 22px` 의 속성값 분리를 위해서 `/` 를 사용한다.

아래 예제를 보면 나누기 연산자만 연산 되지 않고 그대로 컴파일됩니다.

SCSS:

```plain text
div {
  width: 20px + 20px;  // 더하기
  height: 40px - 10px;  // 빼기
  font-size: 10px * 2;  // 곱하기
  margin: 30px / 2;  // 나누기
}
```

컴파일하면,

```plain text
div {width: 40px;  /* OK */height: 30px;  /* OK */font-size: 20px;  /* OK */margin: 30px / 2;  /* ?? */}
```

따라서 `/` 를 나누기 연산 기능으로 사용하려면 다음과 같은 조건을 충족해야 한다.

- 값 또는 그 일부가 변수에 저장되거나 함수에 의해 반환되는 경우

- 값이 `()` 로 묶여있는 경우

- 값이 다른 산술 표현식의 일부로 사용되는 경우

SCSS:

```plain text
div {
  $x: 100px;
  width: $x / 2;  // 변수에 저장된 값을 나누기
  height: (100px / 2);  // 괄호로 묶어서 나누기
  font-size: 10px + 12px / 3;  // 더하기 연산과 같이 사용
}
```

컴파일하면,

```plain text
div {width: 50px;height: 50px;font-size: 14px;}
```

#### 문자(Strings)

문자 연산에도 `+` 가 사용되는데, 문자 연산의 결과는 **첫 번째 피연산자를 기준**으로 해서 첫 번째 피연산자에 따옴표가 붙어있다면 연산 결과를 따옴표로 묶고, 반대로 첫 번째 피연산자에 따옴표가 붙어있지 않다면 연산 결과도 따옴표를 처리하지 않는다.

SCSS:

```plain text
div::after {
  content: "Hello " + World;
  flex-flow: row + "-reverse" + " " + wrap
}
```

컴파일하면,

```plain text
div::after {content: "Hello World";flex-flow: row-reverse wrap;}
```

#### 색상(Colors)

색상도 연산할 수 있다.

SCSS:

```plain text
div {
  color: #123456 + #345678;
  // R: 12 + 34 = 46
  // G: 34 + 56 = 8a
  // B: 56 + 78 = ce
  background: rgba(50, 100, 150, .5) + rgba(10, 20, 30, .5);
  // R: 50 + 10 = 60
  // G: 100 + 20 = 120
  // B: 150 + 30 = 180
  // A: Alpha channels must be equal
}
```

> ☝️ 16진수 연산, rgba() 연산 모두 가능.

컴파일하면,

```plain text
div {
  color: #468ace;
  background: rgba(60, 120, 180, 0.5);
}
```

> ☝️ 단, rgba() 에서 Alpha 값은 연산되지 않으며 서로 동일해야 다른 값의 연산이 가능한데, Alpha 값을 연산하기 위해서 다음과 같은 색상 함수(Color Functions)를 사용할 수 있다.

> 🔗 opacify(), transparentize()

SCSS:

```plain text
$color: rgba(10, 20, 30, .5);
div {
  color: opacify($color, .3);  // 30% 더 불투명하게 / 0.5 + 0.3
  background-color: transparentize($color, .2);  // 20% 더 투명하게 / 0.5 - 0.2
}
```

컴파일하면,

```plain text
div {color: rgba(10, 20, 30, 0.8);background-color: rgba(10, 20, 30, 0.3);}
```

#### 논리(Boolean)

Sass의 `@if` 조건문에서 사용되는 논리(Boolean) 연산에는 ‘그리고’, ‘또는’, ’부정’이 있다.

| 종류 | 설명       |
| ---- | ---------- |
| and  | 그리고     |
| or   | 또는       |
| not  | 부정(반대) |

SCSS:

```plain text
$width: 90px;
div {
  @if not ($width > 100px) {
    height: 300px;
  }
}
```

컴파일하면,

```plain text
div {height: 300px;}
```

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)

[Sass(SCSS) 완전 정복!](https://heropy.blog/2018/01/31/sass/)
