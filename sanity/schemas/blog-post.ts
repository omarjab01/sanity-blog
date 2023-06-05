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
            name: 'tag',
            title: 'Tag',
            type: 'string'
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
            title: 'dataPubblicazione',
            name: 'Data',
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