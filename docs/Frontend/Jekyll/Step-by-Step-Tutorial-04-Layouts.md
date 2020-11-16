---
id: Step-by-Step-Tutorial-04-Layouts
title: '[Step by Step Tutorial] 04. Layouts'
---

[Layouts](https://jekyllrb.com/docs/step-by-step/04-layouts/)

웹 사이트는 일반적으로 하나 이상의 페이지를 갖고 있다.

Jekyll은 페이지에 대해서 HTML 뿐만 아니라 Markdown을 지원한다. Markdown은 단락, 제목, 이미지 등의 콘텐츠들을 HTML보다 쉽게 구성할 수 있기 때문에 페이지를 만드는데 좋은 선택이다.

`about.md` 를 root 디렉토리에 만든다.

구조를 위해서 `index.html` 을 복사하고 about 페이지에 맞게 수정할 수 있지만, 이렇게 하는 것은 코드의 중복을 만든다. 만약 사이트에 스타일시트를 추가하고 싶다면 우리는 사이트에 있는 모든 페이지의 `<head>` 요소 마다 스타일시트를 추가해야 할 것이다.

<br/>

### 레이아웃 만들기

---

따라서 레이아웃을 만드는 것이 좋다. 레이아웃은 콘텐츠를 감싸는 템플릿이다. 레이아웃은 `_layouts` 디렉토리에 위치한다.

`_layouts/default.html` 에 아래의 코드를 넣는다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>{{ page.title }}</title>
  </head>
  <body>
    {{ content }}
  </body>
</html>
```

이 코드는 front matter가 없다는 점과 페이지의 콘텐츠가 `{{ content }}` 로 바뀐 점을 빼면 `index.html` 과 동일하다. `{{ content }}` 는 호출된 페이지의 렌더링된 콘텐츠 값을 갖는 특수 변수이다.

이 레이아웃을 사용하려면 front matter에 `layout` 변수를 추가한다.

이 레이아웃이 콘텐츠를 감싸는 모든 것을 갖고 있기 때문에 이제 `index.html` 에는 이 코드만 있으면 된다.

```html
---
layout: default
title: Home
---

<h1>{{ "Hello World!" | downcase }}</h1>
```

레이아웃에서는 `page` 를 이용해서 front matter에 접근할 수 있다. `{{ page.title }}` 을 이용해 `index.html` 의 title에 접근 했다.

<br/>

### About 페이지

---

이제 about 페이지를 만들 것인데, about 페이지는 Markdown으로 만들어본다.

`about.md` 는 이러하다.

```html
---
layout: default
title: About
---

# About page This page tells you a little bit about me.
```

이렇게 하면 Markdown으로 만들어진 페이지 역시 `layout` 을 적용할 수 있다.
