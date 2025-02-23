# 换钱的方法数

## 题目
给定数组arr,arr中所有的值都为正数且不重复。每个值代表一种面值的货币,每种面值的货币可以使用任意张,再给定一个整数aim代表要找的钱数,求换钱有多少种方法。

```
【举例】
arr=[5,10,25,1],aim=0。
组成0元的方法有1种,就是所有面值的货币都不用。所以返回1。

arr=[5,10,25,1],aim=15。
组成15元的方法有6种,分别为3张5元、1张10元+1张5元、1张
10元+5张1元、10张1元+1张5元、2张5元+5张1元和15张1元。所
以返回6。

arr=[3,5],aim=2。
任何方法都无法组成2元。所以返回0
```

## 代码
```java
public class CoinWays {

    public int coinsWay(int[] a, int t) {
//        return doCoinsWay(a, t, 0);

        int[][] d = new int[a.length + 1][t + 1];
        d[a.length][0] = 1;
        for (int i = d.length - 2; i >= 0; i--) {
            for (int j = 0; j < d[0].length; j++) {
                d[i][j] = d[i + 1][j] + (j >= a[i] ? d[i + 1][j - a[i]] : 0);
            }
        }
        return d[0][t];
    }

    private int doCoinsWay(int[] a, int t, int i) {
        if (i == a.length) {
            return t == 0 ? 1 : 0;
        }
        int res = 0;
        for (int j = 0; a[i] * j <= t; j++) {
            res += doCoinsWay(a, t - a[i] * j, i + 1);
        }
        return res;
    }

}
```

## 复杂度分析
