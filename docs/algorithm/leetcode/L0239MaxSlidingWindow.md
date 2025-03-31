# 0239. 滑动窗口最大值

## 题目
给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回 滑动窗口中的最大值 。


```
示例 1：

输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
```

## 解题思路


## 代码
```java
public class L0239MaxSlidingWindow {
        
    public int[] maxSlidingWindow(int[] nums, int k) {
        int[] res = new int[nums.length - k + 1];
        LinkedList<Integer> q = new LinkedList<>(); // 递减队列
        int i = 0, right = 0;
        while (right < nums.length) {
            while (!q.isEmpty() && nums[q.peekLast()] <= nums[right]) { // 队列末尾对应值 不大于 当前值时，剔除末尾
                q.pollLast();
            }
            q.offer(right++);
            if (right - k > q.peekFirst()) { // 队列头，在窗口left左边，剔除队列头
                q.pollFirst();
            }
            if (right - k >= 0) { // 队列处理超过k个nums元素时，nums[R-k, R)
                res[i++] = nums[q.peekFirst()];
            }
        }
        return res;
    }
    
}
```

## 复杂度分析

