---
id: Programmers-42842-카펫
title: 'Programmers-42842. 카펫'
---

[코딩테스트 연습 - 카펫](https://programmers.co.kr/learn/courses/30/lessons/42842)

<br/>

| 해결 유무(✅/❌) | 걸린 시간 | 난이도 | 문제 유형 |
| ---------------- | --------- | ------ | --------- |
| ✅               | 20분      | lv.2   | 완전탐색  |

### **설계 방법**

- `brown` , `yellow` , `return([x, y])` 은 다음과 같은 관계를 가진다.

x _ y === brown + yellow
(x _ 2) + (y _ 2) - 4 === brown;
(x - 2) _ (y - 2) === yellow;

- 먼저 첫 번째 성질을 이용해서, 인수 쌍(FactorPairs)을 찾는다.

- 각 인수 쌍을 reduce로 순회하며, 두 번째, 세 번째 성질을 모두 만족하는 인수 쌍을 찾으면, `splice(0)`로 early break 하고 인수 쌍을 리턴한다.

### 코드

```javascript
function solution(brown, yellow) {
  // (x * 2) + (y * 2) - 4 = brown;
  // (x - 2) * (y - 2) = yellow;
  // x * y = brown + yellow

  return findFactorPairs(brown + yellow).reduce((_, [x, y], __, pairs) => {
    if (x * 2 + y * 2 - 4 === brown && (x - 2) * (y - 2) === yellow) {
      pairs.splice(0);
      return [x, y];
    }
  }, []);
}

function findFactorPairs(number) {
  const pairs = [[number, 1]];

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      pairs.push([number / i, i]);
    }
  }

  return pairs;
}
```

### **시간 복잡도**

- `findFactorPair` : O(root(N)) .. ?

- `FactorPairs` 순회 : O(N) (순서쌍의 개수는 최대 N/2 이므로 .. ?)> O(N \* root(N));

### **어려웠던 점**

- 규칙을 찾아내는데에 수학적인 사고가 필요했다.

### **참고자료**

[SplashLearn - Fun Math Practice Games for Kindergarten to 5th Grade](https://www.splashlearn.com/math-vocabulary/fractions/factor-pairs)
