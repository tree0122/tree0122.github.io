# 0044. 通配符匹配

## 题目
给你一个输入字符串 (s) 和一个字符模式 (p) ，请你实现一个支持 '?' 和 '*' 匹配规则的通配符匹配：
- '?' 可以匹配任何单个字符。
- '*' 可以匹配任意字符序列（包括空字符序列）。
判定匹配成功的充要条件是：字符模式必须能够 完全匹配 输入字符串（而不是部分匹配）。



```
示例 1：

输入：s = "aa", p = "a"
输出：false
解释："a" 无法匹配 "aa" 整个字符串。


示例 2：

输入：s = "aa", p = "*"
输出：true
解释：'*' 可以匹配任意字符串。


示例 3：

输入：s = "cb", p = "?a"
输出：false
解释：'?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。


```

## 解题思路



## 代码
```java
class L0044IsMatch {

    public boolean isMatch(String s, String p) {
        boolean[][] d = new boolean[s.length() + 1][p.length() + 1];
        d[0][0] = true;
        for (int i = 1; i < d[0].length && p.charAt(i - 1) == '*'; i++) {
            d[0][i] = true;
        }
        for (int i = 1; i < d.length; i++) {
            for (int j = 1; j < d[0].length; j++) {
                if (s.charAt(i - 1) == p.charAt(j - 1) || p.charAt(j - 1) == '?') {
                    d[i][j] = d[i - 1][j - 1];
                } else if (p.charAt(j - 1) == '*') {
                    d[i][j] = d[i][j - 1] || d[i - 1][j];
                }
            }
        }
        return d[d.length - 1][d[0].length - 1];
    }

}
```

## 复杂度分析

