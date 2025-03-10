# 0215. 数组中的第K个最大元素

## 题目
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

```
示例 1:

输入: [3,2,1,5,6,4], k = 2
输出: 5


示例 2:

输入: [3,2,3,1,2,4,5,5,6], k = 4
输出: 4
```

## 思路
**快速排序**
使用快速排序在每次调整时，都会确定一个元素的最终位置，且以该元素为界限，将数组分成了左右两个子数组，左子数组中的元素都比该元素小，右子树组中的元素都比该元素大。

这样，只要某次划分的元素恰好是第k个下标就找到了答案。并且我们只需关注第 k个最大元素所在区间的排序情况，与第 k 个最大元素无关的区间排序都可以忽略。这样进一步减少了执行步骤。


## 代码
```java
public class L0215KthLargestInArray {

     public int best(int[] a, int k) {
        return find(a, 0, a.length - 1, k - 1);
    }

    private int find(int[] a, int s, int e, int kIdx) {
        int[] q = part(a, s, e);
        if (kIdx < q[0]) {
            return find(a, s, q[0] - 1, kIdx);
        }
        if (kIdx > q[1]) {
            return find(a, q[1] + 1, e, kIdx);
        }
        // kIdx >= q[0] && kIdx <= q[1]
        return a[q[0]];
    }

    private int[] part(int[] a, int s, int e) {
        int p = (int) (s + (e - s + 1) * Math.random());
        // q[0]: a[s...q[0]) > a[p]
        // q[1]: a(q[1]...e] < a[p]
        // a[q[0]...q[1]] = a[p]
        int[] q = {s, e};
        while (s <= q[1]) {
            if (a[s] < a[p]) {
                swap(a, s, q[1]--);
            }else if (a[s] > a[p]) {
                swap(a, s++, q[1]++);
            }else {
                s++;
            }
        }
        return q;
    }

    private void swap(int[] a, int i, int j) {

    }

    public int kth(int[] a, int k) {
        PriorityQueue<Integer> q = new PriorityQueue<>(k);
        for (int v : a) {
            q.offer(v);
            if (q.size() <= k) {
                q.offer(v);
            } else if (q.peek() < v) {
                q.poll();
                q.offer(v);
            }
        }
        return q.peek();
    }

}
```

## 复杂度分析
- 堆排序，时间复杂度O(N*Lg(N)),额外空间复杂度O(k)
- 快排序，时间复杂度O(N),额外空间复杂度O(1)
