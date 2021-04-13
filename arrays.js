var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(name) {
  return [name, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(name) {
  chocolateBars.unshift(name)
  return chocolateBars
}

function addElementToEndOfArray() {
  var chocolateBars2 = [...chocolateBars, name]
  return chocolateBars2
}

function destructivelyAddElementToEndOfArray(name) {
  chocolateBars.push(name)
  return chocolateBars
}

function accessElementInArray() { // simply returns index [0] 'snickers'
  return chocolateBars[0]
}

function destructivelyRemoveElementFromBeginningOfArray() {
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray() { // check
  chocolateBars3 = chocolateBars.slice(1)
  return chocolateBars3
}

function destructivelyRemoveElementFromEndOfArray() {
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray() {
  chocolateBars4 = chocolateBars.slice(0, chocolateBars.length - 1)
  return chocolateBars4
}
