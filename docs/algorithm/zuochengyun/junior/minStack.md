# 队列和栈相互实现

## 题目
队列和栈相互实现

## 代码
```java
class MinStack {
    LinkedList<Integer> data = new LinkedList<>();
    LinkedList<Integer> help = new LinkedList<>();

    public void push(int v) {
        data.push(v);
        if (help.isEmpty()) {
            help.push(v);
        } else {
            help.push(Math.min(help.peek(), v));
        }
    }

    public Integer pop() {
        help.pop();
        return data.pop();
    }

    public Integer min() {
        return help.peek();
    }
}
```

## 复杂度分析
