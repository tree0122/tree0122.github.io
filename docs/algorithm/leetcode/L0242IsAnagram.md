# 0242. 有效的字母异位词

## 题目
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的 字母异位词。


```
示例 1:

输入: s = "anagram", t = "nagaram"
输出: true


示例 2:

输入: s = "rat", t = "car"
输出: false


```

## 解题思路


## 代码
```java
public class L0242IsAnagram {

    public boolean isAnagram(String s, String t) {
        HashMap<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            map.put(s.charAt(i), map.getOrDefault(s.charAt(i), 0) + 1);
        }
        for (int i = 0; i < t.length(); i++) {
            Integer cn = map.get(t.charAt(i));
            if (cn == null) {
                return false;
            }
            if (cn == 1) {
                map.remove(t.charAt(i));
            } else {
                map.put(t.charAt(i), cn - 1);
            }
        }
        return map.isEmpty();
    }
    
}
```

## 复杂度分析

