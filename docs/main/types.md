# Types

Gum has a few fundamental types, which are called primitives.
Below will be a list of the different types of primitives.

### Numbers

Any type of numerical value is a number. Numbers are special, as they have more specific "subtypes".
These include:

* ints 
    * This is a whole number that can be positive or negative.
* uints 
    * This is a whole positive number, which can be twice as big as a positive int.
* float
    * This is any decimal.
* bigint
    * This is any number bigger than the largest uint. This is incompatible with most math functions.

```gum
    {
        local[] numbers = [
            -32,             -- number.int
            55,              -- number.uint
            1.5,             -- number.float
            9007199254740991 -- number.bigint
        ]
    }
    
```

### Strings

A string is any text enclosed within " or '. You cannot mix and match the two delimiters.

Escape characters (\n, \t) are compatible with strings.

You can use `` to mark a **format string**. These can span multiple lines, and you can interpolate variables within using ${}.

```gum
    {
        local winner = "Blue"

        local funniestJoke = `
            Congratulations, ${winner}, on winning a million dollars!
        `
    }
```

### Booleans

A boolean is either true or false. This is the simplest type to understand.

```gum
    {
        local isKiwiRich = false
    }
```

### Null

Null is the absence of a value.

Null is compiled to an empty value at compile-time, but **null is not the same as ""**.

```gum
    {
        local nullish = null
    }
```

## Sticky Mode

Sticky Mode is a feature in Gum that allows for static typing. Static typing means that the types of *all* variables have to be explicitly declared by the coder. This also means that you cannot mix and match types in arrays.

To enable sticky mode, you simply place a `#![sticky_mode]` at the top of a file.

To type a variable, array, or object, you add a `: [TYPE]` after the name in a declaration.

### Example

fileA.gum
```gum
    #![sticky_mode]

    @green_flag {
        local thing: string = "this is a string"
        export global! shouldNeverChange: int[] = [3, 6, 9]
    }
```

fileB.gum
```gum
    import {shouldNeverChange} from "./fileA.gum"

    @greenflag {
        Sprite.say(shouldNeverChange) -- 3, 6, 9
    }
```

[<< Previous: Objects](main/objects.md)

[>> Next: Events](main/events.md)