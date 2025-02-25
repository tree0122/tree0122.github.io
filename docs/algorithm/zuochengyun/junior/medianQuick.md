# 一个stream的中位数

## 题目
随时能找到一个stream的中位数

## 代码
```java
class MedianQuick {
    PriorityQueue<Integer> bigHalfQ = new PriorityQueue<>(Comparator.comparingInt(i -> i));
    PriorityQueue<Integer> smallHalfQ = new PriorityQueue<>((i1, i2) -> i2 - i1);

    public Double median() {
        if (smallHalfQ.isEmpty()) {
            return null;
        }
        if (smallHalfQ.size() > bigHalfQ.size()) {
            return smallHalfQ.peek() * 1.0;
        }
        return (smallHalfQ.peek() + bigHalfQ.peek()) / 2.0;
    }

    public void offer(int v) {
        smallHalfQ.offer(v);
        if (smallHalfQ.size() - bigHalfQ.size() > 1) {
            bigHalfQ.offer(smallHalfQ.poll());
        }
    }
}
```

## 复杂度分析
