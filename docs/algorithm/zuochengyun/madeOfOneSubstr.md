# s是否仅能由一个子串组成

## 题目
给定一个字符串s, 判断s是否仅能由一个子串组成

## 代码
```java
public class MadeOfOneSubstr {

    public boolean madeOfOneSubstr(String s) {
        int[] a = new int[s.length() + 1];
        for (int i = 2, cn = 0; i < s.length(); ) {
            if (s.charAt(i - 1) == s.charAt(cn)) {
                a[i++] = ++cn;
            } else if (cn > 0) {
                cn = a[cn];
            } else {
                i++;
            }
        }
        return a[s.length()] != 0 &&  s.length() % (s.length() - a[s.length()]) == 0;
    }

}
```

## 复杂度分析
时间复杂度O(N),额外空间复杂度O(1)