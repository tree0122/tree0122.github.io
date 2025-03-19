# 0097. 交错字符串

## 题目
给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。


```
示例 1：

输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
输出：true


示例 2：

输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
输出：false


```

## 解题思路



## 代码
```java
class L0097IsInterleave {

    public boolean isInterleave(String s1, String s2, String s3) {
        boolean[][] d = new boolean[s1.length() + 1][s2.length() + 1];
        d[0][0] = true;
        for (int i = 1; i < d.length && s1.charAt(i - 1) == s3.charAt(i - 1); i++) {
            d[i][0] = true;
        }
        for (int i = 1; i < d[0].length && s2.charAt(i - 1) == s3.charAt(i - 1); i++) {
            d[0][i] = true;
        }
        for (int i = 1; i < d.length; i++) {
            for (int j = 1; j < d[0].length; j++) {
                d[i][j] = (s1.charAt(i - 1) == s3.charAt(i + j - 1) && d[i - 1][j])
                        || (s2.charAt(j - 1) == s3.charAt(i + j - 1) && d[i][j - 1]);
            }
        }
        return d[d.length - 1][d[0].length - 1];
    }

}
```

## 复杂度分析

