# 0032. 最长有效括号

## 题目
给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。


```
示例 1：

输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"


示例 2：

输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"

```

## 解题思路


## 代码
```java
public class L0032LongestValidParentheses {
        
    public int longestValidParentheses(String s) {
        int[] d = new int[s.length() + 1];
        int maxLen = 0;
        for (int i = 1, pre = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == ')' && s.charAt(pre = (i - d[i] - 1)) == '(') {
                d[i + 1] = (d[i] + 2) + d[pre];
                maxLen = Math.max(maxLen, d[i + 1]);
            }
        }
        return maxLen;
    }
    
}
```

## 复杂度分析

