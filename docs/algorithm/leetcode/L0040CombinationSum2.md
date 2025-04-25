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
        Arrays.sort(candidates);
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> path = new ArrayList<>();
        boolean[] visit = new boolean[candidates.length];
        combinationSum2(candidates, target, path, ans, 0, visit);
        return ans;
    }

    private void combinationSum2(int[] a, int t, List<Integer> path, List<List<Integer>> ret, int i, boolean[] visit) {
        if (t == 0) {
            ret.add(new ArrayList<>(path));
            return;
        }
        if (i == a.length) {
            return;
        }
        combinationSum2(a, t, path, ret, i + 1, visit);
        if (t >= a[i]) {
            if (i > 0 && a[i] == a[i - 1] && !visit[i - 1]) {
                return;
            }
            path.add(a[i]);
            visit[i] = true;
            combinationSum2(a, t - a[i], path, ret, i + 1, visit);
            path.remove(path.size() - 1);
            visit[i] = false;
        }
    }

}
```

## 复杂度分析

