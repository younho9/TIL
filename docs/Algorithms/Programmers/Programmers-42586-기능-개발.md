---
id: Programmers-42586-기능-개발
title: 'Programmers-42586. 기능 개발'
---

[코딩테스트 연습 - 기능개발](https://programmers.co.kr/learn/courses/30/lessons/42586)

<br/>

| 걸린 시간 | 난이도 | 해결 유무(✅/❌) | 문제 유형 |
| --------- | ------ | ---------------- | --------- |
| 1시간     | lv.2   | ✅               | 스택 / 큐 |

### **설계 방법**

- `progresses` 배열을 순회하며 `speed` 배열을 참조하여 각 기능별 남은 날짜 배열을 만든다.

- 남은 날짜 배열을 `reduce`로 순회하며, 함께 배포되어야 할 기능들은 `deploys` (스택)에 쌓는다.

- `deploys` 의 길이를 `answer` 에 담아가며 답을 완성한다.

### 코드

```javascript
function solution(progresses, speed) {
  const answer = [];

  const deploys = progresses
    .map((progress, i) => Math.ceil((100 - progress) / speed[i]))
    .reduce((deploys, feature) => {
      if (deploys.length === 0) {
        deploys.push(feature);
      } else if (deploys[0] >= feature) {
        deploys.push(feature);
      } else {
        answer.push(deploys.length);
        deploys = [feature];
      }
      return deploys;
    }, []);

  answer.push(deploys.length);

  return answer;
}
```

### **시간 복잡도**

O(n)

### **어려웠던 점**

- 처음에 큐를 사용하려고 했다가 꼬였었다.

- 마지막에 남은 `deploys` 를 답에 추가해야 된다는걸 깜빡했다.

### **참고자료**
