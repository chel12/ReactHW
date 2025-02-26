import React, { useRef } from 'react';

interface BackgroundProps {
	type: 'image' | 'video';
	src: string;
	className?: string;
	title?: string;
	description?: string;
}

export const Banner: React.FC<BackgroundProps> = ({
	type,
	src,
	title,
	className,
	description,
}): React.JSX.Element => {
	const [isPlaying, setIsPlaying] = React.useState(true);
	const videoRef = useRef<HTMLVideoElement>(null);
	const togglePlayPause = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	return (
		<aside className="banner">
			<div className="container">
				<div className="banner__inner">
					<div className="banner__background">
						{type === 'image' ? (
							<img
								className="banner__image"
								src={src}
								alt="background"
							/>
						) : (
							<video
								ref={videoRef}
								autoPlay
								muted
								loop
								className="banner__video">
								<source src={src} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						)}

						<div className="banner-content">
							<div className="banner-content__top">
								<h5>{title}</h5>
							</div>
							<div className="banner-content__inner">
								{type === 'video' && (
									<button
										className="banner-content__button"
										onClick={togglePlayPause}>
										{isPlaying ? 'Pause' : 'Play'}
									</button>
								)}
							</div>
						</div>

						{/* {type === 'image' && (
					<div className="banner__inner">
						<div className="banner-title">
							<h5>{title}</h5>
						</div>

						<div className="banner-content">
							<p className="banner-content__text">
								{description}
							</p>
						</div>
					</div>
				)} */}
					</div>
				</div>
			</div>
		</aside>
	);
};
