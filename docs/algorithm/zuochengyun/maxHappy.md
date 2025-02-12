# maxHappy

## 题目

一个公司的上下节关系是一棵多叉树,这个公司要举办晚会,你作为组织者已经摸清了大家的心理:一个员工的直接上级如果到场,这个员工肯定不会来。每个员工都有一个活跃度的值,决定谁来你会给这个员工发邀请函,怎么让舞会的气氛最活跃?返回最大的活跃值。

举例:
```
给定一个矩阵来表述这种关系
matrix = {
 1,  6
 1,  5
 1,  4
}
这个矩阵的含义是:
matrix[0] = {1 , 6},表示0这个员工的直接上级为1,0这个员工自己的活跃度为6
matrix[1] = {1 , 5},表示1这个员工的直接上级为1(他自己是这个公司的最大boss),1这个员工自己的活跃度为5
matrix[2] = {1 , 4},表示2这个员工的直接上级为1,2这个员工自己的活跃度为4
为了让晚会活跃度最大,应该让1不来,0和2来。最后返回活跃度为10
```


## 代码
```java
public class maxHappy {

    public int maxHappy(Employee boss) {
        int[] d = doHappy(boss);
        return Math.max(d[0], d[1]);
    }

    private int[] doHappy(Employee boss) {
        // a[0]当前员工来时最大happy值，a[1]当前员工不来时所得最大happy值
        int[] a = {boss.happy, 0};
        for (Employee e : boss.list) {
            int[] h = doHappy(e);
            a[0] += h[1];
            a[1] += Math.max(h[0], h[1]);
        }
        return a;
    }

    private class Employee {
        int happy;
        List<Employee> list = new ArrayList<>();
    }

}
```

## 复杂度分析
