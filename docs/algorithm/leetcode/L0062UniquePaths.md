# 0062. 不同路径

## 题目
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？


```
示例 1：

输入：m = 3, n = 7
输出：28


示例 2：

输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下

```

## 解题思路


## 代码
```java
class L0062UniquePaths {

    public int uniquePaths(int m, int n) {
        int[][] d = new int[m][n];
        for (int i = 0; i < m; i++) {
            d[i][0] = 1;
        }
        for (int i = 0; i < n; i++) {
            d[0][i] = 1;
        }
        for (int i = 1; i < d.length; i++) {
            for (int j = 1; j < d[0].length; j++) {
                d[i][j] = d[i - 1][j] + d[i][j - 1];
            }
        }
        return d[m - 1][n - 1];
    }

}
```

## 复杂度分析

