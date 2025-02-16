# 最长公共子序列问题

## 题目
给定两个字符串str1和str2,返回两个字符串的最长公共子序列。

举例:
```
str1="1A2C3D4B56",str2="B1D23CA45B6A"。
"123456"或者"12C4B6"都是最长公共子序列,返回哪一个都行
```


## 代码
```java
public class LongestCommonSubsequence {

    public int longestCommonSubsequence(String s1, String s2) {
        int[][] d = new int[s1.length() + 1][s2.length() + 1];
        for (int i = 1; i < d.length; i++) {
            for (int j = 1; j < d[0].length; j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    d[i][j] = 1 + d[i - 1][j - 1];
                }
                d[i][j] = Math.max(d[i][j], Math.max(d[i - 1][j], d[i][j - 1]));
            }
        }
        return d[s1.length()][s2.length()];
    }

}
```

## 复杂度分析
