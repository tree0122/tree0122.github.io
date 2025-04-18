# 0287. 寻找重复数

## 题目
给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。

假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。

你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。


```
示例 1：

输入：nums = [1,3,4,2,2]
输出：2


示例 2：

输入：nums = [3,1,3,4,2]
输出：3


示例 3 :

输入：nums = [3,3,3,3,3]
输出：3
```

## 解题思路


## 代码
```java
public class L0287FindDuplicate {

    public int findDuplicate3(int[] nums) {
        int res = 0;
        for (int i = 0; i < nums.length; i++) {
            res ^= i; // [1,n]
            res ^= nums[i];
        }
        return res;
    }
        
    public int findDuplicate(int[] nums) {
        int res = 0;
        HashSet<Integer> set = new HashSet<>();
        for (int v : nums) {
            if (!set.add(v)) {
                res = v;
                break;
            }
        }
        return res;
    }

    public int findDuplicateLoopNode(int[] nums) {
        int slow = nums[0], fast = nums[nums[0]];
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[nums[fast]];
        }
        slow = nums[0];
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }
        return slow;
    }
    
}
```

## 复杂度分析

