import Index from "./module/Index"
import Title from "./section3/Title"
import Contents from "./section3/Contents"

import "../../styles/section/Section3.sass"

const Section3 = () => {
	return (
        <>
            <Index sectionNumber="3" indexNumber="03" title="application" subTitle="taja" />
            <Title />
            <Contents />
        </>
    )
}

export default Section3