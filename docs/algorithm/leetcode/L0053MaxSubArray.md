# 0053. 最大子数组和

## 题目
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组是数组中的一个连续部分。

```
示例 1：

输入：num = 7, target = 4
输出：1


示例 2：

输入：num = 12, target = 5
输出：0

```

## 解题思路


## 代码
```java
class L0053MaxSubArray {

    public int maxSubArray(int[] nums) {
        int res = Integer.MIN_VALUE;
        int[] d = new int[nums.length];
        d[0] = nums[0];
        for (int i = 1; i < nums.length; i++) {
            d[i] = d[i - 1] > 0 ? d[i - 1] + nums[i] : nums[i];
            res = Math.max(res, d[i]);
        }
        return res;
    }

}
```

## 复杂度分析

