# 0503. 下一个更大元素 II

## 题目
给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），返回 nums 中每个元素的 下一个更大元素 。

数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1 。



```
示例 1:

输入: nums = [1,2,1]
输出: [2,-1,2]
解释: 第一个 1 的下一个更大的数是 2；
数字 2 找不到下一个更大的数； 
第二个 1 的下一个最大的数需要循环搜索，结果也是 2。


示例 2:

输入: nums = [1,2,3,4,3]
输出: [2,3,4,-1,4]


```

## 解题思路


## 代码
```java
public class L0503NextGreaterElements {
        
    public int[] nextGreaterElementsBetter(int[] nums) {
        int n = nums.length;
        int[] res = new int[n];
        for (int i = 0; i < res.length; i++) {
            res[i] = -1;
        }
        LinkedList<Integer> stack = new LinkedList<>();
        for (int i = 0; i < 2 * n - 1; i++) {
            while (!stack.isEmpty() && nums[stack.peek()] < nums[i % n]) {
                res[stack.pop()] = nums[i % n];
            }
            stack.push(i % n);
        }
        return res;
    }

    public int[] nextGreaterElements(int[] nums) {
        int[] res = new int[nums.length];
        LinkedList<List<Integer>> stack = new LinkedList<>();
        for (int i = 0; i < nums.length; i++) {
            while (!stack.isEmpty() && nums[stack.peek().get(0)] < nums[i]) {
                for (Integer dx : stack.pop()) {
                    res[dx] = nums[i];
                }
            }
            if (stack.isEmpty() || nums[stack.peek().get(0)] != nums[i]) {
                List<Integer> list = new ArrayList<>();
                list.add(i);
                stack.push(list);
            } else {
                stack.peek().add(i);
            }
        }
        while (stack.size() > 1) {
            List<Integer> i = stack.pop();
            for (Integer dx : i) {
                res[dx] = nums[stack.peek().get(0)];
            }
        }
        for (Integer dx : stack.pop()) {
            res[dx] = -1;
        }
        return res;
    }
    
}
```

## 复杂度分析

