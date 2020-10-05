# Programmers-42626. 더 맵게

[코딩테스트 연습 - 더 맵게](https://programmers.co.kr/learn/courses/30/lessons/42626)

| 난이도 | 해결 유무(✅/❌) | 걸린 시간 | 문제 유형 |
| ------ | ---------------- | --------- | --------- |
| lv.2   | ✅               | 30분      | 힙        |

### **설계 방법**

- 힙을 구성하고 힙의 루트(최소값)이 K보다 클 때까지 요구사항대로 (최소값 + 2번째 최소값 \* 2)를 힙에 넣는다.

- 힙의 길이가 2보다 작은 경우에는 불가능하므로 -1을 리턴하는 것으로 예외처리한다.

### 코드

#### 파이썬

```python
import heapq


def solution(scoville, K):
    heapq.heapify(scoville)
    count = 0

    while scoville[0] < K:
        if len(scoville) < 2:
            return -1

        heapq.heappush(scoville, heapq.heappop(scoville) + heapq.heappop(scoville) * 2)
        count += 1

    return count
```

#### JS

```javascript
function solution(scoville, K) {
  let count = 0;
  const heap = scoville.reduce((heap, food) => {
    heap.insert(food);
    return heap;
  }, new MinHeap());

  while (heap.getMin() < K) {
    if (heap.size() < 2) {
      return -1;
    }

    heap.insert(heap.remove() + heap.remove() * 2);
    count += 1;
  }

  return count;
}

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  getMin() {
    return this.heap[1];
  }

  size() {
    return this.heap.length - 1;
  }

  insert(node) {
    this.heap.push(node);

    if (this.heap.length > 1) {
      let current = this.heap.length - 1;

      while (current > 1 && this.heap[Math.floor(current / 2)] > this.heap[current]) {
        [this.heap[Math.floor(current / 2)], this.heap[current]] = [
          this.heap[current],
          this.heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  }

  remove() {
    let smallest = this.heap[1];

    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }

      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;

      while (
        this.heap[leftChildIndex] &&
        this.heap[rightChildIndex] &&
        (this.heap[current] > this.heap[leftChildIndex] ||
          this.heap[current] > this.heap[rightChildIndex])
      ) {
        if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
          [this.heap[current], this.heap[leftChildIndex]] = [
            this.heap[leftChildIndex],
            this.heap[current],
          ];
          current = leftChildIndex;
        } else {
          [this.heap[current], this.heap[rightChildIndex]] = [
            this.heap[rightChildIndex],
            this.heap[current],
          ];
          current = rightChildIndex;
        }

        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1);
    } else {
      return null;
    }

    return smallest;
  }
}
```

### **시간 복잡도**

- 힙 구성 : O(NlogN)

- 힙 순회 : O(N) (최소값 조회 O(1)에 가능)

- > O(NlogN)

### **어려웠던 점**

- 파이썬의 heapq 모듈이 너무 편했다.

- 반대로 JS에서 힙을 쓰기 너무 불편했다.

### **참고자료**

[heapq --- 힙 큐 알고리즘 - 파이썬 설명서 주석판](https://python.flowdas.com/library/heapq.html)

[[파이썬] heapq 모듈 사용법](https://www.daleseo.com/python-heapq/)

[Collections for JavaScript](https://www.collectionsjs.com/)
