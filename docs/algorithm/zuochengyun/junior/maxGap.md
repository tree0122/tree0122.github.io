# maxGap

## 题目
给定一个数组,求如果排序之后,相邻两数的最大差值,要求时间复杂度O(N),且要求不能用非基于比较的排序。

## 代码
```java
class MaxGap {

    public int maxGap(int[] a) {
        int[][] bs = new int[a.length + 1][3];
        int mx = a[0], mn = a[0];
        for (int i = 0; i < a.length; i++) {
            mx = Math.max(mx, a[i]);
            mn = Math.min(mn, a[i]);
        }
        for (int i = 0; i < a.length; i++) {
            int dx = buckAt(mx, mn, bs.length, a[i]);
            if (bs[dx][0] == 1) {
                bs[dx][1] = Math.max(bs[dx][1], a[i]);
                bs[dx][2] = Math.min(bs[dx][2], a[i]);
            } else {
                bs[dx][0] = 1;
                bs[dx][1] = a[i];
                bs[dx][2] = a[i];
            }
        }
        int preMax = bs[0][1], gap = 0;
        for (int i = 1; i < bs.length; i++) {
            if (bs[i][0] == 1) {
                gap = Math.max(gap, bs[i][2] - preMax);
                preMax = bs[i][1];
            }
        }
        return gap;
    }

    private int buckAt(int max, int min, int len, int v) {
        return (int) (1.0 * (v - min) / (max - min) * len);
    }

}
```

## 复杂度分析
