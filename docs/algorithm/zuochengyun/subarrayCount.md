# 最大值减去最小值小于或等于num的子数组数量

## 题目
数组arr和整数num, 共返回有多少个子数组满足如下情况:
1. max(arr[i..j]) - min(arr[i..j]) <= num
2. max(arr[i..j])范围内最大值, min(arr[i..j])范围内最小值

## 代码
```java
public class SubarrayCount {

    public int subarrayCount(int[] a, int n) {
        int res = 0;
        LinkedList<Integer> maxQ = new LinkedList<>();
        LinkedList<Integer> minQ = new LinkedList<>();
        for (int left = 0, right = 0; left < a.length; left++) {
            while (right < a.length) {
                while (!maxQ.isEmpty() && a[maxQ.peekLast()] <= a[right]) {
                    maxQ.pollLast();
                }
                maxQ.offer(right);
                while (!minQ.isEmpty() && a[minQ.peekLast()] >= a[right]) {
                    minQ.pollLast();
                }
                minQ.offer(right);
                if (a[maxQ.peekFirst()] - a[minQ.peekFirst()] <= n) {
                    right++;
                } else {
                    break;
                }
            }
            res += right - left;
            if (left <= maxQ.peekFirst()) {
                maxQ.pollFirst();
            }
            if (left <= minQ.peekFirst()) {
                minQ.pollFirst();
            }
        }
        return res;
    }

}
```

## 复杂度分析