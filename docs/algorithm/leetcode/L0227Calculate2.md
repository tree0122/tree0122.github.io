# 227. 基本计算器 II

## 题目
给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

整数除法仅保留整数部分。

你可以假设给定的表达式总是有效的。所有中间结果将在 [-231, 231 - 1] 的范围内。

注意：不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。


```
示例 1：

输入：s = "3+2*2"
输出：7


示例 2：

输入：s = " 3/2 "
输出：1


示例 3：

输入：s = " 3+5 / 2 "
输出：5

```

## 解题思路


## 代码
```java
public class L0227Calculate2 {
        
    public int calculate2(String s) {
        LinkedList<Integer> stack = new LinkedList<>();
        int v = 0, op = '+';
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == ' ') {
                continue;
            }
            if (c >= '0' && c <= '9') {
                v = 10 * v + (c - '0');
            } else {
                pushVal(stack, v, op);
                op = c;
                v = 0;
            }
        }
        pushVal(stack, v, op);
        return stack.stream().reduce(0, Integer::sum);
    }

    private void pushVal(LinkedList<Integer> stack, int v, int op) {
        switch (op) {
            case '+':
                stack.push(v);
                break;
            case '-':
                stack.push(-v);
                break;
            case '*':
                stack.push(stack.pop() * v);
                break;
            case '/':
                stack.push(stack.pop() / v);
                break;
        }
    }
    
}
```

## 复杂度分析

