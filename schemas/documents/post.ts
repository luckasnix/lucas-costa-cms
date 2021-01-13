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
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Título 2', value: 'h2' },
            { title: 'Título 3', value: 'h3' },
            { title: 'Título 4', value: 'h4' },
            { title: 'Título 5', value: 'h5' },
            { title: 'Título 6', value: 'h6' },
            { title: 'Citação', value: 'blockquote' }
          ] 
        },
        {
          title: 'Imagem',
          type: 'image',
          fields: [
            {
              name: 'caption',
              title: 'Legenda',
              type: 'string',
              options: {
                isHighlighted: true
              }
            }
          ]
        }
      ]
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Nome',
          type: 'string'
        },
        {
          name: 'avatar',
          title: 'Avatar',
          type: 'image'
        }
      ]
    }
  ]
}
