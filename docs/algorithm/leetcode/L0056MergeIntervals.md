# 0056. 合并区间

## 题目
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

```
示例 1：

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].


示例 2：

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

```

## 解题思路


## 代码
```java
public class L0056MergeIntervals {

    public int[][] mergeIntervals(int[][] intervals) {
        ArrayList<int[]> list = new ArrayList<>();
        PriorityQueue<Integer> q = new PriorityQueue<>(Comparator.comparingInt(i -> intervals[i][0]));
        for (int i = 0; i < intervals.length; i++) {
            q.offer(i);
        }
        int[] cur = intervals[q.poll()], pre = {cur[0], cur[1]};
        list.add(pre);
        while (!q.isEmpty()) {
            cur = intervals[q.poll()];
            if (cur[0] <= pre[1]) {
                pre[1] = cur[1];
            }else {
                int[] newIv = {cur[0], cur[1]};
                list.add(newIv);
                pre = newIv;
            }
        }
        int[][] res = new int[list.size()][2];
        for (int i = 0; i < res.length; i++) {
            res[i] = list.get(i);
        }
        return res;
    }

}
```

## 复杂度分析

