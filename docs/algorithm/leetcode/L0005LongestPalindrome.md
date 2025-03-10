# 0005. 最长回文子串

## 题目
给你一个字符串 s，找到 s 中最长的 回文 子串。


```
示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。


示例 2：

输入：s = "cbbd"
输出："bb"


```

## 解题思路


## 代码
```java
public class L0005LongestPalindrome {

    public String longestPalindromeBetter(String s) {
        char[] cs = prepare(s);
        int[] radius = new int[cs.length];
        int maxRight = 0, center = 0, begin = 0, len = 0, i = 0;
        while (i < cs.length) {
            radius[i] = i >= center ? 1 : Math.min(maxRight - i, radius[center * 2 - i]);
            while (i - radius[i] >= 0 && i + radius[i] < cs.length && cs[i - radius[i]] == cs[i + radius[i]]) {
                radius[i]++;
            }
            if (i + radius[i] < maxRight) {
                maxRight = i + radius[i];
                center = i;
            }
            if (len < radius[i]) {
                len = radius[i];
                begin = (i - radius[i]) / 2;
            }
        }
        return s.substring(begin, begin + len);
    }

    private char[] prepare(String s) {
        char[] cs = new char[s.length() * 2 + 1];
        for (int i = 0, j = 0; i < cs.length; i++) {
            if ((i ^ 1) == 0) {
                cs[i] = '#';
            } else {
                cs[i] = s.charAt(j++);
            }
        }
        return cs;
    }

    public String longestPalindrome(String s) {
        int len = 0, begin = 0;
        boolean[][] d = new boolean[s.length()][s.length()];
        for (int i = d.length - 1; i >= 0; i--) {
            d[i][i] = true;
            for (int j = i + 1; j < d[0].length; j++) {
                d[i][j] = (s.charAt(i) == s.charAt(j)) && (i + 1 > j - 1 || d[i + 1][j - 1]);
                if (d[i][j] && len < j - i + 1) {
                    len = j - i + 1;
                    begin = i;
                }
            }
        }
        return s.substring(begin, begin + len);
    }
    
}
```

## 复杂度分析

