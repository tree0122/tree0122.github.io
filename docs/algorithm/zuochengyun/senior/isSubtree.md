# T2是不是T1的子树

## 题目
两颗树T1和T2, T2是不是T1的子树

## 代码
```java
public class IsSubtree {

    public boolean isSubtree(Node n1, Node n2) {
        String s1 = str(n1);
        String s2 = str(n2);
        int[] n = next(s2);
        int i = 0, j = 0;
        while (i < s1.length() && j < s2.length()) {
            if (s1.charAt(i) == s2.charAt(j)) {
                i++;
                j++;
            } else if (j > 0) {
                j = n[j];
            } else {
                i++;
            }
        }
        return j == s2.length();
    }

    private String str(Node n) {
        StringBuilder sb = new StringBuilder();
        sb.append(n.v).append(",");
        LinkedList<Node> q = new LinkedList<>();
        q.offer(n);
        while (!q.isEmpty()) {
            n = q.poll();
            if (n.left != null) {
                q.offer(n.left);
                sb.append(n.left.v).append(",");
            } else {
                sb.append("#").append(",");
            }
            if (n.right != null) {
                q.offer(n.right);
                sb.append(n.right.v).append(",");
            } else {
                sb.append("#").append(",");
            }
        }
        return sb.toString();
    }

    private int[] next(String s) {
        int[] n = new int[s.length()];
        for (int i = 2, cn = 0; i < s.length(); ) {
            if (s.charAt(i - 1) == s.charAt(cn)) {
                n[i++] = ++cn;
            } else if (cn > 0) {
                cn = n[cn];
            } else {
                i++;
            }
        }
        return n;
    }

    // morris遍历比较
    public boolean isSubTree(Node r, Node n2) {
        while (r != null) {
            Node mr = r.left;
            if (mr != null) {
                while (mr.right != null && mr.right != r) {
                    mr = mr.right;
                }
                if (mr.right == null) {
                    mr.right = r;
                    r = r.left;
                    continue;
                } else {
                    mr.right = null;
                }
            }
            if (r == n2) {
                return true;
            }
            r = r.right;
        }
        return false;
    }

    private class Node {
        int v;
        Node left;
        Node right;
    }

}
```

## 复杂度分析
时间复杂度O(N),额外空间复杂度O(1)