# 0673. 最长递增子序列的个数

## 题目
给定一个未排序的整数数组 nums ， 返回最长递增子序列的个数 。

注意 这个数列必须是 严格 递增的。



```
示例 1:

输入: [1,3,5,4,7]
输出: 2
解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。


示例 2:

输入: [2,2,2,2,2]
输出: 5
解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。

```

## 解题思路



## 代码
```java
class L0673FindNumberOfLIS {

    public int findNumberOfLIS(int[] nums) {
        int res = 0, len = 0;
        int[] d = new int[nums.length]; // d[i]：nums[0,i]的最长子序列长度
        int[] count = new int[nums.length]; // count[i]：长度为d[i]的子序列个数
        count[0] = 1;
        for (int i = 0; i < nums.length; i++) {
            d[i] = 1;
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    if (d[i] < d[j] + 1) {
                        d[i] = d[j] + 1;
                        count[i] = count[j];
                        len = Math.max(len, d[i]);
                    } else if (d[i] == d[j] + 1) {
                        count[i] += count[j];
                    }
                }
            }
        }
        for (int i = 0; i < d.length; i++) {
            if (d[i] == len) {
                res += count[i];
            }
        }
        return res;
    }

}
```

## 复杂度分析

