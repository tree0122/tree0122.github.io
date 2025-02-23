# 最小编辑代价

## 题目
给定两个字符串str1和str2,再给定三个整数ic、dc和rc,分别代表插入、删除和替换一个字符的代价,返回将str1编辑成str2的最小代价。

举例:
```
str1="abc",str2="adc",ic=5,dc=3,rc=2。
从"abc"编辑成"adc",把'b'替换成'd'是代价最小的,所以返回2。

str1="abc",str2="adc",ic=5,dc=3,rc=100。
从"abc"编辑成"adc",先删除'b',然后插入'd'是代价最小的,所以返回8。

str1="abc",str2="abc",ic=5,dc=3,rc=2。
不用编辑了,本来就是一样的字符串,所以返回0。
```


## 代码
```java
public class LeastEditCost {

    public int leastEditCost(String s1, String s2, int ic, int dc, int rc) {
        int[][] d = new int[s1.length() + 1][s2.length() + 1];
        for (int i = 0; i <= s1.length(); i++) {
            d[i][0] = dc * i;
        }
        for (int i = 0; i < s2.length(); i++) {
            d[0][i] = ic * i;
        }
        for (int i = 1; i < d.length; i++) {
            for (int j = 1; j < d[0].length; j++) {
                d[i][j] = d[i - 1][j - 1] + (s1.charAt(i - 1) == s2.charAt(j - 1) ? 0 : rc);
                d[i][j] = Math.min(d[i][j], Math.min(d[i - 1][j] + dc, d[i][j - 1] + ic));
            }
        }
        return d[s1.length()][s2.length()];
    }

}
```

## 复杂度分析
