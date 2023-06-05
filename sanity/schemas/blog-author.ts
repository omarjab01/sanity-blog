const autore = {
    name: 'autore',
    title: 'Autore',
    type: 'document',
    fields: [
        {
            name: 'nome',
            title: 'Nome',
            type: 'string'
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
    ]
}

export default autore