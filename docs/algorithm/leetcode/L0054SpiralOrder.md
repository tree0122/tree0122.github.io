# 0054. 螺旋矩阵

## 题目
给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

```
示例 1:

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]


示例 2：

输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]

```

## 解题思路



## 代码
```java
public class L0054SpiralOrder {

    public List<Integer> spiralOrder(int[][] m) {
        ArrayList<Integer> ans = new ArrayList<>();
        int tr = 0, tc = 0, dr = m.length - 1, dc = m[0].length - 1;
        while (tr <= dr && tc <= dc) {
            for (int i = 0; i < dc - tc; i++) {
                ans.add(m[tr][tc + i]);
            }
            if (tr == dr) {
                ans.add(m[dr][dc]);
                break;
            }
            for (int i = 0; i < dr - tr; i++) {
                ans.add(m[tr + i][dc]);
            }
            if (tc == dc) {
                ans.add(m[dr][dc]);
                break;
            }
            for (int i = 0; i < dc - tc; i++) {
                ans.add(m[dr][dc - i]);
            }
            for (int i = 0; i < dr - tr; i++) {
                ans.add(m[dr - i][tc]);
            }
            tr++;
            tc++;
            dr--;
            dc--;
        }
        return ans;
    }

}
```

## 复杂度分析

