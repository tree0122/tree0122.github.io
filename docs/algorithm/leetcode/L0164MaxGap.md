# 0164. 最大间距

## 题目
给定一个无序的数组 nums，返回 数组在排序之后，相邻元素之间最大的差值 。如果数组元素个数小于 2，则返回 0 。

您必须编写一个在「线性时间」内运行并使用「线性额外空间」的算法

```
示例 1:

输入: nums = [3,6,9,1]
输出: 3
解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。


示例 2:

输入: nums = [10]
输出: 0
解释: 数组元素个数小于 2，因此返回 0。

```

## 解题思路


## 代码
```java
public class L0164MaxGap {

    public int maxGap(int[] a) {
        int[][] h = new int[a.length + 1][3];
        int max = 0, min = 0, res = 0;
        for (int v : a) {
            max = Math.max(max, v);
            min = Math.min(min, v);
        }
        for (int v : a) {
            int dx = buckAt(v, max, min, a.length);
            if (h[dx][0] == 1) {
                h[dx][1] = Math.min(h[dx][1], v);
                h[dx][2] = Math.max(h[dx][2], v);
            } else {
                h[dx][0] = 1;
                h[dx][1] = v;
                h[dx][2] = v;
            }
        }
        int preMax = h[0][2];
        for (int[] cmp : h) {
            if (cmp[0] == 1) {
                res = Math.max(res, cmp[1] - preMax);
                preMax = cmp[2];
            }
        }
        return res;
    }

    private int buckAt(int v, int max, int min, int len) {
        return (max - min) * len / (v - min);
    }

}
```

## 复杂度分析

