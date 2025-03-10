# 0043. 字符串相乘

## 题目
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。



```
示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"


示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"

```

## 解题思路


## 代码
```java
public class L0043Multiply {
        
    public String multiply(String num1, String num2) {
        StringBuilder sb = new StringBuilder();
        int[] res = new int[num1.length() + num2.length()];
        for (int i = num1.length() - 1; i >= 0; i--) {
            int v1 = num1.charAt(i) - '0';
            for (int j = num2.length() - 1; j >= 0; j--) {
                int v2 = num2.charAt(j) - '0';
                res[i + j + 1] += (v1 * v2);
            }
        }
        for (int i = res.length - 1, carry = 0; i >= 0; i--) {
            res[i] += carry;
            carry = res[i] / 10;
            res[i] = res[i] % 10;
        }
        for (int i = res[0] == 0 ? 1 : 0; i < res.length; i++) {
            sb.append(res[i]);
        }
        return sb.toString();
    }
    
}
```

## 复杂度分析

