# LCR139. 调整数组顺序使奇数位于偶数前面

## 题目
教练使用整数数组 actions 记录一系列核心肌群训练项目编号。为增强训练趣味性，需要将所有奇数编号训练项目调整至偶数编号训练项目之前。请将调整后的训练项目编号以 数组 形式返回。


```
示例 1：

输入：actions = [1,2,3,4,5]
输出：[1,3,5,2,4] 
解释：为正确答案之一
```

## 解题思路


## 代码
```java
public class LCR139TrainingPlan {
        
    public int[] trainingPlan(int[] actions) {
        int i = 0, right = actions.length - 1;
        while (i <= right) {
            if ((actions[i] & 1) == 0) { // 偶数
                swap(actions, right--, i);
            } else {
                i++;
            }
        }
        return actions;
    }

    public int[] trainingPlanWithSeq(int[] actions) {
        int slow = 0, fast = 0;// slow表示奇数的末尾，不包括
        while (fast < actions.length) {
            if ((actions[fast] ^ 1) == 1) {
                swap(actions, slow++, fast++);
            }else {
                fast++;
            }
        }
        return actions;
    }
    
}
```

## 复杂度分析

