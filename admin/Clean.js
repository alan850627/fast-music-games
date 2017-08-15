/*
 This assumes autograder made correct judgements.
 It takes json input, outputs the correct server calculations.
*/

const _ = require('lodash')
const fs = require('fs')

const db = JSON.parse(fs.readFileSync('./backups/fast-music-games-export.json', 'utf-8'))
var questions = db.questions
var users = db.users

clean()
setupNewStructure()
cleanResponsesQ()
cleanResponsesU()
setupReveal()

const newDB = {
  questions: questions,
  users: users
}
fs.writeFileSync('./backups/edited.json', JSON.stringify(newDB, null, 2) , 'utf-8')

function clean () {
  //TODO
}

function setupNewStructure() {
  //TODO
}

function setupReveal() {
  //TODO
}

function cleanResponsesU() {
  //TODO
}

function cleanResponsesQ() {
  //TODO
}
