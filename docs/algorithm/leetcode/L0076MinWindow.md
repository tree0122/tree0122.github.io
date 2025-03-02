# 0076. 最小覆盖子串

## 题目
给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

注意：

- 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
- 如果 s 中存在这样的子串，我们保证它是唯一的答案。


```
示例 1：

输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。


示例 2：

输入：s = "a", t = "a"
输出："a"
解释：整个字符串 s 是最小覆盖子串。
```

## 解题思路


## 代码
```java
public class L0076MinWindow {
        
    public String minWindow(String s, String t) {
        HashMap<Character, Integer> tMap = new HashMap<>();
        HashMap<Character, Integer> winMap = new HashMap<>();
        for (int i = 0; i < t.length(); i++) {
            tMap.put(s.charAt(i), tMap.getOrDefault(s.charAt(i), 0) + 1);
        }
        int left = 0, right = 0, tM = 0, start = 0, end = 0, len = s.length() + 1;
        while (right < s.length()) {
            char c = s.charAt(right++);
            Integer cSize = tMap.get(c);
            if (cSize == null) {
                continue;
            }
            if (winMap.put(c, winMap.getOrDefault(c, 0) + 1) + 1 == cSize) {
                tM++;
            }

            while (tM == tMap.size()) {
                if (right - left < len) {
                    len = right - left;
                    start = left;
                    end = right;
                }
                char cLeft = s.charAt(left);
                if (tMap.containsKey(cLeft)) {
                    Integer leftCount = winMap.get(cLeft);
                    if (leftCount == tMap.get(cLeft)) {
                        tM--;
                    }
                    winMap.put(cLeft, leftCount - 1);
                }
            }
        }
        return len == s.length() + 1 ? "" : s.substring(start, end);
    }
    
}
```

## 复杂度分析

