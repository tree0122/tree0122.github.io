# 最佳会议室安排

## 题目
一些项目要占用一个会议室宣讲,会议室不能同时容纳两个项目的宣讲. 给你每一个项目开始的时间和结束的时间(给你一个数组,里面 是一个个具体的项目),你来安排宣讲的日程,要求会议室进行 的宣讲的场次最多. 

返回这个最多的宣讲场次

## 代码
```java
public class BestArrange {

    //meetings[i] = {start, end}
    public int bestArrange(int[][] meetings, int begin) {
        int cn = 0;
        PriorityQueue<Integer> q = new PriorityQueue<>(Comparator.comparingInt(i -> meetings[i][1]));
        while (!q.isEmpty()) {
            Integer cur = q.poll();
            if (meetings[cur][0] >= begin) {
                begin = meetings[cur][1];
                cn++;
            }
        }
        return cn;
    }

}
```

## 复杂度分析
