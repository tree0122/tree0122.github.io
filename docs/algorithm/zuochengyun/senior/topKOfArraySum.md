# 两个有序数组间相加和的TOP K问题

## 题目
给定两个有序数组arr1和arr2,再给定一个整数k,返回来自arr1和arr2的两个数相加和最大的前k个,两个数必须分别来自两个数组。
  
举例:
```
arr1=[1,2,3,4,5],arr2=[3,5,7,9,11],k=4。返回数组[16,15,14,14]。
```


## 代码
```java
public class TopKOfArraySum {

    public int[] topKOfArraySum(int[] a, int[] b, int k) {
        int[] res = new int[k];
        PriorityQueue<Node> q = new PriorityQueue<>((n1, n2) -> n2.v - n1.v);
        HashSet<Node> set = new HashSet<>();
        int x = a.length - 1, y = b.length - 1;
        Node n = new Node(a[x] + b[y], x, y);
        q.offer(n);
        set.add(n);
        for (int i = 0; i < k; i++) {
            n = q.poll();
            res[i] = n.v;
            x = n.x;
            y = n.y;
            if (x > 0 && set.add(n = new Node(a[x - 1] + b[x],x - 1, y))) {
                q.offer(n);
            }
            if (y > 0 && set.add(n = new Node(a[x] + b[y - 1], x, y - 1))) {
                q.offer(n);
            }
        }
        return res;
    }

    private class Node {
        int v;
        int x;
        int y;

        public Node(int v, int x, int y) {
            this.v = v;
            this.x = x;
            this.y = y;
        }

        @Override
        public boolean equals(Object obj) {
            if (obj instanceof Node) {
                return this.x == ((Node) obj).x && this.y == ((Node) obj).y;
            }
            return super.equals(obj);
        }
    }

}
```

## 复杂度分析
