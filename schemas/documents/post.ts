export default {
  name: 'post',
  title: 'Postagem',
  type: 'document',
  fields: [
    {
      name: 'locale',
      title: 'Localidade',
      type: 'string',
      options: {
        list: [
          { title: 'Português', value: 'pt-BR' },
          { title: 'Inglês', value: 'en-US' },
          { title: 'Espanhol', value: 'es-ES' }
        ]
      }
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input: string) => input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')
      }
    },
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
    },
    {
      name: 'content',
      title: 'Conteúdo',
      type: 'array',
      of: [
        { type: 'block' }
      ]
    }
  ]
}
