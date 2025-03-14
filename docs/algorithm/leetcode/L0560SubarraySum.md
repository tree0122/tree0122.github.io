# 0560. 和为 K 的子数组

## 题目
给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

子数组是数组中元素的连续非空序列。

```
示例 1：

输入：nums = [1,1,1], k = 2
输出：2


示例 2：

输入：nums = [1,2,3], k = 3
输出：2

```

## 解题思路


## 代码
```java
class L0560SubarraySum {

    public int subarraySum(int[] nums, int k) {
        int res = 0, preSum = 0;
        HashMap<Integer, Integer> sumCountMap = new HashMap<>();
        sumCountMap.put(0, 1);
        for (int v : nums) {
            preSum += v;
            Integer count = sumCountMap.get(preSum - k);
            if (count != null) {
                res += count;
            }
            sumCountMap.put(preSum, sumCountMap.getOrDefault(preSum, 0) + 1);
        }
        return res;
    }

}
```

## 复杂度分析

