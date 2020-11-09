import Index from "./module/Index"
import Title from "./section4/Title"
import Contents from "./section4/Contents"

import "../../styles/section/Section4.sass"

const Section4 = () => {
	return (
        <>
            <Index sectionNumber="4" indexNumber="03" title="application" subTitle="nutry" />
            <Title />
            <Contents />
        </>
    )
}

export default Section4