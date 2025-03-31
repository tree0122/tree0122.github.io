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
        HashMap<Character, Integer> winMap = new HashMap<>(); // s[L,R)范围内的子串中字符统计
        for (int i = 0; i < t.length(); i++) { // 统计t中的字符和其对应的数量
            char c = t.charAt(i);
            tMap.put(c, tMap.getOrDefault(c, 0) + 1);
        }
        int tCh = 0, len = s.length() + 1, start = 0, left = 0, right = 0; // tCh表示s[L,R)内满足t中某个字符的个数
        while (right < s.length()) {
            char rightCh = s.charAt(right++);
            Integer tRightCn = tMap.get(rightCh);
            if (tRightCn == null) { // t中没有的字符不用考虑
                continue;
            }
            int rCn = winMap.getOrDefault(rightCh, 0);
            winMap.put(rightCh, rCn + 1);
            if (rCn + 1 == tRightCn) { // 当窗口s[L,R)中某个字符首次满足t中对应字符是，tCh++。窗口内ch个数可能超过t中对应个数
                tCh++;
            }
            while (tCh == tMap.size()) { // 当s[L,R)刚满足t时，开始考虑剔除L字符
                if (len < right - left) {
                    start = left;
                    left = right - left;
                }
                char leftCh = s.charAt(left++); // 开始剔除L字符
                Integer tLeftCn = tMap.get(leftCh); // t中没有的字符不考虑
                if (tLeftCn != null && tLeftCn == winMap.put(leftCh, winMap.get(leftCh) - 1)) {
                    tCh--;
                }
            }
        }
        return len == s.length() + 1 ? "" : s.substring(start, start + len);
    }
    
}
```

## 复杂度分析

