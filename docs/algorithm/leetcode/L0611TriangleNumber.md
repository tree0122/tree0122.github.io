# 0611. 有效三角形的个数

## 题目
给定一个包含非负整数的数组 nums ，返回其中可以组成三角形三条边的三元组个数。

```
示例 1:

输入: nums = [2,2,3,4]
输出: 3
解释:有效的组合是: 
2,3,4 (使用第一个 2)
2,3,4 (使用第二个 2)
2,2,3


示例 2:

输入: nums = [4,2,3,4]
输出: 4
```

## 解题思路


## 代码
```java
public class L0611TriangleNumber {
        
    public int triangleNumber(int[] nums) {
        int res = 0;
        // heap sort
        for (int i = (nums.length - 2) / 2; i >= 0; i--) {
            down(nums, i, nums.length);
        }
        for (int i = nums.length - 1; i >= 0; i--) {
            swap(nums, 0, i);
            down(nums, 0, i);
        }
        for (int i = 2; i < nums.length; i++) {
            int left = 0, right = i - 1;
            while (left < right) {
                if (nums[left] + nums[right] <= nums[i]) {
                    left++;
                } else {
                    res += right - left;
                    right--;
                }
            }
        }
        return res;
    }

    private void down(int[] a, int p, int len) {
        int child = 2 * p + 1;
        while (child < len) {
            if (child + 1 < len && a[child] < a[child + 1]) {
                child++;
            }
            if (a[child] <= a[p]) {
                break;
            }
            swap(a, child, p);
            p = child;
            child = 2 * p + 1;
        }
    }
    
}
```

## 复杂度分析

