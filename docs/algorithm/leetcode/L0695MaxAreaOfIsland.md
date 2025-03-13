# 0695. 岛屿的最大面积

## 题目
给你一个大小为 m x n 的二进制矩阵 grid 。

岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

岛屿的面积是岛上值为 1 的单元格的数目。

计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。


```
示例 1：

输入：grid = [[0,0,0,0,0,0,0,0]]
输出：0

```

## 解题思路


## 代码
```java
class L0695MaxAreaOfIsland {

    public int maxAreaOfIsland(int[][] grid) {
        int ans = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == '1') {
                    ans = Math.max(ans, areaDfs(grid, i, j));
                }
            }
        }
        return ans;
    }

    private int areaDfs(int[][] g, int i, int j) {
        int res = 0;
        if (i < 0 || i >= g.length || j < 0 || j >= g[0].length || g[i][j] != '1') {
            return res;
        }
        g[i][j] = '2';
        res++;
        res += areaDfs(g, i - 1, j);
        res += areaDfs(g, i + 1, j);
        res += areaDfs(g, i, j - 1);
        res += areaDfs(g, i, j + 1);
        return res;
    }

}
```

## 复杂度分析

