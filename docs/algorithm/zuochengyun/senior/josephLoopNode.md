# 环形单链表的约瑟夫问题

## 【题目】
据说著名犹太历史学家Josephus有过以下故事:在罗马人占领乔塔帕特后,39个犹太人与Josephus及他的朋友躲到一个洞中,39个犹太人决定宁愿死也不要被敌人抓到,于是决定了一个自杀方式,41个人排成一个圆圈,由第1个人开始报数,报数到3的人就自杀,然后再由下一个人重新报1,报数到3的人再自杀,这样依次下去,直到剩下最后一个人时,那个人可以自由选择自己的命运。这就是著名的约瑟夫问题。现在请用单向环形链表描述该结构并呈现整个自杀过程。

输入:一个环形单向链表的头节点head和报数的值m。
返回:最后生存下来的节点,且这个节点自己组成环形单向链表,其他节点都删掉。

进阶:
如果链表节点数为N,想在时间复杂度为O(N)时完成原问题的要求,该怎么实现?

## 代码
```java
public class JosephLoopNode {

    public Node josephLoopNode(Node head, int k) {
        if (head == null || head.next == head || k <= 1) {
            return head;
        }
        int i = 1;
        while (head.next != head) {
            if (++i == k) { //报数到i-1时, 跳过i号元素, 进行下下个位置比较, 同时i重置
                head.next = head.next.next;
                i = 1;
            }
            head = head.next;
        }
        return head;
    }


    private class Node {
        int v;
        Node next;

        public Node(int v) {
            this.v = v;
        }
    }

}
```

## 复杂度分析