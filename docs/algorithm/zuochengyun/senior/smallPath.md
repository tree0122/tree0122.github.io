# 矩阵的最小路径和

## 题目
给定一个矩阵m,从左上角开始每次只能向右或者向下走,最后
到达右下角的位置,路径上所有的数字累加起来就是路径和,
返回所有的路径中最小的路径和。

举例:
```
如果给定的m如下:
1 3 5 9
8 1 3 4
5 0 6 1
8 8 4 0
路径1,3,1,0,6,1,0是所有路径中路径和最小的,所以返
回12。
```


## 代码
```java
public class SmallPath {

    public int smallPath(int[][] m) {
        int[][] d = new int[m.length + 1][m[0].length + 1];
        for (int i = 1; i < d.length; i++) {
            for (int j = 1; j < d[0].length; j++) {
                d[i][j] = Math.min(d[i - 1][j], d[i][j - 1]) + m[i - 1][j - 1];
            }
        }
        return d[d.length - 1][d[0].length - 1];
    }

}
```

## 复杂度分析
