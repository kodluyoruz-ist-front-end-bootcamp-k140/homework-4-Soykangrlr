function Homepage() {
  return (
 <>
     <div className= "slider mx-5 " >
    <div id="slider3" className="carousel slide carousel-fade my-4">
		<ol className="carousel-indicators">
			<li data-target="#slider3" data-slide-to="0" className="active"></li>
			<li data-target="#slider3" data-slide-to="1"></li>
			<li data-target="#slider3" data-slide-to="2"></li>
		</ol>
		<div className="carousel-inner" >
			<div className="carousel-item active">
				<img className="d-block w-100" src="img/ev2.jpg" alt=""/>
				<div className="carousel-caption d-none d-md-block">
					<h5>Slider Header 1</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eaque!</p>
				</div>
			</div>
			<div className="carousel-item" >
				<img className=" d-block w-100" src="img/ev.jpg" alt=""/>
				<div className="carousel-caption d-none d-md-block">
					<h5>Slider Header 1</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eaque!</p>
				</div>
			</div>
			<div className="carousel-item" >
				<img className= "d-block w-100 " src="img/ev2.jpg" alt=""/>
				<div className="carousel-caption d-none d-md-block">
					<h5>Slider Header 1</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eaque!</p>
				</div>
			</div>
		</div>
    </div>
</div>
<div className="card-group container">
	<div id="shadow" className="card mx-2">
	  <img src="img/saatılık1.jpeg" className="card-img-top" alt="..."/>
	  <div className="card-body">
		<h5 className="card-title text-danger">Satılık Konut</h5>
		<p className="card-text">
			Daireler - Ofisler - Villalar - Residance - Müstakil Ev - Yalı
		</p>	
		
		
     <a href="">
		<p  className="card-text"><small className="text-muted">Daha fazla görmek için tıklayınız
		</small></p></a>
	  </div>
	</div>
	<div id="shadow" className="card mx-2">
	  <img src="img/kiralık.jpeg" className="card-img-top" alt="..."/>
	  <div className="card-body">
		<h5 className="card-title text-danger">Kiralık Konut</h5>
		<p className="card-text">	Daireler - Ofisler - Villalar - Residance - Müstakil Ev - Yalı</p>
		<a href="">
			<p  className="card-text"><small className="text-muted">Daha fazla görmek için tıklayınız
			</small></p></a>
	  </div>
	</div>
	<div id="shadow" className="card mx-2">
	  <img src="img/arsa1.jpeg" className="card-img-top" alt="..."/>
	  <div className="card-body">
		<h5  className="card-title text-danger ">Satılık Arsa-Bahçe</h5>
		<p className="card-text">İmarlı Arsa - Yatırımlık Arsa - Tarla</p>
		<a href=""> <br/>
			<p className="card-text  "><small className="text-muted ">Daha fazla görmek için tıklayınız
			</small></p></a>
	  </div>
	</div>
  </div>

  <div className="accordion container mt-3" id="accordionExample">
	<div className="card">
	  <div className="card-header" id="headingOne">
		<h2 className="mb-0">
		  <button className="btn btn-block btn-outline-ofset text danger text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
			Hakkımızda
		  </button>
		</h2>
	  </div>
  
	  <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
		<div className="card-body">
			PROJE TEAMS GAYRİMENKUL 10 yıllık hizmet ve güven anlayışı müşteri memnuniyetiyle ile tüm Türkiye geneli ve ağırlıklı olarak Marmara bölgesinde danışmanlarımız ve yol arkadaşlarımızla müşterilerimize danışmanlık yaparak kazançlı ve memnun olması en büyük mutluluğumuz... Site yönetimi, Kiralık mülklerinizin yönetimi, Projeden daire satışı,Daire ve Dükkan satışı, İmarlı arsalarınız için proje hazırlatıp kat karşılığı verme ve satışı , İmarlı -imarsız arsa satışı, Rayiç bedel araştırması ile hizmetinizdeyiz her zaman yanınızdayız
		</div>
	  </div>
	</div>
	</div>

  <footer id="footer" className="py-3 bg-dark text-light mt-3 " >
	<div className="row m-0">
		
		<div className="col-sm">
			<h6  className="text-uppercase text-left mb-5 ml-3">social media</h6>
			<ol id="social" className="list-unstyled text-muted text-center ">
				<li className="px-3">
					<a href="https://www.facebook.com/search/top?q=proje%20teams%20g.y.o" target="blank_" className="btn  btn-secondary"><i className="fab fa-fw fa-facebook-f"></i></a>
				</li>
				<li className="px-3">
					<a href="https://www.instagram.com/projeteamsgyo/" target="blank_" className="btn btn-secondary"><i className="fab fa-instagram"></i></a>
				</li>
				<li className="px-3">
					<a href="https://www.instagram.com/" target="blank_" className="btn btn-secondary"><i className="fab fa-google-plus-g"></i></a>
				</li>
			</ol>
		</div>
		<div className="col-sm border-left "  >
			<h6  className="text-uppercase text-left mb-5 ml-3 ">İletİŞİm </h6>
			<div className=" row text-center">
				<div className="col" >
					<ul className="list-unstyled text-muted">
						<li >Aykut Gürler</li>
						<li ><i className="fas fa-phone "></i>&nbsp;+905302111177</li>
						<li ><i className="fab fa-google-plus-g"></i>&nbsp;aykutgurlergyo@gmail.com</li>
					</ul>
						</div>	
				<div className="col" >
					<ul className="list-unstyled text-muted border-left">
						<li >Sevil Gürler</li>
						<li ><i className="fas fa-phone "></i>&nbsp;+905302111176</li>
						<li><i className="fab fa-google-plus-g"></i>&nbsp;projegyo@gmail.com</li>
					</ul>
						</div>	
			</div>
		</div>
		<div className="col-sm border-left "  >
			<h6  className="text-uppercase text-left mb-5 ml-3 ">adres </h6>
			<div className="text-center">
			<span className="text-uppercase text-muted ">Nilüfer-bursa</span>
		</div>
		</div>
	</div>
</footer>

 </>
  )
}
export default Homepage