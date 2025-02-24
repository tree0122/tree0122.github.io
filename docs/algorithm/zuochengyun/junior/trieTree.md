# 前缀树

## 题目

## 代码
```java
public class TrieTree {
    TNode root = new TNode();

    public int search(String s) {
        TNode cur = this.root;
        for (int i = 0; i < s.length(); i++) {
            int dx = s.charAt(i) - 'a';
            if (cur.next[dx] != null) {
                cur = cur.next[dx];
            } else {
                return 0;
            }
        }
        return cur.end;
    }

    public void insert(String s) {
        TNode cur = this.root;
        for (int i = 0; i < s.length(); i++) {
            int dx = s.charAt(i) - 'a';
            if (cur.next[dx] == null) {
                cur.next[dx] = new TNode();
            }
            cur.next[dx].pre++;
            cur = cur.next[dx];
        }
        cur.end++;
    }

    public int prefix(String s) {
        TNode cur = this.root;
        for (int i = 0; i < s.length(); i++) {
            int dx = s.charAt(i) - 'a';
            if (cur.next[dx] == null) {
                return 0;
            }
            cur = cur.next[dx];
        }
        return cur.pre;
    }

    public boolean remove(String s) {
        if (search(s) <= 0) {
            return false;
        }
        TNode cur = this.root;
        for (int i = 0; i < s.length(); i++) {
            int dx = s.charAt(i) - 'a';
            if (--cur.next[dx].pre == 0) {
                cur.next[dx] = null;
                return true;
            }
            cur = cur.next[dx];
        }
        cur.end--;
        return true;
    }


    private class TNode {
        int pre;
        int end;
        TNode[] next = new TNode[26];
    }

}
```

## 复杂度分析
