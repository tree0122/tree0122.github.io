# 0096. 不同的二叉搜索树

## 题目
给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。

```
示例 1：

输入：n = 3
输出：5

```

## 解题思路



## 代码
```java
class L0096NumTrees {

    public int numTrees(int n) {
        int[] d = new int[n + 1];
        d[0] = 1;
        for (int i = 1; i < d.length; i++) {
            for (int j = 1; j <= i; j++) {
                d[i] += d[j - 1] * d[i - j];
            }
        }
        return d[n];
    }

}
```

## 复杂度分析

