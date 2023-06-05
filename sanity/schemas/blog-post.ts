const post = {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'categoria',
            title: 'Categoria',
            type: 'reference',
            to: [{type: 'categoria'}]
        },
        {
            name: 'autore',
            title: 'Autore',
            type: 'reference',
            to: [{type: 'autore'}]
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'title'}
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'dataPubblicazione',
            title: 'Data Pubblicazione',
            type: 'date',
            options: {
              dateFormat: 'YYYY-MM-DD',
              calendarTodayLabel: 'Today'
            }
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}, {type: 'image'}, {type: 'code'}]
        }
    ]
}

export default post