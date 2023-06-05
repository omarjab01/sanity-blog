import {PortableTextBlock} from 'sanity'

export type PostType = {
    _id: 'string',
    _createdAt: Date,
    title: 'string',
    description: 'string',
    tag: 'string',
    image: 'string',
    slug: 'string',
    content: PortableTextBlock[],
    dataPubblicazione: 'string',
    categoria: {nome: 'string', categoria: 'string'},
    autore: {nome: 'string'}
}