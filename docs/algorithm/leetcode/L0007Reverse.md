# 0007. 整数反转

## 题目
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。

```
示例 1：

输入：x = 123
输出：321


示例 2：

输入：x = -123
输出：-321

```

## 解题思路



## 代码
```java
class L0007Reverse {

    public int reverse(int x) {
        int res = 0, digit = 0, last = 0;
        while (x != 0) {
            digit = x % 10; // 每次取末位数字
            last = res; // 上一次的res
            res = res * 10 + digit;
            if (last != res / 10) { // 判断整数溢出
                return 0;
            }
            x /= 10;
        }
        return res;
    }

}
```

## 复杂度分析

