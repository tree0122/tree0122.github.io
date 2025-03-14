# 0189. 轮转数组

## 题目
给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

```
示例 1:

输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]
示例 2:

输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释: 
向右轮转 1 步: [99,-1,-100,3]
向右轮转 2 步: [3,99,-1,-100]
```

## 解题思路
我们可以先把整个数组翻转一下，这样后半段元素就到了前边，前半段元素就到了后边，只不过元素顺序是反着的。我们再从k 位置分隔开，将 [0...k−1] 区间上的元素和 [k...n−1] 区间上的元素再翻转一下，就得到了最终结果。

**具体步骤**：

1. 将数组 [0,n−1] 位置上的元素全部翻转。
2. 将数组 [0,k−1] 位置上的元素进行翻转。
3. 将数组 [k,n−1] 位置上的元素进行翻转


## 代码
```java
public class Rotate {

    public void rotate(int[] a, int k) {
        k = k % a.length;
        reverse(a, 0, a.length - 1);
        reverse(a, 0, k - 1);
        reverse(a, k, a.length - 1);
    }

    private void reverse(int[] a, int i, int j) {
        while (i < j) {
            swap(a, i++, j--);
        }
    }

    private void swap(int[] a, int i, int j) {
        a[i] = a[i] ^ a[j];
        a[j] = a[i] ^ a[j];
        a[i] = a[i] ^ a[j];
    }

}
```

## 复杂度分析

