# LCR170.数组中的逆序对

## 题目
在股票交易中，如果前一天的股价高于后一天的股价，则可以认为存在一个「交易逆序对」。请设计一个程序，输入一段时间内的股票交易记录 record，返回其中存在的「交易逆序对」总数。

```
示例 1：

输入：record = [9, 7, 5, 4, 6]
输出：8
解释：交易中的逆序对为 (9, 7), (9, 5), (9, 4), (9, 6), (7, 5), (7, 4), (7, 6), (5, 4)。
```

## 解题思路


## 代码
```java
public class LCR170ReversePairs {

    public int reversePairs(int[] a) {
        int[] t = new int[a.length];
        return mergeSort(a, 0, a.length - 1, t);
    }

    private int mergeSort(int[] a, int i, int j, int[] t) {
        if (i >= j) {
            return 0;
        }
        int m = (i + j) /2;
        int left = mergeSort(a, i, m, t);
        int right = mergeSort(a, m + 1, j, t);
        int mg = merge(a, i, m, j, t);
        return left + right + mg;
    }

    private int merge(int[] a, int i, int m, int j, int[] t) {
        int res = 0, x = i, y = m + 1, k = i;
        while (x <= m && y <= j) {
            if (a[x] <= a[y]) {
                t[k++] = a[x++];
            }else {
                t[k++] = a[y++];
                res += (m - x + 1);
            }
        }
        while (x <= m) {
            t[k++] = a[x++];
        }
        while (y <= j) {
            t[k++] = a[y++];
        }
        while (i <= j) {
            a[i] = t[i++];
        }
        return res;
    }

}
```

## 复杂度分析

