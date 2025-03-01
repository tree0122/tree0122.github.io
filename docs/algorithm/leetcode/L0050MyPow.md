# 0050. Pow(x, n)

## 题目
实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，xn ）。


```
示例 1：

输入：x = 2.00000, n = 10
输出：1024.00000


示例 2：

输入：x = 2.10000, n = 3
输出：9.26100


示例 3：

输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25
```

## 解题思路


## 代码
```java
public class L0050MyPow {
        
    public double myPow(double x, int n) {
        if (x == 0) {
            return x;
        }
        int res = 1;
        if (n < 0) {
            n = -n;
            x = 1 / x;
        }
        while (n != 0) {
            if ((n & 1) == 1) { //n为奇数
                res *= x;
            }
            x *= x;
            n /= 2;
        }
        return res;
    }
    
}
```

## 复杂度分析

