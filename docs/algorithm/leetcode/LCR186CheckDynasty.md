# LCR 186. 文物朝代判断

## 题目
展览馆展出来自 13 个朝代的文物，每排展柜展出 5 个文物。某排文物的摆放情况记录于数组 places，其中 places[i] 表示处于第 i 位文物的所属朝代编号。其中，编号为 0 的朝代表示未知朝代。请判断并返回这排文物的所属朝代编号是否能够视为连续的五个朝代（如遇未知朝代可算作连续情况）。


```
示例 1：

输入：places = [0, 6, 9, 0, 7]
输出：True
 

示例 2：

输入：places = [7, 8, 9, 10, 11]
输出：True


```

## 解题思路


## 代码
```java
public class LCR186CheckDynasty {

    public boolean checkDynasty(int[] nums) {
        int max = 0, min = Integer.MAX_VALUE;
        HashSet<Integer> set = new HashSet<>();
        for (int v : nums) {
            if (v == 0) {
                continue;
            }
            if (!set.add(v)) {
                return false;
            }
            max = Math.max(max, v);
            min = Math.min(min, v);
        }
        return max - min <= nums.length;
    }
    
}
```

## 复杂度分析

