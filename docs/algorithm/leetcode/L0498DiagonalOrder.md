# 0498. 对角线遍历

## 题目
给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。

```
示例 1:

输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,4,7,5,3,6,8,9]


示例 2：

输入：mat = [[1,2],[3,4]]
输出：[1,2,3,4]

```

## 解题思路



## 代码
```java
public class L0498DiagonalOrder {

    public int[] diagonalOrder(int[][] m) {
        int[] res = new int[m.length * m[0].length];
        int fr = 0, fc = 0, sr = 0, sc = 0, i = 0;
        boolean up = true;
        while (sr < m.length) {
            if (up) {
                for (int j = 0; j <= fr - sr; j++) {
                    res[i++] = m[fr - j][fc + j];
                }
            } else {
                for (int j = 0; j <= fr - sr; j++) {
                    res[i++] = m[sr + j][sc - j];
                }
            }
            up = !up;
            fc = (fr == m.length - 1) ? fc + 1 : fc;
            fr = (fr == m.length - 1) ? fr : fr + 1;
            sr = (sc == m[0].length - 1) ? sr + 1 : sr;
            sc = (sc == m[0].length - 1) ? sc : sc + 1;
        }
        return res;
    }

}
```

## 复杂度分析
- 堆排序，时间复杂度O(N*Lg(N)),额外空间复杂度O(k)
- 快排序，时间复杂度O(N),额外空间复杂度O(1)
