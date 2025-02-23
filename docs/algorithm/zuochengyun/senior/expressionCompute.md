# ExpressionCompute

## 题目
给定一个字符串str,str表示一个公式,公式里可能有整数、加减乘除符号和左右括号,返回公式的计算结果。

```
【举例】
str="48*((70-65)-43)+8*1",返回-1816。
str="3+1*4",返回7。 str="3+(1*4)",返回7。

【说明】
1. 可以认为给定的字符串一定是正确的公式,即不需要对str做公式有效性检查。
2. 如果是负数,就需要用括号括起来,比如"4*(-3)"。但如果负数作为公式的开头或括号部分的开头,则可以没有括号,比如"-3*4"和"(-3*4)"都是合法的。
3. 不用考虑计算过程中会发生溢出的情况
```

## 代码
```java
public class ExpressCompute {

    public int expressCompute(String s) {
        return doVal(s, 0)[0];
    }

    private int[] doVal(String s, int i) {
        int pre = 0, op = '+'; // 上一个整数，当前的符号
        LinkedList<Integer> stack = new LinkedList<>();
        while (i < s.length() && s.charAt(i) != ')') {
            char c = s.charAt(i++);
            if (c >= '0' && c <= '9') {
                pre = pre * 10 + (c - '0');
            } else if (c != '(') {
                pushVal(stack, pre, op);
                pre = 0;
                op = c;
            } else {
                int[] v = doVal(s, i);
                pre = v[0];
                i = v[1];
            }
        }
        pushVal(stack, pre, op);
        int sum = 0;
        for (Integer v : stack) {
            sum += v;
        }
        return new int[]{sum, i};
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
