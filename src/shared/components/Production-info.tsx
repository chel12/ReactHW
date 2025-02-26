import React from 'react';
import { Banner } from './banners/Banner';

interface Props {
	className?: string;
}

export const ProductionInfo: React.FC<Props> = ({ className }) => {
	return (
		<section className="production-info">
			<div className="production-info__header">
				<div className="container">
					<div className="production-info__inner">
						<Banner
							type="video"
							src="/video/video.mp4"
							title="Презентация нашей
							коллекции одежды 2021"
						/>
					</div>
				</div>
			</div>

			<div className="production-info__body">
				<div className="container">
					<div className="production-info__inner-body">
						<div className="production-info__title">
							<h3>
								Производство одежды 
								для компаний, брендов,
								 артистов
							</h3>
						</div>

						<div className="production-info__description">
							<p>
								Наша команда по разработке и производству одежды
								может реализовать проекты любой сложности,
								независимо от их масштаба. Мы можем взять на
								себя всю работу под ключ, или решить конкретные
								задачи на любом из этапов производства.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="production-info__footer">
				<div className="container"></div>
			</div>
		</section>
	);
};
