# 0022. 括号生成

## 题目
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

```
示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]

```

## 解题思路


## 代码
```java
class L0022GenerateParenthesis {

    public List<String> generateParenthesis(int n) {
        char[] cs = new char[n * 2];
        List<String> ans = new ArrayList<>();
        doGenerateParenthesis(cs, ans, n, 0, 0, 0);
        return ans;
    }

    private void doGenerateParenthesis(char[] cs, List<String> ans, int n, int open, int close, int i) {
        if (cs.length == i) {
            ans.add(String.valueOf(cs));
            return;
        }
        if (open < n) {
            cs[i] = '(';
            doGenerateParenthesis(cs, ans, n, open + 1, close, i + 1);
            cs[i] = 0;
        }
        if (close < open) {
            cs[i] = ')';
            doGenerateParenthesis(cs, ans, n, open, close + 1, i + 1);
            cs[i] = 0;
        }
    }

}
```

## 复杂度分析

