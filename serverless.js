const { Component, utils } = require('@serverless/core')

class Microservice extends Component {
  async default(inputs = {}) {
    // console.log(this.context.status)
    this.context.status('Deploying')

    await utils.sleep(1000)

    this.state = { foo: 'bar' }

    this.context.log('this is a log')

    await utils.sleep(1000)

    await this.save()

    // throw Error('something bad happened')

    this.context.log()
    this.context.output('name', `       hello-world`)
    this.context.output('description', `Hello World Function`)
    this.context.output('memory', `     512`)
    this.context.output('timeout', `    10`)
    this.context.output('arn', `        aws:lambda:abc:us-east-1:qwertyuiop`)

    return { arn: 'aws:lambda:abc:us-east-1:qwertyuiop' }
  }
}

module.exports = Microservice
