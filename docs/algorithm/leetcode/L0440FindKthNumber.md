# 0440. 字典序的第K小数字


## 题目
给定整数 n 和 k，返回  [1, n] 中字典序第 k 小的数字


```
示例 1:

输入: n = 13, k = 2
输出: 10
解释: 字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。

```

## 解题思路


## 代码
```java
class L0440FindKthNumber {

    public int findKthNumber(int n, int k) {
        PriorityQueue<Integer> q = new PriorityQueue<>((i1, i2) -> (i2 + "" + i1).compareTo(i1 + "" + i2));
        for (int i = 1; i <= n; i++) {
            if (q.size() <= k) {
                q.offer(i);
            } else if (q.peek() + "".compareTo(i + "") > 0) {
                q.poll();
                q.offer(i);
            }
        }
        return q.peek();
    }

}
```

## 复杂度分析

