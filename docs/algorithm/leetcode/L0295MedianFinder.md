# 0295. 数据流的中位数

## 题目
中位数是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。

```


```

## 解题思路


## 代码
```java
public class L0295MedianFinder {
        
    PriorityQueue<Integer> maxHalfQ = new PriorityQueue<>((i1, i2) -> i1 - i2);
    PriorityQueue<Integer> minHalfQ = new PriorityQueue<>((i1, i2) -> i2 - i1);

    public void addNum(int num) {
        minHalfQ.offer(num);
        if (minHalfQ.size() - maxHalfQ.size() == 2) {
            maxHalfQ.offer(minHalfQ.poll());
        }
    }

    public double findMedian() {
        if (minHalfQ.size() == 0) {
            return 0;
        }
        if (minHalfQ.size() == maxHalfQ.size()) {
            return (minHalfQ.peek() + maxHalfQ.peek()) / 2.0;
        }
        return minHalfQ.peek();
    }
    
}
```

## 复杂度分析

