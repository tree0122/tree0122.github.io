# 寻找旋转排序数组中的最小值 II

## 题目
已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,4,4,5,6,7] 在变化后可能得到：
若旋转 4 次，则可以得到 [4,5,6,7,0,1,4]
若旋转 7 次，则可以得到 [0,1,4,4,5,6,7]
注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

给你一个可能存在 重复 元素值的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。

你必须尽可能减少整个过程的操作步骤。

```
示例 1：

输入：nums = [1,3,5]
输出：1


示例 2：

输入：nums = [2,2,2,0,1]
输出：0

```

## 解题思路

创建两个指针 left、right，分别指向数组首尾。然后计算出两个指针中间值 mid。将 mid 与右边界进行比较。

1. 如果 nums[mid]>nums[left]，则最小值不可能在 mid 左侧，一定在 mid 右侧，则将 left 移动到 mid+1 位置，继续查找右侧间。
2. 如果 nums[mid]< nums[left]，则最小值一定在 mid 左侧，令右边界 right 为 mid，继续查找左侧区间。
3. 如果 nums[mid]==nums[left]，无法判断在 mid 的哪一侧，可以采用 right = right - 1 逐步缩小区域。


## 代码
```java
public class L0154FindMin2 {
        
    public int findMin2(int[] nums) {
        int left = 0, right = nums.length - 1;
        while (left < right) {
            int m = (left + right) / 2;
            if (nums[m] > nums[left]) {
                left = m + 1;
            }else  if (nums[m] < nums[right]){
                right = m;
            }else {
                right--;
            }
        }
        return nums[right];
    }
    
}
```

## 复杂度分析

