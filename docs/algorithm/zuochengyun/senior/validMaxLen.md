# 括号问题

## 题目
给定一个字符串str,判断是不是整体有效的括号字符串。

【举例】
举例:
```
str="()",返回true;str="(()())",返回true;str="(())",返回true。
str="())"。返回false;str="()(",返回false;str="()a()",返回false。


【补充题目】
给定一个括号字符串str,返回最长的有效括号子串。

【举例】
str="(()())",返回6;str="())",返回2;str="()(()()(",返回4。


```


## 代码
```java
public class ValidMaxLen {

    public boolean isValid(String s) {
        int pair = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) != ')' && s.charAt(i) != '(') {
                return false;
            }
            if (s.charAt(i) == '(') {
                pair++;
            }
            if (s.charAt(i) == ')' && --pair < 0) {
                return false;
            }
        }
        return pair == 0;
    }

    public int validMaxLen(String s) {
        int len = 0;
        int[] d = new int[s.length()];
        for (int i = 1, pre = 0; i < s.length(); i++) {
            if (s.charAt(i) == ')' && s.charAt(pre = i - d[i - 1] - 1) == '(') {
                d[i] = (d[i - 1] + 2) + (pre > 0 ? d[pre - 1] : 0);
                len = Math.max(len, d[i]);
            }
        }
        return len;
    }

}
```

## 复杂度分析
