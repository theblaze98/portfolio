import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { NotionDatabaseInterface } from '@/interfaces/notion-database.interface'

export default async function Projects() {
	const res = await fetch('/api/projects')
	const data: NotionDatabaseInterface | null = await res.json()

	const projects = data?.data.filter(
		project => project.properties.Estado.status.id === 'done'
	)

	return (
		<div>
			<div className='flex gap-5 flex-wrap justify-center'>
				{projects?.map(e => (
					<div
						key={e.id}
						className='flex flex-col p-4 bg-light-bg-200 border-2 dark:bg-dark-bg-200 dark:border-dark-primary-100 border-light-primary-200 rounded-md basis-[calc(50%-10px)] max-md:basis-full'>
						<h3 className='text-lg text-light-accent-200 dark:text-blue-500'>
							{e.properties['Nombre del proyecto'].title[0].text.content}
						</h3>

						{e.properties.Tecnologias.multi_select ? (
							<div className='text-sm opacity-80 flex flex-wrap'>
								{e.properties.Tecnologias.multi_select
									.map(tec => tec.name)
									.join(', ')}
							</div>
						) : (
							''
						)}
						<div className='text-lg text-light-accent-200 dark:text-blue-500 self-end  mt-2 flex gap-2'>
							<a
								href={e.properties.github_url.rich_text[0].text.content}
								target='_blank'>
								<FaGithub />
							</a>
							{e.properties.demo_url.rich_text[0] ? (
								<a
									href={e.properties.demo_url.rich_text[0].text.content}
									target='_blank'>
									<FaArrowUpRightFromSquare />
								</a>
							) : (
								''
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
