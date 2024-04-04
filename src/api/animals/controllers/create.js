import Joi from 'joi'

import { createAnimal } from '~/src/api/animals/helpers/create-animal'

const createAnimalController = {
  options: {
    validate: {
      payload: Joi.object({
        name: Joi.string().required(),
        kind: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        fileUrl: Joi.string().required()
      })
    }
  },
  handler: async (request, h) => {
    const animal = await createAnimal(request.db, request.payload)

    return h.response({ message: 'success', animal }).code(200)
  }
}

export { createAnimalController }
