const express = require('express');
const campaignValidation = require('../../validations/campaign.validation');
const campaignController = require('../../controllers/campaigns.controller');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.get('/', campaignController.getCampaign);
router.post('/', validate(campaignValidation.createCampaign), campaignController.createCampaign);


module.exports = router;
