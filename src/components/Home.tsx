import {
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiMongodb,
  DiMysql,
  DiNodejs,
  DiPostgresql,
  DiReact,
  DiPython
} from 'react-icons/di'
import { SiExpress, SiNestjs, SiNextdotjs } from 'react-icons/si'
import { FaArrowCircleRight } from "react-icons/fa";

export default function Home() {
	return (
		<>
			<h2 className='text-4xl font-medium'>Hola 👋</h2>
			<hr className='my-4 h-px border-0 bg-gray-400 dark:bg-slate-700' />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
				consequatur nihil quasi nam, esse cum necessitatibus laborum, dolorum
				deleniti itaque, molestias in minima ratione voluptatum eum aliquam quo
				eos libero!
			</p>
			<br />
			<h2 className='text-2xl font-medium'>Tecnologias</h2>
			<hr className='my-4 h-px border-0 bg-gray-400 dark:bg-slate-700' />
			<div className='flex flex-wrap text-4xl gap-5'>
				<DiHtml5 />
				<DiCss3 />
				<DiJavascript />
				<DiNodejs />
				<DiReact />
				<DiMongodb />
				<DiPostgresql />
				<DiMysql />
				<SiNestjs />
				<SiExpress />
				<DiPython />
				<SiNextdotjs />
			</div>
			<br />
			<h2 className='text-2xl font-medium'>Educaci&oacute;n</h2>
			<hr className='my-4 h-px border-0 bg-gray-400 dark:bg-slate-700' />
			<ul className='space-y-4'>
				<li>
					<FaArrowCircleRight className='inline' />
					<span className='ml-2 font-semibold'>Certificado Python Basico</span>
					<div className='text-sm text-gray-600 mt-1'>2023</div>
				</li>
			</ul>
		</>
	)
}
