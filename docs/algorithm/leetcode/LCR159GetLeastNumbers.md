# LCR159. 最小的k个数

## 题目
仓库管理员以数组 stock 形式记录商品库存表，其中 stock[i] 表示对应商品库存余量。请返回库存余量最少的 cnt 个商品余量，返回 顺序不限

```
示例 1：

输入：stock = [2,5,7,4], cnt = 1
输出：[2]


示例 2：

输入：stock = [0,2,3,6], cnt = 2
输出：[0,2] 或 [2,0]
```

## 解题思路


## 代码
```java
public class LCR159GetLeastNumbers {

    public int[] getLeastNumbers(int[] a, int k) {
        int[] res = new int[k];
        PriorityQueue<Integer> q = new PriorityQueue<>((i1, i2) -> i2 - i1);
        for (int v : a) {
            if (q.size() < k) {
                q.offer(v);
            } else if (q.peek() > v) {
                q.poll();
                q.offer(v);
            }
        }
        for (int i = 0; i < q.size(); i++) {
            res[i] = q.peek();
        }
        return res;
    }

    public int[] getLeastNumbersByQuick(int[] a, int k) {
        if (k >= a.length) {
            return a;
        }
        quick(a, 0, a.length - 1, k - 1);
        int[] res = new int[k];
        for (int i = 0; i < res.length; i++) {
            res[i] = a[i];
        }
        return res;
    }

    private void quick(int[] a, int i, int j, int kdx) {
        if (i >= j) {
            return;
        }
        int p = a[(int) (i + (j - i + 1) * Math.random())], es = i, ee = j;
        while (i <= ee) {
            if (a[i] < p) {
                swap(a, i++, es++);
            } else if (a[i] > p) {
                swap(a, i, ee--);
            } else {
                i++;
            }
        }
        if (kdx > ee) {
            quick(a, ee + 1, j, kdx);
        } else if (kdx < es) {
            quick(a, i, es - 1, kdx);
        }
    }

}
```

## 复杂度分析

