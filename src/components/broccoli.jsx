import PropTypes from 'prop-types';

const Broccoli = (props) => {
	const { broccoli } = props;

	return (
		<div className='food'>
			{broccoli.length > 0 && (
				<>
					{broccoli.length === 8 && <img src='/images/broccoli.jpg' />}
					<ol>
						{broccoli.map((e) => (
							<li key={e}>{e}</li>
						))}
					</ol>
				</>
			)}
		</div>
	);
};

export default Broccoli;

Broccoli.propTypes = {
	broccoli: PropTypes.array,
};