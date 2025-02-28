# 0912. 排序数组

## 题目
给你一个整数数组 nums，请你将该数组升序排列。

你必须在 不使用任何内置函数 的情况下解决问题，时间复杂度为 O(nlog(n))，并且空间复杂度尽可能小。

## 解题思路


## 代码
```java
public class L0912SortAnArray {

    public void heapSort(int[] a) {
        for (int i = (a.length - 2) / 2 ; i >= 0; i--) {
            heapDown(a, i, a.length);
        }
        for (int i = a.length - 1; i >= 0; i--) {
            swap(a, 0, i);
            heapDown(a, 0, i);
        }
    }

    private void heapDown(int[] a, int i, int size) {
        int child = 2 * i + 1;
        while (child < size) {
            if (child + 1 < size && a[child] < a[child + 1]) {
                child++;
            }
            if (a[i] >= a[child]) {
                break;
            }
            swap(a, i, child);
            i = child;
            child = 2 * i + 1;
        }
    }

    private void swap(int[] a, int i, int j) {
        a[i] = a[i] ^ a[j];
        a[j] = a[i] ^ a[j];
        a[i] = a[i] ^ a[j];
    }

}
```

## 复杂度分析

