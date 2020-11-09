import Index from "./module/Index"
import Title from "./section2/Title"
import Contents from "./section2/Contents"

import "../../styles/section/Section2.sass"

const Section2 = () => {
	return (
        <>
            <Index sectionNumber="2" indexNumber="02" title="website" subTitle="countap" />
            <Title />
            <Contents />
        </>
    )
}

export default Section2