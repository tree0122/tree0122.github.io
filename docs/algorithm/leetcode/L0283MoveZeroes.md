# 0283. 移动零

## 题目
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

```
示例 1:

输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]

```

## 解题思路



## 代码
```java
public class L0283MoveZeroes {

    public void moveZeroes(int[] a) {
        int i = 0, j = 0;
        while (j < a.length) {
            if (a[j] != 0) {
                swap(a, i++, j++);
            }else {
                j++;
            }
        }
    }

}
```

## 复杂度分析

