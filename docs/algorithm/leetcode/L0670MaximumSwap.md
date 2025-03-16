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
        int ascIdx = -1, maxIdx = 0, i = 0;
        while (i < sb.length() && ascIdx == - 1) {
            if (i + 1 < sb.length() && sb.charAt(i) < sb.charAt(i + 1)) {
                ascIdx = i;
            }
            i++;
        }
        if (ascIdx == -1) {
            return num;
        }
        while (i < sb.length()) {
            if (sb.charAt(i) > sb.charAt(maxIdx)) {
                maxIdx = i;
            }
            i++;
        }
        char c = sb.charAt(ascIdx);
        sb.setCharAt(ascIdx, sb.charAt(maxIdx));
        sb.setCharAt(maxIdx, c);
        return Integer.parseInt(sb.toString());
    }

}
```

## 复杂度分析

