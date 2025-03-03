# 0138. 复制带随机指针的链表

## 题目
给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。


```
```

## 解题思路


## 代码
```java
public class L0138CopyRandomList {
        
    public Node copyRandomList(Node head) {
        if (head == null) {
            return null;
        }
        HashMap<Node, Node> map = new HashMap<>();
        Node cur = head;
        while (cur != null) {
            map.put(cur, new Node(cur.v));
            cur = cur.next;
        }
        for (Map.Entry<Node, Node> entry : map.entrySet()) {
            Node oldNode = entry.getKey();
            Node newNode = entry.getValue();
            newNode.next = map.get(oldNode.next);
            newNode.rand = map.get(oldNode.rand);
        }
        return map.get(head);
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

