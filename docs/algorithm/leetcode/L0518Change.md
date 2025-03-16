# 0518. 零钱兑换 II

## 题目
给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。

请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。

假设每一种面额的硬币有无限个。 

题目数据保证结果符合 32 位带符号整数。

```
示例 1：

输入：amount = 5, coins = [1, 2, 5]
输出：4
解释：有四种方式可以凑成总金额：
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1


示例 2：

输入：amount = 3, coins = [2]
输出：0
解释：只用面额 2 的硬币不能凑成总金额 3 。


```

## 解题思路


## 代码
```java
class L0518Change {

   public int changeBetter(int amount, int[] coins) {
        int[] d = new int[amount + 1];
        d[0] = 1;
        for (int i = 0; i < coins.length; i++) {
            for (int j = coins[i]; j <= amount; j++) {
                d[j] = d[j] + d[j - coins[i]];
            }
        }
        return d[amount];
    }

    public int change(int amount, int[] coins) {
//        return doChange(amount, coins, 0);
        //d[i][m] = d[i+1][m] + d[i][m-coins[i]]
        int[][] d = new int[coins.length + 1][amount + 1];
        d[coins.length][0] = 1;
        for (int i = d.length - 2; i >= 0; i--) {
            for (int j = 0; j < d[0].length; j++) {
                d[i][j] = d[i + 1][j] + (j >= coins[i] ? d[i][j - coins[i]] : 0);
            }
        }
        return d[0][amount];
    }

    private int doChange(int amount, int[] coins, int i) {
        if (amount < 0) {
            return 0;
        }
        if (i == coins.length) {
            return amount == 0 ? 1 : 0;
        }
//        int res = 0;
//        for (int j = 0; j * coins[i] <= amount; j++) {
//            res += doChange(amount - j * coins[i], coins, i + 1);
//        }
//        return res;
        return doChange(amount, coins, i + 1) + doChange(amount - coins[i], coins, i);
    }

}
```

## 复杂度分析

