---
id: Programmers-42579-베스트-앨범
title: 'Programmers-42579. 베스트 앨범'
---

[코딩테스트 연습 - 베스트앨범](https://programmers.co.kr/learn/courses/30/lessons/42579)

<br/>

| 걸린 시간 | 해결 유무(✅/❌) | 난이도  | 문제 유형 |
| --------- | ---------------- | ------- | --------- |
| 1시간     | ✅               | Level 3 | 해시      |

## 설계 방법

- `genres` 를 순회하면서, `genres`와 `plays`의 `index`가 같으므로, 장르별로 `first`, `second`, `sum`을 기록한 `hashMap` 을 구성한다.

- `hashMap`의 `values`를 `sum`을 기준으로 정렬한 이후, 순회하며 장르별 `first`, `second`로 앨범을 구성한다.

## 코드

```javascript
function solution(genres, plays) {
  const hashMap = genres.reduce((hash, genre, i) => {
    if (hash.has(genre)) {
      const info = hash.get(genre);
      if (plays[info.first] < plays[i]) {
        info.second = info.first;
        info.first = i;
      } else if (info.second === null || plays[info.second] < plays[i]) {
        info.second = i;
      }
      info.sum += plays[i];
    } else {
      hash.set(genre, {
        first: i,
        second: null,
        sum: plays[i],
      });
    }
    return hash;
  }, new Map());

  return [...hashMap.values()]
    .sort((a, b) => b.sum - a.sum)
    .reduce(
      (album, genre) =>
        genre.second === null ? [...album, genre.first] : [...album, genre.first, genre.second],
      [],
    );
}
```

## 시간 복잡도

- hashMap 구성 : O(N)

- hashMap 정렬 : O(NlogN)

- hashMap 순회: O(N)

## 어려웠던 점

- 장르별 `second` 가 없을 수 있다는 점에 대한 예외 처리

- `hashMap`의 `value`가 객체일 때 가독성이 떨어지는 느낌 ex) `hash.get(genre).first`

## 참고자료

- [MDN - Map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)
