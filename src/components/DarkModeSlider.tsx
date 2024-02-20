import { useContext } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { ThemeContext } from '../contexts/Theme'

export default function DarkModeSlider() {
	const { theme, setTheme, isDark } = useContext(ThemeContext)

	const handleChange = () => {
		setTheme(theme === 'dark' ? 'ligth' : 'dark')
	}

	return (
		<div>
			<label htmlFor='darkmode' className='cursor-pointer'>
				<input
					type='checkbox'
					name='darkmode'
					id='darkmode'
					checked={isDark}
					onChange={handleChange}
					className='peer hidden'
				/>
				{isDark ? (
					<FaMoon className='text-2xl text-slate-400' />
				) : (
					<FaSun className='text-2xl text-yellow-300' />
				)}
			</label>
		</div>
	)
}
