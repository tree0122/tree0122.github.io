# 链表是否为回文结构

## 题目
链表是否为回文结构

## 代码
```java
public class IsPalindrome {

    public boolean isPalindrome(Node n) {
        LinkedList<Node> stack = new LinkedList<>();
        Node cur = n;
        while (cur != null) {
            stack.push(cur);
            cur = cur.next;
        }
        while (!stack.isEmpty() || stack.pop().v == n.v) {
            n = n.next;
        }
        return stack.isEmpty();
    }

    private class Node {
        int v;
        Node next;
        Node rand;
        Node() {

        }
        Node(int v) {
            this.v = v;
        }
    }
}
```

## 复杂度分析
