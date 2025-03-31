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
        int n = nums.length, ans = n + 1;
        int[] preSum = new int[n + 1];
        LinkedList<Integer> q = new LinkedList<>();
        for (int i = 0; i < n; i++) { // preSum[i], 是nums[0,i)的累加和
            preSum[i + 1] = preSum[i] + nums[i];
        }
        for (int i = 0; i < preSum.length; i++) {
            int curSum = preSum[i];
            while (!q.isEmpty() && (curSum - preSum[q.peekFirst()] >= k)) { // nums[q.first, i)的累加和是否 >= k
                ans = Math.min(ans, i - q.pollFirst());
            }
            // preSum[q.last]>=preSum[i]，表示若有满足要求后续索引xIdx，即nums[q.last, xIdx)的累加和 >=k,
            // 那么num[i, xIdx)的累加和必 >=k 且数组长度更多。所以要剔除q.last
            while (!q.isEmpty() && preSum[q.peekLast()] >= curSum) {
                q.pollLast();
            }
            q.offer(i); // q最终成为一个递增队列
        }
        return ans == n + 1 ? -1 : ans;
    }
    
}
```

## 复杂度分析

