# 0085. 最大矩形

## 题目
给定一个仅包含 0 和 1 、大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。


```
示例 1:

输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：6


```

## 解题思路


## 代码
```java
public class L0085MaximalRectangle {
        
    public int maximalRectangle(char[][] matrix) {
        int res = 0;
        int[] h = new int[matrix[0].length];
        LinkedList<Integer> minStack = new LinkedList<>();
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                h[j] = matrix[i][j] == 0 ? 0 : h[j] + 1;
                while (!minStack.isEmpty() && h[minStack.peek()] > h[j]) {
                    int cur = minStack.pop();
                    int leftMin = minStack.isEmpty() ? - 1 : minStack.peek();
                    res = Math.max(res, (j - leftMin - 1) * h[cur]);
                }
                minStack.push(j);
            }
            while (!minStack.isEmpty()) {
                int cur = minStack.pop();
                int leftMin = minStack.isEmpty() ? -1 : minStack.peek();
                res = Math.max(res, (h.length - leftMin - 1) * h[cur]);
            }
        }
        return res;
    }
    
}
```

## 复杂度分析

