# 0015. 三数之和

## 题目
给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

```
示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。


示例 2：

输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
```

## 解题思路


## 代码
```java
public class L0015ThreeSum {
        
    public List<List<Integer>> threeSum(int[] nums) {
        // quick sort
        quickSort(nums, 0, nums.length - 1);
        ArrayList<List<Integer>> ans = new ArrayList<>();
        for (int i = 0; i < nums.length; i++) {
            if (i != 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            int left = i + 1, right = nums.length - 1;
            while (left < right) {
                while (left < right && left > i + 1 && nums[left] == nums[left - 1]) {
                    left++;
                }
                while (left < right && right < nums.length - 1 && nums[right] == nums[right + 1]) {
                    right--;
                }
                if(left == right) {
                    break;
                }
                if (nums[i] + nums[left] + nums[right] < 0) {
                    left++;
                } else if (nums[i] + nums[left] + nums[right] > 0) {
                    right--;
                } else {
                    ArrayList<Integer> list = new ArrayList<>();
                    list.add(nums[i]);
                    list.add(nums[left++]);
                    list.add(nums[right--]);
                    ans.add(list);
                }
            }
        }

        return ans;
    }

    private void quickSort(int[] a, int i, int j) {
        if (i >= j) {
            return;
        }
        int p = (int) (i + (j - i + 1) * Math.random()), es = i, ee = j, k = i;
        while (k <= ee) {
            if (a[k] < a[p]) {
                swap(a, k++, es++);
            } else if (a[k] > a[p]) {
                swap(a, k, ee--);
            } else {
                k++;
            }
        }
        quickSort(a, i, es - 1);
        quickSort(a, ee + 1, j);
    }
    
}
```

## 复杂度分析

