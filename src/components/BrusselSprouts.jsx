import PropTypes from 'prop-types';

const BrusselSprouts = (props) => {
	const { brusselSprouts } = props;

	return (
		<div className='food'>
			{brusselSprouts.length > 0 && (
				<>
					{brusselSprouts.length === 9 && <img src='/images/brussels-sprouts.jpg' />}
					<ol>
						{brusselSprouts.map((e) => (
							<li key={e}>{e}</li>
						))}
					</ol>
				</>
			)}
		</div>
	);
};

export default BrusselSprouts;

BrusselSprouts.propTypes = {
	brusselSprouts: PropTypes.array,
};
