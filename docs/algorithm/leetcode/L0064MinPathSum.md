# 0064. 最小路径和

## 题目
给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

```
示例 1：

输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
```

## 解题思路


## 代码
```java
class L0064MinPathSum {

    public int minPathSum(int[][] grid) {
        int[][] d = new int[grid.length + 1][grid[0].length + 1];
        for (int i = 1; i < d.length; i++) {
            for (int j = 1; j < d[0].length; j++) {
                d[i][j] = Math.min(d[i - 1][j], d[i][j - 1]) + grid[i - 1][j - 1];
            }
        }
        return d[d.length - 1][d[0].length - 1];
    }

}
```

## 复杂度分析

