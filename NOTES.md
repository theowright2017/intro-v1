## ROUTING

# [...id] - catch all

    - all further params will re route to this

# [[...id]] - inclusive

    - also include the page for its parent folder, if not already available

# (dashboard) - grouping

    - everything under this folder will take from its layout.tsx

# templates

    - work the same way as layout, except they re-render on every route / param change
    - useful for animations, etc
    - if require re-render on route change

# _folderName - private

    - a folder in 'app' with _ will be private and not added to router


<!-- ------------- Server Components --------------- -->

## Components

# Server Components

    - Components are rendered from server by default!
    - Server components can be async..
    - rendered on the server
    - render immediately

# Client Components

    - add 'use client' to top of client component that uses useState / other state hook
    - can still be Server Side Rendered even though client component
    - if SSR
        - rendered on the server, executed on the client (js is executed on client after component rendered on server)
        - cannot access things like window, browser, client cache, etc
    - cannot pass props that are not data (non-serializable) between client and server components
    - need time to load and be parsed, maybe load data, etc


## Database

    - Database is sqlite
    - used this command to set up local
        - npx prisma init --datasource-provider sqlite
    - then ran 'npx prisma migrate dev' to connect