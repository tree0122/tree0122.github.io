# 0083. 删除排序链表中的重复元素

## 题目
给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。


```
示例 1：

输入：head = [1,1,2]
输出：[1,2]


示例 2：

输入：head = [1,1,2,3,3]
输出：[1,2,3]
```

## 解题思路


## 代码
```java
public class L0083DeleteDuplicates {
        
    public Node deleteDuplicates(Node head) {
        if (head == null) {
            return null;
        }
        Node cur = head;
        while (cur.next != null) {
            if (cur.v == cur.next.v) { // 过了下个重复
                cur.next = cur.next.next;
            } else {
                cur = cur.next;
            }
        }
        return head;
    }

    private class Node {
        int v;
        Node next;
    }
    
}
```

## 复杂度分析

