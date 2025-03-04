# 0023. 合并 K 个升序链表

## 题目
给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。


```
示例 1：

输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
```

## 解题思路


## 代码
```java
public class L0023MergeKLists {
        
    public Node mergeKLists(Node[] lists) {
        if (lists == null || lists.length == 0) {
            return null;
        }
        if (lists.length == 1) {
            return lists[0];
        }
        return mergeKLists(lists, 0, lists.length - 1);
    }

    private Node mergeKLists(Node[] lists, int i, int j) {
        if (i == j) {
            return lists[i];
        }
        int m = (i + j) / 2;
        Node left = mergeKLists(lists, i, m);
        Node right = mergeKLists(lists, m + 1, j);
        Node dum = new Node(), cur = dum;
        while (left != null && right != null) {
            if (left.v <= right.v) {
                cur.next = left;
                left = left.next;
            }else {
                cur.next = right;
                right = right.next;
            }
            cur = cur.next;
        }
        cur.next = (left != null) ? left : right;
        return dum.next;
    }

    public Node mergeKListsHeap(Node[] lists) {
        if (lists == null || lists.length == 0) {
            return null;
        }
        if (lists.length == 1) {
            return lists[0];
        }
        Node dum = new Node(), cur = dum;
        PriorityQueue<Node> q = new PriorityQueue<>(Comparator.comparingInt(n -> n.v));
        for (Node node : lists) {
            q.offer(node);
        }
        while (q.size() > 1) {
            Node poll = q.poll();
            cur.next = poll;
            cur = cur.next;
            if (poll.next != null) {
                q.offer(poll.next);
            }
        }
        cur.next = q.poll();
        return dum.next;
    }

    private class Node {
        int v;
        Node next;
    }
    
}
```

## 复杂度分析

