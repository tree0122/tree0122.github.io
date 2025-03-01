# 0179. 最大数

## 题目
给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。

```
示例 1：

输入：nums = [10,2]
输出："210"


示例 2：

输入：nums = [3,30,34,5,9]
输出："9534330"
```

## 解题思路


## 代码
```java
public class L0179LargestNumber {

    public String largestNumber(int[] nums) {
        StringBuilder sb = new StringBuilder();
        PriorityQueue<Integer> q = new PriorityQueue<>((i1, i2) -> (i2 + "" + i1).compareTo(i1 + "" + i2));
        for (int v : nums) {
            q.offer(v);
        }
        while (!q.isEmpty()) {
            sb.append(q.poll());
        }
        return sb.toString();
    }

}
```

## 复杂度分析

