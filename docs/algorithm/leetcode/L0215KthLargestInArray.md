# 0215. 数组中的第K个最大元素

## 思路
**快速排序**
使用快速排序在每次调整时，都会确定一个元素的最终位置，且以该元素为界限，将数组分成了左右两个子数组，左子数组中的元素都比该元素小，右子树组中的元素都比该元素大。

这样，只要某次划分的元素恰好是第k个下标就找到了答案。并且我们只需关注第 k个最大元素所在区间的排序情况，与第 k 个最大元素无关的区间排序都可以忽略。这样进一步减少了执行步骤。


## 代码
```java
public class KthLargestInArray {

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
时间复杂度O(N^2),额外空间复杂度O(1)