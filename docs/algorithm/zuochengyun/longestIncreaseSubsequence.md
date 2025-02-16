# 最长递增子序列

## 题目
给定数组arr,返回arr的最长递增子序列。

举例:
```
arr=[2,1,5,3,6,4,8,9,7],
返回的最长递增子序列为[1,3,4,8,9]。
```


## 代码
```java
public class LongestIncreaseSubsequence {

    public int longestIncreaseSubsequence(int[] a) {
        int len = 0;
        int[] d = new int[a.length];
        d[0] = 1;
        for (int i = 1; i < a.length; i++) {
            d[i] = 1;
            for (int j = i - 1; j >= 0; j--) {
                if (a[j] < a[i] && d[j] + 1 < d[i]) {
                    d[i] = d[j] + 1;
                }
            }
            len = Math.max(len, d[i]);
        }
        return len;
    }

}
```

## 复杂度分析
