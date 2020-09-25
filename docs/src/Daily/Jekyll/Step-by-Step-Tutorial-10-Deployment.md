# [Step by Step Tutorial] 10. Deployment

[Deployment](https://jekyllrb.com/docs/step-by-step/10-deployment/)

이제 마지막 단계로 사이트를 배포할 준비가 되었다.

### Gemfile

---

사이트에 Gemfile을 갖고 있는 것은 좋은 관습이다. 이것은 Jekyll의 버젼을 확실하게 해주고, 다른 환경에서 gem들이 일관성을 유지하게 해준다.

`Gemfile` 을 루트 디렉토리에 다음과 같이 만든다.

```
source 'https://rubygems.org'

gem 'jekyll'
```

그리고 나서 터미널에서 `bundle install` 을 실행한다. 이것은 gems를 설치하고, `Gemfile.lock` 을 만든다. `Gemfile.lock` 은 현재의 gem 버젼을 다음에 있을 `bundle install` 전까지 고정시킨다. 만약 gem 버젼을 업데이트하고 싶다면 `bundle update` 를 실행할 수 있다.

`Gemfile` 을 사용하면, 이제 `jekyll serve` 명령어 앞에 `bundle exec` 명령어를 붙여서 실행해야 한다.

```bash
bundle exec jekyll serve
```

이것은 `Gemfile` 에 정해진 gem들만 사용하도록 Ruby 환경을 제한한다.

### Plugins

---

Jekyll은 많은 플러그인을 가지고 있다. - [Jekyll plugins](https://jekyllrb.com/docs/plugins/)

그 중 거의 모든 Jekyll 사이트에서 유용한 세 가지 공식적인 플러그인이 있다.

- [Jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap) : 검색 엔진이 우리의 사이트 콘텐츠를 잘 찾을 수 있도록 sitemap을 만들어준다.

- [Jekyll-feed](https://github.com/jekyll/jekyll-feed) : 포스트의 RSS feed를 만들어준다.

- [Jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag) : SEO를 위해 meta tag들을 추가해주는데 도움을 준다.

이 세 가지 플러그인을 사용하기 위해서 `Gemfile` 에 추가한다.

```
source 'https://rubygems.org'

gem 'jekyll'

group :jekyll_plugins do
  gem 'jekyll-sitemap'
  gem 'jekyll-feed'
  gem 'jekyll-seo-tag'
end
```

그리고 `_config.yml` 에도 다음을 추가한다.

```
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag
```

그리고 이제 `bundle update` 를 실행한다.

`jekyll-sitemap` 은 이것만으로 sitemap을 빌드시에 만들어낸다.

`jekyll-feed` 와 `jekyll-seo-tag` 를 사용하기 위해서는 `_layouts/default.html` 에 따로 태그를 추가해 주어야 한다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>{{ page.title }}</title>
    <link rel="stylesheet" href="/assets/css/styles.css" />
    {% feed_meta %} {% seo %}
  </head>
  <body>
    {% include navigation.html %} {{ content }}
  </body>
</html>
```

Jekyll 서버를 재시작하고 `<head>` 에 태그가 잘 추가되었는지 확인한다.

### Environments

---

때때로 사이트를 만들었을 때는 결과를 표시하고 싶지만, 개발 중일 때는 표시하지 않고 싶을 수 있다. disqus 또는 Google Analytics 등이 그러한데, 이것을 위해서는 [environments](https://jekyllrb.com/docs/configuration/environments/)를 사용할 수 있다.

`JEKYLL_ENV` 라는 환경 변수를 사용한다.

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

기본적으로 `JEKYLL_ENV` 는 development로 되어있다. `JEKYLL_ENV` 는 liquid 문법으로 `jekyll.environment` 로 접근 가능하다. 따라서 다음과 같이 하면 analytics script를 production시에만 표시하도록 할 수 있다.

```html
{% if jekyll.environment == "production" %}
<script src="my-analytics-script.js"></script>
{% endif %}
```

### Deployment

---

마지막으로 사이트 산출물을 서버로 배포하는 방법이다. 가장 기본적인 방법은 다음의 명령어를 실행하는 것이다.

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

그리고 이 명령어를 실행해서 만들어진 `_site` 디렉토리의 콘텐츠를 복사해 서버로 제공한다.

더 좋은 방법으로는 [CI](https://jekyllrb.com/docs/deployment/automated/) 또는 [서드파티](https://jekyllrb.com/docs/deployment/third-party/)를 사용하는 것이다.
