# 0010. 正则表达式匹配

## 题目
给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖 整个 字符串 s 的，而不是部分字符串。


```
示例 1：

输入：s = "aa", p = "a"
输出：false
解释："a" 无法匹配 "aa" 整个字符串。


示例 2:

输入：s = "aa", p = "a*"
输出：true
解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。


示例 3：

输入：s = "ab", p = ".*"
输出：true
解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。

```

## 解题思路


## 代码
```java
class L0010IsMatch {

    public boolean isMatch(String s, String p) {
        boolean[][] d = new boolean[s.length() + 1][p.length() + 1];
        d[0][0] = true;
        for (int i = 2; i < d[0].length; i++) {
            if (p.charAt(i - 1) == '*') {
                d[0][i] = d[0][i - 2];
            }
        }
        for (int i = 1; i < d.length; i++) {
            for (int j = 1; j < d[0].length; j++) {
                if (s.charAt(i - 1) == p.charAt(j - 1) || p.charAt(j - 1) == '.') {
                    d[i][j] = d[i - 1][j - 1];
                } else if (p.charAt(j - 1) == '*') {
                    if (s.charAt(i - 1) != p.charAt(j - 2) && p.charAt(j - 2) != '.') {
                        d[i][j] = d[i][j - 2];
                    } else {
                        d[i][j] = d[i][j - 2] // *匹配0次
                                || d[i][j - 1]  // *匹配1次
                                || d[i - 1][j]; // *匹配2次以上
                    }
                }
            }
        }
        return d[d.length - 1][d[0].length - 1];
    }

}
```

## 复杂度分析

