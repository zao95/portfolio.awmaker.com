import Index from "./module/Index"
import Title from "./section1/Title"
import Contents from "./section1/Contents"

import "../../styles/section/Section1.sass"

const Section1 = () => {
	return (
        <>
            <Index sectionNumber="1" indexNumber="02" title="website" subTitle="online portfolio" />
            <Title />
            <Contents />
        </>
    )
}

export default Section1