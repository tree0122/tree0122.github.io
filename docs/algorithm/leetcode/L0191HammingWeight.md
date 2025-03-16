# 0191. 位1的个数

## 题目
给定一个正整数 n，编写一个函数，获取一个正整数的二进制形式并返回其二进制表达式中 设置位 的个数（也被称为汉明重量）。


```
示例 1：

输入：n = 11
输出：3
解释：输入的二进制串 1011 中，共有 3 个设置位。


示例 2：

输入：n = 128
输出：1
解释：输入的二进制串 10000000 中，共有 1 个设置位。


```

## 解题思路


## 代码
```java
class L0191HammingWeight {

   // 对整数 n 的每一位进行按位与运算，并统计结果。
    public int hammingWeight(int n) {
        int ans = 0;
        while (n != 0) {
            ans += (n ^ 1);
            n = n >> 1;
        }
        return ans;
    }

    //利用 n & (n - 1)。这个运算刚好可以将 n 的二进制中最低位的 1 变为 0。
    public int hammingWeightBetter(int n) {
        int ans = 0;
        while (n != 0) {
            n = n ^ (n - 1);
            ans++;
        }
        return ans;
    }

}
```

## 复杂度分析

