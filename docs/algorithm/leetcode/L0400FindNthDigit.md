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
        int digit = 1, // 位数：数字 10 是一个两位数，称此数字的 位数 为 2 ，记为 digit
                count = 9, // 数位数量：各 digit 下的数位数量 count = 9×start×digit
                start = 1; // 每 digit 位数的 起始数字（即：1,10,100,⋯）

        while (n > count) { // 第一步：确定所求数位的所在数字的位数
            n -= count;
            digit++;
            start *= 10;
            count = start * digit * 9;
        }

        //  [(n−1)/digit] 个 数字 中（ start 为第 0 个数字）。
        int num = start + ((n - 1) / digit); // 第二步：确定所求数位所在的数字

        // 数位为数字 num 的第 (n−1)%digit 位（ 数字的首个数位为第 0 位）。
        return String.valueOf(num).charAt((n - 1) % digit) - '0'; // 第三步：确定所求数位在 num 的哪一数位
    }
    
}
```

## 复杂度分析

