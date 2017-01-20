import React, { PropTypes } from 'react'

const MainLayout = (props) => {
	return (
		<div className="container">
			{props.children}
		</div>
	)
}

export default MainLayout
