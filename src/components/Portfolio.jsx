import React from 'react'
import Sections from "./Sections"
import Main from "./Main"
import Footer from "./Footer"
import Nav from "./Nav"
import Loading from "./common/Loading"

// 할 것.
// 1.	Main Page에 중앙부 이미지 추가
// 		마름모를 상하좌우로 넣고
// 		마름모끼리 선이 연결되거나 점이 이동하는 등의 애니메이션과
// 		마름모가 확대/축소 되는 등의 움직임 만들기
// 		마름모들 중앙엔 흰색 배경을 넣고 Developer & Designer Lee Jeong-Woo 넣거나 하기
// 		글씨가 많이 들어가므로 마름모를 위아래는 좁게 좌우는 넓게 만들기
// 2.	resize 시, slide 다시 렌더링시키기

const Portfolio = () => {
	return (
		<>
			<Loading />
			<Nav />
			<Main />
			<Sections />
			<Footer />
		</>
	)
}

export default Portfolio
