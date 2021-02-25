/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$sidebar = $('#sidebar');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px']
	});

	// Hack: Enable IE flexbox workarounds.
	if (browser.name == 'ie')
		$body.addClass('is-ie');

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Forms.

	// Hack: Activate non-input submits.
	$('form').on('click', '.submit', function (event) {

		// Stop propagation, default.
		event.stopPropagation();
		event.preventDefault();

		// Submit form.
		$(this).parents('form').submit();

	});

	// Sidebar.
	if ($sidebar.length > 0) {

		var $sidebar_a = $sidebar.find('a');

		$sidebar_a
			.addClass('scrolly')
			.on('click', function () {

				var $this = $(this);

				// External link? Bail.
				if ($this.attr('href').charAt(0) != '#')
					return;

				// Deactivate all links.
				$sidebar_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
				$this
					.addClass('active')
					.addClass('active-locked');

			})
			.each(function () {

				var $this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
				if ($section.length < 1)
					return;

				// Scrollex.
				$section.scrollex({
					mode: 'middle',
					top: '-20vh',
					bottom: '-20vh',
					initialize: function () {

						// Deactivate section.
						$section.addClass('inactive');

					},
					enter: function () {

						// Activate section.
						$section.removeClass('inactive');

						// No locked links? Deactivate all links and activate this section's one.
						if ($sidebar_a.filter('.active-locked').length == 0) {

							$sidebar_a.removeClass('active');
							$this.addClass('active');

						}

						// Otherwise, if this section's link is the one that's locked, unlock it.
						else if ($this.hasClass('active-locked'))
							$this.removeClass('active-locked');

					}
				});

			});

	}

	// Scrolly.
	$('.scrolly').scrolly({
		speed: 1000,
		offset: function () {

			// If <=large, >small, and sidebar is present, use its height as the offset.
			if (breakpoints.active('<=large')
				&& !breakpoints.active('<=small')
				&& $sidebar.length > 0)
				return $sidebar.height();

			return 0;

		}
	});

	// Spotlights.
	$('.spotlights > section')
		.scrollex({
			mode: 'middle',
			top: '-10vh',
			bottom: '-10vh',
			initialize: function () {

				// Deactivate section.
				$(this).addClass('inactive');

			},
			enter: function () {

				// Activate section.
				$(this).removeClass('inactive');

			}
		})
		.each(function () {

			var $this = $(this),
				$image = $this.find('.image'),
				$img = $image.find('img'),
				x;

			// Assign image.
			$image.css('background-image', 'url(' + $img.attr('src') + ')');

			// Set background position.
			if (x = $img.data('position'))
				$image.css('background-position', x);

			// Hide <img>.
			$img.hide();

		});

	// Features.
	$('.features')
		.scrollex({
			mode: 'middle',
			top: '-20vh',
			bottom: '-20vh',
			initialize: function () {

				// Deactivate section.
				$(this).addClass('inactive');

			},
			enter: function () {

				// Activate section.
				$(this).removeClass('inactive');

			}
		});

})(jQuery);

// Função para mostrar a data e hora atual na parte de cotação de moedas.
function time() {
    today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    d = today.getDay();
    dt = today.getDate();
    mt = today.getMonth();
    y = today.getFullYear();
    document.getElementById("txt").innerHTML = ": " + dt + "/" + d + "/" + y + " - " + h + ":" + m + ":" + s;    //Japão
    document.getElementById("txt2").innerHTML = ": " + dt + "/" + d + "/" + y + " - " + h + ":" + m + ":" + s;   //Canadá
    document.getElementById("txt3").innerHTML = ": " + dt + "/" + d + "/" + y + " - " + h + ":" + m + ":" + s;   //França
    document.getElementById("txt4").innerHTML = ": " + dt + "/" + d + "/" + y + " - " + h + ":" + m + ":" + s;   //Argentina
    document.getElementById("txt5").innerHTML = ": " + dt + "/" + d + "/" + y + " - " + h + ":" + m + ":" + s;   //Estados Unidos
    document.getElementById("txt6").innerHTML = ": " + dt + "/" + d + "/" + y + " - " + h + ":" + m + ":" + s;   // Austrália
    setTimeout('time()', 500);
}
time();

//API TENTATIVA - VIDEO DO BOLUDO ----------------------
const url = 'https://economia.awesomeapi.com.br/json/all'

fetch(url)
	.then(response => response.json())
	.then(data => {
		let cotacao = document.getElementById("two")
		cotacao.innerHTML =
			`
			<div class="inner">
						<h2>Cotação de Moedas em Reais (R$)</h2>
						<p>Aqui você encontra a cotação atual dos países mais procurados para viajar, Confira agora mesmo:</p>
						<div class="features">

						<section>
							<img class = "icon solid major" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0YwRjBGMDsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojRDgwMDI3OyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMTExLjMwNCIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" /> 
							<h2 class = "titlecotacao" id = "jpcot">Japão</h2>
							<strong><p>JPY-BRL (Iene Japonês)</p></strong>
							<div class="span">
								<p>Data atual</p>
								<span id="txt"></span> <br>
							</div>
							<p>Cotação atual: <strong><span>${data.JPY.ask}</span></strong></p>
							<p style = "margin-top: -45px">Alta: <strong><span class = "high">${data.JPY.high}</span></strong> <br> Baixa: <strong><span class = "low">${data.JPY.low}</span></strong></p>
							</section>
					
						<section>
							<img class = "icon solid major" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0YwRjBGMDsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik01MTIsMjU2YzAtMTAxLjQ5NC01OS4wNjUtMTg5LjE5LTE0NC42OTYtMjMwLjU5OHY0NjEuMTk1QzQ1Mi45MzUsNDQ1LjE5LDUxMiwzNTcuNDk0LDUxMiwyNTZ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik0wLDI1NmMwLDEwMS40OTQsNTkuMDY1LDE4OS4xOSwxNDQuNjk2LDIzMC41OThWMjUuNDAyQzU5LjA2NSw2Ni44MSwwLDE1NC41MDYsMCwyNTZ6Ii8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIHBvaW50cz0iMzAwLjUyMiwyODkuMzkxIDM0NS4wNDMsMjY3LjEzIDMyMi43ODMsMjU2IDMyMi43ODMsMjMzLjczOSAyNzguMjYxLDI1NiAzMDAuNTIyLDIxMS40NzggDQoJCTI3OC4yNjEsMjExLjQ3OCAyNTYsMTc4LjA4NyAyMzMuNzM5LDIxMS40NzggMjExLjQ3OCwyMTEuNDc4IDIzMy43MzksMjU2IDE4OS4yMTcsMjMzLjczOSAxODkuMjE3LDI1NiAxNjYuOTU3LDI2Ny4xMyANCgkJMjExLjQ3OCwyODkuMzkxIDIwMC4zNDgsMzExLjY1MiAyNDQuODcsMzExLjY1MiAyNDQuODcsMzQ1LjA0MyAyNjcuMTMsMzQ1LjA0MyAyNjcuMTMsMzExLjY1MiAzMTEuNjUyLDMxMS42NTIgCSIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
							
							<h2 class = "titlecotacao" id = "cndcot">Canadá</h2>
							<strong><p>CAD-BRL (Dólar Canadense)</p></strong>
							<div class="span">
								<p>Data atual</p>
								<span id="txt2"></span> <br>
							</div>
							<p>Cotação atual: <strong><span>${data.CAD.ask}</span></strong></p>
							<p style = "margin-top: -45px">Alta: <strong><span class = "high">${data.CAD.high}</span></strong> <br> Baixa: <strong><span class = "low">${data.CAD.low}</span></strong></p>
							</section>
						<section>
							
							<img class="icon solid major" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0YwRjBGMDsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik0yNDQuODcsMjU2SDUxMmMwLTIzLjEwNi0zLjA4LTQ1LjQ5LTguODE5LTY2Ljc4M0gyNDQuODdWMjU2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMjQ0Ljg3LDEyMi40MzVoMjI5LjU1NmMtMTUuNjcxLTI1LjU3Mi0zNS43MDgtNDguMTc1LTU5LjA3LTY2Ljc4M0gyNDQuODdWMTIyLjQzNXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRDgwMDI3OyIgZD0iTTI1Niw1MTJjNjAuMjQ5LDAsMTE1LjYyNi0yMC44MjQsMTU5LjM1Ni01NS42NTJIOTYuNjQ0QzE0MC4zNzQsNDkxLjE3NiwxOTUuNzUxLDUxMiwyNTYsNTEyeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMzcuNTc0LDM4OS41NjVoNDM2Ljg1MmMxMi41ODEtMjAuNTI5LDIyLjMzOC00Mi45NjksMjguNzU1LTY2Ljc4M0g4LjgxOQ0KCQlDMTUuMjM2LDM0Ni41OTYsMjQuOTkzLDM2OS4wMzYsMzcuNTc0LDM4OS41NjV6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojMDA1MkI0OyIgZD0iTTExOC41ODQsMzkuOTc4aDIzLjMyOWwtMjEuNywxNS43NjVsOC4yODksMjUuNTA5bC0yMS42OTktMTUuNzY1TDg1LjEwNCw4MS4yNTJsNy4xNi0yMi4wMzcNCglDNzMuMTU4LDc1LjEzLDU2LjQxMiw5My43NzYsNDIuNjEyLDExNC41NTJoNy40NzVsLTEzLjgxMywxMC4wMzVjLTIuMTUyLDMuNTktNC4yMTYsNy4yMzctNi4xOTQsMTAuOTM4bDYuNTk2LDIwLjMwMWwtMTIuMzA2LTguOTQxDQoJYy0zLjA1OSw2LjQ4MS01Ljg1NywxMy4xMDgtOC4zNzIsMTkuODczbDcuMjY3LDIyLjM2OGgyNi44MjJsLTIxLjcsMTUuNzY1bDguMjg5LDI1LjUwOWwtMjEuNjk5LTE1Ljc2NWwtMTIuOTk4LDkuNDQ0DQoJQzAuNjc4LDIzNC41MzcsMCwyNDUuMTg5LDAsMjU2aDI1NmMwLTE0MS4zODQsMC0xNTguMDUyLDAtMjU2QzIwNS40MjgsMCwxNTguMjg1LDE0LjY3LDExOC41ODQsMzkuOTc4eiBNMTI4LjUwMiwyMzAuNA0KCWwtMjEuNjk5LTE1Ljc2NUw4NS4xMDQsMjMwLjRsOC4yODktMjUuNTA5bC0yMS43LTE1Ljc2NWgyNi44MjJsOC4yODgtMjUuNTA5bDguMjg4LDI1LjUwOWgyNi44MjJsLTIxLjcsMTUuNzY1TDEyOC41MDIsMjMwLjR6DQoJIE0xMjAuMjEzLDEzMC4zMTdsOC4yODksMjUuNTA5bC0yMS42OTktMTUuNzY1bC0yMS42OTksMTUuNzY1bDguMjg5LTI1LjUwOWwtMjEuNy0xNS43NjVoMjYuODIybDguMjg4LTI1LjUwOWw4LjI4OCwyNS41MDloMjYuODIyDQoJTDEyMC4yMTMsMTMwLjMxN3ogTTIyMC4zMjgsMjMwLjRsLTIxLjY5OS0xNS43NjVMMTc2LjkzLDIzMC40bDguMjg5LTI1LjUwOWwtMjEuNy0xNS43NjVoMjYuODIybDguMjg4LTI1LjUwOWw4LjI4OCwyNS41MDloMjYuODIyDQoJbC0yMS43LDE1Ljc2NUwyMjAuMzI4LDIzMC40eiBNMjEyLjAzOSwxMzAuMzE3bDguMjg5LDI1LjUwOWwtMjEuNjk5LTE1Ljc2NWwtMjEuNjk5LDE1Ljc2NWw4LjI4OS0yNS41MDlsLTIxLjctMTUuNzY1aDI2LjgyMg0KCWw4LjI4OC0yNS41MDlsOC4yODgsMjUuNTA5aDI2LjgyMkwyMTIuMDM5LDEzMC4zMTd6IE0yMTIuMDM5LDU1Ljc0M2w4LjI4OSwyNS41MDlsLTIxLjY5OS0xNS43NjVMMTc2LjkzLDgxLjI1Mmw4LjI4OS0yNS41MDkNCglsLTIxLjctMTUuNzY1aDI2LjgyMmw4LjI4OC0yNS41MDlsOC4yODgsMjUuNTA5aDI2LjgyMkwyMTIuMDM5LDU1Ljc0M3oiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
							<h2 class = "titlecotacao" id = "usacot">Estados Unidos (USA)</h2>
							<strong><p>USD-BRL (Dólar Comercial)</p></strong>
							<div class="span">
								<p>Data atual</p>
								<span id="txt5"></span> <br>
							</div>
							<p>Cotação atual: <strong><span>${data.USD.ask}</span></strong></p>
							<p style = "margin-top: -45px">Alta: <strong><span class = "high">${data.USD.high}</span></strong> <br> Baixa: <strong><span class = "low">${data.USD.low}</span></strong></p>
							</section>
	
							
							
							<section>
							<img class = "icon solid major" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0YwRjBGMDsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik01MTIsMjU2YzAtMTEwLjA3MS02OS40NzItMjAzLjkwNi0xNjYuOTU3LTI0MC4wNzd2NDgwLjE1NUM0NDIuNTI4LDQ1OS45MDYsNTEyLDM2Ni4wNzEsNTEyLDI1NnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDUyQjQ7IiBkPSJNMCwyNTZjMCwxMTAuMDcxLDY5LjQ3MywyMDMuOTA2LDE2Ni45NTcsMjQwLjA3N1YxNS45MjNDNjkuNDczLDUyLjA5NCwwLDE0NS45MjksMCwyNTZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
							
							<h2 class = "titlecotacao" id = "frcot">França</h2>
								<strong><p>EUR-BRL (Euro)</p></strong>
								<div class="span">
								<p>Data atual</p>
								<span id="txt3"></span> <br>
								</div>
								<p>Cotação atual: <strong><span>${data.EUR.ask}</span></strong></p>
								<p style = "margin-top: -45px">Alta: <strong><span class = "high">${data.EUR.high}</span></strong> <br> Baixa: <strong><span class = "low">${data.EUR.low}</span></strong></p>
								</section>
								<section>
									<img class="icon solid major" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDUyQjQ7IiBkPSJNNTEyLDI1NmMwLDE0MS4zODQtMTE0LjYxNiwyNTYtMjU2LDI1NlMwLDM5Ny4zODQsMCwyNTZDMCwyNTYuMDYsMjU2LDAuMDI5LDI1NiwwDQoJQzM5Ny4zODQsMCw1MTIsMTE0LjYxNiw1MTIsMjU2eiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0YwRjBGMDsiIGQ9Ik0yNTYsMGMtMC4wMTQsMC0wLjAyOSwwLjAwMS0wLjA0MywwLjAwMUwyNTYsMEwyNTYsMHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjBGMEYwOyIgZD0iTTI1NS4zMTUsMjU2SDI1NmMwLTAuMjMyLDAtMC40NTQsMC0wLjY4NUMyNTUuNzcyLDI1NS41NDQsMjU1LjU0NCwyNTUuNzcyLDI1NS4zMTUsMjU2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGMEYwRjA7IiBkPSJNMjU2LDEzMy41NjZjMC00NS4wNDUsMC03NC41NjIsMC0xMzMuNTY1aC0wLjA0M0MxMTQuNTkyLDAuMDI0LDAsMTE0LjYyOSwwLDI1NmgxMzMuNTY1di03NS4yMTINCgkJTDIwOC43NzcsMjU2aDQ2LjUzOWMwLjIyOS0wLjIyOCwwLjQ1Ny0wLjQ1NiwwLjY4NS0wLjY4NWMwLTE3LjI0NywwLTMyLjYzNiwwLTQ2LjUzNmwtNzUuMjEzLTc1LjIxM0gyNTZ6Ii8+DQo8L2c+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRDgwMDI3OyIgZD0iTTEyOS41MTUsMzMuMzkxQzg5LjQ3Niw1Ni4xOSw1Ni4xOSw4OS40NzYsMzMuMzkxLDEyOS41MTVWMjU2aDY2Ljc4M1YxMDAuMTc1di0wLjAwMUgyNTYNCgkJYzAtMjEuMDYzLDAtNDEuMTI5LDAtNjYuNzgzSDEyOS41MTV6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik0yNTYsMjI0LjUxOWwtOTAuOTUzLTkwLjk1MmgtMzEuNDgxYzAtMC4wMDEsMCwwLDAsMEwyNTUuOTk5LDI1NkgyNTYNCgkJQzI1NiwyNTYsMjU2LDIzNC4yOTUsMjU2LDIyNC41MTl6Ii8+DQo8L2c+DQo8Zz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRjBGMEYwOyIgcG9pbnRzPSIxNTQuMzk1LDMwMC41MjIgMTY4LjQ0NSwzMjkuOSAyMDAuMTcyLDMyMi41NjcgMTg1Ljk2NCwzNTEuODY5IDIxMS40NzgsMzcyLjEwMiANCgkJMTc5LjcxMSwzNzkuMjYyIDE3OS44LDQxMS44MjYgMTU0LjM5NSwzOTEuNDUzIDEyOC45OTEsNDExLjgyNiAxMjkuMDgsMzc5LjI2MiA5Ny4zMTIsMzcyLjEwMiAxMjIuODI3LDM1MS44NjkgMTA4LjYxNywzMjIuNTY3IA0KCQkxNDAuMzQ2LDMyOS45IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRjBGMEYwOyIgcG9pbnRzPSIzODMuMjg0LDM1Ni4xNzQgMzkwLjMwOSwzNzAuODYzIDQwNi4xNzMsMzY3LjE5NiAzOTkuMDY4LDM4MS44NDcgNDExLjgyNiwzOTEuOTY0IA0KCQkzOTUuOTQyLDM5NS41NDQgMzk1Ljk4Niw0MTEuODI2IDM4My4yODQsNDAxLjYzOSAzNzAuNTgyLDQxMS44MjYgMzcwLjYyNiwzOTUuNTQ0IDM1NC43NDMsMzkxLjk2NCAzNjcuNSwzODEuODQ3IDM2MC4zOTYsMzY3LjE5NiANCgkJMzc2LjI1OSwzNzAuODYzIAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRjBGMEYwOyIgcG9pbnRzPSIzMTcuOTMzLDIwMC4zNDggMzI0Ljk1NywyMTUuMDM4IDM0MC44MjEsMjExLjM3IDMzMy43MTcsMjI2LjAyMSAzNDYuNDc0LDIzNi4xMzggDQoJCTMzMC41OTEsMjM5LjcxOCAzMzAuNjM0LDI1NiAzMTcuOTMzLDI0NS44MTMgMzA1LjIzMSwyNTYgMzA1LjI3NCwyMzkuNzE4IDI4OS4zOTEsMjM2LjEzOCAzMDIuMTQ4LDIyNi4wMjEgMjk1LjA0NCwyMTEuMzcgDQoJCTMxMC45MDgsMjE1LjAzOCAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0YwRjBGMDsiIHBvaW50cz0iMzgzLjI4NCwxMTEuMzA0IDM5MC4zMDksMTI1Ljk5NCA0MDYuMTczLDEyMi4zMjcgMzk5LjA2OSwxMzYuOTc4IDQxMS44MjUsMTQ3LjA5NCANCgkJMzk1Ljk0MiwxNTAuNjc1IDM5NS45ODYsMTY2Ljk1NyAzODMuMjg0LDE1Ni43NyAzNzAuNTgyLDE2Ni45NTcgMzcwLjYyNiwxNTAuNjc1IDM1NC43NDMsMTQ3LjA5NCAzNjcuNDk5LDEzNi45NzggDQoJCTM2MC4zOTYsMTIyLjMyNyAzNzYuMjU5LDEyNS45OTQgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGMEYwRjA7IiBwb2ludHM9IjQ0MC4zNjgsMTc4LjA4NyA0NDcuMzkyLDE5Mi43NzcgNDYzLjI1NiwxODkuMTA5IDQ1Ni4xNTIsMjAzLjc2IDQ2OC45MDksMjEzLjg3NyANCgkJNDUzLjAyNSwyMTcuNDU4IDQ1My4wNjksMjMzLjczOSA0NDAuMzY4LDIyMy41NTMgNDI3LjY2NiwyMzMuNzM5IDQyNy43MDksMjE3LjQ1OCA0MTEuODI2LDIxMy44NzcgNDI0LjU4MywyMDMuNzYgDQoJCTQxNy40NzksMTg5LjEwOSA0MzMuMzQyLDE5Mi43NzcgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGMEYwRjA7IiBwb2ludHM9IjM5OS41NSwyNTYgNDA1LjA3NSwyNzMuMDA2IDQyMi45NTcsMjczLjAwNiA0MDguNDksMjgzLjUxNyA0MTQuMDE3LDMwMC41MjIgDQoJCTM5OS41NSwyOTAuMDEyIDM4NS4wODQsMzAwLjUyMiAzOTAuNjA5LDI4My41MTcgMzc2LjE0MywyNzMuMDA2IDM5NC4wMjQsMjczLjAwNiAJIi8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
									<h2 class = "titlecotacao" id = "austcot">Austrália</h2>
									<strong><p>AUD-BRL (Dólar Australiano)</p></strong>
									<div class="span">
										<p>Data atual</p>
										<span id="txt6"></span> <br>
									</div>
									<p>Cotação atual: <strong><span>${data.AUD.ask}</span></strong></p>
									<p style = "margin-top: -45px">Alta: <strong><span class = "high">${data.AUD.high}</span></strong> <br> Baixa: <strong><span class = "low">${data.AUD.low}</span></strong></p>
									</section>
								
							<section>
								<img class = "icon solid major" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0YwRjBGMDsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzMzOEFGMzsiIGQ9Ik0yNTYsMEMxNTQuNTA2LDAsNjYuODEsNTkuMDY1LDI1LjQwMiwxNDQuNjk2aDQ2MS4xOTVDNDQ1LjE5LDU5LjA2NSwzNTcuNDkzLDAsMjU2LDB6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzMzOEFGMzsiIGQ9Ik0yNTYsNTEyYzEwMS40OTMsMCwxODkuMTktNTkuMDY1LDIzMC41OTgtMTQ0LjY5NkgyNS40MDJDNjYuODEsNDUyLjkzNSwxNTQuNTA2LDUxMiwyNTYsNTEyeiIvPg0KPC9nPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGREE0NDsiIHBvaW50cz0iMzMyLjUxNSwyNTYgMzAxLjI1LDI3MC43MDcgMzE3Ljg5OSwzMDAuOTg2IDI4My45NDksMjk0LjQ5MSAyNzkuNjQ3LDMyOC43ODcgMjU2LDMwMy41NjMgDQoJMjMyLjM1MiwzMjguNzg3IDIyOC4wNTEsMjk0LjQ5MSAxOTQuMTAxLDMwMC45ODUgMjEwLjc0OSwyNzAuNzA2IDE3OS40ODUsMjU2IDIxMC43NSwyNDEuMjkzIDE5NC4xMDEsMjExLjAxNSAyMjguMDUsMjE3LjUwOSANCgkyMzIuMzUzLDE4My4yMTMgMjU2LDIwOC40MzcgMjc5LjY0OCwxODMuMjEzIDI4My45NDksMjE3LjUwOSAzMTcuOSwyMTEuMDE1IDMwMS4yNTEsMjQxLjI5NCAiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
								
								<h2 class = "titlecotacao" id = "argcot">Argentina</h2>
								<strong><p>ARS-BRL (Peso Argentino)</p></strong>
								<div class="span">
									<p>Data atual</p>
									<span id="txt4"></span> <br>
								</div>
								
								<div class = "cotacao">
								<p>Cotação atual: <strong><span>${data.ARS.ask}</span></strong></p>
								<p style = "margin-top: -45px">Alta: <strong><span class = "high">${data.ARS.high}</span></strong> <br> Baixa: <strong><span class = "low">${data.ARS.low}</span></strong></p>
								</div>
								</section>
		
						</div>
						<ul class="actions">
							<li><a href="./country.html" class="button">Retornar</a></li>
						</ul>
					</div>
			`
		console.log(data)
	})
	.catch(err => console.log(err))


