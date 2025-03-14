# 0221. 最大正方形

## 题目
在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。


```
示例 1：

输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4

```

## 解题思路


## 代码
```java
class L0221MaximalSquare {

    public int maximalSquare(char[][] matrix) {
        int len = 0;
        int[][] d = new int[matrix.length + 1][matrix[0].length + 1];
        for (int i = 1; i < d.length; i++) {
            for (int j = 1; j < d[0].length; j++) {
                if (matrix[i - 1][j - 1] == '1') {
                    d[i][j] = Math.min(d[i - 1][j - 1], Math.min(d[i - 1][j], d[i][j - 1])) + 1;
                    len = Math.max(len, d[i][j]);
                }
            }
        }
        return len * len;
    }

}
```

## 复杂度分析

