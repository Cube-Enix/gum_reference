# Control Flow

Control flow in Gum is similar to many other languages.

## Comparisons

Within any control flow statement, you can use comparison statements like ==, > and <, the same as in Scratch.

However, Gum also supports >=, <= and !=, which makes writing complicated comparisons simpler than in Scratch.

## Boolean Logic

As in many other languages, you can use && and || for "and" and "or" logic. You can also use ! to negate a statement, like Scratch's `not` boolean. However, you can also use the words `and`, `or` and `not`; just as in Scratch. Feel free to mix and match!

## Statements
You can use if, else, and else if statements for basic control flow.

```gum
    {
        if(1 > 3) {
            Sprite.say("Never possible.")
        }

        local thingy = random(50, 150)

        if(thingy <= 100) {
            Sprite.say("Wow, that's quite small. Yikes.")
        }

        if(not (1 < 2) || thingy == 68) {
            Sprite.say("Hm....")
        } else {
            Sprite.say("That's a shame.")
        }
    }
```

To simplify long if/else chains (a common complaint in Scratch), you can use switch/case. It works just like in JavaScript or C#.

?> By default, having fall-through cases will trigger an error: you can disable this behaviour, however.

!> Switch/case and if/else are statements, not expressions! You can't use them in assignments (except for the ternary operator)!

Speaking of the ternary operator, it uses the `condition ? true : false` syntax, as in JavaScript.

```gum
    {   
        local thingy = random(1, 3) == 1 ? "based" : "cringe"
        Sprite.say(thingy)

        while(true) {
            Sprite.ask("Pick a number from 1 to 3.")
        
            switch(Sprite.answer) {
                case 1:
                    Sprite.say("Good pick!")
                    break
                case 2:
                case 3: -- will cause an error by default
                    Sprite.say("Could've been better.")
                    break
                default:
                    Sprite.say("Try again.")
                    break
            }
        }
    }
```

[<< Previous: Loops](main/loops.md)

[>> Next: Functions](main/functions.md)