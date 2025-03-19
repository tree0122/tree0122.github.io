# 0516. 最长回文子序列

## 题目
给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。



```
示例 1：

输入：s = "bbbab"
输出：4
解释：一个可能的最长回文子序列为 "bbbb" 。


示例 2：

输入：s = "cbbd"
输出：2
解释：一个可能的最长回文子序列为 "bb" 。


```

## 解题思路



## 代码
```java
class L0516LongestPalindromeSubseq {

    public int longestPalindromeSubseq(String s) {
        int[][] d = new int[s.length()][s.length()]; //d[i][j]: s[i,j]的最长回文子序列长度
        for (int i = 0; i < s.length(); i++) {
            d[i][i] = 1;
        }
        for (int i = d.length - 2; i >= 0; i--) {
            for (int j = i + 1; j < d[0].length; j++) {
                if (s.charAt(i) == s.charAt(j)) {
                    d[i][j] = d[i + 1][j - 1] + 2;
                } else {
                    d[i][j] = Math.max(d[i + 1][j], d[i][j - 1]);
                }
            }
        }
        return d[0][s.length() - 1];
    }

}
```

## 复杂度分析

