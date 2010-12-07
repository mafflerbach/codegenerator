<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
		<script type="text/javascript" src="js/jquery-ui-1.8.6.custom.min.js"></script>

		<script type="text/javascript" src="js/jquery.autocomplete.js"></script>

		<script type="text/javascript" src="generaor.js"></script>

		<link rel="stylesheet" href="css/jquery.autocomplete.css" type="text/css" />
		<link rel="stylesheet" href="css/custom-theme/jquery-ui-1.8.6.custom.css" type="text/css" />

		<style type="text/css" >

			span {
				display:inline-block;
				width:125px;
			}
			input[type=text] {
				border:1px solid gray;
				width:250px;
			}
			#slider {
				width:400px;
			}

			body{
				font-family: Arial,Helvetica,FreeSans,Sans-Serif;
				font-size: 0.9em;
			}
		</style>
	</head>
    <body>

		<div id="tabs" class="tabs-bottom">
<!--			<ul>
				<li><a href="#tabs-1">Nunc tincidunt</a></li>
				<li><a href="#tabs-2">Testen</a></li>
				<li><a href="#tabs-3">Kopieren</a></li>
			</ul>-->
			<div id="tabs-1">
				<h2>1. Embed code konfigurieren</h2>
				<form id="generator">
					<h3>Verhältnis</h3>
					<span>16:9</span> <input type="radio" name="size" value="1" checked="checked" /><br/>
					<span>4:3</span> <input type="radio" name="size" value="2"/><br/>
					<br/>
					<div id="slider"></div>
					<br/>
					<span>Breite</span> <input style="border:0px; width:30px;" type="text" name="width" id="width" value="512" readonly="readonly"/><br/>
					<span>Höhe</span> <input style="border:0px; width:30px" type="text" name="height" id="height" value="288" readonly="readonly" /><br/>
					<br/>
					<h3>Allgemein</h3>
					<span>Video Id *</span> <input type="text" name="videoId" id="videoId" value="" /><br/>
					<span>Titel *</span> <input type="text" name="title" id="titel" value="" /><br/>
					<span>Environment *</span> <input type="text" name="environment" id="environment" value="" /><br/>
					<br/>
					<h3>Verhalten</h3>
					<span>autoplay + ton</span> <input type="radio" name="action" value="1" /><br/>
					<span>autoplay + stum</span> <input type="radio" name="action" value="2"/><br/>
					<span>push to play + ton</span> <input type="radio" name="action" value="3" checked="checked"/><br/><br/>
					<br/>
					<h3>Platform</h3>
					<span>sevenload</span> <input type="radio" name="platform" value="1" checked="checked"/><br/>
					<span>musictv</span> <input type="radio" name="platform" value="2" /><br/>


				</form>
			</div>
			<div id="tabs-2">
				<h2>2. Embed code testen</h2>
				<input type="button" value="preview" id="update" />
				<div id="preview"></div>
			</div>
			<div id="tabs-3">
				<h2>3. Embed code kopieren</h2>
				<div id="codeContainer">
					HTML: <br/>
					<textarea id="htmlcode" style="width:700px; height:300px;"></textarea><br/>
					JavaScript: <br/>
					<textarea id="javascriptcode" style="width:700px; height:40px;"></textarea>
				</div>
			</div>
		</div>

		<div id="dialog" style="display:none;"><p>Es sind nicht alle felder ausgefüllt</p></div>

	</body>
</html>
