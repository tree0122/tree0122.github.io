# 冒泡排序

## 代码
```java
public class BubbleSort {

    public int[] sort(int[] a){
        if (a == null || a.length <= 1){
            return a;
        }
        for (int i = 0; i < a.length; i++) {
            for (int j = a.length - 1; j > i; j--) {
                if (a[j] < a[j - 1]){
                    swap(a, j, j - 1);
                }
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