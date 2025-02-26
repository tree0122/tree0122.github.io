# 0059. 螺旋矩阵 II

## 题目
给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix

```
示例 1:

输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]


示例 2：

输入：n = 1
输出：[[1]]

```

## 解题思路



## 代码
```java
public class L0059GenerateMatrix {

    public int[][] generateMatrix(int n) {
        int[][] m = new int[n][n];
        int t = 0, d = n - 1, v = 1;
        while (t <= d) {
            if (t == d) {
                m[t][d] = v;
                break;
            }
            for (int i = 0; i < d - t; i++) {
                m[t][t + i] = v++;
            }
            for (int i = 0; i < d - t; i++) {
                m[t + i][d] = v++;
            }
            for (int i = 0; i < d - t; i++) {
                m[d][d - i] = v++;
            }
            for (int i = 0; i < d - t; i++) {
                m[d - i][t] = v++;
            }
            t++;
            d--;
        }
        return m;
    }

}
```

## 复杂度分析

