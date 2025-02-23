# cow

## 题目
一只母牛每年生一只母牛, 新出生的母牛三年后也能每年生一只母牛.假设牛不会死, N年后一共有多少只牛

f(n) = f(n-1) + f(n-3)

## 代码
```java
public class Cow {

    public int cow(int n) {
        if (n < 4) {
            return n >= 0 ? 1 : 0;
        }
//        return cow(n - 1) + cow(n - 3);
        int t = 1;
        for (int i = 4, a = 1, b = 1, c = 1; i <= n; i++) {
            t = a + c;
            a = b;
            b = c;
            c = t;
        }
        return t;
    }


}
```

## 复杂度分析
