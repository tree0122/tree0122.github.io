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

    public double findMedianSortedArraysBetter(int[] nums1, int[] nums2) {
        if (nums1.length > nums2.length) {
            return findMedianSortedArraysBetter(nums2, nums1);
        }
        int left = 0, right = nums1.length, kth = (nums1.length + nums2.length + 1) / 2, m2 = 0, m1 = 0;
        boolean even = (nums1.length + nums2.length) % 2 == 1;
        while (left < right) {
            m1 = (left + right) / 2;
            m2 = kth - m1;
            if (nums1[m1] < nums2[m2 - 1]) { // nums1[m1]是kth之前的元素，故剔除nums1[left,m1]
                left = m1 + 1;
            } else { // // nums1[m1]是kth之后的元素， 故剔除num1(m1,right]
                right = m1;
            }
        }
        m1 = left;
        m2 = kth - m1;
        int c1 = 0;
        if (m1 == 0) {
            c1 = nums2[m2 - 1];
        } else if (m2 == 0) {
            c1 = nums1[m1 - 1];
        } else {
            c1 = Math.max(nums1[m1 - 1], nums2[m2 - 1]);
        }
        if (even) {
            return c1;
        }

        int c2 = 0;
        if (m1 == nums1.length) {
            c2 = nums2[m2];
        } else if (m2 == nums2.length) {
            c2 = nums1[m1];
        } else {
            c2 = Math.min(nums1[m1], nums2[m2]);
        }
        return (c1 + c2) / 2.0;
    }
    
}
```

## 复杂度分析

