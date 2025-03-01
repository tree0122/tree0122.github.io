# 0034. 在排序数组中查找元素的第一个和最后一个位置

## 题目
给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

```
示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]


示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
```

## 解题思路


## 代码
```java
public class L0034SearchRange {
        
    public int[] searchRange(int[] nums, int target) {
        int[] res = {-1, -1};
        int left = 0, right = nums.length - 1;
        while (left < right) {
            int m = (left + right) / 2;
            if (nums[m] < target) {
                left = m + 1;
            }else {
                right = m;
            }
        }
        if (nums[right] != target) {
            return res;
        }
        res[0] = right;
        left = right;
        right = nums.length - 1;
        while (left < right) {
            int m = (left + right  +1) /2;
            if (nums[left] <= target) {
                left = m;
            }else {
                right = m - 1;
            }
        }
        res[0] = left;
        return res;
    }
    
}
```

## 复杂度分析

