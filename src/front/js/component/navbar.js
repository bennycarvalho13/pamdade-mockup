import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import logo from "../../img/logo-pandape.png"

export const Navbar = () => {
	return (
		<nav className="navbar-white">
			<div className="navbar-brand d-flex justify-content-between">
				<Link to="/">
					<img
						className="d-inline-flex image-fluid align-center my-auto ms-3"
						src={logo}
						alt="Logo"
					/>
				</Link>
				<div className="d-inline-flex p-1">
					<div className="dropdown-center text-center py-0">
						<button className="btn btn-lg btn-white dropdown-toggle text-black h5 text-center text-uppercase" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Serviços
						</button>
						<ul class="dropdown-menu">
							<li><p className="dropdown-header h1">Mão de Obra</p></li>
							<li><a className="dropdown-item h5" href="#">Terceirização</a></li>
							<li><a className="dropdown-item h5" href="#">Temporarios</a></li>
						</ul>
						<a id="options" className="fs-5 me-2 text-black text-center text-uppercase" href="#">Como funciona</a>
						<a id="options" className="fs-5 mx-2 text-black text-center text-uppercase" href="#">Contato</a>
						<a id="options" className="fs-5 mx-2 text-black text-center text-uppercase" href="#">Vagas</a>
						<a id="options" className="fs-5 ms-2 text-black text-center text-uppercase" href="#">Franquias</a>
					</div>
					<div style={{ maxWidth: "200px" }} className="input-group mx-3 my-auto">
						<input type="text" className="form-control" placeholder="Pesquise" aria-label="search" aria-describedby="button-addon2" />
						<button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass fa-rotate-90 fa-sm"></i></button>
					</div>
					<button type="button" className="btn btn-white"><i className="fa-solid fa-circle-user fa-2xl mx-2"></i>Login</button>
					<button type="button" className="btn btn-white"><i className="fa-solid fa-cart-shopping fa-2xl"></i></button>
				</div>
			</div>
		</nav>
	);
};
