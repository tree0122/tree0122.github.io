# IPO

## 题目
```
输入:
参数1, 正数数组costs
参数2, 正数数组profits
参数3, 正数k
参数4, 正数m
costs[i] 表示i号项目的花费,
profits[i] 表示i号项目在扣除花费之后还能挣到的钱(利润)
k 表示你不能并行、只能串行的最多做k个项目
m 表示你初始的资金
说明:你每做完一个项目,马上获得的收益,可以支持你去做下一个 项目.
输出: 你最后获得的最大钱数
```

## 代码
```java
public class MaxCapital {

    public int maxCapital(int[] costs, int[] profits, int capital, int k) {
        PriorityQueue<Integer> noCanQ = new PriorityQueue<>(Comparator.comparingInt(i -> costs[i]));
        PriorityQueue<Integer> canQ = new PriorityQueue<>((i1, i2) -> profits[i2] - profits[i1]);
        for (int i = 0; i < costs.length; i++) {
            if (costs[i] <= capital) {
                canQ.offer(i);
            }else {
                noCanQ.offer(i);
            }
        }
        while (k > 0 && !canQ.isEmpty()) {
            capital += profits[canQ.poll()];
            while (!noCanQ.isEmpty() && costs[noCanQ.peek()] <= capital) {
                canQ.offer(noCanQ.poll());
            }
            k--;
        }
        return capital;
    }

}
```

## 复杂度分析
