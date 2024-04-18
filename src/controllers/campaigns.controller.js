const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const Campaigns  = require('../models/campaigns.model');
const Training  = require('../models/training.model');
const Participants  = require('../models/participants.model');
const { cloneDeep, capitalize } = require('lodash');
const { ObjectId } = require('mongodb');

const getCampaign = catchAsync(async (req, res) => {
  const campaignList = await Campaigns.find({})
  res.status(httpStatus.CREATED).send({ campaignList });
});

const createCampaign = catchAsync(async (req, res) => {
  const campaign = await Campaigns.create(req.body);
  res.status(httpStatus.CREATED).send({ campaign });
});

const createTraining = catchAsync(async (req, res) => {
  const trainingData = cloneDeep(req.body);
  delete trainingData.attendees;
  const TrainingData = await Training.create(trainingData);
  const participants = req.body?.attendees?.map(data =>  {return {
    dealer_id: trainingData.dealer_id,
    training_id:  TrainingData._id.toString(),
    participant_number: data.participant_number,
    has_attended: false
  }})
  await Participants.create(participants)
  res.status(httpStatus.CREATED).send({ TrainingData });
});

const updateTraining = catchAsync(async (req, res) => {
  const trainingId = req.params.id;
    const trainingData = cloneDeep(req.body);
  delete trainingData.attendees;
  const training = await Training.findOne({ _id: ObjectId(trainingId) });
  if(!training) {
    res.status(httpStatus['404_MESSAGE'])
  } else {
    await Training.updateOne({ _id: ObjectId(trainingId)}, trainingData);
    await Participants.deleteMany( { training_id: ObjectId(trainingId) });
    const participants = req.body?.attendees?.map(data =>  {return {
      dealer_id: training.dealer_id,
      training_id:  training._id.toString(),
      participant_number: data.participant_number,
      has_attended: false
    }});
    await Participants.create(participants);
  }
  res.status(201).send(httpStatus.OK);
});

const getTraining = catchAsync(async (req, res) => {
  const requestedUserTrainings = req.headers['x-trainer-id'];
  const users = await Participants.find({ participant_number: requestedUserTrainings })
  const trainings = await Training.find({_id: users.map(data => data.training_id)});
  res.status(httpStatus.CREATED).send({ trainings });
});

module.exports = {
  getCampaign,
  createCampaign,
  createTraining,
  updateTraining,
  getTraining
};
