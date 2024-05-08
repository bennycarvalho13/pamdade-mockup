import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div id="carouselExampleAutoplaying" className="carousel slide mt-0" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="5000">
						<img src="https://placehold.co/600x400/darkblue/white?text=Imagem" className="d-block w-100" alt="1" />
					</div>
					<div className="carousel-item" data-bs-interval="5000">
						<img src="https://placehold.co/600x400/darkblue/white?text=Imagem+2" className="d-block w-100" alt="2" />
					</div>
					<div className="carousel-item" data-bs-interval="5000">
						<img src="https://placehold.co/500x400/darkblue/white?text=Imagem+3" className="d-block w-100" alt="3" />
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<div className="text-center my-5 row align-items-center">
				<div className="col-6">
					<h1 className="text-black">+1000 Clientes Atendidos</h1>
				</div>
				<div className="col-6">
					<h1 className="text-black">+20 Anos de Mercado</h1>
				</div>
			</div>
			<div id="carouselExampleIndicators" class="carousel slide">
				<div class="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="https://placehold.co/500x100/darkslateblue/white?text=Mais+Imagens" class="d-block w-100" alt="..." />
					</div>
					<div class="carousel-item">
						<img src="https://placehold.co/500x100/darkslateblue/white?text=Mais+Imagens+2" class="d-block w-100" alt="..." />
					</div>
					<div class="carousel-item">
						<img src="https://placehold.co/500x100/darkslateblue/white?text=Mais+Imagens+3" class="d-block w-100" alt="..." />
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
			<div style={{ overflowX: "scroll" }} className="d-flex flex-row m-4">
				<div className="col-2 ms-2">
					<div className="card">
						<img src="https://placehold.co/100x100/darkcyan/white?text=Card+1" className="card-img-top" alt="..." />
						<div className="card-body row justify-content-center">
							<p className="m-2 card-text text-center fs-5 px-1">Operador de motoserrra</p>
							<h4 className="m-2 card-text text-primary fs-5 text-center px-1">R$ 348 PIX</h4>
							<a href="#" class="btn btn-outline-primary fs-4 m-2">Contratar<i className="fa-solid mx-2 fa-cart-plus"></i></a>
						</div>
					</div>
				</div>
				<div className="col-2 mx-2">
					<div className="card">
						<img src="https://placehold.co/100x100/darkcyan/white?text=Card+2" className="card-img-top" alt="..." />
						<div className="card-body row justify-content-center">
							<p className="m-2 card-text text-center fs-5 px-1">Lanterneiro</p>
							<h4 className="m-2 card-text text-primary fs-5 text-center px-1">R$ 418 PIX</h4>
							<a href="#" class="btn btn-outline-primary fs-4 m-2">Contratar<i className="fa-solid mx-2 fa-cart-plus"></i></a>
						</div>
					</div>
				</div>
				<div className="col-2 mx-2">
					<div className="card">
						<img src="https://placehold.co/100x100/darkcyan/white?text=Card+3" className="card-img-top" alt="..." />
						<div className="card-body row justify-content-center">
							<p className="m-2 card-text text-center fs-5 px-1">Conferente</p>
							<h4 className="m-2 card-text text-primary fs-5 text-center px-1">R$ 367 PIX</h4>
							<a href="#" class="btn btn-outline-primary fs-4 m-2">Contratar<i className="fa-solid mx-2 fa-cart-plus"></i></a>
						</div>
					</div>
				</div>
				<div className="col-2 mx-2">
					<div className="card">
						<img src="https://placehold.co/100x100/darkcyan/white?text=Card+4" className="card-img-top" alt="..." />
						<div className="card-body row justify-content-center">
							<p className="m-2 card-text text-center fs-5 px-1">Auxiliador de Expedição</p>
							<h4 className="m-2 card-text text-primary fs-5 text-center px-1">R$ 295 PIX</h4>
							<a href="#" class="btn btn-outline-primary fs-4 m-2">Contratar<i className="fa-solid mx-2 fa-cart-plus"></i></a>
						</div>
					</div>
				</div>
				<div className="col-2 mx-2">
					<div className="card" >
						<img src="https://placehold.co/100x100/darkcyan/white?text=Card+5" className="card-img-top" alt="..." />
						<div className="card-body row justify-content-center">
							<p className="m-2 card-text text-center fs-5 px-1">Empilhador</p>
							<h4 className="m-2 card-text text-primary fs-5 text-center px-1">R$ 326 PIX</h4>
							<a href="#" class="btn btn-outline-primary fs-4 m-2">Contratar<i className="fa-solid mx-2 fa-cart-plus"></i></a>
						</div>
					</div>
				</div>
				<div className="col-2 mx-2">
					<div className="card">
						<img src="https://placehold.co/100x100/darkcyan/white?text=Card+6" className="card-img-top" alt="..." />
						<div className="card-body row justify-content-center">
							<p className="m-2 card-text text-center fs-5 px-1">Carga e Descarga</p>
							<h4 className="m-2 card-text text-primary fs-5 text-center px-1">R$ 412 PIX</h4>
							<a href="#" class="btn btn-outline-primary fs-4 m-2">Contratar<i className="fa-solid mx-2 fa-cart-plus"></i></a>
						</div>
					</div>
				</div>
				<div className="col-2 mx-2">
					<div className="card">
						<img src="https://placehold.co/100x100/darkcyan/white?text=Card+7" className="card-img-top" alt="..." />
						<div className="card-body row justify-content-center">
							<p className="m-2 card-text text-center fs-5 px-1">Operador de motoserrra</p>
							<h4 className="m-2 card-text text-primary fs-5 text-center px-1">R$ 257 PIX</h4>
							<a href="#" class="btn btn-outline-primary fs-4 m-2">Contratar<i className="fa-solid mx-2 fa-cart-plus"></i></a>
						</div>
					</div>
				</div>
				<div className="col-2 mx-2">
					<div className="card">
						<img src="https://placehold.co/100x100/darkcyan/white?text=Card+8" className="card-img-top" alt="..." />
						<div className="card-body row justify-content-center">
							<p className="m-2 card-text text-center fs-5 px-1">Ajudante de Armazém</p>
							<h4 className="m-2 card-text text-primary fs-5 text-center px-1">R$ 233 PIX</h4>
							<a href="#" class="btn btn-outline-primary fs-4 m-2">Contratar<i className="fa-solid mx-2 fa-cart-plus"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
			<form className="col-8">
			<label for="nome" className="form-label">Nome Completo</label>
				<div className="mb-3 d-flex">
					<input type="text" className="forms form-control me-2" id="nome" placeholder="Nome" aria-describedby="nome" />
					<input type="text" className="forms form-control" id="sobrenome" placeholder="Sobrenome" aria-describedby="sobrenome" />
				</div>
				<div className="mb-3">
					<label for="cnpj" className="form-label">CNPJ</label>
					<input type="text" className="forms form-control" placeholder="XX.XXX.XXX/XXXX-XX"  id="cnpj" />
				</div>
				<div className="mb-3">
					<label for="telefone" className="form-label">Telefone</label>
					<input type="number" className="forms form-control" placeholder="00 0000-0000" id="telefone" />
				</div>
				<div className="mb-3">
					<label for="email" className="form-label">E-mail</label>
					<input type="email" className="forms form-control" placeholder="Seu email" id="email" />
				</div>
				<div className="mb-3">
					<label for="mensagem" className="form-label">Mensagem</label>
					<textarea id="mensagem" className="forms form-control bg bg-dark-subtle" placeholder="EX: Preciso de Funcionarios..." maxLength={250} rows="3"></textarea>
				</div>
				<div className="d-flex justify-content-end">
				<button type="submit" className="btn btn-lg btn-info">Enviar</button>
				</div>
			</form>
			</div>
		</div>
	);
};
