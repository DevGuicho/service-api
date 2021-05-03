const express = require('express')
const boom = require('@hapi/boom')
const ServicesService = require('../services/services')

function apiServices(app) {
  const router = express.Router()
  const serviceServices = new ServicesService()

  app.use(router)

  router.get('/servicios', async (req, res, next) => {
    try {
      const servicesListed = await serviceServices.getServices()
      res.json({
        message: 'Services listed',
        data: servicesListed
      })
    } catch (error) {
      next(boom.badRequest(error.message))
    }
  })
  router.get('/servicio', async (req, res, next) => {
    try {
      const lastService = await serviceServices.getLastService()
      res.json({
        message: 'Last service retrieved',
        data: lastService
      })
    } catch (error) {
      next(boom.badRequest(error.message))
    }
  })
  router.get('/services/last', async (req, res, next) => {
    const { n } = req.body
    try {
      const lastService = await serviceServices.getLastService({ n })
      res.json({
        message: `Last ${n} service listed`,
        data: lastService
      })
    } catch (error) {
      next(boom.badRequest(error.message))
    }
  })
  router.get('/services/first', async (req, res, next) => {
    try {
      const firstService = await serviceServices.getFirstService()
      res.json({
        message: 'First service retrieved',
        data: firstService
      })
    } catch (error) {
      next(boom.badRequest(error.message))
    }
  })
  router.get('/service/retrieve_by_ip_port', async (req, res, next) => {
    const { ip, port } = req.body

    try {
      const servicesListed = await serviceServices.getServices({
        query: { ip, port }
      })
      res.json({
        message: `Services with ip: ${ip} and port: ${port} listed`,
        data: servicesListed
      })
    } catch (error) {
      next(boom.badRequest(error.message))
    }
  })
  router.get('/service/retrieve_by_name', async (req, res, next) => {
    const { name } = req.body

    try {
      const sericesListed = await serviceServices.getServices({
        query: { name }
      })
      res.json({
        message: `Services with name: ${name} listed`,
        data: sericesListed
      })
    } catch (error) {
      next(boom.badRequest(error.message))
    }
  })
  router.get('/service/retrieve_by_ip', async (req, res, next) => {
    const { ip } = req.body

    try {
      const sericesListed = await serviceServices.getServices({ query: { ip } })
      res.json({
        message: `Services with ip: ${ip} listed`,
        data: sericesListed
      })
    } catch (error) {
      next(boom.badRequest(error.message))
    }
  })
  router.post('/service/create', async (req, res, next) => {
    const service = req.body
    try {
      const serviceCreated = await serviceServices.createService({ service })
      res.json({
        message: 'Service created',
        data: serviceCreated
      })
    } catch (error) {
      next(boom.badRequest(error.message))
    }
  })
  router.put('/service/update', async (req, res, next) => {
    const service = req.body
    const { id } = service
    delete service.id
    try {
      const serviceUpdated = await serviceServices.updateService({
        id,
        service
      })
      res.json({
        message: 'Service updated',
        data: serviceUpdated
      })
    } catch (error) {
      next(boom.badRequest(error.message))
    }
  })
  router.delete('/service/delete', async (req, res, next) => {
    const { id } = req.body

    try {
      const serviceDeleted = await serviceServices.deleteService({
        id
      })
      res.json({
        message: 'Service deleted',
        data: serviceDeleted
      })
    } catch (error) {
      next(boom.badRequest(error.message))
    }
  })
}

module.exports = apiServices
