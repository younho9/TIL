---
icon: ./images/2020-03-21-syntax-10-built-in-functions-icon-0.png
slug: 'syntax-10-built-in-functions'
title: 'Syntax-10-built-in-functions'
main_category: Frontend
category: 6. Sass
author: younho9
created_time: 2020-03-21
updated_time: 2021-02-15
---

## Sass(SCSS) Syntax - 10. 내장 함수(Built-in Functions)

> ❗️ 해당 글은 패스트캠퍼스 - 프론트엔드 개발 강의에서 HTML & CSS, SASS(SCSS) Part의 박영웅 강사님의 강의자료(Sass(SCSS) 완전 정복!)를 보며 정리한 것입니다.

### 내장 함수(Built-in Functions)

Sass에서 기본적으로 제공하는 내장 함수에는 많은 종류가 있다.

[Sass Built-in Functions](http://sass-lang.com/documentation/Sass/Script/Functions.html)에서 모든 내장 함수를 확인할 수 있음

- `[]`는 선택 가능한 인수(argument)

- [Zero-based numbering](https://en.wikipedia.org/wiki/Zero-based_numbering)을 사용하지 않는다.

#### 색상(RGB / HSL / Opacity) 함수

[mix($color1, $color2)](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) : 두 개의 색을 혼합

[lighten($color, $amount)](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method) : 더 밝은색

[darken($color, $amount)](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) : 더 어두운색

[saturate($color, $amount)](http://sass-lang.com/documentation/Sass/Script/Functions.html#saturate-instance_method) : 색상의 채도를 높임

[desaturate($color, $amount)](http://sass-lang.com/documentation/Sass/Script/Functions.html#desaturate-instance_method) : 색상의 채도를 낮춤

[grayscale(\$color)](http://sass-lang.com/documentation/Sass/Script/Functions.html#grayscale-instance_method) : 색상을 회색으로 변환

[invert(\$color)](http://sass-lang.com/documentation/Sass/Script/Functions.html#invert-instance_method) : 색상을 반전

[rgba($color, $alpha)](http://sass-lang.com/documentation/Sass/Script/Functions.html#rgba-instance_method) : 색상의 투명도 변경

[opacify(\$color,](https://sass-lang.com/documentation/modules/color#opacify) _[amount](https://sass-lang.com/documentation/modules/color#opacify)_ [)/](https://sass-lang.com/documentation/modules/color#opacify)_[fade](https://sass-lang.com/documentation/modules/color#opacify)_  [−](https://sass-lang.com/documentation/modules/color#opacify) *[in](https://sass-lang.com/documentation/modules/color#opacify)* [(color, \$amount)](https://sass-lang.com/documentation/modules/color#opacify) : 색상을 더 불투명하게

[transparentize(\$color,](https://sass-lang.com/documentation/modules/color#transparentize) _[amount](https://sass-lang.com/documentation/modules/color#transparentize)_ [)/](https://sass-lang.com/documentation/modules/color#transparentize)_[fade](https://sass-lang.com/documentation/modules/color#transparentize)_  [−](https://sass-lang.com/documentation/modules/color#transparentize) *[out](https://sass-lang.com/documentation/modules/color#transparentize)* [(color, \$amount)](https://sass-lang.com/documentation/modules/color#transparentize) : 색상을 더 투명하게

#### 문자(String) 함수

[unquote(\$string)](http://sass-lang.com/documentation/Sass/Script/Functions.html#unquote-instance_method) : 문자의 따옴표 제거

[quote(\$string)](http://sass-lang.com/documentation/Sass/Script/Functions.html#quote-instance_method) : 문자에 따옴표 추가

[str-insert($string, $insert, \$index)](http://sass-lang.com/documentation/Sass/Script/Functions.html#str_insert-instance_method) : 문자의 index번째에 특정 문자를 삽입

[str-index($string, $substring)](http://sass-lang.com/documentation/Sass/Script/Functions.html#str_index-instance_method) : 문자에서 특정 문자의 첫 index를 반환

[str-slice(\$string,](http://sass-lang.com/documentation/Sass/Script/Functions.html#str_slice-instance_method) _[start](http://sass-lang.com/documentation/Sass/Script/Functions.html#str_slice-instance_method)_  [−](http://sass-lang.com/documentation/Sass/Script/Functions.html#str_slice-instance_method) *[at](http://sass-lang.com/documentation/Sass/Script/Functions.html#str_slice-instance_method)* [, [end-at])](http://sass-lang.com/documentation/Sass/Script/Functions.html#str_slice-instance_method) : 문자에서 특정 문자(몇 번째 글자부터 몇 번째 글자까지)를 추출

[to-upper-case(\$string)](http://sass-lang.com/documentation/Sass/Script/Functions.html#to_upper_case-instance_method) : 문자를 대문자로 변환

[to-lower-case(\$string)](http://sass-lang.com/documentation/Sass/Script/Functions.html#to_lower_case-instance_method) : 문자를 소문자로 변환

#### 숫자(Number) 함수

[percentage(\$number)](http://sass-lang.com/documentation/Sass/Script/Functions.html#percentage-instance_method) : 숫자(단위 무시)를 백분율로 변환합니다.

[round(\$number)](http://sass-lang.com/documentation/Sass/Script/Functions.html#round-instance_method) : 정수로 반올림합니다.

[ceil(\$number)](http://sass-lang.com/documentation/Sass/Script/Functions.html#ceil-instance_method) : 정수로 올림합니다.

[floor(\$number)](http://sass-lang.com/documentation/Sass/Script/Functions.html#floor-instance_method) : 정수로 내림(버림)합니다.

[abs(\$number)](http://sass-lang.com/documentation/Sass/Script/Functions.html#abs-instance_method) : 숫자의 절대 값을 반환합니다.

[min(\$numbers…)](http://sass-lang.com/documentation/Sass/Script/Functions.html#min-instance_method) : 숫자 중 최소 값을 찾습니다.

[max(\$numbers…)](http://sass-lang.com/documentation/Sass/Script/Functions.html#max-instance_method) : 숫자 중 최대 값을 찾습니다.

[random()](http://sass-lang.com/documentation/Sass/Script/Functions.html#random-instance_method) : `0` 부터 `1` 사이의 난수를 반환합니다.

#### List 함수

모든 List 내장 함수는 기존 List 데이터를 갱신하지 않고 새 List 데이터를 반환합니다. 모든 List 내장 함수는 Map 데이터에서도 사용할 수 있습니다.

[length(\$list)](http://sass-lang.com/documentation/Sass/Script/Functions.html#length-instance_method) : List의 개수를 반환합니다.

[nth($list, $n)](http://sass-lang.com/documentation/Sass/Script/Functions.html#nth-instance_method) : List에서 n번째 값을 반환합니다.

[set-nth($list, $n, \$value)](http://sass-lang.com/documentation/Sass/Script/Functions.html#set_nth-instance_method) : List에서 n번째 값을 다른 값으로 변경합니다.

[join(\$list1, _l**i**s_*t*2, [separator])](http://sass-lang.com/documentation/Sass/Script/Functions.html#join-instance_method) : 두 개의 List를 하나로 결합합니다.

[zip(\$lists…)](http://sass-lang.com/documentation/Sass/Script/Functions.html#zip-instance_method) : 여러 List들을 하나의 다차원 List로 결합합니다.

[index($list, $value)](http://sass-lang.com/documentation/Sass/Script/Functions.html#index-instance_method) : List에서 특정 값의 index를 반환합니다.

#### Map 함수

모든 Map 내장 함수는 기존 Map 데이터를 갱신하지 않고 새 Map 데이터를 반환합니다.

[map-get($map, $key)](http://sass-lang.com/documentation/Sass/Script/Functions.html#map_get-instance_method) : Map에서 특정 key의 value를 반환합니다.

[map-merge($map1, $map2)](http://sass-lang.com/documentation/Sass/Script/Functions.html#map_merge-instance_method) : 두 개의 Map을 병합하여 새로운 Map를 만듭니다.

[map-keys(\$map)](http://sass-lang.com/documentation/Sass/Script/Functions.html#map_keys-instance_method) : Map에서 모든 key를 List로 반환합니다.

[map-values(\$map)](http://sass-lang.com/documentation/Sass/Script/Functions.html#map_values-instance_method) : Map에서 모든 value를 List로 반환합니다.

#### 관리(Introspection) 함수

[variable-exists(name)](http://sass-lang.com/documentation/Sass/Script/Functions.html#variable_exists-instance_method) : 변수가 현재 범위에 존재하는지 여부를 반환합니다.(인수는 `$`없이 변수의 이름만 사용합니다.)

[unit(\$number)](http://sass-lang.com/documentation/Sass/Script/Functions.html#unit-instance_method) : 숫자의 단위를 반환합니다.

[unitless(\$number)](http://sass-lang.com/documentation/Sass/Script/Functions.html#unitless-instance_method) : 숫자에 단위가 있는지 여부를 반환합니다.

[comparable($number1, $number2)](http://sass-lang.com/documentation/Sass/Script/Functions.html#comparable-instance_method) : 두 개의 숫자가 연산 가능한지 여부를 반환합니다.

### Reference

[패스트캠퍼스 - 프론트엔드 개발 강의](https://www.fastcampus.co.kr/dev_online_react/) - HTML & CSS, SASS(SCSS) Part by [ParkYoungWoong](https://github.com/ParkYoungWoong)

[Sass(SCSS) 완전 정복!](https://heropy.blog/2018/01/31/sass/)

[Sass Built-in Functions](http://sass-lang.com/documentation/Sass/Script/Functions.html)

[Zero-based numbering](https://en.wikipedia.org/wiki/Zero-based_numbering)
