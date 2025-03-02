# 0209. 长度最小的子数组

## 题目
给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其总和大于等于 target 的长度最小的 子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

```
示例 1：

输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。


示例 2：

输入：target = 4, nums = [1,4,4]
输出：1
```

## 解题思路


## 代码
```java
public class L0209MinSubArrayLen {
        
    public int minSubArrayLen(int target, int[] nums) {
        int left = 0, right = 0, sum = 0, minLen = nums.length + 1;
        while (right < nums.length) {
            sum += nums[right++];
            while (sum >= target) {
                minLen = Math.min(minLen, right - left);
                sum -= nums[left++];
            }
        }
        return minLen == nums.length + 1 ? 0 : minLen;
    }
    
}
```

## 复杂度分析

