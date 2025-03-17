# 0300. 最长递增子序列

## 题目
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

```
示例 1：

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。


示例 2：

输入：nums = [0,1,0,3,2,3]
输出：4
```

## 解题思路


## 代码
```java
class L0300lengthOfLIS {

   public int lengthOfLIS(int[] nums) {
        int len = 0;
        int[] d = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            d[i] = 1;
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    d[i] = Math.max(d[i], d[j] + 1);
                }
            }
            len = Math.max(len, d[i]);
        }
        return len;
    }

    //考虑一个简单的贪心，如果我们要使上升子序列尽可能的长，则我们需要让序列上升得尽可能慢，因此我们希望每次在上升子序列最后加上的那个数尽可能的小
    public int lengthOfLISBetter(int[] nums) {
        int len = 1;
        int[] d = new int[nums.length + 1]; // 维持一个递增的数组，其最后有效索引即为 所求长度
        d[len] = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > d[len]) { // nums[i]直接加入到 d 数组末尾，并更新 len=len+1；
                d[++len] = nums[i];
            } else if (nums[i] < d[len]) { // 在 d 数组中二分查找，找到第一个（从左到右）比 nums[i] 大的数 d[k] ，并更新 d[k]=nums[i]
                int l = 1, r = len;
                while (l < r) {
                    int m = (l + r) / 2;
                    if (d[m] < nums[i]) {
                        l = m + 1;
                    } else {
                        r = m;
                    }
                }
                d[l] = nums[i];
            }
        }
        return len;
    }

}
```

## 复杂度分析

