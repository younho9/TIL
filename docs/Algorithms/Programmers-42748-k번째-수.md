---
id: Programmers-42748-k번째-수
title: 'Programmers-42748. k번째 수'
---

[코딩테스트 연습 - K번째수](https://programmers.co.kr/learn/courses/30/lessons/42748)

<br/>

| 해결 유무(✅/❌) | 걸린 시간 | 난이도 | 문제 유형 |
| ---------------- | --------- | ------ | --------- |
| ✅               | 10분      | lv.1   | 정렬      |

### **설계 방법**

- commands 마다

- commands에 따라 배열을 자르고

- sort 함수로 정렬한 뒤

- 정렬한 배열의 command[2] - 1 번째 수를

- 새로운 배열에 담는다.

### 코드

```javascript
function solution(array, commands) {
  return commands.map(
    command => array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[command[2] - 1],
  );
}
```

### **시간 복잡도**

- O(N\*MlogM)

### **어려웠던 점**

- 정렬 알고리즘의 시간 복잡도에 대해서 고민하지 않고 내장 sort함수로 쉽게 해결함.

- 시간 복잡도를 개선할 수 있는 방법이 있을지 궁금함.

### **참고자료**
