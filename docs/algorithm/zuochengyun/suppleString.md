# 合并后的字符串包含两个s

## 题目
给定一个字符串s, 在s后面追加一个字符串m, 合并后的字符串包含两个s.求字符串m, 要求字符串m的长度最小

## 代码
```java
public class SuppleString {

    public String suppleString(String s) {
        int[] n = new int[s.length() + 1];
        for (int i = 2, cn = 0; i <= s.length(); ) {
            if (s.charAt(i - 1) == s.charAt(cn)) {
                n[i++] = ++cn;
            }else if (cn > 0) {
                cn = n[cn];
            }else {
                i++;
            }
        }
        return s.substring(n[s.length()]);
    }

}
```

## 复杂度分析
时间复杂度O(N),额外空间复杂度O(1)