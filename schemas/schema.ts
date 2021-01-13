import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import postDocument from './documents/post'
import authorDocument from './documents/author'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    postDocument,
    authorDocument
  ])
})
