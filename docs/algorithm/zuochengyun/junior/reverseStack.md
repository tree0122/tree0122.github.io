# 逆序一个栈

## 题目
有一个栈, 请逆序这个栈.

要求: 不能申请额外的数据结构, 只能使用递归函数


## 代码
```java
public class ReverseStack {

   public Deque<Integer> reverseStack(Deque<Integer> stack) {
        if (stack == null || stack.isEmpty()) {
            return stack;
        }
        Integer bottom = removeBottom(stack);
        reverseStack(stack);
        stack.push(bottom);
        return stack;
    }

    private Integer removeBottom(Deque<Integer> stack) {
        Integer cur = stack.pop();
        if (stack.isEmpty()) {
            return cur;
        }
        Integer bottom = removeBottom(stack);
        stack.push(cur);
        return bottom;
    }

}
```

## 复杂度分析
