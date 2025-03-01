# 0400. 第 N 位数字

## 题目
给你一个整数 n ，请你在无限的整数序列 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...] 中找出并返回第 n 位上的数字。

```
示例 1：

输入：n = 3
输出：3


示例 2：

输入：n = 11
输出：0
解释：第 11 位数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是 0 ，它是 10 的一部分。
```

## 解题思路


## 代码
```java
public class L0400FindNthDigit {
        
    public int findNthDigit(int n) {
        if (n <= 9) {
            return n;
        }
        int base = 9, digits = 1, start = 1;
        while (n > base) {
            n -= base;
            digits++;
            start *= 10;
            base = digits * start * 9;
        }
        int val = start + (n - 1) / digits; // val为目标整数
        int dx = (n - 1 ) % digits;
        return String.valueOf(val).charAt(dx) - '0';
    }
    
}
```

## 复杂度分析

