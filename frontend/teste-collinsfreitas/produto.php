<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Carrinho</title>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/font-face.css">
	<!--[if lt IE 9]>
	 <link rel="stylesheet" href="css/style-ie8.css">
	<![endif]-->
	<script type="text/javascript" src="js/respond.js"></script>
	<div id="fb-root"></div>
	<script>
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=169468719914506&version=v2.0";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	</script>
	
</head>
<body>
	<header>
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<a href="#" class="logo"></a>
				</div>
				<div class="col-md-4 col-md-offset-4 text-right">
					<!-- Language bar and currency bar -->
					<div class="row">
						<div class="col-md-12">
							<ul class="language-bar">
								<li class="current"><a href="#">EN</a></li>
								<li><a href="#">FR</a></li>
								<li><a href="#">DE</a></li>
							</ul>
							<ul class="currency-bar">
								<li class="current"><a href="">$</a></li>
								<li><a href="">£</a></li>
								<li><a href="">€</a></li>
							</ul>
						</div>
					</div>
					<!-- Search bar -->
					<div class="row">
						<div class="col-md-12">
							<input type="search" placeholder="Search" size="28">
							<a href="#" class="bt-search"></a>
						</div>
					</div>
					<!-- Shopping Cart -->
					<div class="row">
						<div class="col-md-12">
							<a href="#" class="bt-shopping"></a>
							<div class="shopping-cart pull-right text-left">
								<span class="shop-title">Shopping Cart</span>
								<span class="shop-items">2 item(s)</span>
								-
								<span class="shop-price">$ 28.90</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-8 shopping-submenu">
					<ul class="shopping-submenu-links">
						<li><a href="#">Wish list (0)</a></li>
						<li><a href="#">My Account</a></li>
						<li><a href="#">Shopping Cart</a></li>
						<li><a href="#">CheckOut</a></li>
					</ul>
					<span class="shop-login">Welcome visitor you can <a href="#">login</a> or create an <a href="#">account</a>.</span>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<ul class="menu">
						<li><a href="#">Clothes For Girls</a></li>
						<li><a href="#">Clothes For Boys</a></li>
						<li><a href="#">Furniture</a></li>
						<li><a href="#">Prams</a></li>
						<li><a href="#">Toys</a></li>
						<li><a href="#">Child Seats</a></li>
						<li><a href="#">Safety</a></li>
						<li><a href="#">At Home</a></li>
					</ul>
				</div>
			</div>
		</div>
	</header>
	<section>
		<div class="container">
			
			<div class="row">
				<!-- SIDEBAR -->
				<div class="col-md-3">
					<div class="sidebar-title">Categories</div>
					<div class="side-menu">
						<ul>
							<li><a href="#">Clothes for Girls</a></li>
							<li><a href="#">Clothes for Boys</a></li>
							<li><a href="#" class="visited">Furniture</a>
								<ul>
									<li><a href="#">Category</a></li>
									<li><a href="#">Category</a></li>
									<li><a href="#">Category</a></li>
								</ul>
							</li>
							<li><a href="#">Toys</a></li>
							<li><a href="#">Child Seats</a></li>
							<li><a href="#">Safety</a></li>
							<li><a href="#">At home</a></li>
						</ul>
					</div>
					<div class="sidebar-title">Bestsellers</div>
					<div class="side-menu">
						<ul class="bestsellers">
							<li>
								<img src="images/thumb.jpg" alt="">
								<span class="pro-title">Child seat for litte babys</span>
								<span class="pro-price">$149.00</span>
							</li>
							<li>
								<img src="images/thumb.jpg" alt="">
								<span class="pro-title">Child seat for litte babys</span>
								<span class="pro-price">$149.00</span>
							</li>
							<li>
								<img src="images/thumb.jpg" alt="">
								<span class="pro-title">Child seat for litte babys</span>
								<span class="pro-price">$149.00</span>
							</li>
						</ul>
					</div>
					<div class="sidebar-title">Latest products</div>
					<div class="side-menu">
						<ul class="bestsellers">
							<li>
								<img src="images/thumb.jpg" alt="">
								<span class="pro-title">Child seat for litte babys</span>
								<span class="pro-price">$149.00</span>
							</li>
							<li>
								<img src="images/thumb.jpg" alt="">
								<span class="pro-title">Child seat for litte babys</span>
								<span class="pro-price">$149.00</span>
							</li>
							<li>
								<img src="images/thumb.jpg" alt="">
								<span class="pro-title">Child seat for litte babys</span>
								<span class="pro-price">$149.00</span>
							</li>
						</ul>
					</div>
				</div>
				<!-- END SIDEBAR -->
				<div class="col-md-9">
					<!-- BREADCRUMB -->
					<div class="bradcrumb">You are here: <a href="#">Home</a> » <a href="#">Shopping Cart</a></div>
					<!-- PAGE TITLE -->
					<div class="row">
						<div class="col-md-5">
							<div class="page-title">Body Suits For Boys And Girls</div>
						</div>
						<div class="col-md-7">
							<div class="page-stroke"></div>
						</div>
					</div>
					<img src="timthumb.php?src=http://i.imgur.com/KxlxqLO.jpg&h=300&w=300zc=1" alt="">
				</div>
			</div>
			
		</div>
	</section>
	<footer>
		<div class="first-footer">
			<div class="container">
				<div class="row">
					<div class="col-xs-6 col-sm-4 col-md-3">
						<h3 class="footer-title"><div class="footer-icon about-us"></div>About us</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus ac velit faucibus feugiat. Donec dignissim, eros elementum porttitor tempor, massa ligula cursus libero, vel ullamcorper dui ipsum id magna. Pellentesque adipiscing euismod mauris id pharetra.</p>
					</div>
					<div class="col-xs-6 col-sm-4 col-md-3">
						<h3 class="footer-title"><div class="footer-icon contact-us"></div>Contact us</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus ac velit faucibus feugiat. Donec dignissim, eros elementum porttitor tempor, massa ligula cursus libero, vel ullamcorper dui ipsum id magna. Pellentesque adipiscing euismod mauris id pharetra.</p>
					</div>
					<div class="col-xs-6 col-sm-4 col-md-3">
						<h3 class="footer-title"><div class="footer-icon twitter"></div>Twitter news</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tellus ac velit faucibus feugiat. Donec dignissim, eros elementum porttitor tempor, massa ligula cursus libero, vel ullamcorper dui ipsum id magna. Pellentesque adipiscing euismod mauris id pharetra.</p>
					</div>
					<div class="col-xs-6  col-sm-4 col-md-3">
						<h3 class="footer-title"><div class="footer-icon facebook"></div>Facebook</h3>
						<div class="fb-like-box" data-href="https://www.facebook.com/TricaeBR" data-height="180" data-colorscheme="light" data-show-faces="true" data-header="false" data-stream="false" data-show-border="false"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="second-footer">
			<div class="container">
				<div class="row">
					<div class="col-xs-6 col-sm-3 col-md-3">
						<h3 class="footer-menu-title">Informations</h3>
						<ul>
							<li>About us</li>
							<li>Delivery information</li>
							<li>Privacy Policy</li>
							<li>Terms & Conditions</li>
						</ul>
					</div>
					<div class="col-xs-6 col-sm-3 col-md-3">
						<h3 class="footer-menu-title">Customer service</h3>
						<ul>
							<li>About us</li>
							<li>Delivery information</li>
							<li>Privacy Policy</li>
							<li>Terms & Conditions</li>
						</ul>
					</div>
					<div class="col-xs-6 col-sm-3 col-md-3">
						<h3 class="footer-menu-title">Extra</h3>
						<ul>
							<li>About us</li>
							<li>Delivery information</li>
							<li>Privacy Policy</li>
							<li>Terms & Conditions</li>
						</ul>
					</div>
					<div class="col-xs-6 col-sm-3 col-md-3">
						<h3 class="footer-menu-title">My Account</h3>
						<ul>
							<li>About us</li>
							<li>Delivery information</li>
							<li>Privacy Policy</li>
							<li>Terms & Conditions</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<script>
		var text = '{
    "products": [
        {
            "product": {
                "title": "Super Comidas",
                "price": 45.98,
                "images": [
                    {
                        "image": "http://i.imgur.com/KxlxqLO.jpg"
                    },
                    {
                        "image": "http://i.imgur.com/HW5xRT5.jpg"
                    },
                    {
                        "image": "http://i.imgur.com/08E01Uo.jpg"
                    },
                    {
                        "image": "http://i.imgur.com/R7XKgKH.jpg"
                    },
                    {
                        "image": "http://i.imgur.com/wmcHOuV.jpg"
                    }
                ],
                "special-price": 44.77,
                "eco-tax": 0.05,
                "vat": 0.08,
                "brand": "Vegetables",
                "code": 123232399,
                "availability": 0,
                "rating": 3,
                "description": "O incentivo ao avanço tecnológico, assim como a mobilidade dos capitais internacionais auxilia a preparação e a composição dos níveis de motivação departamental. Por outro lado, o entendimento das metas propostas faz parte de um processo de gerenciamento do orçamento setorial.",
                "specification": "No mundo atual, a consulta aos diversos militantes maximiza as possibilidades por conta dos métodos utilizados na avaliação de resultados.",
                "reviews": [
                    {
                        "review": {
                            "author": "João da Silva",
                            "date": "2015-02-20",
                            "rate": 3,
                            "description": "O que temos que ter sempre em mente é que a consolidação das estruturas garante a contribuição de um grupo importante na determinação dos níveis de motivação departamental."
                        }
                    },
                    {
                        "review": {
                            "author": "José da Silva",
                            "date": "2015-01-20",
                            "rate": 3,
                            "description": "Todavia, o fenômeno da Internet deve passar por modificações independentemente das diversas correntes de pensamento."
                        }
                    }
                ],
                "frete": 9.9
            }
        },
        {
            "product": {
                "title": "Livros Infantis que estão na prateleira",
                "price": 144.32,
                "images": [
                    {
                        "image": "http://i.imgur.com/LHKazKl.jpg"
                    },
                    {
                        "image": "http://i.imgur.com/w6JEQf3.jpg"
                    },
                    {
                        "image": "http://i.imgur.com/m9WBqfP.jpg"
                    },
                    {
                        "image": "http://i.imgur.com/3OD3sK6.jpg"
                    },
                    {
                        "image": "http://i.imgur.com/F5HfVkI.jpg"
                    }
                ],
                "special-price": 119.99,
                "eco-tax": 0.05,
                "vat": 0.08,
                "brand": "Boooks by Books & Co.",
                "code": 234234234,
                "availability": 7,
                "rating": 5,
                "description": "Neste sentido, a determinação clara de objetivos representa uma abertura para a melhoria do sistema de participação geral.A certificação de metodologias que nos auxiliam a lidar com a complexidade dos estudos efetuados possibilita uma melhor visão global das novas proposições.Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a necessidade de renovação processual acarreta um processo de reformulação e modernização dos procedimentos normalmente adotados.Por conseguinte, o novo modelo estrutural aqui preconizado oferece uma interessante oportunidade para verificação das diversas correntes de pensamento.A nível organizacional, o desenvolvimento contínuo de distintas formas de atuação apresenta tendências no sentido de aprovar a manutenção das posturas dos órgãos dirigentes com relação às suas atribuições.",
                "specification": "O cuidado em identificar pontos críticos na complexidade dos estudos efetuados talvez venha a ressaltar a relatividade do retorno esperado a longo prazo.",
                "reviews": [
                    {
                        "review": {
                            "author": "Mario",
                            "date": "2013-02-20",
                            "rate": 5,
                            "description": "Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a crescente influência da mídia representa uma abertura para a melhoria dos relacionamentos verticais entre as hierarquias."
                        }
                    },
                    {
                        "review": {
                            "author": "Que Mario?",
                            "date": "2012-01-20",
                            "rate": 5,
                            "description": "Todavia, a expansão dos mercados mundiais aponta para a melhoria dos conhecimentos estratégicos para atingir a excelência."
                        }
                    }
                ],
                "frete": 13.63
            }
        }
    ]
}'

		var obj = JSON.parse(text);

		document.getElementById("demo").innerHTML =
		obj.products.product.title + "<br>" +
		obj.products.product.price + "<br>" +
		obj.products.;
	</script>
</body>
</html>