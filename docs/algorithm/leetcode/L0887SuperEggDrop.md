# 0887. 鸡蛋掉落

## 题目
给你 k 枚相同的鸡蛋，并可以使用一栋从第 1 层到第 n 层共有 n 层楼的建筑。

已知存在楼层 f ，满足 0 <= f <= n ，任何从 高于 f 的楼层落下的鸡蛋都会碎，从 f 楼层或比它低的楼层落下的鸡蛋都不会破。

每次操作，你可以取一枚没有碎的鸡蛋并把它从任一楼层 x 扔下（满足 1 <= x <= n）。如果鸡蛋碎了，你就不能再次使用它。如果某枚鸡蛋扔下后没有摔碎，则可以在之后的操作中 重复使用 这枚鸡蛋。

请你计算并返回要确定 f 确切的值 的 最小操作次数 是多少？


```
示例 1：

输入：k = 1, n = 2
输出：2
解释：
鸡蛋从 1 楼掉落。如果它碎了，肯定能得出 f = 0 。 
否则，鸡蛋从 2 楼掉落。如果它碎了，肯定能得出 f = 1 。 
如果它没碎，那么肯定能得出 f = 2 。 
因此，在最坏的情况下我们需要移动 2 次以确定 f 是多少。 


示例 2：

输入：k = 2, n = 6
输出：3


示例 3：

输入：k = 3, n = 14
输出：4

```

## 解题思路



## 代码
```java
class L0887SuperEggDrop {

    public int superEggDrop(int k, int n) {
        int[][] d = new int[k + 1][n + 1];
        for (int i = 1; i <= n; i++) {
            d[1][i] = i;
        }
        for (int i = 2; i < d.length; i++) {
            for (int j = 1; j < d[0].length; j++) {
                int totalMin = n + 1, curMax = 0;
                for (int x = 1; x <= j; x++) {
                    curMax = Math.max(d[i - 1][x - 1], d[i][j - x]) + 1;
                    totalMin = Math.min(curMax, totalMin);
                }
                d[i][j] = totalMin;
            }
        }
        return d[k][n];
    }

    // searchTime(K, N) = max( searchTime(K-1, X-1), searchTime(K, N-X) )
    // 如果我们尝试在 1 ~ n 层中的任意一层 x 扔鸡蛋：
    //
    // 如果鸡蛋没碎，则说明 1 ~ x 层都不用再考虑了，我们需要用 k 个鸡蛋去考虑剩下的 n - x 层，问题就从 (n, k) 转变为了 (n - x, k)。
    // 如果鸡蛋碎了，则说明 x + 1 ~ n 层都不用再考虑了，我们需要去剩下的 k - 1 个鸡蛋考虑剩下的 x - 1 层，问题就从 (n, k) 转变为了 (x - 1, k - 1)。
    public int supperEggDropRecursive(int k, int n) {
        if (k == 1 || n == 1 || n == 0) {
            return n;
        }
        int res = n + 1;
        for (int x = 1; x <= n; x++) {
            int curMax = 1 + Math.max(supperEggDropRecursive(k - 1, x - 1), supperEggDropRecursive(k, n - x));
            res = Math.min(res, curMax);
        }
        return res;
    }

    // 定义状态 dp[i][j] 表示为：一共有 i 个鸡蛋，最多扔 j 次鸡蛋（碎没碎都算 1 次）的条件下，最多可以检测的楼层个数
    public int superEggDropBest(int k, int n) {
        int[][] d = new int[k + 1][n + 1];
        d[1][1] = 1; // 当鸡蛋数为 1 时，只有 1 次扔鸡蛋的机会时，最多可以检测 1 层
        for (int i = 1; i < d.length; i++) {
            for (int j = 1; j < d[0].length; j++) {
                // 我们现在有 i 个鸡蛋，j 次扔鸡蛋的机会，现在尝试在 1 ~ n 层中的任意一层 x 扔鸡蛋：
                d[i][j] = d[i - 1][j - 1] // 如果鸡蛋碎了，剩下 i - 1 个鸡蛋，还有 j - 1 次扔鸡蛋的机会，最多可以检测 dp[i - 1][j - 1] 层楼层
                        + d[i][j - 1] // 如果鸡蛋没碎，剩下 i 个鸡蛋，还有 j - 1 次扔鸡蛋的机会，最多可以检测 dp[i][j - 1] 层楼层。
                        + 1; // 再加上我们扔鸡蛋的第 x 层

                if (i == k && d[i][j] >= n) { // 需要从满足 i == k 并且 dp[i][j] >= n（即 k 个鸡蛋，j 次扔鸡蛋，一共检测出 n 层楼）的情况中，找出最小的 j
                    return j;
                }
            }
        }
        return n;
    }

}
```

## 复杂度分析

