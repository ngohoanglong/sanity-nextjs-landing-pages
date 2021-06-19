export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60cd7e9fd668d80072044cc8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-z3finahm',
                  apiId: '3a99bad2-aa60-4baa-8983-c490ca0f1c9d'
                },
                {
                  buildHookId: '60cd7e9fd772a32e1604450c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nxnb398t',
                  apiId: '69565fb0-038a-46ab-8c9d-d0b5177974b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ngohoanglong/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nxnb398t.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
