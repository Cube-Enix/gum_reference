# Variables

Variables in Gum are either "local" or "global".
These refer to their scoping within a file.

Local variables are block scoped. This is similar to the "let" keyword in JavaScript.

```gum
    {
        local variable = "thing"
        -- can use here...
    }
    -- but not here!
```

Global variables, however, can be used anywhere in a file. They're like the "var" keyword.

```gum
    fn importantProcess() {
        global variable = "other thing"
        -- can use here..
    }
    -- and here...

    fn veryUseful() {
        -- and here, too!
    }
```

All variables are mutable by default. However, suffixing a "!" onto local/global will make the variable immutable.

> Gum isn't designed to be a functional language!

```gum
    {
        local thing = 30
        thing = 45 -- allowed

        local! dontChangeEver = 68
        dontChangeEver++ -- ERROR: cannot reassign to immutable variable
    }
```

[<< Previous](langconcepts.md)
[>> Next](arrays.md)