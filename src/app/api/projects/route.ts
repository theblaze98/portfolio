import { Client } from '@notionhq/client'

const client = new Client({
	auth: process.env.NOTION_API_SECRET,
})

export async function GET(req: Request) {
	try {
		const response = await client.databases.query({
			database_id: `${process.env.NOTION_DB_ID}`,
		})

    return Response.json({data: response.results})
	} catch (error) {
		console.log(error)
	}
}
