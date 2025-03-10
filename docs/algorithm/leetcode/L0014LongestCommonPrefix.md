# 0014. 最长公共前缀

## 题目
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。


```
示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"


示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。

```

## 解题思路


## 代码
```java
public class L0014LongestCommonPrefix {
        
    public String longestCommonPrefix(String[] strs) {
        for (int i = 0; i < strs[0].length(); i++) {
            for (int j = 1; j < strs.length; j++) {
                char c = strs[0].charAt(i);
                if (i == strs[j].length() || strs[j].charAt(i) != c) {
                    return strs[0].substring(0, i);
                }
            }
        }
        return strs[0];
    }
    
}
```

## 复杂度分析

