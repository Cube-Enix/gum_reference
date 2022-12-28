# Arrays

Arrays, or lists, are declared the same as variables, just with "[]" after local/global.

```gum
    {
        local[] list = [] -- mutable array
        global![] fixedList = [1, 2, 3] -- immutable
    }
```

> Remember: "!" always comes before "[]" in declaration!

You seperate elements in an array with commas; the whitespace is optional. There should be no trailing commas.

Unlike in other languages, you can mix and match types within an array. Arrays are weakly typed by default, however you can use sticky typing to strictly type an array. Sticky typing will be discussed further in the types section.

Acessing an element of an array is similar to most other languages: ARRAY_NAME[INDEX_OF_ELEMENT].

> Arrays are 0-indexed, unlike in regular Scratch!

```gum
    {
        local[] favourites = [68, "plastic",false]

        Sprite.say(favourites[1]) -- "plastic"
    }
```

## Modifying Arrays

There are several methods on arrays to modify them.
You can use `.push()` to append to the end of an array, or `.pop()` to remove the last element of an array.

> Using `.pop()` by itself discards the element, but you can use it in other ways. For example, using it in a variable definition will assign the popped element to the variable. See the example below.

Use `.insert()` to insert within an array. Argument 1 should be the index to insert to, and argument 2 should be the thing to insert.

There's also `.slice()`, which splits an array at an index, along with many more!

```gum
    {
        local[] numbers = [1, 2, 3, 4, 5]

        numbers.push(6)
        numbers.push(7)

        local lucky = local.pop() -- 7

        numbers.insert(4, 4.5)
        Sprite.say(numbers) -- 1, 2, 3, 4, 4.5, 5, 6

        local[] smallNums = numbers.slice(2)[0] -- gets first half of the slice.
        Sprite.say(smallNums) -- 1, 2, 3
    }
```

[<< Previous: Variables](main/variables.md)

[>> Next: Objects](main/objects.md)