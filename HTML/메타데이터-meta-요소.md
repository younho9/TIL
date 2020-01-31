# 메타데이터 - `<meta>` 요소

> ❗️ 해당 글은 [head 태그에는 무엇이 있을까? HTML의 메타데이터](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) - MDN 문서를 보면서 공부한 기록입니다.
>



## 메타데이터란?

[메타데이터](https://ko.wikipedia.org/wiki/%EB%A9%94%ED%83%80%EB%8D%B0%EC%9D%B4%ED%84%B0)란 간단히 말하면 데이터에 대한 데이터, 데이터를 설명하는 데이터이다. HTML에서 문서에 `<meta>` 요소를 이용해 공식적으로 메타데이터를 적용할 수 있다.

페이지의 `<head>` 요소 안에 있으며, 다양한 형태의 `<meta>`가 있다.



### 문서의 character 인코딩을 특정하기

```html
<meta charset="utf-8">
```

이 요소는 문서에서 허용하는 문자 집합(character set) 인코딩에 대해서 간단히 표시한다. `utf-8`이 전세계적인  character 집합으로 많은 언어들을 포함한다.



### 저자와 설명

많은 `<meta>` 요소는 `name` 과 `content` 속성을 가진다.

- `name` : 메타 요소가 어떤 형태의 정보를 갖고 있는지 알려준다.
- `content` : 실제 메타데이터의 컨텐츠이다.

이 두 가지 메타데이터로 페이지의 머릿말을 요약할 수 있다.

```html
<meta name="author" content="Chris Mills">
<meta name="description" content="The MDN Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing web sites and applications.">
```

저자를 지정하는 것은 컨텐츠 작성자에 대한 정보를 볼 수 있게 해준다. (일부 컨텐츠 관리 시스템은 페이지 작성자 정보를 자동으로 추출해서 사용할 수 있는 기능이 있다.)

페이지 콘텐츠 관련 키워드를 포함시키는 것은 검색엔진에서 페이지가 더 많이 표시될 가능성을 높인다. ([SEO - Search Engine Optimization](https://developer.mozilla.org/ko/docs/Glossary/SEO))



### 그 외 다양한 metadata

[Open Graph Data](https://ogp.me/)는 페이스북이 웹사이트에 더 풍부한 메타데이터를 제공하기 위해 발명한 메타데이터 프로토콜이다.

```html
<meta property="og:image" content="https://developer.cdn.mozilla.net/static/img/opengraph-logo.dc4e08e2f6af.png">
<meta property="og:description" content="The Mozilla Developer Network (MDN) provides
information about Open Web technologies including HTML, CSS, and APIs for both Web sites
and HTML5 Apps. It also documents Mozilla products, like Firefox OS.">
<meta property="og:title" content="Mozilla Developer Network">
```

MDN 페이지의 이러한 메타데이터는 페이스북에 링크했을 때 아래의 이미지처럼 나타내게 해준다.

![https://mdn.mozillademos.org/files/12349/facebook-output.png](https://mdn.mozillademos.org/files/12349/facebook-output.png)

트위터에서도 유사한 형태의 독점적인 자체 메타데이터를 갖고 있다.

```html
<meta name="twitter:title" content="Mozilla Developer Network">
```



## Reference

[head 태그에는 무엇이 있을까? HTML의 메타데이터](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
