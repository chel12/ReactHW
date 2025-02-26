import React from 'react';
import { Banner } from './banners/Banner';
import { Card } from './cards/Card';

const services = [
	{
		id: '1',
		img: '/img/arr1.png',
		title: 'Разработка лекал и дизайна',
		description:
			'Поможем создать уникальные лекала для вашей одежды или адаптировать уже имеющиеся. Разработаем индивидуальный дизайн ваших товаров',
	},
	{
		id: '2',
		img: '/img/arr2.png',
		title: 'Пошив одежды на заказ',
		description:
			'Пошив трикотажных изделий любой сложности и в любых объемах, как по вашим образцам, так и по нашим базовым лекалам',
	},
	{
		id: '3',
		img: '/img/arr3.png',
		title: 'Бренд одежды под ключ',
		description:
			'Поможем разработать линейку одежды для вашего бренда, от пошива до реализации.',
	},
];
export const ProductionInfo: React.FC = () => {
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
								Производство одежды для компаний, брендов,
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
				<div className="container">
					<div className="production-info__footer-inner">
						{services.map((item) => (
							<Card
								key={item.id}
								image={item.img}
								title={item.title}
								description={item.description}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
