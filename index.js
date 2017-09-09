let collection = {
  rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
  masjdrandm: {name: 'Kirstin', next: 'ntrandm'},
  ntrandm: {name: 'Juliet', next: null},
  blabla: {name: "Quynh", next: null}
 }

 function next(node, collection) {
   let nextAddress = node["next"]
   return collection[nextAddress]
 }

 function getName(node) {
   return node["name"]
 }

function headNode(headAddress, collection)  {
  return collection[headAddress]
}

function nodeAt(index, headAddress, collection) {
  let node = collection[headAddress]
  for (let i = 0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, headAddress, collection) {
  if (index === 0) {
    return headAddress
  }
  let previousNode = nodeAt(index - 1, headAddress, collection)
  return previousNode["next"]
}

function indexAt(node, collection, headAddress) {
  if (node === collection[headAddress]) {
    return 0
  }

  let currentNode = collection[headAddress]
  let counter = 0

  while (currentNode !== node && counter < Object.keys(collection).length) {
    currentNode = next(currentNode, collection)
    counter++
  }
  return counter
}

function insertNodeAt(index, newAddress, headAddress, collection) {
  let currentNode = nodeAt(index - 1, headAddress, collection)

  collection[newAddress]["next"] = currentNode["next"]
  currentNode["next"] = newAddress
}

function deleteNodeAt(index, headAddress, collection) {
  let previousIndex

  if (index === 0) {
    previousIndex = 0
  } else {
    previousIndex = index - 1
  }

  let currentNode = nodeAt(index, headAddress, collection)
  let previousNode = nodeAt(previousIndex, headAddress, collection)

  previousNode["next"] = currentNode["next"]
}

// deleteNodeAt(1, "rnadnm", collection)
