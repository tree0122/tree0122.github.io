# robotWay

## 题目
在1-N步路, 一个机器人可以走P步, 其初始位置M, 走到目标是K位置的方法数

注意: 1位置, 只能往右走; N位置只能往左走

## 代码
```java
public class RobotWay {

    public int robotWay(int range, int init, int steps, int target) {
//        return doRobotWay(range, init, steps, target);
        int[][] d = new int[steps + 1][range + 2];
        d[0][target] = 1;
        for (int i = 1; i < d.length; i++) {
            for (int j = 1; j < d[0].length - 1; j++) {
                d[i][j] = d[i - 1][j - 1] + d[i - 1][j + 1];
            }
        }

        return d[steps][init];
    }

    public int doRobotWay(int range, int init, int steps, int target) {
        if (steps == 0) {
            return init == target ? 1 : 0;
        }
        if (init == 1) {
            return doRobotWay(range, init + 1, steps - 1, target);
        }
        if (init == range) {
            return doRobotWay(range, init - 1, steps - 1, target);
        }
        return doRobotWay(range, init + 1, steps - 1, target)
                + doRobotWay(range, init - 1, steps - 1, target);
    }

}
```

## 复杂度分析
