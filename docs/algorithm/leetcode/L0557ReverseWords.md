# 0557. 反转字符串中的单词 III

## 题目
给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。



```
示例 1：

输入：s = "Let's take LeetCode contest"
输出："s'teL ekat edoCteeL tsetnoc"


示例 2:

输入： s = "Mr Ding"
输出："rM gniD"

```

## 解题思路


## 代码
```java
public class L0557ReverseWords {

    public String reverseWords(String s) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < s.length(); ) {
            int begin = i;
            while (i < s.length() && s.charAt(i) != ' ') {
                i++;
            }
            for (int k = i - 1; k >= begin; k--) {
                sb.append(s.charAt(k));
            }
            sb.append(s.charAt(i));
            while (i < s.length() && s.charAt(i) == ' ') {
                i++;
            }
        }
        return sb.toString();
    }
    
}
```

## 复杂度分析

