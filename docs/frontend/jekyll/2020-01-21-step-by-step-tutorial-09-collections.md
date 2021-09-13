---
icon: ./images/2020-01-21-step-by-step-tutorial-09-collections-icon-0.png
slug: 'step-by-step-tutorial-09-collections'
title: '[Step by Step Tutorial] 09. Collections'
main_category: Frontend
category: 7. Jekyll
author: Younho Choo
author_title: younho9
author_url: https://github.com/younho9
author_image_url: https://avatars.githubusercontent.com/u/48426991
created_time: 2020-01-21
updated_time: 2021-02-15
---

[Collections](https://jekyllrb.com/docs/step-by-step/09-collections/)

만약에 블로그의 저자들 각각을 위한 간단한 소개말과 그들의 포스트들을 볼 수 있는
저자들만의 페이지를 만들고 싶다면 어떻게 해야할까?

이것을 위해서 컬렉션(Collection)을 사용해야 한다. 컬렉션은 콘텐츠를 날짜별로 그
룹화하지 않아도 된다는 점을 제외하면 포스트와 유사하다.

<br />

### 구성

---

컬렉션을 만들기 위해서 Jekyll에게 `_config.yml` 을 통해 알려주어야 한다.

먼저 `_config.yml` 파일을 만든다.

```yaml
collections:
	authors
```

> `_config.yml` 파일을 수정한 후에 변경사항을 반영하기 위해서는 Jekyll 서버를 재
> 시작해야 한다. `Ctrl` + `C` 를 통해 서버를 멈추고 `jekyll serve` 로 시작할 수
> 있다.

<br />

### 저자 추가하기

---

컬렉션에 있는 아이템들(문서들)은 루트 디렉토리에 있는 `_*collection_name*` 디렉
토리에 만들면 된다. 저자를 기준으로 컬렉션을 만들기 위해서는 `_authors` 로 만들
면 적절할 것이다.

저자에 관한 문서들을 만들어보자.

`_authors/jill.md`

```plain text
---
short_name: jill
name: Jill Smith
position: Chief Editor
---
Jill is an avid fruit grower based in the south of France.
```

`_authors/ted.md`:

```plain text
---
short_name: ted
name: Ted Doe
position: Writer
---
Ted has been eating fruit since he was baby.
```

<br />

### Staff 페이지

---

모든 저자들을 리스트해서 보여주는 페이지를 추가해보자. Jekyll은 컬렉션을
`site.authors` 변수를 통해 이용할 수 있도록 해준다.

루트 디렉토리에 `staff.html` 을 만든다.

```html
---
layout: default
title: Staff
---

<h1>Staff</h1>

<ul>
  {% for author in site.authors %}
  <li>
    <h2>{{ author.name }}</h2>
    <h3>{{ author.position }}</h3>
    <p>{{ author.content | markdownify }}</p>
  </li>
  {% endfor %}
</ul>
```

content가 Markdown으로 되어 있기 때문에 `markdownify` filter를 적용해서 실행해야
한다. 이것은 레이아웃의 `{{ content }}` 를 사용할 때 자동적으로 된다. (아직 이해
하지 못함)

이제 Staff 페이지 역시 네비게이션에 나타나야 하기 때문에 `_data/navigation.yml`
에 추가해준다.

```yaml
- name: Home
  link: /
- name: About
  link: /about.html
- name: Blog
  link: /blog.html
- name: Staff
  link: /staff.html
```

기본적으로(default 값으로) 컬렉션은 문서의 페이지를 출력하지 않는다. 만약 각 저
자 마다 페이지를 만들어주고 싶다면 `_config.yml` 파일을 살짝 수정해야 한다.

```yaml
collections:
	authors:
		output: true
```

이렇게 하면 `author.url` 을 사용하여 페이지에 접근할 수 있다.

`staff.html` 에 링크를 추가해보자

```html
---
layout: default
title: Staff
---

<h1>Staff</h1>

<ul>
  {% for author in site.authors %}
  <li>
    <h2><a href="{{ author.url }}">{{ author.name }}</a></h2>
    <h3>{{ author.position }}</h3>
    <p>{{ author.content | markdownify }}</p>
  </li>
  {% endfor %}
</ul>
```

포스트와 같이 `authors` 를 위한 레이아웃을 만들 필요가 있다.

`_layouts/author.html` 을 다음과 같이 만든다.

```html
---
layout: default
---

<h1>{{ page.name }}</h1>
<h2>{{ page.position }}</h2>

{{ content }}
```

<br />

### Front matter defaults

---

이렇게 만든 `author` 레이아웃을 author들, `jill.md` 와 `ted.md` 의 front matter
에 표시해주어야 하지만 이것은 계속 반복되는 작업이다. 따라서 다른 방법을 사용해
볼 수 있다.

우리가 원하는 것은 자동적으로 포스트들은 `post` 레이아웃을 사용하고, author들은
`author` 레이아웃을 사용하는 것이다.

이것은 `_config.yml` 에서
[front matter defaults](https://jekyllrb.com/docs/configuration/front-matter-defaults/)를
사용해서 해결할 수 있다. 기본값을 적용할 `scope` 를 정하고, 기본값으로 들어갈
front matter를 넣으면 된다.

다음은 `_config.yml` 예시이다.

```yaml
collections:
  authors:
    output: true

defaults:
  - scope:
      path: ''
      type: 'authors'
    values:
      layout: 'author'
  - scope:
      path: ''
      type: 'posts'
    values:
      layout: 'post'
  - scope:
      path: ''
    values:
      layout: 'default'
```

이제 모든 `page` 들과 `post` 들의 front matter에서 `layout` 에 관한 부분을 다 지
워도 된다.

> `_config.yml` 파일을 수정하면 Jekyll 서버를 재시작해야 한다는 것을 명심하라.

<br />

### List author's posts

---

각 author가 쓴 포스트들을 그들의 페이지에 필터링해서 보여주는 방법이다. 이것을하
기 위해서, author의 `short_name` 과 post의 `author` 가 매치될 필요가 있다.

`_layouts/author.html` 을 보자.

```html
---
layout: default
---

<h1>{{ page.name }}</h1>
<h2>{{ page.position }}</h2>

{{ content }}

<h2>Posts</h2>
<ul>
  {% assign filtered_posts = site.posts | where: 'author', page.short_name %} {%
  for post in filtered_posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
```

> `| where: 'author', page.short_name` 이 필터. (이후에 더 공부)

<br />

### Link to authors page

---

각각의 포스트는 author의 페이지로 갈 수 있는 링크를 가져야할 것이다.

위에서 한 것과 비슷한 필터링 기술을 사용해서 할 수 있다.

`_layouts/post.html`

```html
---
layout: default
---

<h1>{{ page.title }}</h1>

<p>
  {{ page.date | date_to_string }} {% assign author = site.authors | where:
  'short_name', page.author | first %} {% if author %} -
  <a href="{{ author.url }}">{{ author.name }}</a>
  {% endif %}
</p>

{{ content }}
```

[http://localhost:4000](http://localhost:4000)에 접속해서 staff page가 잘 작동하
는지, 그리고 포스트의 author로 가는 링크가 잘 작동하는지 확인해보자.

<br />
