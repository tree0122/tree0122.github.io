# 八皇后问题

## 题目
国际象棋中, 8个皇后都在棋盘上的情况数量

规则: 每个皇后的上下 左右 正反斜线方向, 都不可以放东西


## 代码
```java
public class EightQueen {

    public int eightQueen(int[] a) {
        return doEightQueen(a, 0);
    }

    /**
     * 直接方法
     *
     * @param a 皇后放置情况, (i, a[i])表示第i行第a[i]列 放一个皇后
     * @param i 处理第index皇后, 潜台词: (index -1)个皇后已按要求放置
     * @return 第index皇后按要求放置的情况数
     */
    private int doEightQueen(int[] a, int i) {
        if (i == a.length) {
            return 1;
        }
        int res = 0;
        for (int j = 1; j <= a.length; j++) {
            if (valid(a, i, j)) {
                a[i] = j;
                res = doEightQueen(a, i + 1);
            }
        }
        return res;
    }

    /**
     * 是否可将第index皇后, i val列位置
     * @param a 皇后放置情况
     * @param i 处理第index皇后, 潜台词: (i -1)个皇后已按要求放置
     * @param v 尝试将此皇后放在v列
     * @return 可放true, 不可false
     */
    private boolean valid(int[] a, int i, int v) {
        for (int k = 0; k < i; k++) {
            if (v == a[k] || Math.abs(i - k) == Math.abs(v - a[k])) {
                return false;
            }
        }
        return true;
    }

}
```

## 复杂度分析
