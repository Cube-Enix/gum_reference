# Events
Events are Gum's version of Scratch's hat blocks. Events are marked with "@", and are always in camel_case. All Gum programs require atleast 1 event in order to compile.

## @green_flag

The @green_flag event is the most important of all. It is the entry point of any Gum program.

!> It's not recommended to use more than 1 of this event in a file, and the Gum compiler will warn you if you do: however, it is still supported for backwards compatibility!

```gum
    @green_flag {
        Sprite.say("It has begun.")
    }
```

## @key_press [KEY]

This event waits for a specified key to be pressed before firing. If no key is provided, it will wait for any key.

```gum
    @key_press KEY_A {
        keyAPressCount++
    }
```

## @sprite_clicked [SPRITE]

This event waits for a specified sprite to be clicked. A sprite must be specified. 

```gum
    @sprite_clicked "Sprite" {
        Sprite.say("Hey! Knock it off!")
    }
```

## @clone 

This event is triggered when a clone is made. 

```gum
    @green_flag {
        global i = 0
        while(i <= 500) {
            createClone()
            i++
        }
    }

    @clone {
        Sprite.say(i)
    }
```

## @broadcast [BROADCAST_NAME]

Broadcasts in Gum are transmitted with either the `broadcast()` or `broadcastSync()` function, where the argument is the broadcast name. Then, this event can be used to listen to the broadcast.

?> `broadcastSync()` acts like the `broadcast and wait` block!

```gum
    @green_flag {
        broadcast("hilarious")
    }

    @broadcast hilarious {
        Sprite.say("the M25")
    }
```

[<< Previous: Types](main/types.md)

[>> Next: Loops](main/loops.md)