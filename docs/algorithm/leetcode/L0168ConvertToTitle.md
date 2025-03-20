# 0168. Excel表列名称

## 题目
给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。

例如：

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...


```
示例 1：

输入：columnNumber = 28
输出："AB"


示例 2：

输入：columnNumber = 2147483647
输出："FXSHRXW"


```

## 解题思路



## 代码
```java
class L0168ConvertToTitle {

    //一般性的进制转换题目无须进行额外操作，是因为我们是在「每一位数值范围在 [0,x)」的前提下进行「逢 x 进一」。
    
    //但本题需要我们将从 1 开始，因此在执行「进制转换」操作前，我们需要先对 columnNumber 执行减一操作，从而实现整体偏移
    public String convertToTitle(int columnNumber) {
        StringBuilder sb = new StringBuilder();
        while (columnNumber != 0) {
            columnNumber--; // 由于本题从1开始 进制转换，故转换前要减1
            char digit = (char) ('A' + columnNumber % 26);
            sb.append(digit);
            columnNumber /= 26;
        }
        return sb.reverse().toString();
    }

}
```

## 复杂度分析

