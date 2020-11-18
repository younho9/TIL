---
slug: css-단위
title: 'CSS 단위'
---

> ❗️ 해당 글은 [패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/)에서 HTML & CSS, SASS(SCSS) Part의 [박영웅 강사님](https://github.com/ParkYoungWoong)의 강의자료를 정리한 것입니다.

### CSS의 `font-size` 단위

#### `px` 단위

모니터 상의 화소 하나의 크기에 대응되는 단위 **고정된 값**이기 때문에 이해하기 쉽지만, 사용자가 글꼴의 크기를 조정할 수 없기 때문에 가급적 사용을 하지 않는 것이 좋다

#### `%` 단위

부모 요소의 영향을 받는 단위

예시

```css
.parent {
  font-size: 10px;
}
.child {
  font-size: 50%;
}
```

> child의 font-size는 부모인 parent의 50%인 5px이 된다.

#### `em` 단위

자기 자신의 폰트 사이즈에 영향을 받음

```css
.container {
  width: 60em;
  font-size: 10px;
}
```

> container의 width는 자신의 폰트 사이즈인 10px의 60배인 600px이 된다.

> 주의사항 : font-size는 부모로부터 상속된다. 따라서 em 단위는 조상 요소에게 영향을 받는 관계를 모두 이해해야 하기 때문에 관리하기가 어렵다.

#### `rem` 단위

root + em, root인 html 요소에 지정된 폰트 사이즈의 영향을 받는다.

```css
html {
  font-size: 10px;
}
.container {
  width: 60rem;
}
```

> html 요소의 폰트 사이즈가 10px이기 때문에 60rem = 600px이 된다.

html에 정의한 폰트 사이즈와 다른 기본 폰트 사이즈를 사용하려면 body 태그에 폰트 사이즈를 재정의하면 된다.

```css
html {
  font-size: 10px;
}
body {
  font-size: 16px;
}
```

#### 단위와 웹 접근성

`px` 단위로 폰트 사이즈를 정의하면, 브라우저의 글꼴 크기를 키웠을 때 글꼴의 크기가 바뀌지 않는다. 이는 html 태그에 폰트 사이즈를 `px` 단위로 정의한 이후 `rem` 단위로 폰트 사이즈를 정의한 요소에도 마찬가지이다. 따라서 html 요소에 `%` 단위로 폰트 사이즈를 정의하고 이후에 `rem` 단위로 조절하면 브라우저의 글꼴 크기를 바꿨을 때 글꼴의 크기가 바뀌도록 설정할 수 있다.

> 폰트 크기를 조정할 수 있는 사용자의 권리를 존중해주기 위해

### CSS의 `viewport` 단위

#### `vw` 단위

`vw` : 뷰포트의 너비(Viewport Width) 100분 단위로서 100vw = 100% 이고, 50vw = 50vw이다.

#### `vh` 단위

`vh` : 뷰포트의 높이(Viewport Height) 100분 단위로서 100vh = 100% 이고, 50vh = 50vw이다.

> 뷰포트(viewport) : 디스플레이 요소가 표현되는 영역, 모바일, 태블릿, 노트북의 브라우저 등, 뷰포트는 기기마다, 기기 안에서도 조작에 따라 크기가 달라질 수 있다.

#### `vmax` 단위

뷰포트의 가로, 세로 중 더 큰 값에 대한 100분 단위.

#### `vmin` 단위

뷰포트의 가로, 세로 중 더 값에 대한 100분 단위.

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)
