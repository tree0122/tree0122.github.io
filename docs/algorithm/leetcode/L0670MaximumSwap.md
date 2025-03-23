# 0670. 最大交换

## 题目
给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。


```
示例 1 :

输入: 2736
输出: 7236
解释: 交换数字2和数字7。


示例 2 :

输入: 9973
输出: 9973
解释: 不需要交换。


```

## 解题思路
- 每一位数字应该不小于所有排它后面的数字，否则找最大的且排最后面的数字与之交换


## 代码
```java
class L0670MaximumSwap {

    // 每一位数字应该不小于所有排它后面的数字，否则找最大的且排最后面的数字与之交换
     public int maximumSwap(int num) {
        StringBuilder sb = new StringBuilder().append(num);
        int minIdx = 0, // minIdx为num[0,i]中单调递降中最小的
                j = sb.length() - 1;
        while (minIdx + 1 <= j && sb.charAt(minIdx) >= sb.charAt(minIdx + 1)) {
            minIdx++;
        }
        if (minIdx == j) {
            return num;
        }
        int maxIdx = minIdx + 1; // maxIdx为num(minIdx, j]中最大数字
        while (j > minIdx) {
            if (sb.charAt(j) > sb.charAt(maxIdx)) {
                maxIdx = j;
            }
            j--;
        }
        char c = sb.charAt(minIdx);
        sb.setCharAt(minIdx, sb.charAt(maxIdx));
        sb.setCharAt(maxIdx, c);
        return Integer.parseInt(sb.toString());
    }

}
```

## 复杂度分析

