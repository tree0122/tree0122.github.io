# 换钱的最少钱张

## 题目
给定数组arr,arr中所有的值都为正数且不重复。每个值代表一种面值的货币,每种面值的货币可以使用任意张,再给定一个整数aim代表要找的钱数,求换钱时需要用到最少几张。

## 代码
```java
public class CoinCountMin {

    // 换钱时，要求用最少的张数
    public int minCoinCount(int[] a, int t) {
        int[] d = new int[t + 1];
        for (int i = 1; i < d.length; i++) {
            d[i] = t + 1;
        }
        for (int i = 0; i < a.length; i++) {
            for (int j = a[i]; j < d.length; j++) {
                d[j] = Math.min(d[j], d[j - a[i]] + 1);
            }
        }
        return d[t] == t + 1 ? -1 : d[t];
    }

}
```

## 复杂度分析
