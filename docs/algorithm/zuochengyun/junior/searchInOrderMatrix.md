# searchInOrderMatrix

## 题目
searchInOrderMatrix

## 代码
```java
public class SearchInOrderMatrix {

    public boolean searchInOrderMatrix(int[][] m, int v) {
        int r = 0, c = m[0].length - 1;
        while (r < m.length && c >= 0) {
            if (m[r][c] == v) {
                return true;
            } else if (m[r][c] < v) {
                r++;
            } else {
                c--;
            }
        }
        return false;
    }
}
```

## 复杂度分析
