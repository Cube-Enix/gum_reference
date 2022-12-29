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

## Anonymous functions

Gum supports anonymous functions, which can open the door to functional programming. These functions can have infinite arguments, but must consist of 1 return statement.

?> The return statement is implied in the "=>", so you don't need to use the keyword here.

```gum
    {
        local x = (a, b) => a * b;
    }
```

## Instant functions

Instant functions tell the Gum compiler that a function should "run without screen refresh" in the final .sb3.

!> Misuse of these functions can result in a project running very slowly!

```gum
    instant fn calculate() {
        return 15 + 33
    }
```

## Risky functions

!> This section documents an unsupported feature. The Gum devs take no responsibility for anything that goes wrong while using this feature. **You have beeen warned!**

A risky function is an equivalent to Scratch's hacked blocks. They can be used to tap into the final .sb3, or just to convert hacked/discontinued blocks from Scratch 2 and below.

```gum
    risky fn hacked() {
        -- hacked block shenanigans
    }
```
[<< Previous: Control Flow](main/controlflow.md)