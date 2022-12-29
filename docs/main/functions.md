# Functions

Functions are a way of abstracting code away, or grouping code together to be reused.

You can declare a function with `function` or `fn`. You also have to give the function a name, and then specify its arguments (if any.) Then, use curly brackets to delimit the function itself.

```gum
    function example(arg1, arg2) {

    }

    fn alsoValid() {

    }
```

> Functions compile to custom blocks.

## Returning

Unlike in Scratch, you can return things in functions with the return keyword.

```gum
    function hardestMath(a, b) {
        return a + b
    }

    @green_flag {
        local complex = hardestMath(1, 2)
    }
```

## Risky functions

?> This section documents an unsupported feature. The Gum devs take no responsibility for anything that goes wrong while using this feature. **You have beeen warned!**

A risky function is an equivalent to Scratch's hacked blocks. They can be used to tap into the final .sb3, or just to convert hacked/discontinued blocks from Scratch 2 and below.

```gum
    risky fn hacked() {
        -- hacked block shenanigans
    }
```

[<< Previous: Control Flow](main/controlflow.md)