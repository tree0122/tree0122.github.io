# 选择排序

## 代码
```java
public class SelectSort {

    public int[] sort(int[] a){
        if (a == null || a.length <= 1){
            return a;
        }
        for (int i = 0; i < a.length; i++) {
            int idx = i;
            for (int j = i + 1; j < a.length; j++) {
                if (a[idx] > a[j]){
                    idx = j;
                }
            }
            if (i != idx){
                swap(a, i, idx);
            }
        }
        return a;
    }

    private void swap(int[] a, int i, int j){
        a[i] = a[i] ^ a[j];
        a[j] = a[i] ^ a[j];
        a[i] = a[i] ^ a[j];
    }

}
```

## 复杂度分析
时间复杂度O(N^2),额外空间复杂度O(1)