# 0078. 子集

## 题目
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。


```
示例 1：

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

```

## 解题思路


## 代码
```java
class L0078Subsets {

    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> path = new ArrayList<>();
        doSubsets(nums, 0, path, ans);
        return ans;
    }

    private void doSubsets(int[] nums, int i, List<Integer> path, List<List<Integer>> ans) {
        if (i == nums.length) {
            ans.add(new ArrayList<>(path));
            return;
        }
        path.add(nums[i]);
        doSubsets(nums, i + 1, path, ans);
        path.remove(path.size() - 1);
        doSubsets(nums, i + 1, path, ans);
    }

}
```

## 复杂度分析

