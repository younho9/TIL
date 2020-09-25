# Syntax-07-extend

## Sass(SCSS) Syntax - 7. 확장(Extend)

> ❗️ 해당 글은 패스트캠퍼스 - 프론트엔드 개발 강의에서 HTML & CSS, SASS(SCSS) Part의 박영웅 강사님의 강의자료(Sass(SCSS) 완전 정복!)를 보며 정리한 것입니다.

### 확장(Extend)

다른 선택자의 모든 스타일을 그대로 가져오면서 몇 가지 스타일을 추가해야하는 경우, 확장을 사용할 수 있다.

```
.btn {
  padding: 10px;
  margin: 10px;
  background: blue;
}
.btn-danger {
  @extend .btn;
  background: red;
}
```

> ☝️ btn-danger 선택자가 btn 의 padding , margin , background 등의 속성을 모두 가져오면서 background 만 red 로 바꾸고 싶을 때, 확장을 사용함.

컴파일하면

```
.btn, .btn-danger {padding: 10px;margin: 10px;background: blue;}.btn-danger {background: red;}
```

컴파일 결과를 보면 `,` 로 구분하는 다중 선택자(Multiple Selector)가 만들어졌다.

다중 선택자로 만들어지는 개념이기 때문에 문제가 발생할 수 있다.

```
.container {
  width: 300px;
  height: 300px;
  background: red;
  .item {
    width: 200px;
    height: 200px;
    background: blue;
    .icon {
      width: 100px;
      height: 100px;
      background: green;
    }
  }
}

.new-icon {
  @extend .icon;
}
```

컴파일하면

```
.container {width: 300px;height: 300px;background: red;}.container .item {width: 200px;height: 200px;background: blue;}.container .item .icon, .container .item .new-icon {width: 100px;height: 100px;background: green;}
```

> ☝️ .new-icon 이 예기치않게 .item 의 하위 요소로 들어가게 됨

`@extend` 를 사용할 때는 다음과 같은 문제를 고려해야 한다.

- 내 선택자가 어디에 첨부될 것인가?

- 원치 않는 부작용이 초래될 수 있는가?

- 이 한번의 확장으로 얼마나 큰 CSS가 생성되는가?

확장은 유익할 수 있으나 **부작용**이 있다. (사용을 권장하지 않음)

> ☝️ @mixin 으로 대체해서 사용🔗 Sass Guidelines Extend 참고

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)

[Sass(SCSS) 완전 정복!](https://heropy.blog/2018/01/31/sass/)

[Sass Guidelines Extend](https://sass-guidelin.es/ko/#extend)
