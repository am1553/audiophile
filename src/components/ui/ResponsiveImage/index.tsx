
type ResponsiveImageProps = {
    mobileImage: string;
    tabletImage: string;
    desktopImage: string;
}

export const ResponsiveImage = ({mobileImage, tabletImage, desktopImage} : ResponsiveImageProps) => {
    const MobileImage = () => {
        return(
            <img src={mobileImage} alt="" className='md:hidden rounded-lg'/>
        )
    }
    const TabletImage = () => {
        return(
            <div className="bg-light-grey w-full h-[400px] rounded-lg max-md:hidden lg:hidden">
                <img src={tabletImage} alt=""  className='h-full object-cover mx-auto'/>
            </div>
        )
    }
    const DesktopImage = () => {
        return(
            <img src={desktopImage} alt="" className='max-lg:hidden rounded-lg'/>
        )
    }
    return(
        <div className="w-full">
            <MobileImage />
            <TabletImage />
            <DesktopImage />
        </div>
    )
}