# 0128. 最长连续序列

## 题目
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。




```
示例 1：

输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。


示例 2：

输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9

```

## 解题思路


## 代码
```java
public class L0128LongestConsecutive {
        
    public int longestConsecutive(int[] nums) {
        int res = 0;
        HashMap<Integer, Integer> headMap = new HashMap<>();
        HashMap<Integer, Integer> hsMap = new HashMap<>();
        for (int v : nums) {
            headMap.put(v, v);
            hsMap.put(v, 1);
        }
        for (Map.Entry<Integer, Integer> entry : headMap.entrySet()) {
            Integer n = entry.getKey();
            Integer head = headMap.get(n - 1);
            if (head != null) {
                headMap.put(n, head);
                hsMap.put(n - 1, hsMap.get(n - 1) + hsMap.remove(n));
            }
        }
        for (Map.Entry<Integer, Integer> entry : hsMap.entrySet()) {
            res = Math.max(res, entry.getValue());
        }
        return res;
    }

    public int longestConsecutiveBySet(int[] nums) {
        int res = 0;
        HashSet<Integer> set = new HashSet<>();
        for (int v : nums) {
            set.add(v);
        }
        for (int v : nums) {
            if (!set.contains(v - 1)) { // 序列头（小）
                int cn = 1;
                while (set.contains(v + cn)) {
                    cn++;
                }
                res = Math.max(res, cn);
            }
        }
        return res;
    }
    
}
```

## 复杂度分析

