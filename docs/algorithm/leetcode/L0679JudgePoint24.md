# 0679. 24 点游戏

## 题目
给定一个长度为4的整数数组 cards 。你有 4 张卡片，每张卡片上都包含一个范围在 [1,9] 的数字。您应该使用运算符 ['+', '-', '*', '/'] 和括号 '(' 和 ')' 将这些卡片上的数字排列成数学表达式，以获得值24。

你须遵守以下规则:

- 除法运算符 '/' 表示实数除法，而不是整数除法。
    - 例如， 4 /(1 - 2 / 3)= 4 /(1 / 3)= 12 。
- 每个运算都在两个数字之间。特别是，不能使用 “-” 作为一元运算符。
    - 例如，如果 cards =[1,1,1,1] ，则表达式 “-1 -1 -1 -1” 是 不允许 的。
- 你不能把数字串在一起
    - 例如，如果 cards =[1,2,1,2] ，则表达式 “12 + 12” 无效。

如果可以得到这样的表达式，其计算结果为 24 ，则返回 true ，否则返回 false 。



```
示例 1:

输入: cards = [4, 1, 8, 7]
输出: true
解释: (8-4) * (7-1) = 24


示例 2:

输入: cards = [1, 2, 1, 2]
输出: false


```

## 解题思路

- 游戏的第一步是挑出两个数，算出一个新数替代这两个数。

- 然后，在三个数中玩 24 点，再挑出两个数，算出一个数替代它们。

- 然后，在两个数中玩 24 点……

很明显的递归思路。每次递归都会挑出两个数，我们尝试挑出不同的两数组合：

- 挑 1、2，基于它，继续递归。
- 挑 1、3，基于它，继续递归。
- 挑 ……
即通过两层 for 循环，枚举所有的两数组合，展开出不同选择所对应的递归分支。


## 代码
```java
class L0679JudgePoint24 {

    public boolean judgePoint24(int[] cards) {
        ArrayList<Double> cList = new ArrayList<>();
        for (int v : cards) {
            cList.add((double) v);
        }
        return doJudgePoint24(cList);
    }

    private boolean doJudgePoint24(ArrayList<Double> cards) {
        if (cards.size() == 1) {
            return Math.abs(cards.get(0) - 24) < 1e-6;
        }

        for (int i = 0; i < cards.size(); i++) {
            for (int j = i + 1; j < cards.size(); j++) {
                double v1 = cards.get(i), v2 = cards.get(j);
                ArrayList<Double> newCards = new ArrayList<>();
                for (int k = 0; k < cards.size(); k++) {
                    if (k != i && k != j) {
                        newCards.add(cards.get(k));
                    }
                }
                newCards.add(v1 + v2); // 加
                if (doJudgePoint24(newCards)) {
                    return true;
                }
                newCards.remove(newCards.size() - 1);

                newCards.add(v1 - v2); // 减
                if (doJudgePoint24(newCards)) {
                    return true;
                }
                newCards.remove(newCards.size() - 1);

                newCards.add(v2 - v1); // 被减
                if (doJudgePoint24(newCards)) {
                    return true;
                }
                newCards.remove(newCards.size() - 1);

                newCards.add(v1 * v2); // 乘
                if (doJudgePoint24(newCards)) {
                    return true;
                }
                newCards.remove(newCards.size() - 1);

                if (Math.abs(v2) < 1e-6) {
                    newCards.add(v1 / v2); //除
                    if (doJudgePoint24(newCards)) {
                        return true;
                    }
                    newCards.remove(newCards.size() - 1);
                }
                if (Math.abs(v1) < 1e-6) {
                    newCards.add(v2 / v1); //被除
                    if (doJudgePoint24(newCards)) {
                        return true;
                    }
                    newCards.remove(newCards.size() - 1);
                }
            }
        }
        return false;
    }

}
```

## 复杂度分析

