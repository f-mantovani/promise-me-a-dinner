import PropTypes from 'prop-types';

const Steak = (props) => {
	const { steak } = props;

	return (
		<div className='food'>
			{steak.length > 0 && (
				<>
					{steak.length === 9 && <img src='/images/steak.jpg' />}
					<ol>
						{steak.map((e) => (
							<li key={e}>
								<span>{e}</span>
							</li>
						))}
					</ol>
				</>
			)}
		</div>
	);
};

export default Steak;

Steak.propTypes = {
	steak: PropTypes.array,
};
