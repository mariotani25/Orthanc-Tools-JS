const Robot = require('./Retrieve_Robot')

class Robot_Singleton {
  constructor (orthancObject) {
    if (!Robot_Singleton.instance) {
      Robot_Singleton.instance = new Robot(orthancObject)
    }
  }

  getRobot () {
    return Robot_Singleton.instance
  }
}

module.exports = Robot_Singleton
