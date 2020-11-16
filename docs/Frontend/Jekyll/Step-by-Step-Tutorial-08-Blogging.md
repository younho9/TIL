---
id: Step-by-Step-Tutorial-08-Blogging
title: '[Step by Step Tutorial] 08. Blogging'
---

[Blogging](https://jekyllrb.com/docs/step-by-step/08-blogging/)

이제 데이터베이스 없이 어떻게 블로그를 만들 수 있는지 궁금할 것이다. Jekyll 스타일에서 오로지 text 파일만으로 blogging하는 것이 가능하다.

### Posts

---

블로그 포스트는 `_posts` 라는 폴더에 있다. 포스트의 파일명은 특별한 포맷을 가지는데 발행일, 제목, 확장자 이다.

첫 포스트를 `_posts/2018-08-20-bananas.md` 로 만들어보자.

```plain text
---
layout: post
author: jill
---
A banana is an edible fruit – botanically a berry – produced by several kinds
of large herbaceous flowering plants in the genus Musa.

In some countries, bananas used for cooking may be called "plantains",
distinguishing them from dessert bananas. The fruit is variable in size, color,
and firmness, but is usually elongated and curved, with soft flesh rich in
starch covered with a rind, which may be green, yellow, red, purple, or brown
when ripe.
```

이것은 어떻게 보면 `about.md` 파일과 비슷해 보이는데, `author` 라는 커스텀 변수가 있고(꼭 필요한 것은 아니고 `creator` 라는 이름으로 사용할 수도 있다.) `layout` 이 다르다.

### Layout

---

`post` 라는 레이아웃이 없기 때문에, `_layouts/post.html` 을 만들 필요가 있다.

```plain text
---
layout: default
---
<h1>{{ page.title }}</h1>
<p>{{ page.date | date_to_string }} - {{ page.author }}</p>

{{ content }}
```

이것은 레이아웃의 상속의 예이다. `post` 레이아웃은 `title` , `date` , `author` , `content` 를 표시하고 이것은 `default` 레이아웃으로 감싸진다.

또한 `date_to_string` 필터는 날짜를 보기 좋은 형식으로 표시해준다.

### List posts

---

현재 blog 포스트들을 navigate하는 방법이 없다. 전형적으로 블로그는 모든 포스트를 리스트하는 페이지를 갖고 있다.

Jekyll에서는 포스트들을 `site.posts` 로 접근할 수 있다.

`blog.html` 을 루트 디렉토리에 만든다.

```plain text
---
layout: default
title: Blog
---
<h1>Latest Posts</h1>

<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p>{{ post.excerpt }}</p>
    </li>
  {% endfor %}
</ul>
```

이 코드에서 유의할 부분은

- `post.url` 은 포스트의 output path를 Jekyll이 찾아준다.

- `post.title` 은 포스트의 파일 이름에서 `title` 을 가져오는데 front matter의 `title` 으로 override 할 수 있다.

- `post.excerpt` 는 기본적으로 콘텐츠의 첫 번째 단락을 가져온다.

또한 우리는 기본 페이지에서부터 Blog 페이지로 갈 수 있는 방법이 네비게이션에 추가되어야 하므로 `_data/navigation.yml` 파일에 blog page를 위한 엔트리를 추가한다.

```plain text
- name: Home
  link: /
- name: About
  link: /about.html
- name: Blog
  link: /blog.html
```

### More posts

---

blog에 여러 포스트를 추가해본다.

`_posts/2018-08-21-apples.md`

```plain text
---
layout: post
author: jill
---
An apple is a sweet, edible fruit produced by an apple tree.
Apple trees are cultivated worldwide, and are the most widely grown species in
the genus Malus. The tree originated in Central Asia, where its wild ancestor,
Malus sieversii, is still found today. Apples have been grown for thousands of
years in Asia and Europe, and were brought to North America by European
colonists.
```

`_posts/2018-08-22-kiwifruit.md`:

```plain text
---
layout: post
author: ted
---
Kiwifruit (often abbreviated as kiwi), or Chinese gooseberry is the edible
berry of several species of woody vines in the genus Actinidia.
The most common cultivar group of kiwifruit is oval, about the size of a large
hen's egg (5–8 cm (2.0–3.1 in) in length and 4.5–5.5 cm (1.8–2.2 in) in
diameter). It has a fibrous, dull greenish-brown skin and bright green or
golden flesh with rows of tiny, black, edible seeds. The fruit has a soft
texture, with a sweet and unique flavor.
```

[http://localhost:4000](http://localhost:4000/)를 열어 확인해본다.
