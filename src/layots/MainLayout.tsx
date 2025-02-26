import React from 'react';
import { Header } from '../shared/components/Header';
import { Price } from '../pages/Price';

export const MainLayout: React.FC = () => {
	return (
		<>
			<Header />
			<div className="wrapper">
				<div className="container">
					<Price />
				</div>
			</div>
		</>
	);
};
