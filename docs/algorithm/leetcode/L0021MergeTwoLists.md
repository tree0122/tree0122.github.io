# 0021. 合并两个有序链表

## 题目
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 


```
示例 1：

输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

## 解题思路


## 代码
```java
public class L0021MergeTwoLists {
        
    public Node mergeTwoLists(Node list1, Node list2) {
        Node cur = new Node(), dum = cur;
        while (list1 != null && list2 != null) {
            if (list1.v <= list2.v) {
                cur.next = list1;
                list1 = list1.next;
            }else {
                cur.next = list2;
                list2 = list2.next;
            }
            cur = cur.next;
        }
        cur.next = (list1 != null) ? list1 : list2;
        return dum.next;
    }

    private class Node {
        int v;
        Node next;
    }
    
}
```

## 复杂度分析

