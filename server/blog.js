import { Hono } from 'hono'
import { serve } from '@hono/node-server'


const app = new Hono()

app.get('/', (c) => 
    c.text("dev server")
)

export default app

serve( {
    fetch: app.fetch,
    port: 3300
})