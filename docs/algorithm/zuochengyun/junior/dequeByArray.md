# 数组结构实现队列和栈

## 题目
数组结构实现队列和栈

## 代码
```java
class DequeByArray {

    class Stack {
        int[] a;
        int idx;

        Stack(int size) {
            this.a = new int[size];
        }

        public void push(int v) {
            if (idx == a.length) {
                throw new RuntimeException("");
            }
            a[idx++] = v;
        }

        public Integer pop() {
            if (idx == 0) {
                throw new RuntimeException("");
            }
            return a[--idx];
        }
    }

    class Queue {
        int[] a;
        int size;
        int head;
        int tail;

        Queue(int len) {
            this.a = new int[len];
        }

        public void offer(int v) {
            if (size == a.length) {
                throw new RuntimeException("");
            }
            a[tail] = v;
            tail = (tail + 1) % a.length;
            size++;
        }

        public Integer poll() {
            if (size == 0) {
                throw new RuntimeException("");
            }
            int res = a[head];
            head = (head + 1) % a.length;
            size--;
            return res;
        }
    }

}
```

## 复杂度分析
