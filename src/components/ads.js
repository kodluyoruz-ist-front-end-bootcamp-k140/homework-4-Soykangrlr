function Ads() {
    return (
    <>
            <div className="row m-0 ">
                <div className="col-2">
                    <div className="sidenav bg-light ">

                        <ul className="list-unstyled">
                            <li className="px-3"><a data-toggle="collapse" href="" data-target="#konut">Konut</a>

                                <ul id="konut" className="collapse list-unstyled " >
                                    <li ><a className="px-5" data-toggle="collapse" data-target="#satılık" href="">Satılık</a>
                                        <ul id="satılık" className="collapse list-unstyled">
                                            <li><a className="px-5 mx-4" href="">Daire</a></li>
                                            <li><a className="px-5 mx-4"   href="">Vİlla</a></li>
                                            <li><a className="px-5 mx-4"  href="">Rezidans</a></li>
                                        </ul>
                                        <hr />
                                    </li>
                                    <li ><a className="px-5"  href="" data-toggle="collapse" data-target="#kiralık"> Kiralık</a>
                                        <ul id="kiralık" className="collapse list-unstyled">
                                            <li><a className="px-5 mx-4" href="">Daire</a></li>
                                            <li><a className="px-5 mx-4" href="">Vİlla</a></li>
                                            <li><a className="px-5 mx-4" href="">Rezidans</a></li>
                                        </ul>
                                        <hr />
                                    </li>
                                </ul>
                            </li>
                            <hr />
                            <li className="px-3"><a data-toggle="collapse" data-target="#isyeri" href="">İş Yeri</a>
                                <ul id="isyeri" className="list-unstyled collapse" >
                                    <li><a href="" className="px-5">Satılık</a></li>
                                    <hr />
                                    <li><a href="" className="px-5">Kiralık</a></li>

                                </ul>
                            </li>
                            <hr />
                            <li className="px-3"><a href="">Projeler</a></li>
                            <hr />
                            <li className="px-3"><a href="" data-toggle="collapse" data-target="#arsa">Arsa</a>
                                <ul id="arsa" className="list-unstyled collapse" >
                                    <li><a href="" className="px-5" >İmarlı Arsa</a></li>
                                    <hr />
                                    <li><a href="" className="px-5" >Yatırımlık Arsa</a></li>

                                </ul>
                            </li>
                        </ul>
                        <hr id="hr1" />
                        <div className="text-uppercase mx-4 text-center bg-warning" > <span>Filtrele</span></div>
                        <ul>
                            <li className="my-3 px-3  ">
                                <a tyle="font-size: medium" data-toggle="collapse" data-target="#adres" href="">Adres</a>
                                <ul id="adres" className="collapse list-unstyled">
                                    <li className="px-3 my-2"  >
                                        <select className="px-2 w-100" name="" id="" >
                                            <option value="" selected disabled>İl Seçiniz </option>
                                            <option value=""  >Bursa</option>
                                            <option value="">İstanbul</option>
                                            <option value="">Ankara</option>
                                        </select></li>
                                    <li className="px-3 my-2"  >
                                        <select className="px-2 w-100" name="" id="" >
                                            <option value="" selected disabled>İlçe Seçiniz </option>
                                            <option value=""  >Osmangazi</option>
                                            <option value="">Nilüfer</option>
                                            <option value="">Yıldırım</option>
                                        </select></li>
                                    <li className="px-3 my-2"  >
                                        <select className="px-2 w-100" name="" id="" >
                                            <option value="" selected disabled>Semt Seçiniz </option>
                                            <option value=""  >Osmangazi</option>
                                            <option value="">Nilüfer</option>
                                            <option value="">Yıldırım</option>
                                        </select></li>
                                </ul>
                            </li>
                            <hr />
                            <li className="my-3 px-3  "><a href="" data-toggle="collapse" data-target="#odasayısı"> Oda Sayısı</a>
                                <ul id="odasayısı" className="collapse list-unstyled mt-2">
                                    <li><input type="checkbox" name="odasayısı" id="" className="check" />1+1</li>
                                    <li><input type="checkbox" name="odasayısı" id="" className="check" />2+1</li>
                                    <li><input type="checkbox" name="odasayısı" id="" className="check" />3+1</li>
                                    <li><input type="checkbox" name="odasayısı" id="" className="check" />4+1</li>
                                    <li><input type="checkbox" name="odasayısı" id="" className="check" />5+1</li>
                                </ul>
                                <hr />
                            </li>
                            <li className="my-3 px-3  "   ><a  href="" data-toggle="collapse" data-target="#fiyat"> Fiyat aralığı</a>
                                <ul id="fiyat" className="collapse list-unstyled py-2">
                                    <li><input placeholder="Min" type="text" name="" id="" className="text1 px-2"/> - <input placeholder="Max" type="text" name="" id="" className="text1 px-2"/></li>
                                    </ul>

                                    </li>
                                    <hr />
                                    <li className="my-3 px-3  "   ><a href="" data-toggle="collapse" data-target="#m2"> M2 (Brüt)</a>
                                        <ul id="m2" className="collapse list-unstyled py-2">
                                            <li><input placeholder="Min" type="text" name="" id="" className="text1 px-2"/> - <input placeholder="Max" type="text" name="" id="" className="text1 px-2"/></li>
                                        </ul>

                                            </li>
                                            <hr />
                                            <li className="my-3 px-3" > <a href="" data-toggle="collapse" data-target="#kredi"> Krediye Uygunluk</a>
                                                <ul id="kredi" className="collapse list-unstyled py-2">
                                                    <li className="px-4" ><input type="radio" name="" id="" className="radio"/>Evet</li>
                                                    <li className="px-4"><input type="radio" name="" id="" className="radio"/>Hayır</li>

                                                </ul>
                                            </li>
                                            <hr />
                                        </ul>
                                        <button type="button" className="btn btn-primary w-50 mx-5 my-2 " >ARA</button>
                                    </div>
                                </div>
                                <div className="col-10">
                                    <div className="cardm mx-5">
                                        <div id="header" className="text-uppercase text-danger text-center"> <h1>İlanlar</h1>
                                            <hr id="hr" />
                                        </div>
                                        <div className="card-deck my-3 ">
                                            <div className="card">
                                                <img className="card-img-top" src="img/slider-1.jpeg" alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <img className="card-img-top" src="img/slider-1.jpeg" alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <img className="card-img-top" src="img/slider-1.jpeg" alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-deck my-3">
                                            <div className="card">
                                                <img className="card-img-top" src="img/slider-1.jpeg" alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <img className="card-img-top" src="img/slider-1.jpeg" alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <img className="card-img-top" src="img/slider-1.jpeg" alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-deck my-3">
                                            <div className="card">
                                                <img className="card-img-top" src="img/slider-1.jpeg" alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <img className="card-img-top" src="img/slider-1.jpeg" alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <img className="card-img-top" src="img/slider-1.jpeg" alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="row m-0 p-0" >
                                <div className="col-2 mx-0 px-0"></div>
                                <div className="col-10 mx-0 px-0">
                                    <footer id="footer" className="py-3 bg-dark text-light mt-3 " >
                                        <div className="row m-0">

                                            <div className="col-lg">
                                                <h6 className="text-uppercase text-left mb-5 ml-3">social media</h6>
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
                                            <div className="col-lg border-left "  >
                                                <h6 className="text-uppercase text-left mb-5 ml-3 ">İletİŞİm </h6>
                                                <div className=" row text-center">
                                                    <div className="col" >
                                                        <ul className="list-unstyled text-muted">
                                                            <li >Aykut Gürler</li>
                                                            <li ><i className="fas fa-phone "></i>&nbsp;+905302111177</li>
                                                            <li></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col" >
                                                        <ul className="list-unstyled text-muted border-left">
                                                            <li >Sevil Gürler</li>
                                                            <li ><i className="fas fa-phone "></i>&nbsp;+905302111176</li>
                                                            <li></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg border-left "  >
                                                <h6 className="text-uppercase text-left mb-5 ml-3 ">adres </h6>
                                                <div className="text-center">
                                                    <span className="text-uppercase text-muted ">Nilüfer-bursa</span>
                                                </div>
                                            </div>
                                        </div>
                                    </footer>
                                </div>
                            </div>

                        </>
                        )
}
                        export default Ads