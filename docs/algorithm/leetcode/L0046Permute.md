# 0046. 全排列

## 题目
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

```
示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]


示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]

```

## 解题思路


## 代码
```java
class L0046Permute {

    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        Set<Integer> path = new HashSet<>();
        doPermute(nums, path, res);
        return res;
    }

    private void doPermute(int[] nums, Set<Integer> path, List<List<Integer>> res) {
        if (path.size() == nums.length) {
            res.add(new ArrayList<>(path));
            return;
        }
        for (int v : nums) {
            if (path.add(v)) {
                doPermute(nums, path, res);
                path.remove(v);
            }
        }
    }

}
```

## 复杂度分析

