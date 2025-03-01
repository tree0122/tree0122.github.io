# LCR164. 把数组排成最小的数

## 题目
闯关游戏需要破解一组密码，闯关组给出的有关密码的线索是：

- 一个拥有密码所有元素的非负整数数组 password
- 密码是 password 中所有元素拼接后得到的最小的一个数
  
请编写一个程序返回这个密码。

```
示例 1：

输入：password = [15, 8, 7]
输出："1578"


示例 2：

输入：password = [0, 3, 30, 34, 5, 9]
输出："03033459"
```

## 解题思路


## 代码
```java
public class LCR164MinNumber {
        
    public String minNumber(int[] nums) {
        StringBuilder sb = new StringBuilder();
        PriorityQueue<Integer> q = new PriorityQueue<>((i1, i2) -> (i1 + "" + i2).compareTo(i2 + "" + i1));
        for (int v : nums) {
            q.offer(v);
        }
        while (!q.isEmpty()) {
            sb.append(q.poll());
        }
        return sb.toString();
    }
    
}
```

## 复杂度分析

