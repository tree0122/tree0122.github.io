# 1143. 最长公共子序列

## 题目
给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

```
示例 1：

输入：text1 = "abcde", text2 = "ace" 
输出：3  
解释：最长公共子序列是 "ace" ，它的长度为 3 。


示例 2：

输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc" ，它的长度为 3 。
```

## 解题思路


## 代码
```java
class L1143LongestCommonSubsequence {

   public int longestCommonSubsequence(String text1, String text2) {
        int[][] d = new int[text1.length() + 1][text2.length() + 1];
        for (int i = 1; i < d.length; i++) {
            for (int j = 1; j < d[0].length; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    d[i][j] = d[i - 1][j - 1] + 1;
                }else {
                    d[i][j] = Math.max(d[i - 1][j], d[i][j - 1]);
                }
            }
        }
        return d[d.length - 1][d[0].length - 1];
    }

}
```

## 复杂度分析

