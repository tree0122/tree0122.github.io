# randomPool

## 题目
设计一种结构,在该结构中有如下三个功能:
```
insert(key): 将某个key加入到该结构,做到不重复加入.
delete(key): 将原本在结构中的某个key移除.
getRandom(): 等概率随机返回结构中的任何一个key.

【要求】 Insert、delete和getRandom方法的时间复杂度都是O(1)
```

## 代码
```java
public class RandomPool {
    HashMap<String, Integer> keyIdxMap = new HashMap<>();
    HashMap<Integer, String> idxKeyMap = new HashMap<>();

    public boolean insert(String key) {
        if (!keyIdxMap.containsKey(key)) {
            return false;
        }
        keyIdxMap.put(key, keyIdxMap.size());
        idxKeyMap.put(idxKeyMap.size(), key);
        return true;
    }

    public boolean delete(String key) {
        Integer rm = keyIdxMap.remove(key);
        if (rm == null) {
            return false;
        }
        String val = idxKeyMap.remove(keyIdxMap.size());
        idxKeyMap.put(rm, val);
        keyIdxMap.put(val, rm);
        return true;
    }

    public String random() {
        return idxKeyMap.get((int) (Math.random()idxKeyMap.size()));
    }
}
```

## 复杂度分析
