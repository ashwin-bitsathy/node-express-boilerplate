const Joi = require('joi');
const { password } = require('./custom.validation');

const getCampaign = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const createCampaign = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const createTraining = {
  body: Joi.object().keys({
    dealer_id:  Joi.number().required(),
    campaign_id: Joi.number().required(),
    topic_id:  Joi.number().required(),
    training_date: Joi.date().required(),
    visit: Joi.string().required(),
    isDraft:  Joi.boolean().required(),
    attendees: Joi.array().items(Joi.object({
      participant_number: Joi.number().required()
    })).min(1).required(),
  }),
};

module.exports = {
  getCampaign,
  createCampaign,
  createTraining
};
