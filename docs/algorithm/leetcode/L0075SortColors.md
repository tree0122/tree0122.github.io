# 0075. 颜色分类

## 题目
给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地 对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

必须在不使用库内置的 sort 函数的情况下解决这个问题。

```
示例 1：

输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]


示例 2：

输入：nums = [2,0,1]
输出：[0,1,2]
```

## 解题思路



## 代码
```java
public class L0075SortColors {

    public void sortColors(int[] nums) {
        int i = 0, j = nums.length - 1, k = 0;
        while (k <= j) {
            if (nums[k] == 1) {
                k++;
            }else if (nums[k] < 1) {
                swap(nums, i++, k++);
            }else {
                swap(nums, k, j--);
            }
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

