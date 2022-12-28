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

[<< Previous: Variables](main/variables.md)

[>> Next: Objects](main/objects.md)