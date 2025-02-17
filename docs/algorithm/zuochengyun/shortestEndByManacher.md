# 使字符串变为回文串所需最小字符串

## 题目
使字符串变为回文串所需最小字符串(回文串是: 正读,反读 都一样的)

## 代码
```java
public class ShortestEndByManacher {

    public String shortestEndByManacher(String s) {
        char[] cs = prepare(s);
        int[] rs = new int[cs.length * 2 + 1];
        int i = 0, mr = 0, c = 0;
        while (i < rs.length) {
            rs[i] = i >= mr ? 1 : Math.min(mr - i, rs[2 * c - i]);
            while (i - rs[i] >= 0 && i + rs[i] < rs.length && cs[i - rs[i]] == cs[i + rs[i]]) {
                rs[i]++;
            }
            if (i + rs[i] > mr) {
                mr = i + rs[i];
                c = i;
            }
            if (mr == rs.length) {
                break;
            }
        }
        StringBuilder sb = new StringBuilder();
        for (int j = s.length() - rs[i]; j >= 0; j--) {
            sb.append(s.charAt(j));
        }
        return sb.toString();
    }

    private char[] prepare(String s) {
        char[] cs = new char[s.length() * 2 + 1];
        for (int i = 0, j = 0; i < cs.length; i++) {
            cs[i] = (i ^ 1) == 0 ? '#' : s.charAt(j++);
        }
        return cs;
    }

}
```

## 复杂度分析
时间复杂度O(N)