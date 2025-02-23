# 异或和为0的子数组最多

## 题目
定义数组的异或和的概念:
数组中所有的数异或起来,得到的结果叫做数组的异或和,比如数组{3,2,1}的异或和是,3^2^1 = 0

给定一个数组arr,你可以任意把arr分成很多不相容的子数组,你的目的是:
分出来的子数组中,异或和为0的子数组最多。

请返回:分出来的子数组中,异或和为0的子数组最多是多少?

## 代码
```java
public class MostEor {

        public int mostEor(int[] a) {
        int[] d = new int[a.length + 1];
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, 0);
        int eor = 0;
        for (int i = 1; i < d.length; i++) {
            eor = eor ^ a[i - 1];
            Integer pre = map.get(eor);
            if (pre != null) {
                d[i] = d[pre] + 1;
            }
            if (d[i] < d[i - 1]) {
                d[i] = d[i - 1];
            }
            map.put(eor, i);
        }
        return d[a.length];
    }

}
```

## 复杂度分析
