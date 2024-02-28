import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import profileImg from '@/assets/profile.jpg'

export default function Profile() {
	return (
		<section className='flex flex-col w-1/3 items-center max-md:w-full max-md:flex-row max-md:justify-center max-md:items-center'>
			<figure className='rounded-full overflow-hidden w-40 border-2 border-light-accent-100 dark:border-dark-accent-100 p-[2px] max-md:w-1/4'>
				<Image
					src={profileImg}
					alt='profile'
					className='rounded-full'
				/>
			</figure>
			<div className='flex flex-col gap-3 mt-5'>
				<h1 className='text-2xl font-medium'>
					Dionicio Vargas
				</h1>
				<a
					href='https://github.com/theblaze98'
					target='_blank'
					className='flex gap-2 items-center text-light-text-200 dark:text-dark-text-200 text-sm ml-4'>
					<FaGithub /> theblaze98
				</a>
				<a
					href='https://linkedin.com/in/dionicio-vargas-832821237/'
					target='_blank'
					className='flex gap-2 items-center text-light-text-200 dark:text-dark-text-200 text-sm ml-4'>
					<FaLinkedin /> Dionicio Vargas
				</a>
				<a
					href='mailto:dioniciovargas1226@gmail.com?Subject=Hola%20Dionicio%20%F0%9F%91%8B'
					className='flex gap-2 items-center text-light-text-200 dark:text-dark-text-200 text-xs ml-4'>
					<FaEnvelope /> dioniciovargas1226@gmail.com
				</a>
			</div>
		</section>
	)
}
