import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const MessageContainer = ({ clickFunction }) => {
	return (
		<div className="messageContainer" onClick={clickFunction}>
			<Avatar
				style={{
					margin: '10px',
					alignSelf: 'center',
					width: '60px',
					height: '60px',
				}}
			/>
			<div className="messageContainer__content">
				<p>
					<span className="bold">Card Collector</span> @amsportscards
				</p>
				<p>Messagin sneek preview</p>
			</div>
			<p style={{ margin: '10px' }}>Time</p>
		</div>
	);
};

export default MessageContainer;
