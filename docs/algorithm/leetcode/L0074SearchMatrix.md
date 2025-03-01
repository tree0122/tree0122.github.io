# 0074. 搜索二维矩阵

## 题目
给你一个满足下述两条属性的 m x n 整数矩阵：

每行中的整数从左到右按非严格递增顺序排列。
每行的第一个整数大于前一行的最后一个整数。
给你一个整数 target ，如果 target 在矩阵中，返回 true ；否则，返回 false 

```
示例 1：

输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true


示例 2：

输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
输出：false
```

## 解题思路


## 代码
```java
public class L0074SearchMatrix {
        
    public boolean searchMatrix(int[][] matrix, int target) {
        int top = 0, down = matrix.length - 1;
        while (top < down) {
            int mid = (top + down + 1) / 2;
            if (matrix[mid][0] <= target) {
                top = mid;
            } else {
                down = mid - 1;
            }
        }
        if (matrix[top][0] == target) {
            return true;
        }
        int left = 0, right = matrix[0].length - 1;
        while (left < right) {
            int mid = (left + right + 1) / 2;
            if (matrix[top][mid] <= target) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        return matrix[top][left] == target;
    }
    
}
```

## 复杂度分析

