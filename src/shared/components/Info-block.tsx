import React from 'react';

interface Props {
	className?: string;
}

export const InfoBlock: React.FC<Props> = ({ className }) => {
	
	return (
		<section className={className}>
			<div className="info-block__top">
				<div className="container">
					<div className="info-block__block-inner">
						<div className="info-block__title">
							<h3>
								Современный <br /> мерчендайз для бизнеса
							</h3>
						</div>
						<div className="info-block__description">
							<p>
								Над реализацией проектов по разработке и
								производству одеждыи аксессураов трудится
								огромная команда профессионалов, поэтому мы
								можем создавать проекты любой сложности и
								масштабов под ключ или воплотить конкретные
								задачи на любом из этапов производства.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="info-block__content">
				<div className="container">
					<div className="info-block__content-inner">
						<div className="info-block__content">

						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
