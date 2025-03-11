# 0297. 二叉树的序列化与反序列化

## 题目
序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

提示: 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。


```


```

## 解题思路


## 代码
```java
class L0297Codec {

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        if (root == null) {
            return "#";
        }
        return root.v + "," + serialize(root.left) + "," + serialize(root.right);
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        String[] as = data.split(",");
        LinkedList<String> q = new LinkedList<>();
        for (String s : as) {
            q.offer(s);
        }
        return doDeserialize(q);
    }

    private TreeNode doDeserialize(LinkedList<String> q) {
        String v = q.poll();
        TreeNode node = newNode(v);
        if (node == null) {
            return null;
        }
        node.left = doDeserialize(q);
        node.right = doDeserialize(q);
        return node;
    }

    public String serializeByLevel(TreeNode root) {
        StringBuilder sb = new StringBuilder().append(root.v + ",");
        LinkedList<TreeNode> q = new LinkedList<>();
        q.offer(root);
        while (!q.isEmpty()) {
            root = q.poll();
            if (root.left != null) {
                q.offer(root.left);
                sb.append(root.left.v + ",");
            } else {
                sb.append("#,");
            }
            if (root.right != null) {
                q.offer(root.right);
                sb.append(root.right.v + ",");
            } else {
                sb.append("#,");
            }
        }
        return sb.toString();
    }

    public TreeNode deserializeByLevel(String data) {
        String[] as = data.split(",");
        int i = 0;
        TreeNode head = newNode(as[i++]);
        LinkedList<TreeNode> q = new LinkedList<>();
        q.offer(head);
        while (!q.isEmpty()) {
            TreeNode node = q.poll();
            node.left = newNode(as[i++]);
            node.right = newNode(as[i++]);
            if (node.left != null) {
                q.offer(node.left);
            }
            if (node.right != null) {
                q.offer(node.right);
            }
        }
        return head;
    }

    private TreeNode newNode(String v) {
        if ("#".equals(v)) {
            return null;
        }
        TreeNode n = new TreeNode();
        n.v = Integer.parseInt(v);
        return n;
    }

    private class TreeNode {
        int v;
        TreeNode left;
        TreeNode right;
    }

}
```

## 复杂度分析

