# [Step by Step Tutorial] 5. Includes

[Includes](https://jekyllrb.com/docs/step-by-step/05-includes/)

이제 사이트가 합쳐지고 있다. 하지만 페이지 사이에 네비게이션이 없다.

네비게이션은 반드시 모든 페이지에 있어야 하므로 레이아웃에 넣는 것이 바람직하다. 레이아웃에 직접적으로 넣는 방법 대신에 `include` 를 이용하는 방법을 배워보려고 한다.

## Include 태그

`include` 태그는 `_includes` 폴더에 있는 다른 파일의 콘텐츠를 포함할 수 있게 해준다. `include` 는 사이트 전반에 반복되는 소스코드에 대한 단일 소스를 갖게 해주고, 가독성을 높여준다.

네비게이션 소스코드는 나중에 복잡해질 수 있는 가능성이 있기 때문에 `include` 를 사용하는 것이 좋다.

## Include 사용법

네비게이션 파일을 `_includes/navigation.html` 에 생성한다.

```html
<nav>
  <a href="/">Home</a>
  <a href="/about.html">About</a>
</nav>
```

네비게이션을 `include` 태그를 이용해 `layout` 에 추가한다.

`_layouts/default.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>{{ page.title }}</title>
  </head>
  <body>
    {% include navigation.html %} {{ content }}
  </body>
</html>
```

## 현재 페이지 하이라이팅

네비게이션에서 현재 위치를 하이라이팅 해주는 것이 필요하다.

`_includes/navigation.html` 은 자신이 삽입된 현재 페이지의 URL을 알 수 있어야 한다. Jekyll의 유용한 변수 `page.url` 을 사용해서 그렇게 할 수 있다.

`page.url` 을 이용해서 각 링크가 현재 페이지인지 확인하고 참이면 빨간색으로 색칠한다.

```html
<nav>
  <a href="/" {% if page.url == "/" %}style="color: red;"{% endif %}>
    Home
  </a>
  <a href="/about.html" {% if page.url == "/about.html" %}style="color: red;"{% endif %}>
    About
  </a>
</nav>
```
