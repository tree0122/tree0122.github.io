# 0152. 乘积最大子数组

## 题目
给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续 子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

测试用例的答案是一个 32-位 整数。


```
示例 1:

输入: nums = [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。


示例 2:

输入: nums = [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。

```

## 解题思路


## 代码
```java
class L0152MaxProduct {

    public int maxProduct(int[] nums) {
        int ans = Integer.MIN_VALUE;
        int[] maxTo = new int[nums.length]; // nums[0,i]以i为结尾的最大值
        int[] minTo = new int[nums.length];
        maxTo[0] = nums[0];
        minTo[0] = nums[0];
        for (int i = 1; i < nums.length; i++) {
            maxTo[i] = Math.max(nums[i], Math.max(nums[i] * maxTo[i - 1], nums[i] * minTo[i - 1]));
            minTo[i] = Math.min(nums[i], Math.min(nums[i] * maxTo[i - 1], nums[i] * minTo[i - 1]));
            ans = Math.max(ans, maxTo[i]);
        }
        return ans;
    }

    public int maxProductBetter(int[] nums) {
        int ans = Integer.MIN_VALUE, max = nums[0], min = nums[0];
        for (int i = 1; i < nums.length; i++) {
            max = Math.max(nums[i], Math.max(nums[i] * max, nums[i] * min));
            min = Math.max(nums[i], Math.max(nums[i] * max, nums[i] * min));
            ans = Math.max(ans, max);
        }
        return max;
    }

}
```

## 复杂度分析

