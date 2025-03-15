# 0079. 单词搜索

## 题目
给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。



```
示例 1：

输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true


示例 2：

输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
输出：false

```

## 解题思路


## 代码
```java
class L0079Exist {

    public boolean exist(char[][] board, String word) {
        for (int r = 0; r < board.length; r++) {
            for (int c = 0; c < board[0].length; c++) {
                if (doExist(board, word, r, c, 0)) {
                    return true;
                }
            }
        }
        return false;
    }

    private boolean doExist(char[][] b, String word, int r, int c, int i) {
        if (r < 0 || r >= b.length || c < 0 || c >= b.length || b[r][c] != word.charAt(i)) {
            return false;
        }
        if (i == word.length() - 1) {
            return true;
        }
        b[r][c] = 0;
        if (doExist(b, word, r - 1, c, i + 1)
                || doExist(b, word, r + 1, c, i + 1)
                || doExist(b, word, r, c - 1, i + 1)
                || doExist(b, word, r, c + 1, i + 1)) {
            return true;
        }
        b[r][c] = word.charAt(i);
        return false;
    }

}
```

## 复杂度分析

