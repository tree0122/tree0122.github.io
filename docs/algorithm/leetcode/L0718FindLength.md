# 0718. 最长重复子数组

## 题目
给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。


```
示例 1：

输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
输出：3
解释：长度最长的公共子数组是 [3,2,1] 。


示例 2：

输入：nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
输出：5
```

## 解题思路


## 代码
```java
public class L0718FindLength {
        
    public int findLength(int[] nums1, int[] nums2) {
        int len = 0;
        // d[i][j]表示nums1[0...i)和nums2[0...j)以i-1、j-1为最后比较的符合要求最大长度
        int[][] d = new int[nums1.length + 1][nums2.length + 1];
        for (int i = 1; i < d.length; i++) {
            for (int j = 1; j < d[0].length; j++) {
                if (nums1[i - 1] == nums2[j - 1]) {
                    d[i][j] = d[i - 1][j - 1] + 1;
                    len = Math.max(len, d[i][j]);
                }
            }
        }
        return len;
    }
    
}
```

## 复杂度分析

