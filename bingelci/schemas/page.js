// schemas/page.js
export default {
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'content',
            type: 'string',
            title: 'Content'

        }
    ]
}