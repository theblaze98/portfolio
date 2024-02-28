'use client'
import useFetch from '@/hooks/useFetch'
import { NotionDatabaseInterface } from '@/interfaces/notion-database.interface'

export default function Projects() {
	const data = useFetch<NotionDatabaseInterface>('/api/projects')

	return (
		<div>
			<h1>Projects</h1>
			<div className='flex gap-5'>
				{data?.data.map(e => (
					<div key={e.id} className='p-4 bg-light-bg-200 dark:bg-dark-bg-200 border-gray-600 rounded-md'>
						<span>
							{e.properties['Nombre del proyecto'].title[0].text.content}
						</span>
            <br />
            <span>
              {e.properties.Estado.status.name}
            </span>
					</div>
				))}
			</div>
		</div>
	)
}
