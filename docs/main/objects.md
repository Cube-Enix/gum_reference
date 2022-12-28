# Objects

Objects, also known as dictionaries or hashmaps, are a data structure composed of key-value pairs.
They are declared using curly brackets "{}".

The keys are always strings, but the values can be of any type, **including** other objects. 
Each key-value pair should have a comma afterwards, to mark the start of the next field.

> There **should** be a trailing comma; this isn't JSON!

Comments are allowed within objects, but they **must** be inline or on their own line.
Comments are not permitted within field definitions.

```gum
    {
        local balances = {
            "kiwi": 5533,
            "blue": 4940,
            "ship": 9070,
            "silvxr": "yes", -- comments are permitted here
            -- and here
        }

        local invalid = {
            "stop": -- but not here. "that is illegal" 
        }
    }
```

[<< Previous: Arrays](main/arrays.md)

[>> Next: Broadcasts](main/broadcasts.md)