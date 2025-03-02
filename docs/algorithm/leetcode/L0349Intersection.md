# 0349. 两个数组的交集

## 题目
给定两个数组 nums1 和 nums2 ，返回 它们的 交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

```
示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]


示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的
```

## 解题思路


## 代码
```java
public class L0349Intersection {
        
    public int[] intersection(int[] nums1, int[] nums2) {
        HashSet<Integer> set = new HashSet<>();
        HashSet<Integer> resSet = new HashSet<>();
        for (int v : nums1) {
            set.add(v);
        }
        for (int v : nums2) {
            if (!set.add(v)) {
                resSet.add(v);
            }
        }
        int[] res = new int[resSet.size()];
        int idx = 0;
        for (Integer v : resSet) {
            res[idx++] = v;
        }
        return res;
    }
    
}
```

## 复杂度分析

