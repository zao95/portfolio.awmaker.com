import Index from "./module/Index"
import Title from "./section5/Title"
import Contents from "./section5/Contents"

import "../../styles/section/Section5.sass"

const Section5 = () => {
	return (
        <>
            <Index sectionNumber="5" indexNumber="03" title="application" subTitle="restai" />
            <Title />
            <Contents />
        </>
    )
}

export default Section5