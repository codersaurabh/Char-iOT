import React from 'react';
import Footer from '../generic/footer';
import '../../styles/index.scss';
import {Router, Route, Link} from 'react-router'
import Header from '../generic/header';
import AppBodyComponent from './../components/app/appBodyComponent';
import $ from 'jquery';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		$(window).ready(function() {
			window.scrollTo(0, 0);
			$("#ScrollTop").click(function() {
				$('html, body').animate({
					scrollTop: $("#top2").offset().top
				}, 2000);
			});
		});
	}
	render() {
		return (
			<div className="main">
				<div>
					<Header/>
				</div>
				<div id="ScrollTop">
					<i className="fa fa-chevron-up" aria-hidden="true"></i>
				</div>
				<section id='top2' className="section-1">
					<div className="container">
						<div className="row">
							<AppBodyComponent/>
						</div>
					</div>
				</section>
				<Footer/>
			</div>
		)
	}
}