# 0047. 全排列 II

## 题目
给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

```
示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]

```

## 解题思路


## 代码
```java
class L0047PermuteUnique {

    public List<List<Integer>> permuteUnique(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();
        List<Integer> path = new ArrayList<>();
        boolean[] visit = new boolean[nums.length];
        doPermuteUnique(nums, path, res, visit);
        return res;
    }

    private void doPermuteUnique(int[] nums, List<Integer> path, List<List<Integer>> res, boolean[] visit) {
        if (nums.length == path.size()) {
            res.add(new ArrayList<>(path));
            return;
        }
        for (int i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1] && !visit[i - 1]) {
                continue;
            }
            if (!visit[i]) {
                visit[i] = true;
                path.add(nums[i]);
                doPermuteUnique(nums, path, res, visit);
                path.remove(path.size() - 1);
                visit[i] = false;
            }
        }
    }

}
```

## 复杂度分析

