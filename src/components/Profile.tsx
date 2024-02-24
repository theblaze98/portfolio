import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import profileImg from '../assets/profile.jpg'

export default function Profile() {
	return (
		<section className='flex flex-col w-1/3 gap-3 items-center max-md:w-full max-md:flex-row max-md:items-center max-md:justify-center'>
			<figure className='rounded-full overflow-hidden w-2/3 border-2 border-light-accent-100 dark:border-dark-accent-100 p-[2px] max-md:w-1/4'>
				<img
					src={profileImg}
					alt='profile'
					className='rounded-full'
				/>
			</figure>
			<div>
				<h1 className='mt-3 text-xl font-medium self-center'>
					Dionicio Vargas
				</h1>
				<a
					href='#'
					className='flex gap-2 items-center text-light-text-200 dark:text-dark-text-200 text-sm ml-4'>
					<FaGithub /> theblaze98
				</a>
				<a
					href='#'
					className='flex gap-2 items-center text-light-text-200 dark:text-dark-text-200 text-sm ml-4'>
					<FaLinkedin /> Dionicio Vargas
				</a>
				<a
					href='#'
					className='flex gap-2 items-center text-light-text-200 dark:text-dark-text-200 text-xs ml-4'>
					<FaEnvelope /> dioniciovargas1226@gamil.com
				</a>
			</div>
		</section>
	)
}
