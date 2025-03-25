# 0347. 前 K 个高频元素

## 题目
给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

```
示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]


```

## 解题思路


## 代码
```java
public class L0347TopKFrequent {
        
    public int[] topKFrequent(int[] nums, int k) {
        int[] res = new int[k];
        HashMap<Integer, Integer> countMap = new HashMap<>();
        // 小根堆，保持k个元素
        PriorityQueue<Integer> q = new PriorityQueue<>(Comparator.comparingInt(countMap::get));
        for (int v : nums) {
            countMap.put(v, countMap.getOrDefault(v, 0) + 1);
        }
        for (int v : nums) {
            if (q.size() < k) {
                q.offer(v);
            }else if (countMap.get(v) > countMap.get(q.peek())) { // 堆顶元素的数量 < 当前元素的数量
                q.poll();
                q.offer(v);
            }
        }
        for (int i = 0; i < k; i++) {
            res[i] = q.poll();
        }
        return res;
    }
    
}
```

## 复杂度分析

