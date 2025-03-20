# LCR 187. 破冰游戏

## 题目
社团共有 num 位成员参与破冰游戏，编号为 0 ~ num-1。成员们按照编号顺序围绕圆桌而坐。社长抽取一个数字 target，从 0 号成员起开始计数，排在第 target 位的成员离开圆桌，且成员离开后从下一个成员开始计数。请返回游戏结束时最后一位成员的编号。

```
示例 1：

输入：num = 7, target = 4
输出：1


示例 2：

输入：num = 12, target = 5
输出：0

```

## 解题思路


## 代码
```java
class LCR187IceBreakingGame {

    // 只关心最终活着那个人的序号变化。最终活着的人编号的反推
    // f(n,m) = [f(n−1,m)+m] %n
    public int iceBreakingGame(int num, int target) {
        if (num == 1) {
            return 0;
        }
        int k = iceBreakingGame(num - 1, target);
        return (k + target) % num;
    }

    public int iceBreakingGameBetter(int num, int target) {
        int res = 0; // 最终活着的初始位置
        for (int i = 2; i <= num; i++) {
            res = (res + target) % i; // 每次循环右移
        }
        return res;
    }

}
```

## 复杂度分析

