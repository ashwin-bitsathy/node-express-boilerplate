const express = require('express');
const campaignValidation = require('../../validations/campaign.validation');
const campaignController = require('../../controllers/campaigns.controller');
const validate = require('../../middlewares/validate');

const router = express.Router();
router.get('/', campaignController.getTraining);
router.post('/', validate(campaignValidation.createTraining), campaignController.createTraining);
router.put('/:id', validate(campaignValidation.createTraining), campaignController.updateTraining);


module.exports = router;
