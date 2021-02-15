---
icon: ./images/2020-01-21-step-by-step-tutorial-06-data-files-icon-0.png
slug: 'step-by-step-tutorial-06-data-files'
title: '[Step by Step Tutorial] 06. Data Files'
main_category: Frontend
category: 7. Jekyll
author: younho9
created_time: 2020-01-21
updated_time: 2021-02-15
---

[Data Files](https://jekyllrb.com/docs/step-by-step/06-data-files/)

Jekyll은 `_data` 디렉토리에 위치한 YAML, JSON, CSV 파일로부터 데이터를 가져오는 것을 지원한다.데이터 파일은 콘텐츠를 소스코드로부터 분리하여 사이트를 관리하기 쉽게 만들어주는 좋은 방법이다.

이번 단계에서는 네비게이션의 콘텐츠를 데이터 파일로 보관하고, 네비게이션에 포함된 것들을 반복문을 이용해 사용할 것이다.

<br />

### 데이터 파일 사용법

---

YAML은 Ruby 시스템에서 일반적인 포맷이다. 우리는 네비게이션에 있는 각각의 이름과 링크 쌍을 배열로 보관하여 사용할 것이다.

네비게이션을 위한 데이터 파일을 `_data/navigation.yml` 에 만든다.

```yaml
- name: Home
	link: /
- name: About
	link: /about.html
```

Jekyll에서는 `site.data.navigation` 을 이용해 해당 데이터 파일을 이용할 수 있다.

`_includes/navigation.html` 에서 각각의 링크를 넣는 것 대신에 반복문을 사용한다.

```html
<nav>
  {% for item in site.data.navigation %}
    <a href="{{ item.link }}" {% if page.url == item.link %}style="color: red;"{% endif %}>
      {{ item.name }}
    </a>
  {% endfor %}
</nav>
```

결과물은 동일하지만, 이 구조는 새로운 네비게이션을 추가하거나 변경할 때 편리하다는 차이가 있다.

<br />
