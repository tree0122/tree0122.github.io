# 0165. 比较版本号

## 题目
给你两个 版本号字符串 version1 和 version2 ，请你比较它们。版本号由被点 '.' 分开的修订号组成。修订号的值 是它 转换为整数 并忽略前导零。

比较版本号时，请按 从左到右的顺序 依次比较它们的修订号。如果其中一个版本字符串的修订号较少，则将缺失的修订号视为 0。

返回规则如下：

- 如果 version1 < version2 返回 -1，
- 如果 version1 > version2 返回 1，
- 除此之外返回 0。


```
示例 1：

输入：version1 = "1.2", version2 = "1.10"

输出：-1

解释：

version1 的第二个修订号为 "2"，version2 的第二个修订号为 "10"：2 < 10，所以 version1 < version2。



示例 2：

输入：version1 = "1.01", version2 = "1.001"

输出：0

解释：

忽略前导零，"01" 和 "001" 都代表相同的整数 "1"

```

## 解题思路



## 代码
```java
class L0165CompareVersion {

    public int compareVersion(String version1, String version2) {
        String[] a1 = version1.split(".");
        String[] a2 = version2.split(".");
        int i = 0;
        while (i < a1.length || i < a2.length) {
            int v1 = 0, v2 = 0;
            if (i < a1.length) {
                v1 = Integer.parseInt(a1[i]);
            }
            if (i < a2.length) {
                v2 = Integer.parseInt(a2[i]);
            }
            if (v1 != v2) {
                return v1 - v2 > 0 ? 1 : -1;
            }
            i++;
        }
        return 0;
    }

    public int compareVersionByIndex(String version1, String version2) {
        int i = 0, j = 0;
        while (i < version1.length() || j < version2.length()) {
            int v1 = 0, v2 = 0;
            while (i < version1.length() && version1.charAt(i) != '.') {
                v1 = v1 * 10 + (version1.charAt(i++) - '0');
            }
            while (j < version2.length() && version2.charAt(j) != '.') {
                v2 = v2 * 10 + (version2.charAt(j++) - '0');
            }
            if (v1 != v2) {
                return v1 - v2 ? 1 : -1;
            }
        }
        return 0;
    }

}
```

## 复杂度分析

