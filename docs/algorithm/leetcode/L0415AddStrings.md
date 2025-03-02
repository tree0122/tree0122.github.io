# 0415. 字符串相加

## 题目
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。


```
示例 1：

输入：num1 = "11", num2 = "123"
输出："134"
示例 2：

输入：num1 = "456", num2 = "77"
输出："533"
```

## 解题思路


## 代码
```java
public class L0415AddStrings {
        
    public String addStrings(String num1, String num2) {
        if (num1.length() > num2.length()) {
            return addStrings(num2, num1);
        }
        char[] total = new char[Math.max(num1.length(), num2.length()) + 1];
        int k = total.length - 1, i = num1.length() - 1, j = num2.length() - 1, delta = 0;
        while (i >= 0) {
            int sum = (num1.charAt(i--) - '0') + (num2.charAt(j--) - '0') + delta;
            delta = sum / 10;
            total[k--] = (char) ((sum % 10) + '0');
        }
        while (j >= 0) {
            int sum = (num2.charAt(j--) - '0') + delta;
            delta = sum / 10;
            total[k--] = (char) ((sum % 10) + '0');
        }
        if (delta > 0) {
            total[0] = '1';
        }
        return String.valueOf(total);
    }
    
}
```

## 复杂度分析

