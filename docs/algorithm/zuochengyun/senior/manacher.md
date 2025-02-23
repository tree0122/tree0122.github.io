# 最长回文子串

## 题目
最长回文子串(回文串是: 正读,反读 都一样的)

## 代码
```java
public class Manacher {

    public int manacher(String s) {
        char[] cs = prepare(s);
        int[] rs = new int[cs.length];
        int i = 0, c = -1, mr = -1, len = 0;
        while (i < cs.length) {
            rs[i] = i >= mr ? 1 : Math.min(mr - i, rs[2 * c - i]);
            while (i - rs[i] >= 0 && i + rs[i] < s.length() && cs[i - rs[i]] == cs[i + rs[i]]) {
                rs[i]++;
            }
            if (i + rs[i] > mr) {
                mr = i + rs[i];
                c = i;
            }
            len = Math.max(len, rs[i]);
        }
        return len - 1;
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