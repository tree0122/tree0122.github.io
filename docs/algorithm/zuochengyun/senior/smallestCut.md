# 回文最小分割数

## 题目
给定两个字符串str,请把str切割,保证每一部分都是回文串,求最小的分割数。
  
举例:
```
str="AA12321BB",切成"AA","12321","BB",每一部分都是回文串,分出3个部分,所以返回3
```


## 代码
```java
public class SmallestCut {

    public int smallestCut(String s) {
        boolean[][] d = new boolean[s.length()][s.length()];
        for (int i = 0; i < d.length; i++) {
            for (int j = i; j < d[0].length; j++) {
                d[i][j] = (s.charAt(i) == s.charAt(j)) && (d[i + 1][j - 1] || i + 1 > j - 1);
            }
        }
        int[] c = new int[s.length() + 1];
        for (int i = c.length - 2; i >= 0; i--) {
            c[i] = c.length;
            for (int j = i; j < s.length(); j++) {
                if (d[i][j] && c[j + 1] + 1 < c[i]) {
                    c[i] = c[j + 1] + 1;
                }
            }
        }
        return c[0];
    }

}
```

## 复杂度分析
