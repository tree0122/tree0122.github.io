# 扎气球得最大金币

## 题目
给定n个气球, 编号从0至n-1, 每个气球上写了一个数字, 这些数字存放在数组nums中.现在你来扎破所有的气球. 当扎破第i个气球时, 可以得到的金币个数为nums[left] * nums[i] * nums[right],这里的left和right指的是第i个气球相邻气球的编号. （当扎破一个气球后, 原来它左右侧的气球将成为相邻气球）.

求通过扎气球可以获得的最大金币数量


## 代码
```java
public class MaxCoins {

    public int maxCoins(int[] a) {
        int[] t = new int[a.length + 2];
        t[0] = t[t.length - 1] = 1;
        for (int i = 0; i < a.length; i++) {
            t[i + 1] = a[i];
        }
//        return doMaxCoins(t, 1, a.length);
        int[][] d = new int[t.length][t.length];
        for (int i = d.length - 2; i > 0; i--) {
            d[i][i] = t[i - 1] * t[i] * t[i + 1];
            for (int j = i + 1; j < d[0].length - 1; j++) {
                for (int k = i; k <= j; k++) {
                    int left = k == i ? 0 : d[i][k - 1];
                    int right = k == j ? 0 : d[k + 1][j];
                    int mid = t[i - 1] * t[k] * t[j + 1];
                    d[i][j] = Math.max(d[i][j], left + mid + right);
                }
            }
        }
        return d[1][a.length];
    }

    private int doMaxCoins(int[] t, int i, int j) {
        if (i == j) {
            return t[i - 1] * t[i] * t[i + 1];
        }
        int res = 0;
        for (int k = i; k <= j; k++) {
            int left = k == i ? 0 : doMaxCoins(t, i, k - 1);
            int right = k == j ? 0 : doMaxCoins(t, k + 1, j);
            int mid = t[i - 1] * t[k] * t[j + 1];
            res = Math.max(res, left + mid + right);
        }
        return res;
    }

}
```

## 复杂度分析
