# 最长公共子串问题

## 题目
给定两个字符串str1和str2,返回两个字符串的最长公共子串。

举例:
```
str1="1AB2345CD",str2="12345EF",返回"2345"。
```


## 代码
```java
public class LongestCommonSubstr {

    public int longestCommonSubstr(String s1, String s2) {
        int[][] d = new int[s1.length() + 1][s2.length() + 1];
        int len = 0;
        for (int i = 1; i < d.length; i++) {
            for (int j = 1; j < d[0].length; j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    d[i][j] = 1 + d[i - 1][j - 1];
                }
                len = Math.max(len, d[i][j]);
            }
        }
        return len;
    }

}
```

## 复杂度分析
