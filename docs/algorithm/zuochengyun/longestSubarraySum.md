# 累加和为aim的最长子数组

## 题目
给定一个数组arr,全是正数; 一个整数aim,求累加和为aim的最长子数组

## 代码
```java
public class longestSubarraySum {

    public int maxLenSubarraySum(int[] positiveArray, int t) {
        int len = 0;
        for (int i = 0, j = 0, sum = 0; j < positiveArray.length; ) {
            if (sum < t) {
                sum += positiveArray[j++];
            } else if (sum > t) {
                sum -= positiveArray[i--];
            } else {
                len = Math.max(len, j - i + 1);
                sum += positiveArray[j++];
            }
        }
        return len;
    }

    public int maxLen(int[] a, int t) {
        int sum = 0, len = 0;
        HashMap<Integer, Integer> sumIdxMap = new HashMap<>();
        sumIdxMap.put(0,  -1);
        for (int i = 0; i < a.length; i++) {
            sum += a[i];
            Integer preIdx = sumIdxMap.get(sum - t);
            if (preIdx != null) {
                len = Math.max(len, i - preIdx);
            }
            if (!sumIdxMap.containsKey(sum)) {
                sumIdxMap.put(sum, i);
            }
        }
        return len;
    }

}
```

## 复杂度分析
