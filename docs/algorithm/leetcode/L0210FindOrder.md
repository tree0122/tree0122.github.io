# 0210. 课程表 II

## 题目
现在你总共有 numCourses 门课需要选，记为 0 到 numCourses - 1。给你一个数组 prerequisites ，其中 prerequisites[i] = [ai, bi] ，表示在选修课程 ai 前 必须 先选修 bi 。

例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示：[0,1] 。
返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 任意一种 就可以了。如果不可能完成所有课程，返回 一个空数组 。


```
示例 1：

输入：numCourses = 2, prerequisites = [[1,0]]
输出：[0,1]
解释：总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1] 。


示例 2：

输入：numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
输出：[0,2,1,3]
解释：总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。
因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。


示例 3：

输入：numCourses = 1, prerequisites = []
输出：[0]

```

## 解题思路


## 代码
```java
class L0210FindOrder {

    public int[] findOrder(int numCourses, int[][] prerequisites) {
        int[] res = new int[numCourses];
        List<List<Integer>> edges = new ArrayList<>(numCourses);
        int[] degree = new int[numCourses];
        for (int i = 0; i < numCourses; i++) {
            edges.add(new ArrayList<>());
        }
        for (int[] v : prerequisites) {
            edges.get(v[1]).add(v[0]);
            degree[v[0]]++;
        }
        LinkedList<Integer> zeroDegreeQ = new LinkedList<>();
        for (int i = 0; i < degree.length; i++) {
            if (degree[i] == 0) {
                zeroDegreeQ.offer(i);
            }
        }
        while (!zeroDegreeQ.isEmpty()) {
            numCourses--;
            int zeroVert = zeroDegreeQ.poll();
            res[res.length - 1 - numCourses] = zeroVert;
            for (Integer tar : edges.get(zeroVert)) {
                degree[tar]--;
                if (degree[tar] == 0) {
                    zeroDegreeQ.offer(tar);
                }
            }
        }
        return numCourses == 0 ? res : new int[0];
    }

}
```

## 复杂度分析

