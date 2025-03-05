# 0394. 字符串解码

## 题目
给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。


```
示例 1：

输入：s = "3[a]2[bc]"
输出："aaabcbc"


示例 2：

输入：s = "3[a2[c]]"
输出："accaccacc"


示例 3：

输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"

```

## 解题思路


## 代码
```java
public class L0394DecodeString {
        
    public String decodeString(String s) {
        LinkedList<Integer> cnStack = new LinkedList<>();
        LinkedList<String> sStack = new LinkedList<>();
        int n = 0;
        StringBuilder curSb = new StringBuilder();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c >= '0' && c <= '9') {
                n = n * 10 + (c - '0');
            } else if (c == '[') {
                cnStack.push(n);
                sStack.push(curSb.toString());
                n = 0;
                curSb = new StringBuilder();
            } else if (c == ']') {
                Integer cn = cnStack.pop();
                String pre = sStack.pop();
                StringBuilder preSb = new StringBuilder(pre);
                while (cn > 0) {
                    preSb.append(curSb);
                    cn--;
                }
                curSb = preSb;
            } else {
                curSb.append(c);
            }
        }
        return curSb.toString();
    }

    public String decodeStringByRecurse(String s) {
        return doDecodeStringByRecurse(s, 0)[0];
    }

    private String[] doDecodeStringByRecurse(String s, int i) {
        int n = 0;
        StringBuilder res = new StringBuilder();
        while (i < s.length() && s.charAt(i) != ']') {
            char c = s.charAt(i++);
            if (c > '0' && c <= '9') {
                n = n * 10 + (c - '0');
            } else if (c != '[') {
                res.append(c);
            } else { //c == '['
                String[] next = doDecodeStringByRecurse(s, i);
                while (n > 0) {
                    res.append(next[0]);
                    n--;
                }
                i = Integer.parseInt(next[1]);
            }
        }
        StringBuilder sb = new StringBuilder();
        while (n > 0) {
            sb.append(res);
            n--;
        }
        return new String[]{sb.toString(), String.valueOf(i + 1)};
    }
    
}
```

## 复杂度分析

