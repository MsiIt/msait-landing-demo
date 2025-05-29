import _ from 'lodash'

export const transformListToDict = (list) => {
  const result = {}
  for (const prop of list) {
    result[prop.symbolCode] = _.omit(prop, 'symbolCode')
  }
  return result
}

export function transformResponse(item) {
  const transformedItem = {
    ...item,
    properties: transformListToDict(item.properties),
  }

  if (Array.isArray(transformedItem.relations)) {
    transformedItem.relations = transformedItem.relations.map((relation) => {
      if (Array.isArray(relation.entities)) {
        relation.entities = relation.entities.map((entity) => transformResponse(entity))
      }

      return relation
    })
  }

  return transformedItem
}
