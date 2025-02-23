# 最低的字典序

## 题目
给定一个字符串类型的数组strs,找到一种拼接方式,使得把所有字 符串拼起来之后形成的字符串具有最低的字典序。

## 代码
```java
public class LowLexi {

    public String lowLexi(String [] sa) {
        StringBuilder sb = new StringBuilder();
        PriorityQueue<String> q = new PriorityQueue<>((i1, i2) -> (i1 + i2).compareTo(i2 + i1));
        for (String s : sa) {
            q.offer(s);
        }
        while (!q.isEmpty()) {
            sb.append(q.poll());
        }
        return sb.toString();
    }

}
```

## 复杂度分析
