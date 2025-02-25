# 旋转正方形矩阵

## 题目
旋转正方形矩阵

## 代码
```java
public class RotateMatrix {

    public void rotateMatrix(int[][] m) {
        int t = 0, d = m.length - 1;
        while (t <= d) {
            rotate(m, t, t++, d, d--);
        }
    }

    private void rotate(int[][] m, int tr, int tc, int dr, int dc) {
        for (int i = 0; i < dc - tc; i++) {
            int t = m[tr + i][tc];
            m[tr + i][tc] = m[dr][tc + i];
            m[dr][tc + i] = m[dr - i][dc];
            m[dr - i][dc] = m[tr][dc - i];
            m[tr][dc - i] = t;
        }
    }

}
```

## 复杂度分析
