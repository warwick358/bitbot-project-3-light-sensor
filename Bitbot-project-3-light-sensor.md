	# Bitbot-project-3-light-sensor

## Step 1 
Setup the Bitbot

First we will get the "select bitbit model" block from the "select bitbot model" tab
and place it in the "on start" block.

```blocks
bitbot.select_model(BBModel.Classic)
```
## Step 2 
create the variable's 

First we need to create a variable for each sensor.
Go to the "variable" tab and create a variable called "right_light_sensor" then create another called "Left_light_sensor"
Then select the "set to" block from the "variable" tab and place it in the "forever" block.
Do this again but this time use the dropdown tab to change to the "Left_light_sensor"

```block
let right_light_sensor = 0
let Left_light_sensor = 0
basic.forever(function () {
    Left_light_sensor = 0
    right_light_sensor = 0
})
```
## Step 3 
Setting the sensors

Next we need to tell each variable where to get their value from.
Go to the 'Bitbot" tab and the "inputs & outputs" tab and select the "left light sensor" and place it in the "0" of the "set to" block from the "variable" tab.
Then do the same for the "right light sensor" "set to" block from the "variable" tab

```block
let Left_light_sensor = 0
let right_light_sensor = 0
basic.forever(function () {
    Left_light_sensor = bitbot.readLight(BBLightSensor.Left)
    right_light_sensor = bitbot.readLight(BBLightSensor.Right)
})

```

## Step 4 
Adding motion

Now we will add in the motors.
Go to the "bitbot" "motors" tab and select the "spin at speed" block" and place it at the bottom of the the forever block.
Do this again and change to the other motor. You should have one "left" and one "right" motor.
Next go to the "variable" tab and select the "Left_light_sensor" block and place it in the speed part of the "Left motor" block. 
Then go to the "variable" tab and select the "Right_light_sensor" block and place it in the speed part of the "Right motor" block.

```block
let Left_light_sensor = 0
let right_light_sensor = 0
basic.forever(function () {
    Left_light_sensor = bitbot.readLight(BBLightSensor.Left)
    right_light_sensor = bitbot.readLight(BBLightSensor.Right)
    bitbot.rotate(BBRobotDirection.Left, right_light_sensor)
    bitbot.rotate(BBRobotDirection.Right, Left_light_sensor)
})
```

## step 5 
Check the code and download

```block
let right_light_sensor = 0
let Left_light_sensor = 0
bitbot.select_model(BBModel.Auto)
basic.forever(function () {
    Left_light_sensor = bitbot.readLight(BBLightSensor.Left)
    right_light_sensor = bitbot.readLight(BBLightSensor.Right)
    bitbot.rotate(BBRobotDirection.Left, right_light_sensor)
    bitbot.rotate(BBRobotDirection.Right, Left_light_sensor)
})
```


