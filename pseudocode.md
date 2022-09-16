# Alarm Clock

### <u>START</u>
### <u>INIT Variables:</u>
> - **CREATE** Clock
> - **CREATE** Alarm
> - **CREATE** standard/military Toggle

### <u>PROPERTIES OF OBJECTS:</u>
> - **Clock**
>   - Shows (Day, month, date, year, hour, minutes, seconds)
>   - Red font color
>   - monospace

> - **ALARM**
>   - input from user when they want to wake up.

### <u>METHODS OF OBJECTS:</u>
> - **Clock**
>   - Fetches times
>   - Can add alarm
>   - Can tell what time the alarm is set for
>   - Can tell current date time
>   - Can tell difference between Current date time and alarm

> - **Alarm**
>   - tell the difference between itself and Clock's time
>   - Once inputed and subitted, will display
>   - Crosses out once alarm has been set off. 


### LOGIC
```
IF DateTime == alarmTime
    DISPLAY 'Wake up!'

ELSE IF DateTime > alarmTime
    Display 'Your alarm has passed'

ELSE IF alarmTime = blank
    Display 'Add an alarm'
    cross out alarm inputed

ELSE
    pass
```
