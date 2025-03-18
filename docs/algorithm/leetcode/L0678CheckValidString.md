# 0678. 有效的括号字符串

## 题目
给你一个只包含三种字符的字符串，支持的字符类型分别是 '('、')' 和 '*'。请你检验这个字符串是否为有效字符串，如果是 有效 字符串返回 true 。

有效 字符串符合如下规则：

任何左括号 '(' 必须有相应的右括号 ')'。
任何右括号 ')' 必须有相应的左括号 '(' 。
左括号 '(' 必须在对应的右括号之前 ')'。
'*' 可以被视为单个右括号 ')' ，或单个左括号 '(' ，或一个空字符串 ""。


```
示例 1：

输入：s = "()"
输出：true


示例 2：

输入：s = "(*)"
输出：true


示例 3：

输入：s = "(*))"
输出：true


```

## 解题思路


## 代码
```java
class L0678CheckValidString {

    public boolean checkValidString(String s) {
        int pair = 0;
        for (int i = 0; i < s.length(); i++) { // s[0,i]确保  （是满足的
            char c = s.charAt(i);
            if (c == '(' || c == '*') {
                pair++;
            } else {
                pair--;
                if (pair < 0) {
                    return false;
                }
            }
        }
        pair = 0;
        for (int i = s.length() - 1; i >= 0; i--) { //s[i,0]确保）是满足的
            char c = s.charAt(i);
            if (c == ')' || c == '*') {
                pair++;
            } else {
                pair--;
                if (pair < 0) {
                    return false;
                }
            }
        }
        return true;
    }

}
```

## 复杂度分析

