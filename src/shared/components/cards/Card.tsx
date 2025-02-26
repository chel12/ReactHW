import React from 'react';

interface Props {
	title?: string;
	description?: string;
	price?: string;
	image: string;
}

export const Card: React.FC<Props> = ({ title, price, image, description }) => {
	return (
		<div className={description ? 'desc' : 'info'}>
			<div className="card-content">
				<img
					className={
						description ? 'description-image' : 'price-image'
					}
					src={`${image}`}
					alt=""
				/>

				{description && (
					<div className="card-description">
						<div className="card-description__title">
							<h5>{title}</h5>
						</div>
						<div className="card-description__subtitle">
							<p>{description}</p>
						</div>
					</div>
				)}
				{price && (
					<div className="card-info">
						<div className="card-info__title">
							<p>{title}</p>
						</div>
						<div className="card-info__price">
							<p>от {price} ₽.</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
