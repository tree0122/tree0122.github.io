# 0042. 接雨水

## 题目
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水


```
示例 1:

输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。


示例 2:

输入：height = [4,2,0,3,2,5]
输出：9


```

## 解题思路


## 代码
```java
public class L0042Trap {
        
    public int trap(int[] height) {
        int res = 0;
        int[] leftMax = new int[height.length];
        int[] rightMax = new int[height.length];
        leftMax[0] = height[0];
        rightMax[height.length - 1] = height[height.length - 1];
        for (int i = 1, j = height.length - 2; i < height.length; i++) {
            leftMax[i] = Math.max(leftMax[i - 1], height[i]);
            rightMax[j] = Math.max(rightMax[j + 1], height[j--]);
        }
        for (int i = 0; i < height.length; i++) {
            res += Math.min(leftMax[i], rightMax[i]) - height[i];
        }
        return res;
    }

    public int trapBest(int[] height) {
        int leftMax = height[0], rightMax = height[height.length - 1], left = 0, right = height.length - 1, res = 0;
        while (left <= right) {
            leftMax = Math.max(leftMax, height[left]);
            rightMax = Math.max(rightMax, height[right]);
            if (leftMax <= rightMax) {
                res += (leftMax - height[left++]);
            }else {
                res += (rightMax - height[right--]);
            }
        }
        return res;
    }

    public int trapStack(int[] height) {
        int res = 0;
        LinkedList<Integer> stack = new LinkedList<>();
        for (int i = 0; i < height.length; i++) {
            while (!stack.isEmpty() && height[stack.peek()] < height[i]) {
                Integer cur = stack.pop();
                int leftMax = stack.isEmpty() ? i - 1 : stack.peek();
                res += (i - leftMax - 1) *(Math.min(height[i], height[leftMax]) - height[cur]);
            }
            stack.push(i);
        }
        return res;
    }
    
}
```

## 复杂度分析

