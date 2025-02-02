import style from './Banner.module.scss';

interface BannerProps {
	bannerImage: string;
}

export const Banner: React.FC<BannerProps> = ({ bannerImage }) => {
	return (
		<div className={style.bannerContainer}>
			<img className={style.banner} src={bannerImage} alt="Banner" />
		</div>
	);
};
