# 0016. 最接近的三数之和

## 题目
给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

返回这三个数的和。

假定每组输入只存在恰好一个解。

```
示例 1：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2)。


示例 2：

输入：nums = [0,0,0], target = 1
输出：0
解释：与 target 最接近的和是 0（0 + 0 + 0 = 0）。
```

## 解题思路


## 代码
```java
public class L0016ThreeSumClosest {
        
    public int threeSumClosest(int[] nums, int target) {
        int res = Integer.MAX_VALUE;
        // quick sort
        quickSort(nums, 0, nums.length - 1);
        for (int i = 0; i < nums.length; i++) {
            int left = i + 1, right = nums.length - 1;
            while (left < right) {
                int total = nums[i] + nums[left] + nums[right];
                if (Math.abs(total - target) < Math.abs(res - target)) {
                    res = total;
                }
                if (total > target) {
                    right--;
                }else {
                    left++;
                }
            }
        }
        return res;
    }

    private void quickSort(int[] a, int i, int j) {
        if (i >= j) {
            return;
        }
        int p = (int) (i + (j - i + 1) * Math.random()), es = i, ee = j, k = i;
        while (k <= ee) {
            if (a[k] < a[p]) {
                swap(a, k++, es++);
            } else if (a[k] > a[p]) {
                swap(a, k, ee--);
            } else {
                k++;
            }
        }
        quickSort(a, i, es - 1);
        quickSort(a, ee + 1, j);
    }
    
}
```

## 复杂度分析

