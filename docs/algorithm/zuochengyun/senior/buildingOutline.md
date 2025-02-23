# building outline

## 题目
给定一个N行3列二维数组,每一行表示有一座大楼,一共有N座大楼。 所有大楼的底部都坐落在X轴上,每一行的三个值(a,b,c)代表每座大楼的从(a,0)点开始,到 (b,0)点结束,高度为c。 输入的数据可以保证a < b,且a,b,c均为正数。大楼之间可以有重合。 请输出整体的轮廓线。

例子:给定一个二维数组 
[   [1, 3, 3], 
    [2, 4, 4], 
    [5, 6, 1] ]

输出为轮廓线 [ [1, 2, 3], [2, 4, 4], [5, 6, 1] ]

## 代码
```java
public class BuildingOutline {

    public List<List<Integer>> buildingOutline(int[][] b) {
        class Line {
            int pos;
            int h;
            boolean up;

            public Line(int pos, int h, boolean up) {
                this.pos = pos;
                this.h = h;
                this.up = up;
            }
        }
        List<List<Integer>> ans = new ArrayList<>();
        PriorityQueue<Line> q = new PriorityQueue<>((l1, l2) -> l1.pos != l2.pos ? l1.pos - l2.pos : l1.up && l2.up ? l1.h - l2.h : l1.up ? 1 : -1);
        for (int i = 0; i < b.length; i++) {
            q.offer(new Line(b[i][0], b[i][2], true));
            q.offer(new Line(b[i][1], b[i][2], false));
        }
        TreeMap<Integer, Integer> heightCountMap = new TreeMap<>();
        TreeMap<Integer, Integer> posHMap = new TreeMap<>();
        while (!q.isEmpty()) {
            Line p = q.poll();
            int h = heightCountMap.getOrDefault(p.h, 0);
            if (p.up) {
                heightCountMap.put(p.h, h + 1);
            } else {
                if (h == 1) {
                    heightCountMap.remove(p.h);
                } else {
                    heightCountMap.put(p.h, h - 1);
                }
            }
            posHMap.put(p.pos, heightCountMap.isEmpty() ? 0 : heightCountMap.lastKey());
        }
        int preP = 0, preH = 0;
        for (Map.Entry<Integer, Integer> entry : posHMap.entrySet()) {
            Integer curP = entry.getKey();
            Integer curH = entry.getValue();
            if (preH != curH) {
                if (preH != 0) {
                    ArrayList<Integer> list = new ArrayList<>();
                    list.add(preP);
                    list.add(curP);
                    list.add(preH);
                    ans.add(list);
                }
                preP = curP;
                preH = curH;
            }
        }
        return ans;
    }

}
```

## 复杂度分析
