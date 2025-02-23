# 比其大的的左右最近的元素

## 题目
找出数组a的每个元素, 比其大的的左右最近的元素

## 代码
```java
public class NearestBig {

    public Map<Integer, Integer[]> nearestBig(int[] a) {
        Map<Integer, Integer[]> map = new HashMap<>();
        LinkedList<Integer> stack = new LinkedList<>();
        for (int i = 0; i < a.length; i++) {
            while (!stack.isEmpty() && a[stack.peek()] < a[i]) {
                Integer cur = stack.pop();
                Integer left = stack.peek();
                map.put(cur, new Integer[]{left, i});
            }
            stack.push(i);
        }
        while (!stack.isEmpty()) {
            Integer cur = stack.pop();
            map.put(cur, new Integer[]{stack.peek(), null});
        }
        return map;
    }

    public Map<Integer, Integer[]> nearestBigWithEqual(int[] a) {
        Map<Integer, Integer[]> map = new HashMap<>();
        LinkedList<List<Integer>> stack = new LinkedList<>();
        for (int i = 0; i < a.length; i++) {
            while (!stack.isEmpty() && a[stack.peek().get(0)] < a[i]) {
                List<Integer> curList = stack.pop();
                Integer left = stack.isEmpty() ? null : stack.peek().get(stack.peek().size() - 1);
                for (Integer c : curList) {
                    map.put(c, new Integer[]{left, i});
                }
            }
            List<Integer> list = stack.pop();
            if (list == null || a[list.get(0)] != a[i]) {
                list = new ArrayList<>();
            }
            list.add(i);
            stack.add(list);
        }
        while (!stack.isEmpty()) {
            List<Integer> curList = stack.pop();
            Integer left = stack.isEmpty() ? null : stack.peek().get(stack.peek().size() - 1);
            for (Integer c : curList) {
                map.put(c, new Integer[]{left, null});
            }
        }
        return map;
    }

}
```

## 复杂度分析