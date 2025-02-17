# KMP算法详情与应用

## 题目
解决字符串的包含问题

## 代码
```java
public class Kmp {

    public int search(String s1, String s2) {
        int[] n = next(s2);
        int i = 0, j = 0;
        while (i<s1.length() && j <s2.length()) {
            if (s1.charAt(i) == s2.charAt(j)) {
                i++;
                j++;
            }else if (j > 0) {
                j = n[j];
            }else {
                i++;
            }
        }
        return j == s2.length() ? i - j : -1;
    }

    private int[] next(String s) {
        int[] n = new int[s.length()];
        for (int i = 2, cn = 0; i < s.length(); ) {
            if (s.charAt(i-1) == s.charAt(cn)) {
                n[i++] = ++cn;
            }else if (cn > 0) {
                cn = n[cn];
            }else {
                i++;
            }
        }
        return n;
    }

}
```

## 复杂度分析
时间复杂度O(N),额外空间复杂度O(1)