# 生成窗口最大值数组

## 题目
整数数组arr, 大小为k的窗口, 从数组最左边滑到最右边, 窗口每次向右滑到一个位置。返回窗口内最大值的数组

## 代码
```java
public class MaxWindow {

    public int[] maxWindow(int[] a, int k) {
        int[] res = new int[a.length - k + 1];
        LinkedList<Integer> q = new LinkedList<>();
        for (int i = 0, j = 0; i < a.length; i++) {
            while (!q.isEmpty() && a[q.peekLast()] <= a[i]) {
                q.pollLast();
            }
            q.offer(i);
            while (i - (k - 1) > q.peekFirst()) {
                q.pollFirst();
            }
            if (i >= k - 1) {
                res[j++] = a[q.peekFirst()];
            }
        }
        return res;
    }

}
```

## 复杂度分析