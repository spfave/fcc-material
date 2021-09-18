## **Algorithm Statement**
You will be provided with an initial array (the first argument in the arrayRemover function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

## **Example Case**
```
arrayRemover([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].

arrayRemover([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].

arrayRemover([3, 5, 1, 2, 2], 2, 3, 5) should return [1].

arrayRemover([2, 3, 2, 3], 2, 3) should return [].

arrayRemover(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].

arrayRemover(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].
```