# 0040. 组合总和 II

## 题目
给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用 一次 。

注意：解集不能包含重复的组合。 



```
示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]


示例 2:

输入: candidates = [2,5,2,1,2], target = 5,
输出:
[
[1,2,2],
[5]
]

```

## 解题思路


## 代码
```java
class L0040CombinationSum2 {

    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> path = new ArrayList<>();
        Arrays.sort(candidates);
        doCombinationSum2(candidates, target, 0, path, ans);
        return ans;
    }

    private void doCombinationSum2(int[] candidates, int target, int i, List<Integer> path, List<List<Integer>> ans) {
        if (i == candidates.length) {
            return;
        }
        if (target == 0) {
            ans.add(new ArrayList<>(path));
            return;
        }
        doCombinationSum2(candidates, target, i + 1, path, ans);
        if (target >= candidates[i]) {
            if (i > 0 && candidates[i] == candidates[i - 1]) {
                return;
            }
            path.add(candidates[i]);
            doCombinationSum2(candidates, target - candidates[i], i + 1, path, ans);
            path.remove(path.size() - 1);
        }
    }

}
```

## 复杂度分析

