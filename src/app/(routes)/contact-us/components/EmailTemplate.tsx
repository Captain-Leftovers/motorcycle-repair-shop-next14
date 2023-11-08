import * as React from 'react'

interface EmailTemplateProps {
	name: string
	senderEmail: string
	message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	name,
	senderEmail,
	message,
}) => (
	<div>
		<p className=''>
			<strong>Name:</strong> {name}
		</p>
		<p className=''>
			<strong>Email:</strong> {senderEmail}
		</p>
		<p className=''>
			<strong>Message:</strong> {message}
		</p>
	</div>
)
