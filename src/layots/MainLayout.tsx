import React from 'react';

interface Props {
	children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }): React.ReactNode => {
	return (
		<>
			<div className="wrapper">{children}</div>
		</>
	);
};
