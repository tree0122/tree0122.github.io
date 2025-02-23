# 判断一棵二叉树是否是搜索二叉树

## 题目
判断一棵二叉树是否是搜索二叉树

## 代码
```java
public class IsS {

    public boolean isS(Node n) {
        // 另一种方法
        // return doBst(n);
        if (n == null) {
            return true;
        }
        Node mr = null, pre = null;
        while (n != null) {
            mr = n.left;
            if (mr != null) {
                while (mr.right != null && mr.right != n) {
                    mr = mr.right;
                }
                if (mr.right == null) {
                    mr.right = n;
                    n = n.left;
                    continue;
                }else {
                    mr.right = null;
                }
            }
            if (pre != null && pre.v >= n.v) {
                return false;
            }
            pre = n;
            n = n.right;
        }
        return true;
    }

    private SData doBst(Node n) {
        if (n == null) {
            return new SData(null, Integer.MIN_VALUE, Integer.MAX_VALUE, true);
        }
        SData ld = doBst(n.left);
        if (!ld.is) {
            return ld;
        }
        SData rd = doBst(n.right);
        if (!rd.is) {
            return rd;
        }
        if (n.left == ld.h && n.right == rd.h && n.v > ld.max && n.v < rd.min) {
            return new SData(n, Math.max(n.v, rd.max), Math.min(n.v, ld.min), true);
        }
        return new SData(null, 0, 0, false);
    }

    private class SData{
        Node h;
        int max;
        int min;
        boolean is;

        public SData(Node h, int max, int min, boolean is) {
            this.h = h;
            this.max = max;
            this.min = min;
            this.is = is;
        }
    }

    private class Node {
        int v;
        Node left;
        Node right;
    }

}
```

## 复杂度分析
