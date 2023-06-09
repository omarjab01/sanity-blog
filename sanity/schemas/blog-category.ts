const categoria = {
    name: 'categoria',
    title: 'Categoria',
    type: 'document',
    fields: [
        {
            name: 'nome',
            title: 'Nome',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'nome'}
        },
    ]
}

export default categoria