
var App = {};

(function() {
	var generator = function() {
	};

	generator.prototype = {
		getValues :function () {

			var attributes = {
				width:$("#generator input[name='width']").attr('value'),
				height:$("#generator input[name='height']").attr('value'),
				videoid:$("#generator input[name='videoId']").attr('value'),
				environment:$("#generator input[name='environment']").attr('value'),
				title:$("#generator input[name='title']").attr('value'),
				action:$("#generator input[name='action']:checked").attr('value'),
				platform:$("#generator input[name='platform']:checked").attr('value')
			}

			return attributes;
		},

		getVideoSetting : function(action, html) {
			if (html) {
				switch (action) {
					case '1':
						action = 'play/';
						break;

					case '2':
						action = 'play/mute/';
						break;

					case '3':
						action = '';
						break;

					default:
						action = 'play/';
						break;
				}
			} else {
				switch (action) {
					case '1':
						action = '/play';
						break;

					case '2':
						action = '/play/mute';
						break;

					case '3':
						action = '';
						break;

					default:
						action = '/play';
						break;
				}
			}

			return action;

		},

		gethtmlCode : function (values) {
			var action = this.getVideoSetting(values.action, true);
				
			var platform = '';
			if (values.platform == 2) {
				platform = 'musictv/';
			}


			var code = '<object codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="'+values.width+'" height="'+values.height+'">\n\
<param name="allowFullscreen" value="true" />\n\
<param name="allowScriptAccess" value="always" />\n\
<param name="movie" value="http://de.sevenload.com/pl/'+values.videoid+'/'+values.width+'x'+values.height+'/swf/'+action+ values.environment+'"/>\n\
<param name="quality" value="high" />  \n\
<embed \n\
	src="http://de.sevenload.com/pl/' + values.videoid + '/'+values.width+'x'+values.height+'/swf/'+action+ values.environment+'" \n\
	allowFullscreen="true" \n\
	allowScriptAccess="true" \n\
	quality="high" \n\
	pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?1_Prod_Version=ShockwaveFlash" \n\
	type="application/x-shockwave-flash" \n\
	width="'+values.width+'" height="'+values.height+'">\n\
</embed>\n\
</object>\n\
<p><a href="http://de.sevenload.com/'+platform+'videos/'+values.videoid+'">'+ values.title +'</a></p>';

			return code;
			
		},

		getjavascriptCode : function (values) {
			var action = this.getVideoSetting(values.action, false);

			var platform = '';
			if (values.platform == 2) {
				platform = 'musictv/';
			}

			var code = '<script src="http://de.sevenload.com/pl/' + values.videoid + '/' + values.width + 'x' + values.height + action + '?environment=' + values.environment + '" type="text/javascript"> </script>\n\
						<p><a href="http://de.sevenload.com/'+platform+'videos/' + values.videoid + '">' + values.title + '</a></p>';
			return code;
			
		},

		fillTemplate : function(values) {
			return {
				html : this.gethtmlCode(values),
				javascript : this.getjavascriptCode(values)
			}
		},
		
		completion : function () {

			var data = [
			{
				text:'sevenload' ,
				comment :'UGC'
			},

			{
				text:'tvister',
				comment :'tvister.de'
			},

			{
				text: 'tonline',
				comment :'telekom'
			},

			{
				text: 'tonlineteaserpreset',
				comment :'telekom'
			},

			{
				text: 'tonlineframe_tads',
				comment :'telekom'
			},

			{
				text: 'tonlineframe',
				comment :'telekom'
			},

			{
				text: 'musictv',
				comment :'music TV'
			},

			{
				text: 'corporatesitedemo',
				comment :'demosite'
			},

			{
				text: 'bigbrother',
				comment :'Big Brother'
			},

			{
				text: 'verboteneliebe',
				comment :'verbotene liebe'
			},

			{
				text: 'episode',
				comment :'professional content'
			},

			{
				text: 'external',
				comment :'external player'
			},

			{
				text: 'aa',
				comment :'www.all-access-lounge.de'
			},

			{
				text: 'as',
				comment :'www.audio-style.de'
			},

			{
				text: 'ce',
				comment :'www.cinefecs.de'
			},

			{
				text: 'cn',
				comment :'www.castingshow-news.de'
			},

			{
				text: 'dc',
				comment :'www.dance-charts.de'
			},

			{
				text: 'dt',
				comment :'www.djmusiktipps.de'
			},

			{
				text: 'eb',
				comment :'www.erdbeerlounge.de'
			},

			{
				text: 'f24',
				comment :'www.fussball24.de'
			},

			{
				text: 'fa',
				comment :'www.fussball-arena.net'
			},

			{
				text: 'ff',
				comment :'www.ffh.net'
			},

			{
				text: 'fl',
				comment :'www.freeload.net'
			},

			{
				text: 'go',
				comment :'www.golyr.de'
			},

			{
				text: 'h24',
				comment :'www.Hunde-24.com'
			},

			{
				text: 'ih',
				comment :'www.inside-handy.de & www.inside-digital.de'
			},

			{
				text: 'il',
				comment :'www.iloveradio.de'
			},

			{
				text: 'im',
				comment :'www.iphone-magazine.de'
			},

			{
				text: 'ji',
				comment :'www.jamioo.de'
			},

			{
				text: 'kf',
				comment :'www.kampfkunst-board.info'
			},

			{
				text: 'kt',
				comment :'www.klatsch-tratsch.de'
			},

			{
				text: 'm24',
				comment :'www.musiktipps24.com'
			},

			{
				text: 'me',
				comment :'www.mediamainstream.de'
			},

			{
				text: 'mf',
				comment :'www.myfanbase.de'
			},

			{
				text: 'mffh',
				comment :'www.myfreefarm.de (hochhaus)'
			},

			{
				text: 'mi',
				comment :'www.mix1.de'
			},

			{
				text: 'mm',
				comment :'www.das-musikmagazin.de'
			},

			{
				text: 'mv',
				comment :'www.moviepilot.de'
			},

			{
				text: 'na',
				comment :'www.nachtagenten.de'
			},

			{
				text: 'nb',
				comment :'www.newsblitz.de'
			},

			{
				text: 'nk',
				comment :'www.newskick.de'
			},

			{
				text: 'oj',
				comment :'www.oljo.de'
			},

			{
				text: 'ok',
				comment :'www.ortskontrollfahrt.de'
			},

			{
				text: 'pc',
				comment :'www.promicabana.de'
			},

			{
				text: 'pe',
				comment :'www.promilounge.de'
			},

			{
				text: 'pf',
				comment :'www.promiflash.de'
			},

			{
				text: 'pi',
				comment :'www.prinz.de'
			},

			{
				text: 'pk',
				comment :'www.pinkclusive.de'
			},

			{
				text: 'pp',
				comment :'www.promipranger.de'
			},

			{
				text: 'pr',
				comment :'www.promis-inside.de'
			},

			{
				text: 'qm',
				comment :'www.quotenmeter.de'
			},

			{
				text: 'rs',
				comment :'www.rock-spot.de'
			},

			{
				text: 'rv',
				comment :'www.relevant.at'
			},

			{
				text: 'sc',
				comment :'www.soccer-fans.de'
			},

			{
				text: 'sk',
				comment :'www.schwarzekart.de'
			},

			{
				text: 'sn',
				comment :'www.szenenight.de'
			},

			{
				text: 'st',
				comment :'www.songtexte.com'
			},

			{
				text: 'stm',
				comment :'www.staemme.de (hochhaus)'
			},

			{
				text: 'tk',
				comment :'www.tv-kult.com'
			},

			{
				text: 'vi',
				comment :'www.viviano.de'
			},

			{
				text: 'vo',
				comment :'www.votingsongs.de'
			},

			{
				text: 'vp',
				comment :'www.vip-chicks.de'
			},

			{
				text: 'wimp',
				comment :'www.wurzelimperium.de (hochhaus)'
			},

			{
				text: 'wl',
				comment :'www.wunschliste.de'
			},

			{
				text: 'yg',
				comment :'www.yigg.de'
			},

			{
				text: 'sony',
				comment :'sony'
			},

			{
				text: 'facebook',
				comment :'Facebook'
			},

			{
				text: 'videopremiere',
				comment :'videopremieren'
			},

			{
				text: 'wwe-tr',
				comment :'WWE TR'
			},

			{
				text: 'wwe-de',
				comment :'WWE DE'
			},

			{
				text: 'wwe-fr',
				comment :'WWE FR'
			},

			{
				text: 'dm-wwe-tr',
				comment :'WWE TR dayliemotion'
			},

			{
				text: 'dm-wwe-de',
				comment :'WWE DE dayliemotion'
			},

			{
				text: 'dm-wwe-fr',
				comment :'WWE FR dayliemotion'
			},

			{
				text: 'wwe-videoWebDe',
				comment :'WWE video Web '
			}];

			$('#environment').autocomplete(data,{
				minChars: 0,
				width: 310,
				max:99,
				autoFill: false,
				formatItem: function(row) {
					return row.text + " [" + row.comment+ "]";
				},
				formatMatch: function(row) {
					return row.comment + " " + row.text;
				},
				formatResult: function(row) {
					return row.text;
				}
			});
			
		}
	};

	App.generator = generator;
	
})();



$(document).ready(function () {
	//$('#tabs').tabs();

	var generator = new App.generator();

	generator.completion();


	$('#generator').change(function (){
		var values = generator.getValues();
		var codes = generator.fillTemplate(values, 'html');
		$('#htmlcode').text(codes.html);
		$('#javascriptcode').text(codes.javascript);
	});


	$('input[name="size"]').change(function (){
		var setting = getSettings();

		$("#slider").slider("destroy");
		$("#slider").slider({
			value:setting.value,
			min: setting.min,
			max: setting.max,
			step: setting.step,
			slide: function( event, ui ) {
				$("#width").attr('value', ui.value);
				var height = ui.value/setting.step*setting.faktor;
				$("#height").attr('value', height);

				var values = generator.getValues();
				var codes = generator.fillTemplate(values, 'html');
				$('#htmlcode').text(codes.html);
				$('#javascriptcode').text(codes.javascript);

			}
		});
		
	});




	$('#update').click(function (){
		var values = generator.getValues();
		var codes = generator.fillTemplate(values, 'html');

		if (checkinput(values)){
			$('#htmlcode').text(codes.html);
			$('#javascriptcode').text(codes.javascript);
			$('#preview').html(codes.html);
		} else {
			$("#dialog").dialog();
			//$("#tabs").tabs("select",0);
		}

	});


		var setting = getSettings();

		$("#slider").slider("destroy");
		$("#slider").slider({
			value:setting.value,
			min: setting.min,
			max: setting.max,
			step: setting.step,
			slide: function( event, ui ) {
				$("#width").attr('value', ui.value);
				var height = ui.value/setting.step*setting.faktor;
				$("#height").attr('value', height);
			}
		});

});

function checkinput(values) {
	var flag = true;

	$('#titel').css('border', '1px solid gray');
	$('#videoId').css('border', '1px solid gray');
	$('#environment').css('border', '1px solid gray');

	
	if (values.title == '') {
		$('#titel').css('border', '1px solid red');
		flag = false;
	}
	if (values.videoid == '') {
		$('#videoId').css('border', '1px solid red');
		flag = false;
	}
	if (values.environment == '') {
		$('#environment').css('border', '1px solid red');
		flag = false;
	}
	
	return flag;
}

function getSettings () {

		var size = $("input[name='size']:checked").attr('value');

		switch (size) {
			case '1':
					settings = {
						min:240,
						max : 800,
						step : 16,
						value : 512,
						faktor : 9
					}
				$("#width").attr('value', 512);
				$("#height").attr('value', 288);

				break;

			case '2':

				settings = {
					min:240,
					max : 800,
					step : 4,
					value : 496,
					faktor : 3
				}

				$("#width").attr('value', 512);
				$("#height").attr('value', 384);

				break;

			default:
				settings = {
					min:240,
					max : 800,
					step : 16,
					value : 512,
					faktor : 9
				}
				break;
		}


		return settings;

}

