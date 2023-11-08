import { SVGProps } from 'react'

type Props = {
	className?: string
	fill?: string
} & SVGProps<SVGSVGElement>

export const TwitterIcon = ({ className,fill, ...rest }: Props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 256 209"
		{...rest}
		className={`w-full h-auto ${className}`}
	>
		<path fill="none" d="M0 0h256v209H0z" />
		<path
			fill="#55acee"
			d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
		/>
	</svg>
)

export const CopySVG = ({ className, ...rest }: Props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		className={`w-full h-auto ${className}`}
		{...rest}
	>
		<g stroke="#220701" strokeWidth={1.5}>
			<path d="M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16v-5Z" />
			<path d="M6 19a3 3 0 0 1-3-3v-6c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h4a3 3 0 0 1 3 3" />
		</g>
	</svg>
)

export const CallSVG = ({ className, fill, ...rest }: Props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		data-name="Flat Line"
		viewBox="-2.4 -2.4 28.8 28.8"
		{...rest}
		className={`w-full h-auto ${className}`}
		fill={fill}
	>
		<path
			d="M21 15v3.93a2 2 0 0 1-2.29 2A18 18 0 0 1 3.14 5.29 2 2 0 0 1 5.13 3H9a1 1 0 0 1 1 .89 10.74 10.74 0 0 0 1 3.78 1 1 0 0 1-.42 1.26l-.86.49a1 1 0 0 0-.33 1.46 14.08 14.08 0 0 0 3.69 3.69 1 1 0 0 0 1.46-.33l.49-.86a1 1 0 0 1 1.3-.38 10.74 10.74 0 0 0 3.78 1 1 1 0 0 1 .89 1Z"
			style={{
				strokeWidth: 2,
			}}
		/>
		<path
			d="M21 8V3h-5"
			style={{
				fill: 'none',
				stroke: '#76f98e000000',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
				strokeWidth: 2,
			}}
		/>
		<path
			d="m21 3-5 5m4.11 6a10.74 10.74 0 0 1-3.78-1 1 1 0 0 0-1.26.42l-.49.86a1 1 0 0 1-1.46.33 14.08 14.08 0 0 1-3.69-3.69 1 1 0 0 1 .33-1.46l.86-.49a1 1 0 0 0 .38-1.3 10.74 10.74 0 0 1-1-3.78A1 1 0 0 0 9 3H5.13a2 2 0 0 0-2 2.29 18 18 0 0 0 15.58 15.57 2 2 0 0 0 2.29-2V15a1 1 0 0 0-.89-1Z"
			data-name="primary"
			style={{
				fill: 'none',
				stroke: '#76f98e000000',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
				strokeWidth: 2,
			}}
		/>
	</svg>
)

export const MailSVG = ({ className,fill, ...rest }: Props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlSpace="preserve"
		fill={fill}
		
		stroke="#76f98e"
		viewBox="0 0 512 512"
		className={`w-full h-auto ${className}`}
		{...rest}
	>
		<path d="M248.434 291.265c4.203 4.118 10.929 4.118 15.131 0L475.793 83.271c6.78-6.645 2.214-18.325-7.278-18.371H43.485c-9.492.047-14.058 11.727-7.278 18.371l212.227 207.994z" />
		<path d="M511.999 108.265c-.071-9.472-11.614-14.129-18.378-7.498L264.74 325.084c-4.853 4.759-12.626 4.759-17.48 0L18.38 100.767C11.615 94.137.073 98.794.002 108.265c-.002.114-.002.227-.002.341v294.787C0 427.532 19.568 447.1 43.707 447.1h424.585c24.139 0 43.707-19.568 43.707-43.707V108.606a19.38 19.38 0 0 0 0-.341z" />
	</svg>
)

export const LocationSVG = ({ className,fill, ...rest }: Props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlSpace="preserve"
		viewBox="0 0 64 64"
		className={`w-full h-auto ${className}`}
		fill={fill}

		{...rest}
	>
		<g>
			<path d="M32 0C18.745 0 8 10.745 8 24c0 5.678 2.502 10.671 5.271 15l17.097 24.156a2 2 0 0 0 3.264 0L50.729 39C53.375 35.438 56 29.678 56 24 56 10.745 45.255 0 32 0zm0 38c-7.732 0-14-6.268-14-14s6.268-14 14-14 14 6.268 14 14-6.268 14-14 14z" />
			<path d="M32 12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.523 0-10-4.478-10-10s4.477-10 10-10 10 4.478 10 10-4.477 10-10 10z" />
		</g>
	</svg>
)

export const XSVG = ({ className, ...rest }: Props) => (
	<svg
		viewBox="0 0 24 24"
		aria-hidden="true"
		className={`r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp ${className}`}
		{...rest}
	>
		<g>
			<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
		</g>
	</svg>
)
