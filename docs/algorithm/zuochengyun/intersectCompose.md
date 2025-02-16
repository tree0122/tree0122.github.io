# 字符串的交错组成

## 题目
给定三个字符串str1、str2和aim,如果aim包含且仅包含来自str1和str2的所有字符,而且在aim中属于str1的字符之间保持原来在str1中的顺序,属于str2的字符之间保持原来在str2中的顺序,那么称aim是str1和str2的交错组成。实现一个函数,判断aim是否是str1和str2交错组成。

举例:
```
str1="AB",str2="12"。那么"AB12"、"A1B2"、"A12B"、"1A2B"和"1AB2"等都是str1和str2的交错组成。
```


## 代码
```java
public class IntersectCompose {

    public boolean intersectCompose(String s1, String s2, String s3) {
        boolean[][] d = new boolean[s1.length() + 1][s2.length() + 1];
        for (int i = 1; i <= s2.length(); i++) {
            if (s2.charAt(i - 1) == s3.charAt(i - 1)) {
                d[0][i] = true;
            }else {
                break;
            }
        }
        for (int i = 1; i <= s1.length(); i++) {
            if (s1.charAt(i - 1) == s3.charAt(i - 1)) {
                d[i][0] = true;
            }else {
                break;
            }
        }
        for (int i = 1; i < d.length; i++) {
            for (int j = 1; j < d[0].length; j++) {
                if (s1.charAt(i-1) != s3.charAt(i+j-1) && s2.charAt(j-1) != s3.charAt(i+j-1)) {
                    continue;
                }
                if (s1.charAt(i - 1) == s3.charAt(i + j - 1)) {
                    d[i][j] = d[i - 1][j];
                }
                if (!d[i][j] && s2.charAt(j - 1) == s3.charAt(i +j - 1)) {
                    d[i][j] = d[i][j-1];
                }
            }
        }
        return d[s1.length()][s2.length()];
    }

}
```

## 复杂度分析
