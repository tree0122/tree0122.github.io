# 最大子矩阵的大小

## 题目
给定一个整数矩阵map, 其中的值只有0和1, 求全身1的所有矩阵区域中,最大的矩形区域为1的数量.

```
【举例】

1 1 1 0
其中, 最大的矩形区域有3个1, 故返回3

再如:
1 0 1 1
1 1 1 1
1 1 1 0
其中, 最大的矩形区域有6个1, 故返回6
```

## 代码
```java
public class MaxRectangle {

    public int maxRect(int[][] m) {
        int res = 0;
        LinkedList<Integer> stack = new LinkedList<>();
        int[] a = new int[m[0].length];
        for (int i = 0; i < m.length; i++) {
            for (int j = 0; j < m[0].length; j++) {
                a[j] = (m[i][j] == 0) ? 0 : a[j] + 1;
                while (!stack.isEmpty() && a[stack.peek()] > a[j]) {
                    Integer pos = stack.pop();
                    int left = stack.isEmpty() ? pos - 1 : stack.peek();
                    res = Math.max(res, (j - left - 1)a[pos]);
                }
                stack.push(j);
            }
            while (!stack.isEmpty()) {
                Integer pos = stack.pop();
                int left = stack.isEmpty() ? pos - 1 : stack.peek();
                res = Math.max(res, (pos - left)a[pos]);
            }
        }
        return res;
    }

}
```

## 复杂度分析