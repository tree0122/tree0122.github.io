# 0004. 寻找两个正序数组的中位数

## 题目
给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

算法的时间复杂度应该为 O(log (m+n))

```
示例 1：

输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2


示例 2：

输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
```

## 解题思路


## 代码
```java
public class L0004FindMedianSortedArrays {
        
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int left = (nums1.length + nums2.length + 1) / 2;
        int right = (nums1.length + nums2.length + 2) / 2;
        return (getKth(nums1, 0, nums1.length - 1, nums2, 0, nums2.length - 1, left)
                + getKth(nums1, 0, nums1.length - 1, nums2, 0, nums2.length - 1, right)) / 2.0;
    }

    private double getKth(int[] a, int i1, int j1, int[] b, int i2, int j2, int k) {
        int len1 = j1 - i1 + 1;
        int len2 = j2 - i2 + 1;
        if (len1 > len2) {
            return getKth(b, i2, j2, a, i1, j1, k);
        }
        if (len1 == 0) {
            return b[i2 + k - 1];
        }
        if (k == 1) {
            return Math.min(a[i1], b[i2]);
        }
        int m1 = i1 + Math.min(len1, k / 2) - 1;
        int m2 = i2 + Math.min(len2, k / 2) - 1;
        if (a[m1] < b[m2]) {
            return getKth(a, m1 + 1, j1, b, i2, j2, k - (m1 - i1 + 1));
        } else {
            return getKth(a, i1, j1, b, m2 + 1, j2, k - (m2 - i2 + 1));
        }
    }

    public double better(int[] nums1, int[] nums2) {
        if (nums1.length > nums2.length) {
            return better(nums2, nums1);
        }
        int m = nums1.length, n = nums2.length, left = 0, right = m;
        while (left <= right) {
            int i = (left + right) / 2; // nums1中的位置
            int j = (m + n + 1) / 2 - i; // nums2中的位置
            if (i != 0 && j != n && nums1[i - 1] > nums2[j]) { // i 需要增大
                right = i - 1;
            } else if (j != 0 && i != m && nums1[i] < nums2[j - 1]) { // i 需要减小
                left = i + 1;
            } else {// max(nums1[i-1], nums2[j-1]) <= min(nums1[i], nums2[j])
                int maxLeft = 0;
                if (i == 0) {
                    maxLeft = nums2[j - 1];
                } else if (j == 0) {
                    maxLeft = nums1[i - 1];
                } else {
                    maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
                }
                if ((m + n) % 2 == 1) {
                    return maxLeft;
                }
                int minRight = 0;
                if (i == m) {
                    minRight = nums2[j];
                } else if (j == n) {
                    minRight = nums1[i];
                } else {
                    minRight = Math.min(nums1[i], nums2[j]);
                }
                return (maxLeft + minRight) / 2.0;
            }
        }
        return 0;
    }
    
}
```

## 复杂度分析

