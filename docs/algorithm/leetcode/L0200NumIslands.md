# 0200. 岛屿数量

## 题目
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。


```
示例 1：

输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1


示例 2：

输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3

```

## 解题思路


## 代码
```java
class L0200NumIslands {

    public int numIslands(char[][] grid) {
        int ans = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == '1') {
                    ans++;
                    islandsDfs(grid, i, j);
                }
            }
        }
        return ans;
    }

    private void islandsDfs(char[][] g, int i, int j) {
        if (i < 0 || i >= g.length || j < 0 || j >= g[0].length || g[i][j] != '1') {
            return;
        }
        g[i][j] = '2';
        islandsDfs(g, i - 1, j);
        islandsDfs(g, i + 1, j);
        islandsDfs(g, i, j - 1);
        islandsDfs(g, i, j + 1);
    }

}
```

## 复杂度分析

