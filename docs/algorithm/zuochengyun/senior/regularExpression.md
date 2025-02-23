# 字符串匹配问题

## 题目
给定字符串str,其中绝对不含有字符'.'和'*'。再给定字符串exp,其中可以含有'.'或'*','*'字符不能是exp的首字符,并且任意两个'*'字符不相邻。exp中的'.'代表任何一个字符,exp中的'*'表示'*'的前一个字符可以有0个或者多个。请写一个函数,判断str是否能被exp匹配。

```
【举例】
str="abc",exp="abc",返回true。
str="abc",exp="a.c",exp中单个'.'可以代表任意字符,所以返回true。
str="abcd",exp=".*"。exp中'*'的前一个字符是'.',所以可表示任意数量的'.'字符,当exp是"...."时与"abcd"匹配,返回true。
str="",exp="..*"。exp中'*'的前一个字符是'.',可表示任意数量的'.'字符,但是".*"之前还有一个'.'字符,该字符不受'*'的影响,
所以str起码有一个字符才能被exp匹配。所以返回false。
```

## 代码
```java
public class RegularExpression {

     public boolean regularExpress(String s, String e) {
        // return doRegularExpress(s, e, 0, 0);
        boolean[][] d = new boolean[s.length() + 2][e.length() + 2];
        d[s.length()][e.length()] = true;
        for (int i = s.length() - 1; i >= 0; i--) {
            for (int j = e.length() - 1; j >= 0; j--) {
                if (e.charAt(j + 1) != '*') {
                    d[i][j] = (s.charAt(i) == e.charAt(j) || e.charAt(j) == '.') && d[i + 1][j + 1];
                } else if (s.charAt(i) != e.charAt(j) && e.charAt(j) != '.') {
                    d[i][j] = d[i][j + 2];
                } else {
                    int idx = i;
                    while (s.charAt(idx) == e.charAt(j) || e.charAt(j) == '.') {
                        if (d[idx][j + 2]) {
                            d[i][j] = true;
                            break;
                        }else if (idx < s.length()){
                            idx++;
                        }
                    }
                    if (!d[i][j]) {
                        d[i][j] = d[i][j+2];
                    }
                }
            }
        }
        return d[0][0];
    }

    private boolean doRegularExpress(String s, String e, int i, int j) {
        if (j == e.length()) {
            return i == s.length();
        }
        if (j + 1 == e.length() || e.charAt(j + 1) != '*') {
            return i < s.length() &&
                    (s.charAt(i) == e.charAt(j) || e.charAt(j) == '.') &&
                    doRegularExpress(s, e, i + 1, j + 1);
        }
        // 潜台词：e[j+1]='*'
        while (i < s.length() && (s.charAt(i) == e.charAt(j) || e.charAt(j) == '.')) {
            if (doRegularExpress(s, e, i, j + 2)) {
                return true;
            }
            i++;
        }
        return doRegularExpress(s, e, i, j + 2);
    }

}
```

## 复杂度分析
