const Service = require('../models/Service')

class ServicesService {
  async getServices({ query = {} } = { query: {} }) {
    const servicesListed = await Service.find(query)
    return servicesListed || []
  }

  async getLastService({ n = 1 } = { n: 1 }) {
    const servicesListed = await Service.find({})

    const serviceReversed = servicesListed.reverse()

    return serviceReversed.filter((service, index) => index < n)
  }

  async getFirstService() {
    const servicesListed = await Service.find({})
    const firstService = servicesListed[0]

    return firstService || {}
  }

  async createService({ service }) {
    const newService = new Service(service)
    const serviceCreated = newService.save()
    return serviceCreated || {}
  }

  async updateService({ id, service }) {
    const updatedService = Service.findByIdAndUpdate(id, service, { new: true })
    return updatedService
  }

  async deleteService({ id }) {
    const deleteService = Service.findByIdAndDelete(id)
    return deleteService
  }
}

module.exports = ServicesService
