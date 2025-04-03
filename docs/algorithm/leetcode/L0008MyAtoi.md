# 0008. 字符串转换整数 (atoi)

## 题目
请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数。

函数 myAtoi(string s) 的算法如下：

1. 空格：读入字符串并丢弃无用的前导空格（" "）
2. 符号：检查下一个字符（假设还未到字符末尾）为 '-' 还是 '+'。如果两者都不存在，则假定结果为正。
3. 转换：通过跳过前置零来读取该整数，直到遇到非数字字符或到达字符串的结尾。如果没有读取数字，则结果为0。
4. 舍入：如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −2^31 的整数应该被舍入为 −2^31 ，大于 2^31 − 1 的整数应该被舍入为 2^31 − 1 。
5. 返回整数作为最终结果。


```
示例 1：

输入：s = " -042"
输出：-42


示例 2：

输入：s = "1337c0d3"
输出：1337


示例 3：

输入：s = "0-1"
输出：0

```

## 解题思路



## 代码
```java
class L0008MyAtoi {

    public int myAtoi(String s) {
        long res = 0; // 有int的溢出可能
        int i = 0, op = 1;
        while (i < s.length() && s.charAt(i) == ' ') { // 剔除开始的空格字符
            i++;
        }
        if (i == s.length()) { // 极端是空格字符串
            return 0;
        }
        if (s.charAt(i) == '-') { // 开始的符号
            op = -1;
            i++;
        } else if (s.charAt(i) == '+') {
            i++;
        }

        while (i < s.length() && s.charAt(i) == '0') { // 剔除开头的0字符
            i++;
        }
        if (i == s.length()) { // 极端后续都是0字符
            return 0;
        }

        /*// 另一种比较
        while (i < s.length()) {
            char currChar = s.charAt(i++);
            if (currChar < '0' || currChar > '9') {
                break;
            }
            // 题目中说：环境只能存储 32 位大小的有符号整数，因此，需要提前判：断乘以 10 以后是否越界
            if (res > Integer.MAX_VALUE / 10 || (res == Integer.MAX_VALUE / 10 && (currChar - '0') > Integer.MAX_VALUE % 10)) {
                return Integer.MAX_VALUE;
            }
            if (res < Integer.MIN_VALUE / 10 || (res == Integer.MIN_VALUE / 10 && (currChar - '0') > -(Integer.MIN_VALUE % 10))) {
                return Integer.MIN_VALUE;
            }

            // 4.2 合法的情况下，才考虑转换，每一步都把符号位乘进去
            res = res * 10 + op * (currChar - '0');
        }*/

        char c = 0;
        while (i < s.length() && (c = s.charAt(i)) >= '0' && c <= '9') {
            res = res * 10 + (c - '0') * op;
            i++;
        }
        if (op > 0) {
            return (int) Math.min(res, Integer.MAX_VALUE);
        }
        return (int) Math.max(res, Integer.MIN_VALUE);
    }

}
```

## 复杂度分析

