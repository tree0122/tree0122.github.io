# 0169. 多数元素

## 题目
给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

```
示例 1：

输入：nums = [3,2,3]
输出：3


示例 2：

输入：nums = [2,2,1,1,1,2,2]
输出：2
```

## 解题思路
Boyer-Moore

如果我们把众数记为 +1，把其他数记为 −1，将它们全部加起来，显然和大于 0，从结果本身我们可以看出众数比其他数多


## 代码
```java
public class L0169MajorityElement {

    // Boyer-Moore 投票算法
    public int majorityElement(int[] a) {
        int cn = 0, candidate = 0;
        for (int i = 0; i < a.length; i++) {
            if (cn == 0) {
                candidate = a[i];
            }
            cn += (candidate == a[i]) ? 1 : -1;
        }
        return candidate;
    }

    // hashMap
    public int majorityElementMap(int[] a) {
        HashMap<Integer, Integer> map = new HashMap<>();
        int cn = -1, candidate = 0;
        for (int i = 0; i < a.length; i++) {
            Integer lastCount = map.put(a[i], map.getOrDefault(a[i], 0) + 1);
            if (lastCount + 1 > cn) {
                cn = lastCount + 1;
                candidate = a[i];
            }
        }
        return candidate;
    }

}
```

## 复杂度分析

