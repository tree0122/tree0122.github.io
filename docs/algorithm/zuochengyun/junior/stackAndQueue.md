# 队列和栈相互实现

## 题目
队列和栈相互实现

## 代码
```java
public class StackAndQueue {

    class Stack {
        LinkedList<Integer> dataQ = new LinkedList<>();
        LinkedList<Integer> helpQ = new LinkedList<>();

        public void push(int v) {
            dataQ.offer(v);
        }

        public Integer pop() {
            if (dataQ.isEmpty()) {
                return null;
            }
            while (dataQ.size() > 1) {
                helpQ.offer(dataQ.poll());
            }
            Integer v = dataQ.poll();
            LinkedList<Integer> t = this.dataQ;
            this.dataQ = helpQ;
            helpQ = t;
            return v;
        }
    }

    class Queue {
        LinkedList<Integer> dataStack = new LinkedList<>();
        LinkedList<Integer> helpStack = new LinkedList<>();

        public void offer(int v) {
            dataStack.push(v);
        }

        public Integer poll() {
            if (helpStack.isEmpty()) {
                while (!dataStack.isEmpty()) {
                    helpStack.push(dataStack.pop());
                }
            }
            return helpStack.pop();
        }
    }

}
```

## 复杂度分析
