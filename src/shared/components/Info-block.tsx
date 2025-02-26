import React from 'react';
import { Card } from './cards/Card';

const categories = [
	{ id: '1', img: '/public/img/item1.png', title: 'Худи', price: '1650' },
	{ id: '2', img: '/public/img/item2.png', title: 'Футболки', price: '510' },
	{ id: '3', img: '/public/img/item3.png', title: 'Свитшоты', price: '890' },
	{ id: '4', img: '/public/img/item4.png', title: 'Штаны', price: '1230' },
	{ id: '5', img: '/public/img/item5.png', title: 'Шопперы', price: '330' },
	{ id: '6', img: '/public/img/item6.png', title: 'Кепки', price: '400' },
];
export const InfoBlock: React.FC = (): React.ReactNode => {
	return (
		<section className="info-block">
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
							{categories.map((item) => (
								<Card
									key={item.id}
									title={item.title}
									price={item.price}
									image={item.img}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
