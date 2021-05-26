let right_light_sensor = 0
let Left_light_sensor = 0
bitbot.select_model(BBModel.Auto)
basic.forever(function () {
    Left_light_sensor = bitbot.readLight(BBLightSensor.Left)
    right_light_sensor = bitbot.readLight(BBLightSensor.Right)
    bitbot.rotate(BBRobotDirection.Left, right_light_sensor)
    bitbot.rotate(BBRobotDirection.Right, Left_light_sensor)
})
