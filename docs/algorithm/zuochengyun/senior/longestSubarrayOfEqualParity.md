# 奇数、偶数个数相等的最长子数组

## 题目
子数组奇数,偶数个数相等的最长子数组

## 代码
```java
public class LongestSubarrayOfEqualParity {

    public int maxLenOfSameOdd(int[] a) {
        int len = 0;
        prepare(a);
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, -1);
        for (int i = 0, sum = 0; i < a.length; i++) {
            sum += a[i];
            Integer pre = map.get(sum);
            if (pre != null) {
                len = Math.max(len, i - pre);
            }else {
                map.put(sum, i);
            }
        }
        return len;
    }

    private void prepare(int[] a) {
        for (int i = 0; i < a.length; i++) {
            a[i] = (a[i]^1) == 1 ? 1 : -1;
        }
    }

}
```

## 复杂度分析
