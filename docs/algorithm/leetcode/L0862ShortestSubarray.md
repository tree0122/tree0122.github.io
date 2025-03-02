# 0862. 和至少为 K 的最短子数组

## 题目
给你一个整数数组 nums 和一个整数 k ，找出 nums 中和至少为 k 的 最短非空子数组 ，并返回该子数组的长度。如果不存在这样的 子数组 ，返回 -1 。

子数组 是数组中 连续 的一部分。


```
示例 1：

输入：nums = [1], k = 1
输出：1


示例 2：

输入：nums = [1,2], k = 4
输出：-1


示例 3：

输入：nums = [2,-1,2], k = 3
输出：3
```

## 解题思路


## 代码
```java
public class L0862ShortestSubarray {
        
    public int shortestSubarray(int[] nums, int k) {
        int minLen = nums.length + 1, sum = 0, left = 0, right = 0;
        int[][] h = new int[nums.length][2];
        h[h.length - 1][0] = nums[h.length - 1];
        h[h.length - 1][1] = h.length - 1;
        for (int i = nums.length - 2; i >= 0; i--) {
            if (h[i + 1][0] > 0) {
                h[i][0] = nums[i] + h[i + 1][0];
                h[i][1] = h[i + 1][1];
            } else {
                h[i][0] = nums[i];
                h[i][1] = i;
            }
        }
        while (right < nums.length) {
            sum += h[right][0];
            right = h[right][1] + 1;
            while (sum >= k) {
                minLen = Math.min(minLen, right - left);
                sum -= nums[left++];
            }
        }
        return minLen == nums.length + 1 ? -1 : minLen;
    }

    public int shortestSubarrayByWindow(int[] nums, int k) {
        int minLen = nums.length + 1;
        int[] preSum = new int[nums.length + 1];
        for (int i = 0; i < nums.length; i++) {
            preSum[i + 1] = preSum[i] + nums[i];
        }
        LinkedList<Integer> q = new LinkedList<>();
        for (int i = 0; i <= nums.length; i++) {
            int curSum = preSum[i];
            while (!q.isEmpty() && curSum - preSum[q.peekFirst()] >= k) {
                minLen = Math.min(minLen, i - q.pollFirst());
            }
            while (!q.isEmpty() && preSum[q.peekLast()] >= curSum) {
                q.pollLast();
            }
            q.offerLast(i);
        }
        return minLen == nums.length + 1 ? -1 : minLen;
    }
    
}
```

## 复杂度分析

