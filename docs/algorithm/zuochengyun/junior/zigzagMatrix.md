# zigzagMatrix

## 题目
zigzagMatrix

## 代码
```java
public class ZigzagMatrix {

    public void zigzagMatrix(int[][] m) {
        int fr = 0, fc = 0, sr = 0, sc = 0;
        boolean up = false;
        while (fr < m.length && fc < m[0].length) {
            zigzag(m, fr, fc, sr, sc, up);
            fc = (fr == m.length - 1) ? fc + 1 : fc;
            fr = (fr == m.length - 1) ? fr : fr + 1;
            sr = (sc == m[0].length - 1) ? sr + 1 : sr;
            sc = (sc == m[0].length - 1) ? sc : sc + 1;
            up = !up;
        }
    }

    private void zigzag(int[][] m, int fr, int fc, int sr, int sc, boolean up) {
        if (up) {
            for (int i = fr; i >= sr; i--) {
                System.out.println(m[i][fc++]);
            }
        } else {
            for (int i = sr; i <= fr; i++) {
                System.out.println(m[i][sc--]);
            }
        }
    }

}
```

## 复杂度分析
