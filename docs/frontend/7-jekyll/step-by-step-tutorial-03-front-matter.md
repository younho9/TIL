---
slug: step-by-step-tutorial-03-front-matter
title: '[Step by Step Tutorial] 03. Front matter'
---

[Front Matter](https://jekyllrb.com/docs/step-by-step/03-front-matter/)

Front matter란 문서의 상단에 있는 두 개의 triple-dashed line ( `—-` ) 사이에 들어가는 [YAML](https://yaml.org/) 조각이다.

예를 들어,

```html
---
my_number: 5
---
```

문서의 상단에 이렇게 기록하고,

```html
{{ page.my_number }}
```

로 Liquid의 Object로서 해당 변수에 접근할 수 있게 된다.

### Front matter를 사용해보자

---

`index.html` 에서

```html
---
title: Home
---

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>{{ page.title }}</title>
  </head>
  <body>
    <h1>{{ "Hello World!" | downcase }}</h1>
  </body>
</html>
```

상단에 Front matter를 기입하고, `<title>` 태그 사이에 Liquid 문법으로 `{{ page.title }}` 를 사용하면, 상단에 기입한 Front matter 인 `title: Home` 를 보고 `Home` 이 `<title>` 태그에 들어가게 된다.
