# 归并排序

## 代码
```java
public class MergeSort {

    public int[] sort(int[] a){
        if (a == null || a.length <= 1){
            return a;
        }
        int[] t = new int[a.length];
        process(a, 0, a.length - 1, t);
        return a;
    }

    private void process(int[] a, int l, int r, int[] t) {
        if (l < r){
            int m = (l + r) >> 1;
            process(a, l, m, t);
            process(a, m + 1, r, t);
            merge(a, l, m, r, t);
        }
    }

    private void merge(int[] a, int l, int m, int r, int[] t) {
        int i = l;
        int j = m + 1;
        int k = l;
        while (i <= m && j <= r){
            t[k++] = a[i] <= a[j] ? a[i++] : a[j++];
        }
        while (i <= m){
            t[k++] = a[i++];
        }
        while (j <= r){
            t[k++] = a[j++];
        }
        while (l <= r){
            a[l] = t[l++];
        }
    }

}
```

## 复杂度分析
时间复杂度O(N*logN),额外空间复杂度O(N)