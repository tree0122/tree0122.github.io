# 0459. 重复的子字符串

## 题目
给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。


```
示例 1:

输入: s = "abab"
输出: true
解释: 可由子串 "ab" 重复两次构成。


示例 2:

输入: s = "aba"
输出: false

```

## 解题思路


## 代码
```java
public class L0459RepeatedSubstringPattern {
        
    public boolean repeatedSubstringPattern(String s) {
        int[] next = new int[s.length() + 1];
        for (int i = 2, cn = 0; i < next.length; ) {
            if (s.charAt(i - 1) == s.charAt(cn)) {
                next[i++] = ++cn;
            } else if (cn > 0) {
                cn = next[cn];
            } else {
                i++;
            }
        }
        return next[s.length()] != 0 && (s.length() % (s.length() - next[s.length()]) == 0);
    }
    
}
```

## 复杂度分析

