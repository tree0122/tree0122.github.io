# 0329. 矩阵中的最长递增路径

## 题目
给定一个 m x n 整数矩阵 matrix ，找出其中 最长递增路径 的长度。

对于每个单元格，你可以往上，下，左，右四个方向移动。 你 不能 在 对角线 方向上移动或移动到 边界外（即不允许环绕）。


```
示例 1：

输入：matrix = [[9,9,4],[6,6,8],[2,1,1]]
输出：4 
解释：最长递增路径为 [1, 2, 6, 9]。


示例 2：

输入：matrix = [[3,4,5],[3,2,6],[2,2,1]]
输出：4 
解释：最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。


```

## 解题思路



## 代码
```java
class L0329LongestIncreasingPath {

    public int longestIncreasingPath(int[][] matrix) {
        int res = 0;
        int[][] d = new int[matrix.length][matrix[0].length]; //d[i][j]：以matrix[i][j]为起点的最长递增路径
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                int len = increasingPathDfs(matrix, i, j, d, Integer.MIN_VALUE);
                res = Math.max(res, len);
            }
        }
        return res;
    }

    private int increasingPathDfs(int[][] m, int i, int j, int[][] d, int pre) {
        if (i < 0 || i >= m.length || j < 0 || j >= m[0].length || d[i][j] != 0 || d[i][j] <= pre) {
            return 0;
        }
        if (d[i][j] != 0) {
            return d[i][j];
        }
        d[i][j] = 1;
        int left = increasingPathDfs(m, i, j - 1, d, m[i][j]);
        d[i][j] = Math.max(left + 1, d[i][j]);

        int right = increasingPathDfs(m, i, j + 1, d, m[i][j]);
        d[i][j] = Math.max(right + 1, d[i][j]);

        int up = increasingPathDfs(m, i - 1, j, d, m[i][j]);
        d[i][j] = Math.max(up + 1, d[i][j]);

        int down = increasingPathDfs(m, i + 1, j, d, m[i][j]);
        d[i][j] = Math.max(down + 1, d[i][j]);
        return d[i][j];
    }

}
```

## 复杂度分析

