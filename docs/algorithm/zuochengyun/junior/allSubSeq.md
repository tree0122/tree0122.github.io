# 所有的子序列

## 题目
所有的子序列

## 代码
```java
public class AllSubSeq {

    public List<String> allSubSeq(String s) {
        List<String> list = new ArrayList<>();
        if (s == null || s.length() == 0) {
            return list;
        }
        doAllSubSeq(s.toCharArray(), list, 0);
        return list;
    }

    private void doAllSubSeq(char[] cs, List<String> list, int i) {
        if (i == cs.length) {
            list.add(String.valueOf(cs));
            return;
        }
        char t = cs[i];
        cs[i] = 0;
        doAllSubSeq(cs, list, i + 1);
        cs[i] = t;
        doAllSubSeq(cs, list, i + 1);
    }

}
```

## 复杂度分析
