# 1004. 最大连续1的个数 III

## 题目
给定一个二进制数组 nums 和一个整数 k，假设最多可以翻转 k 个 0 ，则返回执行操作后 数组中连续 1 的最大个数 。


```
示例 1：

输入：nums = [1,1,1,0,0,0,1,1,1,1,0], K = 2
输出：6
解释：[1,1,1,0,0,1,1,1,1,1,1]
粗体数字从 0 翻转到 1，最长的子数组长度为 6。


示例 2：

输入：nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
输出：10
解释：[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
粗体数字从 0 翻转到 1，最长的子数组长度为 10。
```

## 解题思路


## 代码
```java
public class L1004LongestOnes {

    public int longestOnes(int[] nums, int k) {
        int left = 0, right = 0, n = nums.length, len = 0;
        while (right < n) {
            if (nums[right++] == 0) {
                k--;
            }
            while (k == 0) {
                if (nums[left++] == 0) {
                    k++;
                }
            }

            len = Math.max(len, right - left);
        }
        return len;
    }
    
}
```

## 复杂度分析

