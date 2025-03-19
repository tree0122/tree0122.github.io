# 0120. 三角形最小路径和

## 题目
给定一个三角形 triangle ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。


```
示例 1：

输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
解释：如下面简图所示：
   2
  3 4
 6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。


示例 2：

输入：triangle = [[-10]]
输出：-10


```

## 解题思路



## 代码
```java
class L0120MinimumTotal {

    public int minimumTotal(List<List<Integer>> triangle) {
        int res = Integer.MAX_VALUE;
        int[][] d = new int[triangle.size()][triangle.size()];
        d[0][0] = triangle.get(0).get(0);
        for (int i = 1; i < d.length; i++) {
            d[i][0] = d[i - 1][0] + triangle.get(i).get(0);
        }
        for (int i = 1; i < d.length; i++) {
            d[i][i] = d[i - 1][i - 1] + triangle.get(i).get(i);
            for (int j = 1; j < i; j++) {
                d[i][j] = Math.min(d[i - 1][j], d[i - 1][j - 1]) + triangle.get(i).get(j);
            }
        }
        for (int i = 0; i < d[0].length; i++) {
            res = Math.min(res, d[d.length - 1][i]);
        }
        return res;
    }

}
```

## 复杂度分析

