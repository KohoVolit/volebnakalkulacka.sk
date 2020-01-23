<!DOCTYPE html>
<html lang="sk">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Volebná kalkulačka 2020. Zistíte, kto Vás naozaj reprezentuje.">
    <meta name="keywords" content="voľby 2020, volebná kalkulačka, volebný test">
    <meta name="author" content="KohoVolit.eu">
    <link type="image/x-icon" href="image/favicon.ico" rel="shortcut icon">

    <meta property="og:image" content="http://volebnikalkulacka.cz/image/logo.jpg"/>
	<meta property="og:title" content="Volebná kalkulačka"/>
<!--	<meta property="og:url" content="http://volebnakalkulacka.sk"/>-->
	<meta property="og:site_name" content="Volebná kalkulačka"/>
	<meta property="og:type" content="website"/>

    <title>Volebná kalkulačka</title>

    <!-- Bootstrap core CSS -->
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">

    <!-- Add custom CSS here -->
    <link href="css/stylish-portfolio.min.css" rel="stylesheet">
	<link type="text/css" rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:400,700,800|Roboto+Slab:400,700&subset=latin,latin-ext">
	<link rel="stylesheet" href="css/vaa2014-2.css">
	<style>
	body {
      padding-top: 0;
    }
	@media (min-width: 666px) {
  .header {
        background: url("https://volebnakalkulacka.azureedge.net/volby-2016/image/bg.jpg") no-repeat fixed center center / cover rgba(0, 0, 0, 0);
      }
    }
    @media (min-width: 750px) {
      h1 {background: none repeat scroll 0 0 rgba(0, 0, 0, 0.2);}
    }
    h1 { color: #FFFFFF; display: inline; line-height: 60px; font-family: 'Roboto Slab',serif; padding: 10px 20px; vertical-align: baseline; width: auto; }
    .lead { font-size: 16px; font-weight: 200; line-height: 1.4; margin-bottom: 50px; margin-bottom: 20px; font-size: 21px; color: #fff;}
    .nav a {color: #428BCA}
    </style>

</head>
<body>

    <!-- Side Menu -->
    <a id="menu-toggle" href="#" class="btn btn-primary btn-lg toggle"><i class="fa fa-bars"></i></a>
    <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <a id="menu-close" href="#" class="btn btn-default btn-lg pull-right toggle"><i class="fa fa-times"></i></a>
            <li class="sidebar-brand"><a href="http://kohovolit.eu/">KohoVolit.eu</a>
            </li>
            <li><a href="info/">O projekte</a>
            </li>
            <li><a href="embed/">Vložiť volebnú kalkulačku na web</a>
            </li>
            <li><a href="http://volebnikalkulacka.cz/archive/">Archív kalkulačiek</a>
            </li>
            <li><a href="https://kohovolit.eu/sk/kontakt/">Kontakt</a>
            </li>
        </ul>
    </div>
    <!-- /Side Menu -->

    <!-- Full Page Image Header Area -->
    <div id="top" class="header">

		<div class="vert-text">

			<h1>Volebná kalkulačka</h1>
            <div class="col-md-6 col-md-offset-3 text-center" style="padding-top:2em;">

                <p class="lead">
                <br>
                <strong>Volebná kalkulačka Národná rada SR 2020</strong> ukazuje vašu zhodu s kandidátmi v parlamentných voľbách.

                <div style="padding-bottom:3em">
                  <a href="sk/europsky-parlament-2019?hr=<?php if( isset($_SERVER['HTTP_REFERER'])) { $hr=$_SERVER['HTTP_REFERER']; if ($hr!="") {echo base64_encode($hr);} } ?><?php if( isset($_GET['ref'])) { $ref=$_GET['ref']; if ($ref!="") {echo '&ref=' . $ref;} } ?>" class="btn btn btn-success btn-lg disabled">PRIPRAVUJEME VOLEBNÚ KALKULAČKU</a>
                </div>
                </p>
               <!-- <p class="lead">
                        Inventúra hlasovaní <strong>Európskeho parlamentu 2014 - 2019</strong>. Porovnajte si svoje názory so súčasnými europoslancami na základe 35 skutočne prebehnutých hlasovaní.
                    </p>
                    <p class="lead">
                            <a href="sk/inventura-hlasovani-europsky-parlament-2014-2019/?<?php if( isset($_SERVER['HTTP_REFERER'])) { $hr=$_SERVER['HTTP_REFERER']; if ($hr!="") {echo "hr=" . base64_encode($hr);} } ?><?php if( isset($_GET['ref'])) { $ref=$_GET['ref']; if ($ref!="") {echo '&ref=' . $ref;} } ?>" class="btn btn-lg btn-success" style="white-space: normal;" >
                                    SPUSTIŤ INVENTÚRU HLASOVANÍ
                            </a>

                    </p> -->

<!--				   <p>-->

<!--				   <div class=""><iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FKohoVolit.eu&amp;width=100&amp;layout=box_count&amp;action=like&amp;show_faces=false&amp;share=false&amp;height=65&amp;appId=469801333121609" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px; height:65px;" allowTransparency="true"></iframe><a href="https://twitter.com/share" class="twitter-share-button" data-url="http://volebnakalkulacka.sk" data-text="Zkúste také Volebnú kalkulačku!" data-via="KohoVolitEU" data-hashtags="EP2014" data-count ="vertical">Tweet</a>-->
<!--<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script><!-- Place this tag where you want the +1 button to render. -->
<!--<div class="g-plusone" data-size="tall" data-href="http://volebnikalkulacka.cz/"></div>-->

<!--<!-- Place this tag after the last +1 button tag. -->
<!--<script type="text/javascript">-->
<!--  (function() {-->
<!--    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;-->
<!--    po.src = 'https://apis.google.com/js/platform.js';-->
<!--    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);-->
<!--  })();-->
<!--</script></div>-->
            </div>
        </div>
    </div>
    <!-- /Full Page Image Header Area -->





    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 text-center">

                    <a href="www.kohovolit.eu" title="KohoVolit.eu"><img src="image/logo.png" alt="logo kohovolit.eu" /></a>

					<p class="lead black" style="color:#333333">Volebné kalkulačky pre Vás už od roku 2006 vytvára občianske združenie <a href="http://kohovolit.eu">KohoVolit.eu</a>

                    <hr>
					<ul class="nav nav-pills" style="color: #428BCA;">
  <li><a href="info/">O projekte</a></li>
  <li><a href="embed/">Vložiť kalkulačku na web</a></li>
  <li><a href="archive/">Archív</a></li>
</ul>
					<p class="black">Creative Commons BY 4.0 | <a href="http://kohovolit.eu">KohoVolit.eu</a> 2016</p>
                </div>
            </div>
        </div>
    </footer>
    <!-- /Footer -->

    <!-- JavaScript -->
    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>

    <!-- Custom JavaScript for the Side Menu and Smooth Scrolling -->
    <script>
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    </script>
    <script>
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    </script>
    <script>
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    </script>
    <!-- google analytics -->
    <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-8592359-12']);
      _gaq.push(['_trackPageview']);
      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
    </script>
    <!-- /google analytics -->

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter35358145 = new Ya.Metrika({
                        id:35358145,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true
                    });
                } catch(e) { }
            });

            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/watch.js";

            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else { f(); }
        })(document, window, "yandex_metrika_callbacks");
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/35358145" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
</body>

</html>
<?php
/**
* http://php.net/manual/en/function.base64-encode.php#103849
*/
function base64url_encode($data) {
  return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}
function base64url_decode($data) {
  return base64_decode(str_pad(strtr($data, '-_', '+/'), strlen($data) % 4, '=', STR_PAD_RIGHT));
}
?>
