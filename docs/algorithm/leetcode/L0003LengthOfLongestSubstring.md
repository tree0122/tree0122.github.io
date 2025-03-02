# 0003. 无重复字符的最长子串

## 题目
给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。


```
示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。


示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

## 解题思路


## 代码
```java
public class L0003LengthOfLongestSubstring {
        
    public int lengthOfLongestSubstring(String s) {
        int len = 0;
        HashMap<Character, Integer> map = new HashMap<>();
        for (int right = 0, left = -1; right < s.length(); right++) { // 窗口win(left...right]
            Integer lastIdx = map.put(s.charAt(right), right);
            if (lastIdx != null && left < lastIdx) {
                left = lastIdx;
            }
            len = Math.max(len, right - left);
        }
        return len;
    }
    
}
```

## 复杂度分析

