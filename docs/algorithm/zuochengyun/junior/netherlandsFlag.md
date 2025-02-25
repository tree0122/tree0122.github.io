# netherlandsFlag

## 题目
给定一个数组arr,和一个数num,请把小于num的数放在数组的左边,等于num的数放在数组的中间,大于num的数放在数组的右边。

## 代码
```java
class NetherlandsFlag {
    
    public int[] netherlandsFlag(int[] a, int v) {
        int less = 0, more = a.length - 1;
        for (int i = 0; i <= more; ) {
            if (a[i] == v) {
                i++;
            } else if (a[i] < v) {
                swap(a, i++, less++);
            } else {
                swap(a, i, more--);
            }
        }
        return new int[]{less, more};
    }

}
```

## 复杂度分析
