# Syntax-02-nesting

## Sass(SCSS) Syntax - 2. 중첩

> ❗️ 해당 글은 패스트캠퍼스 - 프론트엔드 개발 강의에서 HTML & CSS, SASS(SCSS) Part의 박영웅 강사님의 강의자료(Sass(SCSS) 완전 정복!)를 보며 정리한 것입니다.

### 중첩(Nesting)

Sass(SCSS)는 중첩 기능을 제공해주어 상위 선택자의 반복을 피하고 편리하고 직관적으로 복잡한 구조의 CSS를 작성할 수 있다.

```plain text
.section {
  width: 100%;
  .list {
    padding: 20px;
    li {
      float: left;
    }
  }
}
```

컴파일하면

```plain text
.section {width: 100%;}.section .list {padding: 20px;}.section .list li {float: left;}
```

#### 상위 선택자 참조 `&` (Ampersand)

중첩 안에서 `&` 키워드는 상위(부모) 선택자를 참조하여 **치환**한다.

> ☝️ & == ‘상위(부모) 선택자’

```plain text
.btn {
  position: absolute;
  &.active {
    color: red;
  }
}

.list {
  li {
    &:last-child {
      margin-right: 0;
    }
  }
}
```

컴파일하면

```plain text
.btn {position: absolute;}.btn.active {color: red;}.list li:last-child {margin-right: 0;}
```

`&` 키워드가 상위(부모) 선택자로 치환하는 개념이기 때문에 다음과 같이 응용하는 것도 가능하다.

```plain text
.fs {
  &-small { font-size: 12px; }
  &-medium { font-size: 14px; }
  &-large { font-size: 16px; }
}
```

컴파일하면

```plain text
.fs-small {font-size: 12px;}.fs-medium {font-size: 14px;}.fs-large {font-size: 16px;}
```

#### 중첩 벗어나기 `@at-root`

`@at-root` 는 중첩에서 벗어나고 싶을 때 사용하는 키워드이다.

중첩에서 벗어나야 하는 경우의 한 가지 예를 살펴보면,

```plain text
.section {
  $width: 100px;
  $height: 200px;
  width: $width;
  height: $height;
  .item {
    width: $width;
    height: $height;
  }
}
```

`$width` , `$height` 와 같이 이름 앞에 `$` 가 붙은 값은 변수로 사용할 수 있다.

> 🔗 Sass(SCSS) Syntax - 3. 변수 참조

그런데 이 변수는 유효범위가 있어서 변수가 선언된 `.section` 의 블록 ( `{}` ) 내부에서만 사용할 수 있고, 그 밖에서 사용하면 컴파일되지 않는다.

그래서 `.section` 의 하위 요소는 아니지만, 변수를 사용하기 위해 `@at-root` 키워드를 사용하면 유용하다.

```plain text
.section {
  $width: 100px;
  $height: 200px;
  width: $width;
  height: $height;
  .item {
    width: $width;
    height: $height;
  }
  @at-root .box {
    width: $width;
    height: $height;
  }
}
```

컴파일하면

```plain text
.section {width: 100px;height: 200px;}.section .item {width: 100px;height: 200px;}.box {width: 100px;height: 200px;}
```

#### 중첩된 속성

`font-` , `margin-` 등 동일한 네임 스페이스를 가지는 속성들(같은 단축 속성 아래에 있는 개별 속성들)을 사용할 때 중복을 줄이기 위해 사용하는 방법

```plain text
.box {
  font: {
    weight: bold;
    size: 10px;
    family: sans-serif;
  };
  margin: {
    top: 10px;
    left: 20px;
  };
  padding: {
    bottom: 40px;
    right: 30px;
  };
}
```

> ☝️ (속성의 접두사): {}

컴파일하면

```plain text
.box {font-weight: bold;font-size: 10px;font-family: sans-serif;margin-top: 10px;margin-left: 20px;padding-bottom: 40px;padding-right: 30px;}
```

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)

[Sass(SCSS) 완전 정복!](https://heropy.blog/2018/01/31/sass/)

