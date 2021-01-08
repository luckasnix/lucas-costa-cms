export default {
  name: 'post',
  title: 'Postagem',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 2
    },
    {
      name: 'date',
      title: 'Data',
      type: 'date'
    },
    {
      name: 'coverImage',
      title: 'Imagem de Capa',
      type: 'image'
    }
  ]
}
