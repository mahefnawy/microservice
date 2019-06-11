const { Component, utils } = require('@serverless/core')

class Microservice extends Component {
  async default(inputs = {}) {
    this.context.log('Deployment Started')

    this.state = {
      foo: 'bar',
      ...inputs
    }

    await this.save()

    this.context.status('Packaging')

    await utils.sleep(1000)

    this.context.status('Uploading')

    await utils.sleep(1000)

    this.context.status('Updating')

    await utils.sleep(1000)

    this.context.status('Finalizing')

    await utils.sleep(1000)

    this.state = { foo: 'bar' }

    await utils.sleep(1000)

    this.state = {
      ...this.state,
      arn: 'aws:lambda:abc:us-east-1:qwertyuiop'
    }
    await this.save()

    this.context.log('Deployment Successful')
    this.context.log()
    this.context.output('name', `       hello-world`)
    this.context.output('description', `Hello World Function`)
    this.context.output('memory', `     512`)
    this.context.output('timeout', `    10`)
    this.context.output('arn', `        aws:lambda:abc:us-east-1:qwertyuiop`)

    return { arn: this.state.arn }
  }

  async remove(inputs = {}) {
    this.context.log('Removal Started')

    this.context.status('Removing')

    await utils.sleep(3000)

    this.state = {}
    await this.save()

    return inputs
  }
}

module.exports = Microservice
