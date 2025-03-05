# 0224. 基本计算器

## 题目
给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

注意:不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。


```
示例 1：

输入：s = "1 + 1"
输出：2


示例 2：

输入：s = " 2-1 + 2 "
输出：3


示例 3：

输入：s = "(1+(4+5+2)-3)+(6+8)"
输出：23


```

## 解题思路


## 代码
```java
public class L0224Calculate {
        
    public int calculate(String s) {
        return doCalculate(s, 0)[0];
    }

    private int[] doCalculate(String s, int i) {
        int v = 0, op = '+';
        LinkedList<Integer> stack = new LinkedList<>();
        while (i < s.length() && s.charAt(i) != ')') {
            char c = s.charAt(i++);
            if (c >= '0' && c <= '9') {
                v = v * 10 + (c - '0');
            } else if (c != '(') {
                pushVal(stack, v, op);
                op = c;
                v = 0;
            } else {
                int[] next = doCalculate(s, i);
                i = next[1];
                v = next[0];
            }
        }
        pushVal(stack, v, op);
        return new int[]{stack.stream().reduce(0, Integer::sum), i + 1};
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

