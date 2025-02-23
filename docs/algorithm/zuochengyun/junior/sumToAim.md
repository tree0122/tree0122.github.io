# 数组累加得到aim

## 题目
一个数组a和一个整数aim. 简单情况下 数组a中所有元素都是正数任意选择a中的数字, 能不能累加得到aim,可以返回true, 否则false

## 代码
```java
public class SumToAim {

    public boolean sumToAim(int[] a, int t) {
//        return doSumToAim(a, t, 0);
        boolean[][] d = new boolean[a.length + 1][t + 1];
        d[a.length][0] = true;
        for (int i = d.length - 1; i >= 0; i--) {
            for (int j = 0; j < d[0].length; j++) {
                d[i][j] = d[i + 1][j] || (j >= a[i] && j - a[i] <= t && d[i + 1][j - a[i]]);
            }
        }
        return d[0][t];
    }

    private boolean doSumToAim(int[] a, int t, int i) {
        if (i == a.length) {
            return t == 0;
        }
        return doSumToAim(a, t, i + 1) || doSumToAim(a, t - a[i], i + 1);
    }


}
```

## 复杂度分析
