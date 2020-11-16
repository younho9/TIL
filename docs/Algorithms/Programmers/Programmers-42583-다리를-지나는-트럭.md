---
id: Programmers-42583-다리를-지나는-트럭
title: 'Programmers-42583. 다리를 지나는 트럭'
---

[코딩테스트 연습 - 다리를 지나는 트럭](https://programmers.co.kr/learn/courses/30/lessons/42583)

<br/>

| 해결 유무(✅/❌) | 걸린 시간 | 난이도 | 문제 유형 |
| ---------------- | --------- | ------ | --------- |
| ✅               | 2시간     | lv.2   | 스택, 큐  |

### **설계 방법**

- 다리의 길이를 고정 길이로 가지는 큐( `onBridge` )를 만듬.

  - Array를 큐로 사용하고 index를 이동시키는 방법으로 (`shift` 연산의 시간복잡도 문제 해결)

  - `time` 을 큐의 head index로 사용

- `overBridge` 에 모든 트럭이 도착할 때 까지 시간을 증가시키고 `onBridge` 큐에 트럭을 담아가며 진행

- `onBridgeWeight` 를 반복문 내에서 계산

### 코드

```javascript
function solution(birdge_length, weight, truck_weights) {
  const onBridge = Array.from({ length: birdge_length }, () => null);
  const overBridge = [];
  let onBridgeWeight = 0;
  let time = 0;

  let waitingTruckIndex = 0;
  while (overBridge.length !== truck_weights.length) {
    const truck = onBridge[time];
    time++;

    if (truck) {
      overBridge.push(truck);
      onBridgeWeight -= truck;
    }

    if (
      onBridgeWeight + truck_weights[waitingTruckIndex] > weight ||
      waitingTruckIndex >= truck_weights.length
    ) {
      onBridge[time + birdge_length - 1] = null;
      continue;
    }

    onBridge[time + birdge_length - 1] = truck_weights[waitingTruckIndex];
    onBridgeWeight += truck_weights[waitingTruckIndex];
    waitingTruckIndex++;
  }

  return time;
}
```

### **시간 복잡도**

- O(n), time 만큼 반복문 연산

### **어려웠던 점**

- 처음에 문제를 잘못 이해해서 주어진 truck_weights 배열을 보고 최소 시간을 찾아내야되는 걸로 착각함.

- JS에서 큐를 쓰는게 너무 불편함

<br/>
