---
slug: step-by-step-tutorial-02-liquid
title: '[Step by Step Tutorial] 02. Liquid'
---

[Liquid](https://jekyllrb.com/docs/step-by-step/02-liquid/)

Liquid는 Jekyll이 사용하고 있는 템플릿 언어이다.

크게 Objects, tags, filters의 3가지 메인 파트로 구성된다.

### Objects

---

오브젝트는 Liquid에게 내용을 출력할 위치를 알려준다. `{{` `}}` 로 표시 된다.

예를 들면,

```html
{{ page.title }}
```

`page.title` 에서 호출된 변수를 출력한다.

### Tags

---

태그는 템플릿의 논리 및 제어 흐름을 만든다. `{%` `%}` 로 표시된다.

예를 들면

```html
{% if page.show_sidebar %}
<div class="sidebar">sidebar content</div>
{% endif %}
```

`page.show_sidebar` 가 참이면 사이드바가 출력된다.

### Filters

---

필터는 Liquid 객체의 출력을 변경한다. 출력 내에서 사용되며, `|` 로 구분된다.

예를 들면

```html
{{ "hi" | capitalize }}
```

`Hi` 로 출력된다.

### Liquid를 사용해보자

---

진행하던 예제에서 `index.html` 의 `<h1>` 태그의 내용을 다음과 같이 수정해본다.

```html
...
<h1>{{ "Hello World!" | downcase }}</h1>
...
```

Jekyll에게 해당 문서가 Liquid를 사용하고 있음을 알리기 위해서는 해당 문서( `index.html` ) 상단에 **front matter가 있어야한다.**

```html
---
# front matter tells Jekyll to process Liquid
---
```

`Hello World!` 가 소문자로 `hello world!` 로 출력된다.
