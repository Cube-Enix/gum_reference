# Loops
There are 2 types of loops in Gum: for and while.

## while

A while loop repeats a block of code until the condition specified is met. A condition of `true` will make the loop last forever.

!> Using instant functions within infinite while loops will result in very slow code at runtime! By default, Gum will raise an error when this is compiled, but you *can* disable it. **Only do this if you know what you're doing!**

You can break out of a while loop using "break".

> A while loop compiles to a "repeat until" C-block.

```gum
    @green_flag {
        local awesome = []
        awesome.fill(5000, 0)

        local i = 0
        while(i < awesome.length) {
            Sprite.say(awesome[i] + i)
            i++
        }
    }
```

Using a while loop in this way may be somewhat tedious, though. It's also quite tedious in Scratch. This is why there's another option.

## for

A for loop is an iterator. It can be used to loop over some code.

The traditional way to write for loops is like so;

```gum
    {
        for(pre-loop; condition; during-loop) {
            -- code
        }

        -- example

        local awesome = []
        awesome.fill(5000, 0)

        for(local i = 0; i < awesome.length; i++) {
            Sprite.say(awesome[i] + i)
        }
    }
```

?> All 3 fields must be declared!

Alternatively, you can use the "x of y" syntax, like so;

```gum
    {
        local awesome = []
        awesome.fill(5000, 0)
        for(local i in awesome) {
            Sprite.say(i)
        }
    }
```

This is more suited for iterating through an array of strings, for example.

## Replicating the `repeat` C-block

Gum has no native way to replicate the `repeat` C-block. However, you *can* use the built in `range()` function. It takes in 2 arguments; the first being the starting value, and the second being the ending value. 

You can also use the `..` operator, a la Rust. The number on the left-hand side is the starting value, and the right-hand number is the ending value.

?> Both these methods are inclusive of both values!

```gum
    {
        for(local i in range(1, 10)) {
            Sprite.say(`RANGE(): ${i}`)
        }

        for(local j in 1..10) {
            Sprite.say(`..: ${j}`)
        }
    }
```

[<< Previous: Events](main/events.md)

[>> Next: Control Flow](main/controlflow.md)