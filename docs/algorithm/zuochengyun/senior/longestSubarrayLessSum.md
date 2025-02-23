# 累加和小于aim的最长子数组

## 题目
给定一个数组arr,值可正,可负,可0;一个整数aim,求累加和小于等于aim的,最长子数组,要求时间复杂度O(N)

## 代码
```java
public class MaxLenLessAim {

    public int maxLenLessAim(int[] a, int t) {
        int len = 0;
        //预处理数据
        //求出a[i-len]的最小累加和,及得到最小累加和时的右边界
        int[] minSum = new int[a.length];
        int[] minIdx = new int[a.length];
        minSum[a.length - 1] = a[a.length - 1];
        minIdx[a.length - 1] = a.length - 1;
        for (int i = a.length - 2; i >= 0; i--) {
            if (minSum[i + 1] <= 0) {
                minSum[i] = a[i] + minSum[i + 1];
                minIdx[i] = minIdx[i + 1];
            }else {
                minSum[i] = a[i];
                minIdx[i] = i;
            }
        }
        for (int j = 0, i = 0, sum = 0; i < a.length; i++) {
            while (j < a.length && minSum[j] + sum <= t) {
                sum += minSum[j];
                j = minIdx[j] + 1;
            }
            len = Math.max(len, j - i);
            if (j > i) {
                sum -= a[i];
            }
            if (j < i + 1) {
                j = i + 1;
            }
        }
        return len;
    }

}
```

## 复杂度分析
