# 岛屿个数

## 题目
一个矩阵中只有0和1两种值,每个位置都可以和自己的上、下、左、右四个位置相连,如果有一片1连在一起,这个部分叫做一个岛,求一个矩阵中有多少个岛?

```
举例:
0 1 1 0 0 1
0 0 1 1 0 0
0 0 1 0 1 1
0 0 0 0 0 0

这个矩阵中有三个岛。
```

## 代码
```java
public class Islands {

    public int islands(int[][] m) {
        int cn = 0;
        for (int i = 0; i < m.length; i++) {
            for (int j = 0; j < m[0].length; j++) {
                if (m[i][j] == 1) {
                    infect(m, i, j);
                    cn++;
                }
            }
        }
        return cn;
    }

    private void infect(int[][] m, int i, int j) {
        if (i < 0 || i >= m.length || j < 0 || j >= m[0].length || m[i][j] != 1) {
            return;
        }
        m[i][j] = 2;
        infect(m, i - 1, j);
        infect(m, i + 1, j);
        infect(m, i, j - 1);
        infect(m, i, j + 1);
    }

}
```

## 复杂度分析
