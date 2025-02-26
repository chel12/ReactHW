import React, { JSX } from 'react';

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = (): JSX.Element => {
	return (
		<header className="header">
			<div className="container">
				<div className="content">
					<nav className="header-nav">
						<ul className="header-nav__list">
							<li className="header-nav__item">
								<a
									className="header-nav__link"
									href="tel:+7(925)3431696">
									+7 925 343 16 96
								</a>
								<span className="header-nav__span">
									Перезвоните мне
								</span>
							</li>
							<li className="header-nav__item">
								<a
									className="header-nav__link header-nav__link--big"
									href="#">
									famfactory
								</a>
								<span className="header-nav__span header-nav__span--big">
									швейная фабрика
								</span>
							</li>
							<li className="header-nav__item">
								<a className="header-nav__link" href="">
									mail@famfactory.ru
								</a>
								<span className="header-nav__span">
									Наша почта
								</span>
							</li>
						</ul>
					</nav>
					<div className="header-title">
						<span className="header-title__span">
							Сделано <br /> в Санкт-Петербурге
						</span>

						<button className="header-title__button btn">
							Отправить запрос
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};
