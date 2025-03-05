# 0739. 每日温度

## 题目
给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。


```示例 1:

输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]


示例 2:

输入: temperatures = [30,40,50,60]
输出: [1,1,1,0]

```

## 解题思路


## 代码
```java
public class L0739DailyTemperatures {
        
    public int[] dailyTemperatures(int[] temperatures) {
        int[] ans = new int[temperatures.length];
        LinkedList<Integer> iStack = new LinkedList<>();
        for (int i = 0; i < temperatures.length; i++) {
            while (!iStack.isEmpty() && temperatures[iStack.peek()] < temperatures[i]) {
                Integer dx = iStack.pop();
                ans[dx] = i - dx;
            }
            iStack.push(i);
        }
        return ans;
    }
    
}
```

## 复杂度分析

