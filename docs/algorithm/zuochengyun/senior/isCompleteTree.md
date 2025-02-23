# 判断一棵二叉树是否是完全二叉树

## 题目
判断一棵二叉树是否是完全二叉树

## 代码
```java
public class IsC {

    public boolean isC(Node n) {
        if (n == null) {
            return true;
        }
        boolean leaf = false;
        LinkedList<Node> q = new LinkedList<>();
        q.offer(n);
        while (!q.isEmpty()) {
            n = q.poll();
            if (n.left == null && n.right != null) {
                return false;
            }
            if (leaf && (n.left != null || n.right != null)) {
                return false;
            }
            if (n.left != null) {
                q.offer(n.left);
            }else {
                leaf = true;
            }
            if (n.right != null) {
                q.offer(n.right);
            }else {
                leaf = true;
            }
        }
        return true;
    }

    private class Node {
        int v;
        Node left;
        Node right;
    }

}
```

## 复杂度分析
