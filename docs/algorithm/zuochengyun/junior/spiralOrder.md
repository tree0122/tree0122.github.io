# 转圈打印矩阵

## 题目
转圈打印矩阵

## 代码
```java
public class SpiralOrder {

    public void spiralOrder(int[][] m) {
        int tr = 0, tc = 0, dr = m.length - 1, dc = m[0].length - 1;
        while (tr <= dr && tc <= dc) {
            spiral(m, tr++, tc++, dr--, dc--);
        }
    }

    private void spiral(int[][] m, int tr, int tc, int dr, int dc) {
        if (tr == dr) {
            for (int i = 0; i <= dc - tc; i++) {
                System.out.println(m[tr][tc + i]);
            }
            return;
        }
        if (tc == dc) {
            for (int i = 0; i <= dr - tr; i++) {
                System.out.println(m[tr + i][dc]);
            }
            return;
        }
        for (int i = 0; i < dc - tc; i++) {
            System.out.println(m[tr][tc + i]);
        }
        for (int i = 0; i < dr - tr; i++) {
            System.out.println(m[tr + i][dc]);
        }
        for (int i = 0; i < dc - tc; i++) {
            System.out.println(m[dr][dc - i]);
        }
        for (int i = 0; i < dr - tr; i++) {
            System.out.println(m[dr - i][tc]);
        }
    }

}
```

## 复杂度分析
