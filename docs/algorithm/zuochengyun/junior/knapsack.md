# 背包问题

## 题目
背包问题


## 代码
```java
public class Knapsack {

    public int knapsack(int[] w, int[] v, int bag) {
//        return doKnapsack(w, v, bag, 0);
        int res = 0;
        int[][] d = new int[w.length + 1][bag + 1];
        for (int i = d.length - 2; i >= 0; i--) {
            for (int j = 0; j < d[0].length; j++) {
                d[i][j] = d[i + 1][j];
                if (j >= w[i]) {
                    d[i][j] = Math.max(d[i][j], d[i + 1][j - w[i]] + v[i]);
                }
                res = Math.max(res, d[i][j]);
            }
        }
        return res;
    }

    private int doKnapsack(int[] w, int[] v, int bag, int i) {
        if (i == w.length || bag < 0) {
            return 0;
        }
        return Math.max(
                doKnapsack(w, v, bag, i + 1),
                bag >= w[i] ? doKnapsack(w, v, bag - w[i], i + 1) + v[i] : 0
        );
    }

}
```

## 复杂度分析
