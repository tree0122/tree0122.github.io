# 0208. 实现 Trie (前缀树)


## 题目
Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补全和拼写检查。


```
请你实现 Trie 类：

Trie() 初始化前缀树对象。
void insert(String word) 向前缀树中插入字符串 word 。

boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false 。

boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。

```

## 解题思路


## 代码
```java
class L0208Trie {
    Node root = new Node();

    public L0208Trie() {

    }

    public void insert(String word) {
        Node cur = this.root;
        for (int i = 0; i < word.length(); i++) {
            int dx = word.charAt(i) - 'a';
            if (cur.next[dx] == null) {
                cur.next[dx] = new Node();
            }
            cur = cur.next[dx];
            cur.prefix++;
        }
        cur.end++;
    }

    public boolean search(String word) {
        Node cur = this.root;
        for (int i = 0; i < word.length(); i++) {
            int dx = word.charAt(i) - 'a';
            if (cur.next[dx] == null) {
                return false;
            }
            cur = cur.next[dx];
        }
        return cur.end > 0;
    }

    public boolean startsWith(String prefix) {
        Node cur = this.root;
        for (int i = 0; i < prefix.length(); i++) {
            int dx = prefix.charAt(i) - 'a';
            if (cur.next[dx] == null) {
                return false;
            }
            cur = cur.next[dx];
        }
        return cur.prefix > 0;
    }

    public boolean remove(String word) {
        if (!search(word)) {
            return false;
        }
        Node cur = this.root;
        for (int i = 0; i < word.length(); i++) {
            int dx = word.charAt(i) - 'a';
            if (--cur.next[dx].prefix == 0) {
                cur.next[dx] = null;
                break;
            }
            cur = cur.next[dx];
        }
        cur.end--;
        return true;
    }

    private class Node {
        Node[] next = new Node[26];
        int prefix;
        int end;
    }
}
```

## 复杂度分析

