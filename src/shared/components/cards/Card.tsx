import React from 'react';

interface Props {
	title: string;
	description?: string;
	price?: string;
	image: string;
}

export const Card: React.FC<Props> = ({ title, price, image, description }) => {
	return (
		<div className="card">
			<div className="card-content">
				<img src={`${image}`} alt={`${title}`} />
			</div>
			{description ? (
				<div className="card-description">
					<div className="card-description__title">
						<h5>{title}</h5>
					</div>
					<div className="card-description__subtitle">
						<p>{description}</p>
					</div>
				</div>
			) :  (
				<div className="card-info">
					<div className="card-info__title">
						<p> {title}</p>
					</div>
					<div className="card-info__price">
						<p className="card-info__price--price">от {price} ₽.</p>
					</div>
				</div>
			)}
		</div>
	);
};
