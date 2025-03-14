# 0322. 零钱兑换

## 题目
给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。


```
示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1


示例 2：

输入：coins = [2], amount = 3
输出：-1

```

## 解题思路


## 代码
```java
class L0332CoinChange {

    public int coinChange(int[] coins, int amount) {
        int[] d = new int[amount + 1];
        for (int i = 1; i < d.length; i++) {
            d[i] = amount + 1;
        }
        for (int i = 0; i < coins.length; i++) {
            for (int j = coins[i]; j < d.length; j++) {
                d[j] = Math.min(d[j], d[j - coins[i]] + 1);
            }
        }
        return d[amount] == amount + 1 ? -1 : d[amount];
    }

}
```

## 复杂度分析

