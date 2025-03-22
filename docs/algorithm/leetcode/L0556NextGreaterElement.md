# 0556. 下一个更大元素 III

## 题目
给你一个正整数 n ，请你找出符合条件的最小整数，其由重新排列 n 中存在的每位数字组成，并且其值大于 n 。如果不存在这样的正整数，则返回 -1 。

注意 ，返回的整数应当是一个 32 位整数 ，如果存在满足题意的答案，但不是 32 位整数 ，同样返回 -1 。



```
示例 1：

输入：n = 12
输出：21


示例 2：

输入：n = 21
输出：-1

```

## 解题思路



## 代码
```java
class L0556NextGreaterElement {

    public int nextGreaterElement(int n) {
        StringBuilder s = new StringBuilder().append(n);
        int i = s.length() - 2, j = s.length() - 1;
        while (i >= 0 && s.charAt(i) >= s.charAt(i + 1)) { // s[l,0]找到较小数字的下标
            i--;
        }
        if (i < 0) { // 从左到右，全程递减，已是最大排列
            return -1;
        }
        while (s.charAt(j) <= s.charAt(i)) { // s[l,0]找到较大数字的下标
            j--;
        }
        char c = s.charAt(i); // i, j交换
        s.setCharAt(i, s.charAt(j));
        s.setCharAt(j, c);

        i = i + 1; // s[i+1, l]是递减，故要反转
        j = s.length() - 1;
        while (i < j) {
            c = s.charAt(i);
            s.setCharAt(i++, s.charAt(j));
            s.setCharAt(j--, c);
        }
        return Integer.parseInt(s.toString());
    }

}
```

## 复杂度分析

