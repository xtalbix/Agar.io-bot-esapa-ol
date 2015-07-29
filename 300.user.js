<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="Eat cells smaller than you and don't get eaten by the bigger ones, as an MMO">
<meta name="keywords" content="agario, agar, io, cell, cells, virus, bacteria, blob, game, games, web game, html5, fun, flash">
<meta name="robots" content="index, follow">
<meta name="viewport" content="minimal-ui, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta property="fb:app_id" content="677505792353827"/>
<meta property="og:title" content="Agar.io"/>
<meta property="og:description" content="Eat cells smaller than you and don't get eaten by the bigger ones, as an MMO"/>
<meta property="og:url" content="http://agar.io"/>
<meta property="og:image" content="http://agar.io/img/1200x630.png"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:type" content="website"/>
<title>Agar.io</title>
<link id="favicon" rel="icon" type="image/png" href="favicon-32x32.png"/>
 
<script type='text/javascript'>
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
var gads = document.createElement('script');
gads.async = true;
gads.type = 'text/javascript';
var useSSL = 'https:' == document.location.protocol;
gads.src = (useSSL ? 'https:' : 'http:') + 
'//www.googletagservices.com/tag/js/gpt.js';
var node = document.getElementsByTagName('script')[0];
node.parentNode.insertBefore(gads, node);
})();
</script>
<link href='https://fonts.googleapis.com/css?family=Ubuntu:700' rel='stylesheet' type='text/css'>
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/glyphicons-social.css" rel="stylesheet">
<link href="css/animate.css" rel="stylesheet">
<style>body{padding:0;margin:0;overflow:hidden;}#canvas{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;}form{margin-bottom:0px;}.btn-play,.btn-settings,.btn-spectate,.btn-play-guest,.btn-login,.btn-logout{display:block;float:left;height:35px;}.btn-spectate,.btn-logout{height:35px;display:block;width:110px;margin-left:10px;margin-bottom:5px;}#helloContainer[data-logged-in="0"] .btn-play-guest{margin-left:5px;width:125px;}#helloContainer[data-logged-in="0"] .btn-login{margin-left:5px;width:145px;}#helloContainer[data-logged-in="0"] .agario-exp-bar,#helloContainer[data-logged-in="0"] .progress-bar-star,#helloContainer[data-logged-in="0"] #agario-main-buttons .agario-profile,#helloContainer[data-logged-in="0"] .btn-play{display:none;}#helloContainer[data-logged-in="0"] .btn-logout{display:none;}#helloContainer[data-logged-in="1"] .btn-play{margin-left:5px;width:275px;}#helloContainer[data-logged-in="1"] .btn-play-guest{display:none;}#helloContainer[data-logged-in="1"] .btn-login{display:none;}.btn-settings{width:40px;}.btn-spectate{display:block;float:right;}#adsBottom{position:absolute;left:0;right:0;bottom:0;}#adsBottomInner{margin:0px auto;width:728px;height:90px;border:5px solid white;border-radius:5px 5px 0px 0px;background-color:#FFFFFF;box-sizing:content-box;}.region-message{display:none;margin-bottom:12px;margin-left:6px;margin-right:6px;text-align:center;}#nick{width:65%;float:left;}#locationKnown #region{width:100%;}#locationUnknown #region{margin-bottom:15px;}#gamemode{width:33%;float:right;}.agario-panel{display:inline-block;width:350px;background-color:#FFFFFF;margin:2px;border-radius:10px;padding:5px 15px 5px 15px;vertical-align:top;}.agario-side-panel{display:inline-block;width:220px;}#helloContainer,.connecting-panel{position:absolute;top:50%;left:50%;margin-right:-50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}#a300x250{width:300px;height:250px;background-repeat:no-repeat;background-size:contain;background-position:center center;}.agario-exp-bar{height:30px;position:relative;border:2px solid #01612B;}.agario-exp-bar .progress-bar{background-color:#338833;border-radius:0px 4px 4px 0px;-webkit-transition:none;transition:none;}.agario-exp-bar .progress-bar-text{font-size:12pt;cursor:default;opacity:0.75;color:#FFF;text-align:center;line-height:26px;text-shadow:0px 0px 3px #000000,-1px 0px 0px #000000,1px 0px 0px #000000,0px 1px 0px #000000,0px -1px 0px #000000,-1px -1px 0px #000000,1px 1px 0px #000000,-1px 1px 0px #000000,1px -1px 0px #000000;position:absolute;top:0;bottom:0;left:0;right:0;font-family:'Ubuntu',sans-serif;}#agario-results-table{width:100%;}#agario-results-table th{text-align:center;font-size:8pt;}#agario-results-table td{text-align:center;color:#999;font-size:11pt;padding-bottom:15px;}.progress-bar-star{position:absolute;top:-13px;right:-16px;width:50px;height:50px;background-image:url("img/star.png");background-size:cover;-webkit-transform:rotate3d(0,0,1,10deg);transform:rotate3d(0,0,1,10deg);-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-iteration-count:1;animation-iteration-count:1;cursor:default;color:#FFF;text-align:center;line-height:55px;font-size:12pt;text-shadow:0px 0px 3px #000000,-1px 0px 0px #000000,1px 0px 0px #000000,0px 1px 0px #000000,0px -1px 0px #000000,-1px -1px 0px #000000,1px 1px 0px #000000,-1px 1px 0px #000000,1px -1px 0px #000000;font-family:'Ubuntu',sans-serif;}.tooltip-inner{max-width:300px;}.agario-profile-panel{padding:15px 15px 15px 15px;}.agario-profile-panel .agario-profile-picture{float:left;display:block;width:64px;height:64px;border-radius:5px;border:2px solid #CCC;margin-right:6px;}.agario-profile-panel .agario-profile-name-container{float:left;display:table;width:120px;height:64px;position:relative;}.agario-profile-panel .agario-profile-name-container .agario-profile-name{display:table-cell;vertical-align:middle;text-align:center;font-weight:bold;}#helloContainer[data-has-account-data="0"] .agario-profile-panel{display:none;}.agario-party,.agario-party-0,.agario-party-1,.agario-party-2,.agario-party-3,.agario-party-4,.agario-party-5,.agario-party-6{display:none;}#helloContainer[data-gamemode=":party"] .agario-party{display:block;position:relative;}#helloContainer[data-gamemode=":party"] .agario-promo{display:none;}#helloContainer[data-party-state="0"] .agario-party-0{display:block;}#helloContainer[data-party-state="1"] .agario-party-1{display:block;}#helloContainer[data-party-state="2"] .agario-party-2{display:block;}#helloContainer[data-party-state="3"] .agario-party-3{display:block;}#helloContainer[data-party-state="4"] .agario-party-4{display:block;}#helloContainer[data-party-state="5"] .agario-party-5{display:block;}#helloContainer[data-party-state="6"] .agario-party-6{display:block;}.partyToken{margin-bottom:10px;}.side-container{vertical-align:top;display:inline-block;width:224px;}.cell-spinner{display:block;margin:0;}.creating-party-text{position:absolute;cursor:default;top:0;bottom:0;left:0;right:0;width:100%;height:100%;text-align:center;color:#FFF;font-size:24px;line-height:100px;text-shadow:0px 0px 3px #000000,-1px 0px 0px #000000,1px 0px 0px #000000,0px 1px 0px #000000,0px -1px 0px #000000,-1px -1px 0px #000000,1px 1px 0px #000000,-1px 1px 0px #000000,1px -1px 0px #000000;}.agario-results-0,.agario-results-1,.agario-results-2{display:none;}#helloContainer[data-results-state="0"] .agario-results-0{display:block;}#helloContainer[data-results-state="1"] .agario-results-1{display:block;}#helloContainer[data-results-state="2"] .agario-results-2{display:block;}#options>label{display:block;width:94px;float:left;}#stats{position:relative;width:350px;height:581px;padding:0px 0px 300px 0px;overflow:hidden;}#statsPelletsContainer,#statsTimeAliveContainer,#statsHighestMassContainer,#statsTimeLeaderboardContainer,#statsPlayerCellsEatenContainer,#statsTopPositionContainer{position:absolute;width:100px;height:100px;}#statsPelletsContainer{top:30px;left:50px;}#statsHighestMassContainer{top:30px;right:50px;}#statsTimeAliveContainer{top:85px;left:50px;}#statsTimeLeaderboardContainer{top:85px;right:50px;}#statsPlayerCellsEatenContainer{top:140px;left:50px;}#statsTopPositionContainer{top:140px;right:50px;}#statsPellets{position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;}#statsText{position:absolute;top:0;bottom:0;left:0;right:0;line-height:100px;font-size:23px;}#statsSubtext{position:absolute;bottom:0;left:0;right:0;line-height:60px;font-size:12px;color:#000;text-align:center;}#statsChartText{position:absolute;left:20px;bottom:250px;line-height:40px;font-size:40px;}#statsChartText,#statsText{cursor:default;color:#444;text-align:center;font-weight:bold;}#statsContinue{position:absolute;left:25px;right:25px;width:300px;bottom:295px;}#statsGraph{position:absolute;bottom:350px;left:0px;right:0px;opacity:0.4;}#s300x250{position:absolute;bottom:10px;left:25px;right:25px;width:300px;height:250px;}.tosBox{z-index:1000;position:absolute;bottom:0;right:0;background-color:#FFF;border-radius:5px 0px 0px 0px;padding:5px 10px;}</style>
<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<script>
i18n_lang = "en";
i18n_dict = {
	"en": {
		"connecting": "Connecting",
		"connect_help": "If you cannot connect to the servers, check if you have some anti virus or firewall blocking the connection.",
		"play": "Play",
		"spectate": "Spectate",
		"login_and_play": "Login and play",
		"play_as_guest": "Play as guest",
		"share": "Share",
		"advertisement": "Advertisement",
		"privacy_policy": "Privacy Policy",
		"terms_of_service": "Terms of Service",
		"changelog": "Changelog",
		"instructions_mouse": "Move your mouse to control your cell",
		"instructions_space": "Press <b>Space</b> to split",
		"instructions_w": "Pressdddddddddddddddddddddddddddddddddddddddd <b>W</b> to eject some mass",
		"gamemode_ffa": "FFA",
		"gamemode_teams": "Teams",
		"gamemode_experimental": "Experimental",
		"region_select": " -- Select a Region -- ",
		"region_us_east": "US East",
		"region_us_west": "US West",
		"region_north_america": "North America",
		"region_south_america": "South America",
		"region_europe": "Europe",
		"region_turkey": "Turkey",
		"region_poland": "Poland",
		"region_east_asia": "East Asia",
		"region_russia": "Russia",
		"region_china": "China",
		"region_oceania": "Oceania",
		"region_australia": "Australia",
		"region_players": "players",
		"option_no_skins": "No skins",
		"option_no_names": "No names",
		"option_dark_theme": "Dark theme",
		"option_no_colors": "No colors",
		"option_show_mass": "Show mass",
		"leaderboard": "Leaderboard",
		"unnamed_cell": "An unnamed cell",
		"last_match_results": "Last match results",
		"score": "Score",
		"leaderboard_time": "Leaderboard Time",
		"mass_eaten": "Mass Eaten",
		"top_position": "Top Position",
		"position_1": "First",
		"position_2": "Second",
		"position_3": "Third",
		"position_4": "Fourth",
		"position_5": "Fifth",
		"position_6": "Sixth",
		"position_7": "Seventh",
		"position_8": "Eighth",
		"position_9": "Ninth",
		"position_10": "Tenth",
		"player_cells_eaten": "Player Cells Eaten",
		"survival_time": "Survival Time",
		
		
		"games_played": "Games played",
		"highest_mass": "Highest mass",
		"total_cells_eaten": "Total cells eaten",
		"total_mass_eaten": "Total mass eaten",
		"longest_survival": "Longest survival",
		"logout": "Logout",
		"stats": "Stats",
		"shop": "Shop",
		"party": "Party",
		"party_description": "Play with your friends in the same map",
		"create_party": "Create",
		"creating_party": "Creating party...",
		"join_party": "Join",
		"back_button": "Back",
		
		"joining_party": "Joining party...",
		"joined_party_instructions": "You are now playing with this party:",
		"party_join_error": "There was a problem joining that party, please make sure the code is correct, or try creating another party",
		"login_tooltip": "Login with Facebook and get:<br /><br /><br />Start the game with more mass!<br />Level up to get even more starting mass!",//<br />Track your progress with player stats!
		"create_party_instructions": "Give this link to your friends:",
		"join_party_instructions": "Your friend should have given you a code, type it here:",
		"continue": "Continue",
		"option_skip_stats": "Skip stats",
		"stats_food_eaten": "food eaten",
		"stats_highest_mass": "highest mass",
		"stats_time_alive": "time alive",
		"stats_leaderboard_time": "leaderboard time",
		"stats_cells_eaten": "cells eaten",
		"stats_top_position": "top position",
		
		"":""
	},
	/*
	"fr": {
		"connecting": "Connexion",
		"connect_help": "Si vous ne pouvez pas vous connecter aux serveurs, vérifiez que votre anti-virus ou votre pare-feu ne bloque pas la connexion.",
		"play": "Jouer",
		"spectate": "REGARDER",
		"login_and_play": "Se connecter et jouer",
		"login_tooltip": "Connectez-vous avec Facebook et obtenez:<br /><br /><br />double masse de départ à chaque partie!<br />Montez en niveau pour obtenir encore plus de masse de départ!", //<br />Consultez vos progrès dans les statistiques de joueur!
		"play_as_guest": "Jouer en tant qu'invité",
		"advertisement": "Publicité",
		"privacy_policy": "Confidentialité",
		"terms_of_service": "Conditions de service",
		"changelog": "Changements",
		"instructions_mouse": "Bougez votre souris pour contrôler votre cellule.",
		"instructions_space": "Appuyez pour le séparer.",
		"instructions_w": "Appuyez pour éjecter de la masse.",
		"gamemode_ffa": "Chacun pour soi",
		"gamemode_teams": "Par équipe",
		"gamemode_experimental": "Expérimental",
		"region_select": " -- Sélectionner une région -- ",
		"region_us_east": "E.-U. Est",
		"region_us_west": "E.-U. Ouest",
		"region_north_america": "Amérique du Nord",
		"region_south_america": "Amérique du Sud",
		"region_europe": "Europe",
		"region_turkey": "Turquie",
		"region_poland": "Pologne",
		"region_east_asia": "Asie de l'Est",
		"region_russia": "Russie",
		"region_china": "Chine",
		"region_oceania": "Océanie",
		"region_australia": "Australie",
		"region_players": "Joueurs",
		"option_no_skins": " Aucun motif",
		"option_no_names": " Aucun nom",
		"option_dark_theme": " Thème sombre",
		"option_no_colors": " Aucune couleur",
		"option_show_mass": " Montrer la masse",
		"leaderboard": "Classement",
		"unnamed_cell": "Une cellule sans nom",
		"last_match_results": "Derniers résultats",
		"score": "Score",
		"leaderboard_time": "Temps au classement",
		"mass_eaten": "Masse ingérée",
		"top_position": "Au top",
		"position_1": "Premier",
		"position_2": "Deuxième",
		"position_3": "Troisième",
		"position_4": "Quatrième",
		"position_5": "Cinquième",
		"position_6": "Sixième",
		"position_7": "Septième",
		"position_8": "Huitième",
		"position_9": "Neuvième",
		"position_10": "Dixième",
		"player_cells_eaten": "Cellules de joueur ingérées",
		"survival_time": "Temps de survie",
		"share": "Partager",
		"screenshot_1": "Diviser & Conquérir ! Grossir et dominer !",
		"screenshot_2": "Un hit en multijoueur ! Mangez ou soyez mangé !",
		"screenshot_3": "Lancez et partagez votre masse pour prendre l'avantage !",
		"screenshot_4": "Jouez avec de nombreuses apparences différentes !"
	},
	"it": {
		"connecting": "Connessione",
		"connect_help": "Non puoi connetterti ai server, controlla che non ci sia un antivirus o un firewall che blocchino la connessione",
		"play": "Gioca",
		"spectate": "GUARDA",
		"login_and_play": "Accedi e gioca",
		"login_tooltip": "Accedi a Facebook per ottenere:<br /><br /><br />il doppio della massa iniziale a ogni partita!<br />Sali di livello per aumentare ulteriormente la massa iniziale!", //<br />Tieni traccia dei tuoi progressi con le statistiche del giocatore!
		"play_as_guest": "Gioca come ospite",
		"advertisement": "Pubblicità",
		"privacy_policy": "Privacy",
		"terms_of_service": "Termini del servizio",
		"changelog": "Log dei cambiamenti",
		"instructions_mouse": "Sposta il mouse per controllare la tua cellula",
		"instructions_space": "Premi per dividere",
		"instructions_w": "Premi per espellere della massa",
		"gamemode_ffa": "FFA",
		"gamemode_teams": "Squadre",
		"gamemode_experimental": "Sperimentale",
		"region_select": " -- Scegli una regione -- ",
		"region_us_east": "USA orientali",
		"region_us_west": "USA occidentali",
		"region_north_america": "Nord America",
		"region_south_america": "Sud America",
		"region_europe": "Europa",
		"region_turkey": "Turchia",
		"region_poland": "Polonia",
		"region_east_asia": "Asia orientale",
		"region_russia": "Russia",
		"region_china": "Cina",
		"region_oceania": "Oceania",
		"region_australia": "Australia",
		"region_players": "Giocatori",
		"option_no_skins": " Nessuna skin",
		"option_no_names": " Nessun nome",
		"option_dark_theme": " Tema scuro",
		"option_no_colors": " Nessun colore",
		"option_show_mass": " Mostra massa",
		"leaderboard": "Classifica",
		"unnamed_cell": "Una cellula senza nome",
		"last_match_results": "Risultati ultimo incontro",
		"score": "Punteggio",
		"leaderboard_time": "Tempo classifica",
		"mass_eaten": "Massa ingerita",
		"top_position": "Posizione più alta",
		"position_1": "Primo",
		"position_2": "Secondo",
		"position_3": "Terzo",
		"position_4": "Quarto",
		"position_5": "Quindi",
		"position_6": "Sesto",
		"position_7": "Settimo",
		"position_8": "Ottavo",
		"position_9": "Nono",
		"position_10": "Decimo",
		"player_cells_eaten": "Cellule giocatore ingerite",
		"survival_time": "Tempo di sopravvivenza",
		"share": "Condividi",
		"screenshot_1": "Dividiti e conquista! Cresci e domina!",
		"screenshot_2": "Un successo multigiocatore! Mangia o sarai mangiato!",
		"screenshot_3": "Lancia e dividi la massa per ottenere un vantaggio!",
		"screenshot_4": "Gioca con molte skin diverse!"
	},
	"de": {
		"connecting": "Verbinde",
		"connect_help": "Überprüfe bitte dein Antivirusprogramm oder deine Firewall, wenn du keine Verbindung zum Server herstellen kannst.",
		"play": "Spielen",
		"spectate": "ZUSCHAUEN",
		"login_and_play": "Anmelden und spielen",
		"login_tooltip": "Melde dich mit Facebook an und erhalte:<br /><br /><br />Doppelte Startmasse in jedem Spiel!<br />Erreiche eine höhere Stufe, um noch mehr Startmasse zu erhalten!", //<br />Verfolge deine Fortschritte mit Hilfe der Spielerstatistik!
		"play_as_guest": "Als Gast spielen",
		"advertisement": "Werbung",
		"privacy_policy": "Datenschutz",
		"terms_of_service": "Nutzungsbedingungen",
		"changelog": "Changelog",
		"instructions_mouse": "Bewege deine Maus, um deine Zelle zu kontrollieren",
		"instructions_space": "Zum Teilen drücken",
		"instructions_w": "Zur Abgabe von etwas Masse drücken",
		"gamemode_ffa": "Für alle",
		"gamemode_teams": "Teams",
		"gamemode_experimental": "Experimentell",
		"region_select": " -- Wähle eine Region -- ",
		"region_us_east": "USA-Ost",
		"region_us_west": "USA-West",
		"region_north_america": "Nordamerika",
		"region_south_america": "Südamerika",
		"region_europe": "Europa",
		"region_turkey": "Türkei",
		"region_poland": "Polen",
		"region_east_asia": "Ostasien",
		"region_russia": "Russland",
		"region_china": "China",
		"region_oceania": "Ozeanien",
		"region_australia": "Australien",
		"region_players": "Spieler",
		"option_no_skins": " Keine Skins",
		"option_no_names": " Keine Namen",
		"option_dark_theme": " Dunkelthema",
		"option_no_colors": " Keine Farben",
		"option_show_mass": " Masse anzeigen",
		"leaderboard": "Bestenliste",
		"unnamed_cell": "Eine unbenannte Zelle",
		"last_match_results": "Letzte Spielergebnisse",
		"score": "Punkte",
		"leaderboard_time": "Bestenlistenzeit",
		"mass_eaten": "Verzehrte Masse",
		"top_position": "Spitzenposition",
		"position_1": "Erster",
		"position_2": "Zweiter",
		"position_3": "Dritter",
		"position_4": "Vierter",
		"position_5": "Fünfter",
		"position_6": "Sechster",
		"position_7": "Siebenter",
		"position_8": "Achter",
		"position_9": "Neunter",
		"position_10": "Zehnter",
		"player_cells_eaten": "Verzehrte Spielerzellen",
		"survival_time": "Überlebenszeit",
		"share": "Teilen",
		"screenshot_1": "Teile und erobere! Wachse und herrsche!",
		"screenshot_2": "Ein Mehrspielerhit! Friss oder werde gefressen!",
		"screenshot_3": "Spalte dich auf und wirf Masse ab, um einen Vorteil zu erringen!",
		"screenshot_4": "Spiele mit vielen unterschiedlichen Skins!"
	},
	"es": {
		"connecting": "Conectando",
		"connect_help": "Si no puedes conectar con los servidores, comprueba si tu antivirus o tu cortafuegos están bloqueando la conexión.",
		"play": "Jugar",
		"spectate": "Observar",
		"login_and_play": "Iniciar sesión y jugar",
		"login_tooltip": "Inicia sesión con Facebook y consigue:<br /><br /><br />¡El doble de masa inicial en cada partida!<br />¡Sube de nivel y consigue aún más masa inicial!", //<br />¡Controla tus progresos con las estadísticas!
		"play_as_guest": "Jugar como invitado",
		"advertisement": "Anuncio",
		"privacy_policy": "Privacidad",
		"terms_of_service": "Condiciones del servicio",
		"changelog": "Registro de cambios",
		"instructions_mouse": "Mueve el ratón para controlar tu punto",
		"instructions_space": "Pulsa para dividir",
		"instructions_w": "Pulsa <b>W</b> para liberar parte de tu masa",
		"gamemode_ffa": "TcT",
		"gamemode_teams": "Equipos",
		"gamemode_experimental": "Experimental",
		"region_select": " -- Elige una región -- ",
		"region_us_east": "Este de EE.UU.",
		"region_us_west": "Oeste de de EE.UU.",
		"region_north_america": "Norteamérica",
		"region_south_america": "Sudamérica",
		"region_europe": "Europa",
		"region_turkey": "Turquía",
		"region_poland": "Polonia",
		"region_east_asia": "Este de Asia",
		"region_russia": "Rusia",
		"region_china": "China",
		"region_oceania": "Oceanía",
		"region_australia": "Australia",
		"region_players": "jugadores",
		"option_no_skins": " Sin texturas",
		"option_no_names": " Sin nombres",
		"option_dark_theme": " Tema oscuro",
		"option_no_colors": " Sin colores",
		"option_show_mass": " Mostrar masa",
		"leaderboard": "Marcador",
		"unnamed_cell": "Un punto sin nombre",
		"last_match_results": "Resultados de la última partida",
		"score": "Puntuación",
		"leaderboard_time": "Tiempo del marcador",
		"mass_eaten": "Masa comida",
		"top_position": "Campeón",
		"position_1": "Primero",
		"position_2": "Segundo",
		"position_3": "Tercero",
		"position_4": "Cuarto",
		"position_5": "Quinto",
		"position_6": "Sexto",
		"position_7": "Séptimo",
		"position_8": "Octavo",
		"position_9": "Noveno",
		"position_10": "Décimo",
		"player_cells_eaten": "Puntos comidos del jugador",
		"survival_time": "Tiempo de supervivencia",
		"share": "Compartir",
		"screenshot_1": "¡Divide y vencerás! ¡Crece y dominarás!",
		"screenshot_2": "¡Un exitoso juego multijgador! ¡Come o te comerán!",
		"screenshot_3": "¡Lanza y divide tu masa para conseguir ventaja!",
		"screenshot_4": "¡Juega con un montón de apariencias distintas!"
	},
	*/
	
	"?":{}
};

i18n_lang = (window.navigator.userLanguage || window.navigator.language || 'en').split('-')[0];
//i18n_lang = 'de';
if(!i18n_dict.hasOwnProperty(i18n_lang)) i18n_lang = "en";

i18n = i18n_dict[i18n_lang];

(function(d,e){function Ib(){Ca=!0;Za();setInterval(Za,18E4);J=Da=document.getElementById("canvas");f=J.getContext("2d");J.onmousedown=function(a){if($a){var b=a.clientX-(5+m/5/2),c=a.clientY-(5+m/5/2);if(Math.sqrt(b*b+c*c)<=m/5/2){$();K(17);return}}ja=1*a.clientX;ka=1*a.clientY;Ea();$()};J.onmousemove=function(a){ja=1*a.clientX;ka=1*a.clientY;Ea()};J.onmouseup=function(){};/firefox/i.test(navigator.userAgent)?document.addEventListener("DOMMouseScroll",ab,!1):document.body.onmousewheel=ab;var a=!1,
b=!1,c=!1;d.onkeydown=function(p){32!=p.keyCode||a||($(),K(17),a=!0);81!=p.keyCode||b||(K(18),b=!0);87!=p.keyCode||c||($(),K(21),c=!0);27==p.keyCode&&la(300)};d.onkeyup=function(p){32==p.keyCode&&(a=!1);87==p.keyCode&&(c=!1);81==p.keyCode&&b&&(K(19),b=!1)};d.onblur=function(){K(19);c=b=a=!1};d.onresize=bb;d.requestAnimationFrame(cb);setInterval($,40);A&&e("#region").val(A);db();ma(e("#region").val());0==Fa&&A&&L();la(0);bb();d.location.hash&&6<=d.location.hash.length&&eb(d.location.hash)}function ab(a){M*=
Math.pow(.9,a.wheelDelta/-120||a.detail||0);1>M&&(M=1);M>4/g&&(M=4/g)}function Jb(){if(.4>g)aa=null;else{for(var a=Number.POSITIVE_INFINITY,b=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,p=Number.NEGATIVE_INFINITY,d=0,q=0;q<x.length;q++){var e=x[q];!e.N()||e.R||20>=e.size*g||(d=Math.max(e.size,d),a=Math.min(e.x,a),b=Math.min(e.y,b),c=Math.max(e.x,c),p=Math.max(e.y,p))}aa=Kb.la({ca:a-(d+100),da:b-(d+100),oa:c+(d+100),pa:p+(d+100),ma:2,na:4});for(q=0;q<x.length;q++)if(e=x[q],e.N()&&!(20>=e.size*
g))for(a=0;a<e.a.length;++a)b=e.a[a].x,c=e.a[a].y,b<v-m/2/g||c<w-s/2/g||b>v+m/2/g||c>w+s/2/g||aa.m(e.a[a])}}function Ea(){na=(ja-m/2)/g+v;oa=(ka-s/2)/g+w}function Za(){null==pa&&(pa={},e("#region").children().each(function(){var a=e(this),b=a.val();b&&(pa[b]=a.text())}));e.get("http://m.agar.io/info",function(a){var b={},c;for(c in a.regions){var p=c.split(":")[0];b[p]=b[p]||0;b[p]+=a.regions[c].numPlayers}for(c in b)e('#region option[value="'+c+'"]').text(pa[c]+" ("+b[c]+" players)")},"json")}function fb(){e("#adsBottom").hide();
e("#overlays").hide();e("#stats").hide();e("#mainPanel").hide();S=ba=!1;db();gb(d.aa)}function ma(a){a&&a!=A&&(e("#region").val()!=a&&e("#region").val(a),A=d.localStorage.location=a,e(".region-message").hide(),e(".region-message."+a).show(),e(".btn-needs-server").prop("disabled",!1),Ca&&L())}function la(a){ba||S||(e("#adsBottom").show(),H=null,hb(d.aa),1E3>a&&(u=1),ba=!0,e("#mainPanel").show(),0<a?e("#overlays").fadeIn(a):e("#overlays").show())}function ca(a){e("#helloContainer").attr("data-gamemode",
a);T=a;e("#gamemode").val(a)}function db(){e("#region").val()?d.localStorage.location=e("#region").val():d.localStorage.location&&e("#region").val(d.localStorage.location);e("#region").val()?e("#locationKnown").append(e("#region")):e("#locationUnknown").append(e("#region"))}function hb(a){d.googletag&&d.googletag.cmd.push(function(){Ga&&(Ga=!1,setTimeout(function(){Ga=!0},6E4*Lb),d.googletag&&d.googletag.pubads&&d.googletag.pubads().refresh&&d.googletag.pubads().refresh(a))})}function gb(a){d.googletag&&
d.googletag.pubads&&d.googletag.pubads().clear&&d.googletag.pubads().clear(a)}function da(a){return d.i18n[a]||d.i18n_dict.en[a]||a}function ib(){var a=++Fa;console.log("Find "+A+T);e.ajax("http://m.agar.io/findServer",{error:function(){setTimeout(ib,1E3)},success:function(b){a==Fa&&(b.alert&&alert(b.alert),Ha("ws://"+b.ip,b.token))},dataType:"json",method:"POST",cache:!1,crossDomain:!0,data:(A+T||"?")+"\n154669603"})}function L(){Ca&&A&&(e("#connecting").show(),ib())}function Ha(a,b){if(t){t.onopen=
null;t.onmessage=null;t.onclose=null;try{t.close()}catch(c){}t=null}Ia.ip&&(a="ws://"+Ia.ip);if(null!=N){var p=N;N=function(){p(b)}}if(jb){var d=a.split(":");a=d[0]+"s://ip-"+d[1].replace(/\./g,"-").replace(/\//g,"")+".tech.agar.io:"+(+d[2]+2E3)}B=[];h=[];I={};x=[];U=[];y=[];C=D=null;O=0;ea=!1;console.log("Connecting to "+a);t=new WebSocket(a);t.binaryType="arraybuffer";t.onopen=function(){var a;console.log("socket open");a=P(5);a.setUint8(0,254);a.setUint32(1,5,!0);Q(a);a=P(5);a.setUint8(0,255);
a.setUint32(1,154669603,!0);Q(a);a=P(1+b.length);a.setUint8(0,80);for(var c=0;c<b.length;++c)a.setUint8(c+1,b.charCodeAt(c));Q(a);kb()};t.onmessage=Mb;t.onclose=Nb;t.onerror=function(){console.log("socket error")}}function P(a){return new DataView(new ArrayBuffer(a))}function Q(a){t.send(a.buffer)}function Nb(){ea&&(qa=500);console.log("socket close");setTimeout(L,qa);qa*=2}function Mb(a){Ob(new DataView(a.data))}function Ob(a){function b(){for(var b="";;){var d=a.getUint16(c,!0);c+=2;if(0==d)break;
b+=String.fromCharCode(d)}return b}var c=0;240==a.getUint8(c)&&(c+=5);switch(a.getUint8(c++)){case 16:Pb(a,c);break;case 17:fa=a.getFloat32(c,!0);c+=4;ga=a.getFloat32(c,!0);c+=4;ha=a.getFloat32(c,!0);c+=4;break;case 20:h=[];B=[];break;case 21:Ja=a.getInt16(c,!0);c+=2;Ka=a.getInt16(c,!0);c+=2;La||(La=!0,ra=Ja,sa=Ka);break;case 32:B.push(a.getUint32(c,!0));c+=4;break;case 49:if(null!=D)break;var p=a.getUint32(c,!0),c=c+4;y=[];for(var d=0;d<p;++d){var e=a.getUint32(c,!0),c=c+4;y.push({id:e,name:b()})}lb();
break;case 50:D=[];p=a.getUint32(c,!0);c+=4;for(d=0;d<p;++d)D.push(a.getFloat32(c,!0)),c+=4;lb();break;case 64:ta=a.getFloat64(c,!0);c+=8;ua=a.getFloat64(c,!0);c+=8;va=a.getFloat64(c,!0);c+=8;wa=a.getFloat64(c,!0);c+=8;fa=(va+ta)/2;ga=(wa+ua)/2;ha=1;0==h.length&&(v=fa,w=ga,g=ha);break;case 81:var n=a.getUint32(c,!0),c=c+4,k=a.getUint32(c,!0),c=c+4,f=a.getUint32(c,!0),c=c+4;setTimeout(function(){V({e:n,f:k,d:f})},1200)}}function Pb(a,b){function c(){for(var c="";;){var d=a.getUint16(b,!0);b+=2;if(0==
d)break;c+=String.fromCharCode(d)}return c}function p(){for(var c="";;){var d=a.getUint8(b++);if(0==d)break;c+=String.fromCharCode(d)}return c}mb=F=Date.now();ea||(ea=!0,Qb());Ma=!1;var r=a.getUint16(b,!0);b+=2;for(var q=0;q<r;++q){var n=I[a.getUint32(b,!0)],k=I[a.getUint32(b+4,!0)];b+=8;n&&k&&(k.X(),k.s=k.x,k.t=k.y,k.r=k.size,k.J=n.x,k.K=n.y,k.q=k.size,k.Q=F,Rb(n,k))}for(q=0;;){r=a.getUint32(b,!0);b+=4;if(0==r)break;++q;var f,n=a.getInt32(b,!0);b+=4;k=a.getInt32(b,!0);b+=4;f=a.getInt16(b,!0);b+=
2;var l=a.getUint8(b++),g=a.getUint8(b++),m=a.getUint8(b++),g=Sb(l<<16|g<<8|m),m=a.getUint8(b++),s=!!(m&1),t=!!(m&16),nb=null;m&2&&(b+=4+a.getUint32(b,!0));m&4&&(nb=p());var u=c(),l=null;I.hasOwnProperty(r)?(l=I[r],l.P(),l.s=l.x,l.t=l.y,l.r=l.size,l.color=g):(l=new W(r,n,k,f,g,u),x.push(l),I[r]=l,l.ta=n,l.ua=k);l.h=s;l.n=t;l.J=n;l.K=k;l.q=f;l.Q=F;l.ba=m;l.fa=nb;u&&l.B(u);-1!=B.indexOf(r)&&-1==h.indexOf(l)&&(h.push(l),1==h.length&&(v=l.x,w=l.y,ob(),document.getElementById("overlays").style.display=
"none",z=[],Na=0,Oa=h[0].color,Pa=!0,pb=Date.now(),R=Qa=Ra=0))}n=a.getUint32(b,!0);b+=4;for(q=0;q<n;q++)r=a.getUint32(b,!0),b+=4,l=I[r],null!=l&&l.X();Ma&&0==h.length&&(qb=Date.now(),Pa=!1,ba||S||(rb?(hb(d.ab),Tb(),S=!0,e("#overlays").fadeIn(3E3),e("#stats").show()):la(3E3)))}function Qb(){e("#connecting").hide();sb();N&&(N(),N=null);null!=Sa&&clearTimeout(Sa);Sa=setTimeout(function(){d.ga&&(++tb,d.ga("set","dimension2",tb))},1E4)}function $(){if(X()){var a=ja-m/2,b=ka-s/2;64>a*a+b*b||.01>Math.abs(ub-
na)&&.01>Math.abs(vb-oa)||(ub=na,vb=oa,a=P(21),a.setUint8(0,16),a.setFloat64(1,na,!0),a.setFloat64(9,oa,!0),a.setUint32(17,0,!0),Q(a))}}function sb(){if(X()&&ea&&null!=H){var a=P(1+2*H.length);a.setUint8(0,0);for(var b=0;b<H.length;++b)a.setUint16(1+2*b,H.charCodeAt(b),!0);Q(a);H=null}}function X(){return null!=t&&t.readyState==t.OPEN}function K(a){if(X()){var b=P(1);b.setUint8(0,a);Q(b)}}function kb(){if(X()&&null!=E){var a=P(1+E.length);a.setUint8(0,81);for(var b=0;b<E.length;++b)a.setUint8(b+1,
E.charCodeAt(b));Q(a)}}function bb(){m=1*d.innerWidth;s=1*d.innerHeight;Da.width=J.width=m;Da.height=J.height=s;var a=e("#helloContainer");a.css("transform","none");var b=a.height(),c=d.innerHeight;b>c/1.1?a.css("transform","translate(-50%, -50%) scale("+c/b/1.1+")"):a.css("transform","translate(-50%, -50%)");wb()}function xb(){var a;a=1*Math.max(s/1080,m/1920);return a*=M}function Ub(){if(0!=h.length){for(var a=0,b=0;b<h.length;b++)a+=h[b].size;a=Math.pow(Math.min(64/a,1),.4)*xb();g=(9*g+a)/10}}
function wb(){var a,b=Date.now();++Vb;F=b;if(0<h.length){Ub();for(var c=a=0,d=0;d<h.length;d++)h[d].P(),a+=h[d].x/h.length,c+=h[d].y/h.length;fa=a;ga=c;ha=g;v=(v+a)/2;w=(w+c)/2}else v=(29*v+fa)/30,w=(29*w+ga)/30,g=(9*g+ha*xb())/10;Jb();Ea();Ta||f.clearRect(0,0,m,s);Ta?(f.fillStyle=xa?"#111111":"#F2FBFF",f.globalAlpha=.05,f.fillRect(0,0,m,s),f.globalAlpha=1):Wb();x.sort(function(a,b){return a.size==b.size?a.id-b.id:a.size-b.size});f.save();f.translate(m/2,s/2);f.scale(g,g);f.translate(-v,-w);for(d=
0;d<U.length;d++)U[d].w(f);for(d=0;d<x.length;d++)x[d].w(f);if(La){ra=(3*ra+Ja)/4;sa=(3*sa+Ka)/4;f.save();f.strokeStyle="#FFAAAA";f.lineWidth=10;f.lineCap="round";f.lineJoin="round";f.globalAlpha=.5;f.beginPath();for(d=0;d<h.length;d++)f.moveTo(h[d].x,h[d].y),f.lineTo(ra,sa);f.stroke();f.restore()}f.restore();C&&C.width&&f.drawImage(C,m-C.width-10,10);O=Math.max(O,yb());0!=O&&(null==ya&&(ya=new za(24,"#FFFFFF")),ya.C(da("score")+": "+~~(O/100)),c=ya.L(),a=c.width,f.globalAlpha=.2,f.fillStyle="#000000",
f.fillRect(10,s-10-24-10,a+10,34),f.globalAlpha=1,f.drawImage(c,15,s-10-24-5));Xb();b=Date.now()-b;b>1E3/60?G-=.01:b<1E3/65&&(G+=.01);.4>G&&(G=.4);1<G&&(G=1);b=F-zb;!X()||ba||S?(u+=b/2E3,1<u&&(u=1)):(u-=b/300,0>u&&(u=0));0<u&&(f.fillStyle="#000000",f.globalAlpha=.5*u,f.fillRect(0,0,m,s),f.globalAlpha=1);zb=F}function Wb(){f.fillStyle=xa?"#111111":"#F2FBFF";f.fillRect(0,0,m,s);f.save();f.strokeStyle=xa?"#AAAAAA":"#000000";f.globalAlpha=.2*g;for(var a=m/g,b=s/g,c=(-v+a/2)%50;c<a;c+=50)f.beginPath(),
f.moveTo(c*g-.5,0),f.lineTo(c*g-.5,b*g),f.stroke();for(c=(-w+b/2)%50;c<b;c+=50)f.beginPath(),f.moveTo(0,c*g-.5),f.lineTo(a*g,c*g-.5),f.stroke();f.restore()}function Xb(){if($a&&Ua.width){var a=m/5;f.drawImage(Ua,5,5,a,a)}}function yb(){for(var a=0,b=0;b<h.length;b++)a+=h[b].q*h[b].q;return a}function lb(){C=null;if(null!=D||0!=y.length)if(null!=D||Aa){C=document.createElement("canvas");var a=C.getContext("2d"),b=60,b=null==D?b+24*y.length:b+180,c=Math.min(200,.3*m)/200;C.width=200*c;C.height=b*c;
a.scale(c,c);a.globalAlpha=.4;a.fillStyle="#000000";a.fillRect(0,0,200,b);a.globalAlpha=1;a.fillStyle="#FFFFFF";c=null;c=da("leaderboard");a.font="30px Ubuntu";a.fillText(c,100-a.measureText(c).width/2,40);if(null==D)for(a.font="20px Ubuntu",b=0;b<y.length;++b)c=y[b].name||da("unnamed_cell"),Aa||(c=da("unnamed_cell")),-1!=B.indexOf(y[b].id)?(h[0].name&&(c=h[0].name),a.fillStyle="#FFAAAA"):a.fillStyle="#FFFFFF",c=b+1+". "+c,a.fillText(c,100-a.measureText(c).width/2,70+24*b);else for(b=c=0;b<D.length;++b){var d=
c+D[b]*Math.PI*2;a.fillStyle=Yb[b+1];a.beginPath();a.moveTo(100,140);a.arc(100,140,80,c,d,!1);a.fill();c=d}}}function Va(a,b,c,d,e){this.V=a;this.x=b;this.y=c;this.i=d;this.b=e}function W(a,b,c,d,e,q){this.id=a;this.s=this.x=b;this.t=this.y=c;this.r=this.size=d;this.color=e;this.a=[];this.W();this.B(q)}function Sb(a){for(a=a.toString(16);6>a.length;)a="0"+a;return"#"+a}function za(a,b,c,d){a&&(this.u=a);b&&(this.S=b);this.U=!!c;d&&(this.v=d)}function Zb(a){for(var b=a.length,c,d;0<b;)d=Math.floor(Math.random()*
b),b--,c=a[b],a[b]=a[d],a[d]=c}function V(a,b){var c="1"==e("#helloContainer").attr("data-has-account-data");e("#helloContainer").attr("data-has-account-data","1");if(null==b&&d.localStorage.loginCache){var p=JSON.parse(d.localStorage.loginCache);p.f=a.f;p.d=a.d;p.e=a.e;d.localStorage.loginCache=JSON.stringify(p)}if(c){var r=+e(".agario-exp-bar .progress-bar-text").first().text().split("/")[0],c=+e(".agario-exp-bar .progress-bar-text").first().text().split("/")[1].split(" ")[0],p=e(".agario-profile-panel .progress-bar-star").first().text();
if(p!=a.e)V({f:c,d:c,e:p},function(){e(".agario-profile-panel .progress-bar-star").text(a.e);e(".agario-exp-bar .progress-bar").css("width","100%");e(".progress-bar-star").addClass("animated tada").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e(".progress-bar-star").removeClass("animated tada")});setTimeout(function(){e(".agario-exp-bar .progress-bar-text").text(a.d+"/"+a.d+" XP");V({f:0,d:a.d,e:a.e},function(){V(a,b)})},1E3)});else{var q=Date.now(),
n=function(){var c;c=(Date.now()-q)/1E3;c=0>c?0:1<c?1:c;c=c*c*(3-2*c);e(".agario-exp-bar .progress-bar-text").text(~~(r+(a.f-r)*c)+"/"+a.d+" XP");e(".agario-exp-bar .progress-bar").css("width",(88*(r+(a.f-r)*c)/a.d).toFixed(2)+"%");1>c?d.requestAnimationFrame(n):b&&b()};d.requestAnimationFrame(n)}}else e(".agario-profile-panel .progress-bar-star").text(a.e),e(".agario-exp-bar .progress-bar-text").text(a.f+"/"+a.d+" XP"),e(".agario-exp-bar .progress-bar").css("width",(88*a.f/a.d).toFixed(2)+"%"),b&&
b()}function Ab(a){"string"==typeof a&&(a=JSON.parse(a));Date.now()+18E5>a.ka?e("#helloContainer").attr("data-logged-in","0"):(d.localStorage.loginCache=JSON.stringify(a),E=a.ha,e(".agario-profile-name").text(a.name),kb(),V({f:a.f,d:a.d,e:a.e}),e("#helloContainer").attr("data-logged-in","1"))}function $b(a){a=a.split("\n");Ab({name:a[0],sa:a[1],ha:a[2],ka:1E3*+a[3],e:+a[4],f:+a[5],d:+a[6]})}function Wa(a){if("connected"==a.status){var b=a.authResponse.accessToken;console.log(b);d.FB.api("/me/picture?width=180&height=180",
function(a){d.localStorage.fbPictureCache=a.data.url;e(".agario-profile-picture").attr("src",a.data.url)});e("#helloContainer").attr("data-logged-in","1");null!=E?e.ajax("http://m.agar.io/checkToken",{error:function(){E=null;Wa(a)},success:function(a){a=a.split("\n");V({e:+a[0],f:+a[1],d:+a[2]})},dataType:"text",method:"POST",cache:!1,crossDomain:!0,data:E}):e.ajax("http://m.agar.io/facebookLogin",{error:function(){E=null;e("#helloContainer").attr("data-logged-in","0")},success:$b,dataType:"text",
method:"POST",cache:!1,crossDomain:!0,data:b})}}function eb(a){ca(":party");e("#helloContainer").attr("data-party-state","4");a=decodeURIComponent(a).replace(/.*#/gim,"");Xa("#"+d.encodeURIComponent(a));e.ajax("http://m.agar.io/getToken",{error:function(){e("#helloContainer").attr("data-party-state","6")},success:function(b){b=b.split("\n");e(".partyToken").val("agar.io/#"+d.encodeURIComponent(a));e("#helloContainer").attr("data-party-state","5");ca(":party");Ha("ws://"+b[0],a)},dataType:"text",method:"POST",
cache:!1,crossDomain:!0,data:a})}function Xa(a){d.history&&d.history.replaceState&&d.history.replaceState({},d.document.title,a)}function Rb(a,b){var c=-1!=B.indexOf(a.id),d=-1!=B.indexOf(b.id),e=30>b.size;c&&e&&++Na;e||!c||d||++Qa}function Bb(a){a=~~a;var b=(a%60).toString();a=(~~(a/60)).toString();2>b.length&&(b="0"+b);return a+":"+b}function ac(){if(null==y)return 0;for(var a=0;a<y.length;++a)if(-1!=B.indexOf(y[a].id))return a+1;return 0}function Tb(){e(".stats-food-eaten").text(Na);e(".stats-time-alive").text(Bb((qb-
pb)/1E3));e(".stats-leaderboard-time").text(Bb(Ra));e(".stats-highest-mass").text(~~(O/100));e(".stats-cells-eaten").text(Qa);e(".stats-top-position").text(0==R?":(":R);var a=document.getElementById("statsGraph");if(a){var b=a.getContext("2d"),c=a.width,a=a.height;b.clearRect(0,0,c,a);if(2<z.length){for(var d=200,r=0;r<z.length;r++)d=Math.max(z[r],d);b.lineWidth=3;b.lineCap="round";b.lineJoin="round";b.strokeStyle=Oa;b.fillStyle=Oa;b.beginPath();b.moveTo(0,a-z[0]/d*(a-10)+10);for(r=1;r<z.length;r+=
Math.max(~~(z.length/c),1)){for(var q=r/(z.length-1)*c,n=[],k=-20;20>=k;++k)0>r+k||r+k>=z.length||n.push(z[r+k]);n=n.reduce(function(a,b){return a+b})/n.length/d;b.lineTo(q,a-n*(a-10)+10)}b.stroke();b.globalAlpha=.5;b.lineTo(c,a);b.lineTo(0,a);b.fill();b.globalAlpha=1}}}if(!d.agarioNoInit){var Cb=d.location.protocol,jb="https:"==Cb;if(jb&&-1==d.location.search.indexOf("fb"))d.location.href="http://agar.io/";else{var Ba=d.navigator.userAgent;if(-1!=Ba.indexOf("Android"))d.ga&&d.ga("send","event","MobileRedirect",
"PlayStore"),setTimeout(function(){d.location.href="https://play.google.com/store/apps/details?id=com.miniclip.agar.io"},1E3);else if(-1!=Ba.indexOf("iPhone")||-1!=Ba.indexOf("iPad")||-1!=Ba.indexOf("iPod"))d.ga&&d.ga("send","event","MobileRedirect","AppStore"),setTimeout(function(){d.location.href="https://itunes.apple.com/app/agar.io/id995999703?mt=8&at=1l3vajp"},1E3);else{var Da,f,J,m,s,aa=null,t=null,v=0,w=0,B=[],h=[],I={},x=[],U=[],y=[],ja=0,ka=0,na=-1,oa=-1,Vb=0,F=0,zb=0,H=null,ta=0,ua=0,va=
1E4,wa=1E4,g=1,A=null,Db=!0,Aa=!0,Ya=!1,Ma=!1,O=0,xa=!1,Eb=!1,fa=v=~~((ta+va)/2),ga=w=~~((ua+wa)/2),ha=1,T="",D=null,Ca=!1,La=!1,Ja=0,Ka=0,ra=0,sa=0,Fb=0,Yb=["#333333","#FF3333","#33FF33","#3333FF"],Ta=!1,ea=!1,mb=0,E=null,M=1,u=1,ba=!1,Fa=0,Ia={};(function(){var a=d.location.search;"?"==a.charAt(0)&&(a=a.slice(1));for(var a=a.split("&"),b=0;b<a.length;b++){var c=a[b].split("=");Ia[c[0]]=c[1]}})();var $a="ontouchstart"in d&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(d.navigator.userAgent),
Ua=new Image;Ua.src="img/split.png";var Gb=document.createElement("canvas");if("undefined"==typeof console||"undefined"==typeof DataView||"undefined"==typeof WebSocket||null==Gb||null==Gb.getContext||null==d.localStorage)alert("You browser does not support this game, we recommend you to use Firefox to play this");else{var pa=null;d.setNick=function(a){d.ga&&d.ga("send","event","Nick",a.toLowerCase());fb();H=a;sb();O=0};d.setRegion=ma;d.setSkins=function(a){Db=a};d.setNames=function(a){Aa=a};d.setDarkTheme=
function(a){xa=a};d.setColors=function(a){Ya=a};d.setShowMass=function(a){Eb=a};d.spectate=function(){H=null;K(1);fb()};d.setGameMode=function(a){a!=T&&(":party"==T&&e("#helloContainer").attr("data-party-state","0"),ca(a),":party"!=a&&L())};d.setAcid=function(a){Ta=a};null!=d.localStorage&&(null==d.localStorage.AB9&&(d.localStorage.AB9=0+~~(100*Math.random())),Fb=+d.localStorage.AB9,d.ABGroup=Fb);e.get(Cb+"//gc.agar.io",function(a){var b=a.split(" ");a=b[0];b=b[1]||"";-1==["UA"].indexOf(a)&&Hb.push("ussr");
ia.hasOwnProperty(a)&&("string"==typeof ia[a]?A||ma(ia[a]):ia[a].hasOwnProperty(b)&&(A||ma(ia[a][b])))},"text");var Ga=!0,Lb=0,ia={AF:"JP-Tokyo",AX:"EU-London",AL:"EU-London",DZ:"EU-London",AS:"SG-Singapore",AD:"EU-London",AO:"EU-London",AI:"US-Atlanta",AG:"US-Atlanta",AR:"BR-Brazil",AM:"JP-Tokyo",AW:"US-Atlanta",AU:"SG-Singapore",AT:"EU-London",AZ:"JP-Tokyo",BS:"US-Atlanta",BH:"JP-Tokyo",BD:"JP-Tokyo",BB:"US-Atlanta",BY:"EU-London",BE:"EU-London",BZ:"US-Atlanta",BJ:"EU-London",BM:"US-Atlanta",BT:"JP-Tokyo",
BO:"BR-Brazil",BQ:"US-Atlanta",BA:"EU-London",BW:"EU-London",BR:"BR-Brazil",IO:"JP-Tokyo",VG:"US-Atlanta",BN:"JP-Tokyo",BG:"EU-London",BF:"EU-London",BI:"EU-London",KH:"JP-Tokyo",CM:"EU-London",CA:"US-Atlanta",CV:"EU-London",KY:"US-Atlanta",CF:"EU-London",TD:"EU-London",CL:"BR-Brazil",CN:"CN-China",CX:"JP-Tokyo",CC:"JP-Tokyo",CO:"BR-Brazil",KM:"EU-London",CD:"EU-London",CG:"EU-London",CK:"SG-Singapore",CR:"US-Atlanta",CI:"EU-London",HR:"EU-London",CU:"US-Atlanta",CW:"US-Atlanta",CY:"JP-Tokyo",CZ:"EU-London",
DK:"EU-London",DJ:"EU-London",DM:"US-Atlanta",DO:"US-Atlanta",EC:"BR-Brazil",EG:"EU-London",SV:"US-Atlanta",GQ:"EU-London",ER:"EU-London",EE:"EU-London",ET:"EU-London",FO:"EU-London",FK:"BR-Brazil",FJ:"SG-Singapore",FI:"EU-London",FR:"EU-London",GF:"BR-Brazil",PF:"SG-Singapore",GA:"EU-London",GM:"EU-London",GE:"JP-Tokyo",DE:"EU-London",GH:"EU-London",GI:"EU-London",GR:"EU-London",GL:"US-Atlanta",GD:"US-Atlanta",GP:"US-Atlanta",GU:"SG-Singapore",GT:"US-Atlanta",GG:"EU-London",GN:"EU-London",GW:"EU-London",
GY:"BR-Brazil",HT:"US-Atlanta",VA:"EU-London",HN:"US-Atlanta",HK:"JP-Tokyo",HU:"EU-London",IS:"EU-London",IN:"JP-Tokyo",ID:"JP-Tokyo",IR:"JP-Tokyo",IQ:"JP-Tokyo",IE:"EU-London",IM:"EU-London",IL:"JP-Tokyo",IT:"EU-London",JM:"US-Atlanta",JP:"JP-Tokyo",JE:"EU-London",JO:"JP-Tokyo",KZ:"JP-Tokyo",KE:"EU-London",KI:"SG-Singapore",KP:"JP-Tokyo",KR:"JP-Tokyo",KW:"JP-Tokyo",KG:"JP-Tokyo",LA:"JP-Tokyo",LV:"EU-London",LB:"JP-Tokyo",LS:"EU-London",LR:"EU-London",LY:"EU-London",LI:"EU-London",LT:"EU-London",
LU:"EU-London",MO:"JP-Tokyo",MK:"EU-London",MG:"EU-London",MW:"EU-London",MY:"JP-Tokyo",MV:"JP-Tokyo",ML:"EU-London",MT:"EU-London",MH:"SG-Singapore",MQ:"US-Atlanta",MR:"EU-London",MU:"EU-London",YT:"EU-London",MX:"US-Atlanta",FM:"SG-Singapore",MD:"EU-London",MC:"EU-London",MN:"JP-Tokyo",ME:"EU-London",MS:"US-Atlanta",MA:"EU-London",MZ:"EU-London",MM:"JP-Tokyo",NA:"EU-London",NR:"SG-Singapore",NP:"JP-Tokyo",NL:"EU-London",NC:"SG-Singapore",NZ:"SG-Singapore",NI:"US-Atlanta",NE:"EU-London",NG:"EU-London",
NU:"SG-Singapore",NF:"SG-Singapore",MP:"SG-Singapore",NO:"EU-London",OM:"JP-Tokyo",PK:"JP-Tokyo",PW:"SG-Singapore",PS:"JP-Tokyo",PA:"US-Atlanta",PG:"SG-Singapore",PY:"BR-Brazil",PE:"BR-Brazil",PH:"JP-Tokyo",PN:"SG-Singapore",PL:"EU-London",PT:"EU-London",PR:"US-Atlanta",QA:"JP-Tokyo",RE:"EU-London",RO:"EU-London",RU:"RU-Russia",RW:"EU-London",BL:"US-Atlanta",SH:"EU-London",KN:"US-Atlanta",LC:"US-Atlanta",MF:"US-Atlanta",PM:"US-Atlanta",VC:"US-Atlanta",WS:"SG-Singapore",SM:"EU-London",ST:"EU-London",
SA:"EU-London",SN:"EU-London",RS:"EU-London",SC:"EU-London",SL:"EU-London",SG:"JP-Tokyo",SX:"US-Atlanta",SK:"EU-London",SI:"EU-London",SB:"SG-Singapore",SO:"EU-London",ZA:"EU-London",SS:"EU-London",ES:"EU-London",LK:"JP-Tokyo",SD:"EU-London",SR:"BR-Brazil",SJ:"EU-London",SZ:"EU-London",SE:"EU-London",CH:"EU-London",SY:"EU-London",TW:"JP-Tokyo",TJ:"JP-Tokyo",TZ:"EU-London",TH:"JP-Tokyo",TL:"JP-Tokyo",TG:"EU-London",TK:"SG-Singapore",TO:"SG-Singapore",TT:"US-Atlanta",TN:"EU-London",TR:"TK-Turkey",TM:"JP-Tokyo",
TC:"US-Atlanta",TV:"SG-Singapore",UG:"EU-London",UA:"EU-London",AE:"EU-London",GB:"EU-London",US:"US-Atlanta",UM:"SG-Singapore",VI:"US-Atlanta",UY:"BR-Brazil",UZ:"JP-Tokyo",VU:"SG-Singapore",VE:"BR-Brazil",VN:"JP-Tokyo",WF:"SG-Singapore",EH:"EU-London",YE:"JP-Tokyo",ZM:"EU-London",ZW:"EU-London"},N=null;d.connect=Ha;var qa=500,Sa=null,tb=0,ub=-1,vb=-1,C=null,G=1,ya=null,cb=function(){var a=Date.now(),b=1E3/60;return function(){d.requestAnimationFrame(cb);var c=Date.now(),e=c-a;e>b&&(a=c-e%b,!X()||
240>Date.now()-mb?wb():console.warn("Skipping draw"),bc())}}(),Y={},Hb="poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;venezuela;blatter;chavez;cuba;fidel;merkel;palin;queen;boris;bush;trump".split(";"),
cc="8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;blatter;chavez;fidel;merkel;palin;queen;boris;bush;trump".split(";"),Z={};Va.prototype={V:null,x:0,y:0,i:0,b:0};W.prototype={id:0,a:null,name:null,o:null,O:null,x:0,y:0,size:0,s:0,t:0,r:0,J:0,K:0,q:0,ba:0,Q:0,ja:0,G:!1,h:!1,n:!1,R:!0,Y:0,fa:null,X:function(){var a;for(a=0;a<x.length;a++)if(x[a]==this){x.splice(a,1);break}delete I[this.id];a=h.indexOf(this);-1!=a&&(Ma=!0,h.splice(a,1));a=B.indexOf(this.id);
-1!=a&&B.splice(a,1);this.G=!0;0<this.Y&&U.push(this)},l:function(){return Math.max(~~(.3*this.size),24)},B:function(a){if(this.name=a)null==this.o?this.o=new za(this.l(),"#FFFFFF",!0,"#000000"):this.o.M(this.l()),this.o.C(this.name)},W:function(){for(var a=this.I();this.a.length>a;){var b=~~(Math.random()*this.a.length);this.a.splice(b,1)}for(0==this.a.length&&0<a&&this.a.push(new Va(this,this.x,this.y,this.size,Math.random()-.5));this.a.length<a;)b=~~(Math.random()*this.a.length),b=this.a[b],this.a.push(new Va(this,
b.x,b.y,b.i,b.b))},I:function(){var a=10;20>this.size&&(a=0);this.h&&(a=30);var b=this.size;this.h||(b*=g);b*=G;this.ba&32&&(b*=.25);return~~Math.max(b,a)},qa:function(){this.W();for(var a=this.a,b=a.length,c=0;c<b;++c){var d=a[(c-1+b)%b].b,e=a[(c+1)%b].b;a[c].b+=(Math.random()-.5)*(this.n?3:1);a[c].b*=.7;10<a[c].b&&(a[c].b=10);-10>a[c].b&&(a[c].b=-10);a[c].b=(d+e+8*a[c].b)/10}for(var q=this,n=this.h?0:(this.id/1E3+F/1E4)%(2*Math.PI),c=0;c<b;++c){var k=a[c].i,d=a[(c-1+b)%b].i,e=a[(c+1)%b].i;if(15<
this.size&&null!=aa&&20<this.size*g&&0<this.id){var f=!1,l=a[c].x,h=a[c].y;aa.ra(l-5,h-5,10,10,function(a){a.V!=q&&25>(l-a.x)*(l-a.x)+(h-a.y)*(h-a.y)&&(f=!0)});!f&&(a[c].x<ta||a[c].y<ua||a[c].x>va||a[c].y>wa)&&(f=!0);f&&(0<a[c].b&&(a[c].b=0),a[c].b-=1)}k+=a[c].b;0>k&&(k=0);k=this.n?(19*k+this.size)/20:(12*k+this.size)/13;a[c].i=(d+e+8*k)/10;d=2*Math.PI/b;e=this.a[c].i;this.h&&0==c%2&&(e+=5);a[c].x=this.x+Math.cos(d*c+n)*e;a[c].y=this.y+Math.sin(d*c+n)*e}},P:function(){if(0>=this.id)return 1;var a;
a=(F-this.Q)/120;a=0>a?0:1<a?1:a;var b=0>a?0:1<a?1:a;this.l();if(this.G&&1<=b){var c=U.indexOf(this);-1!=c&&U.splice(c,1)}this.x=a*(this.J-this.s)+this.s;this.y=a*(this.K-this.t)+this.t;this.size=b*(this.q-this.r)+this.r;return b},N:function(){return 0>=this.id?!0:this.x+this.size+40<v-m/2/g||this.y+this.size+40<w-s/2/g||this.x-this.size-40>v+m/2/g||this.y-this.size-40>w+s/2/g?!1:!0},w:function(a){if(this.N()){++this.Y;var b=0<this.id&&!this.h&&!this.n&&.4>g;5>this.I()&&0<this.id&&(b=!0);if(this.R&&
!b)for(var c=0;c<this.a.length;c++)this.a[c].i=this.size;this.R=b;a.save();this.ja=F;c=this.P();this.G&&(a.globalAlpha*=1-c);a.lineWidth=10;a.lineCap="round";a.lineJoin=this.h?"miter":"round";Ya?(a.fillStyle="#FFFFFF",a.strokeStyle="#AAAAAA"):(a.fillStyle=this.color,a.strokeStyle=this.color);if(b)a.beginPath(),a.arc(this.x,this.y,this.size+5,0,2*Math.PI,!1);else{this.qa();a.beginPath();var d=this.I();a.moveTo(this.a[0].x,this.a[0].y);for(c=1;c<=d;++c){var e=c%d;a.lineTo(this.a[e].x,this.a[e].y)}}a.closePath();
c=this.name.toLowerCase();!this.n&&Db&&":teams"!=T?(d=this.fa,null==d?d=null:":"==d[0]?(Z.hasOwnProperty(d)||(Z[d]=new Image,Z[d].src=d.slice(1)),d=0!=Z[d].width&&Z[d].complete?Z[d]:null):d=null,d||(-1!=Hb.indexOf(c)?(Y.hasOwnProperty(c)||(Y[c]=new Image,Y[c].src="skins/"+c+".png"),d=0!=Y[c].width&&Y[c].complete?Y[c]:null):d=null)):d=null;e=d;b||a.stroke();a.fill();null!=e&&(a.save(),a.clip(),a.drawImage(e,this.x-this.size,this.y-this.size,2*this.size,2*this.size),a.restore());(Ya||15<this.size)&&
!b&&(a.strokeStyle="#000000",a.globalAlpha*=.1,a.stroke());a.globalAlpha=1;d=-1!=h.indexOf(this);b=~~this.y;if(0!=this.id&&(Aa||d)&&this.name&&this.o&&(null==e||-1==cc.indexOf(c))){e=this.o;e.C(this.name);e.M(this.l());c=0>=this.id?1:Math.ceil(10*g)/10;e.ea(c);var e=e.L(),q=~~(e.width/c),n=~~(e.height/c);a.drawImage(e,~~this.x-~~(q/2),b-~~(n/2),q,n);b+=e.height/2/c+4}0<this.id&&Eb&&(d||0==h.length&&(!this.h||this.n)&&20<this.size)&&(null==this.O&&(this.O=new za(this.l()/2,"#FFFFFF",!0,"#000000")),
d=this.O,d.M(this.l()/2),d.C(~~(this.size*this.size/100)),c=Math.ceil(10*g)/10,d.ea(c),e=d.L(),q=~~(e.width/c),n=~~(e.height/c),a.drawImage(e,~~this.x-~~(q/2),b-~~(n/2),q,n));a.restore()}}};za.prototype={F:"",S:"#000000",U:!1,v:"#000000",u:16,p:null,T:null,k:!1,D:1,M:function(a){this.u!=a&&(this.u=a,this.k=!0)},ea:function(a){this.D!=a&&(this.D=a,this.k=!0)},setStrokeColor:function(a){this.v!=a&&(this.v=a,this.k=!0)},C:function(a){a!=this.F&&(this.F=a,this.k=!0)},L:function(){null==this.p&&(this.p=
document.createElement("canvas"),this.T=this.p.getContext("2d"));if(this.k){this.k=!1;var a=this.p,b=this.T,c=this.F,d=this.D,e=this.u,q=e+"px Ubuntu";b.font=q;var n=~~(.2*e);a.width=(b.measureText(c).width+6)*d;a.height=(e+n)*d;b.font=q;b.scale(d,d);b.globalAlpha=1;b.lineWidth=3;b.strokeStyle=this.v;b.fillStyle=this.S;this.U&&b.strokeText(c,3,e-n/2);b.fillText(c,3,e-n/2)}return this.p}};Date.now||(Date.now=function(){return(new Date).getTime()});(function(){for(var a=["ms","moz","webkit","o"],b=
0;b<a.length&&!d.requestAnimationFrame;++b)d.requestAnimationFrame=d[a[b]+"RequestAnimationFrame"],d.cancelAnimationFrame=d[a[b]+"CancelAnimationFrame"]||d[a[b]+"CancelRequestAnimationFrame"];d.requestAnimationFrame||(d.requestAnimationFrame=function(a){return setTimeout(a,1E3/60)},d.cancelAnimationFrame=function(a){clearTimeout(a)})})();var Kb={la:function(a){function b(a,b,c,d,e){this.x=a;this.y=b;this.j=c;this.g=d;this.depth=e;this.items=[];this.c=[]}var c=a.ma||2,d=a.na||4;b.prototype={x:0,y:0,
j:0,g:0,depth:0,items:null,c:null,H:function(a){for(var b=0;b<this.items.length;++b){var c=this.items[b];if(c.x>=a.x&&c.y>=a.y&&c.x<a.x+a.j&&c.y<a.y+a.g)return!0}if(0!=this.c.length){var d=this;return this.$(a,function(b){return d.c[b].H(a)})}return!1},A:function(a,b){for(var c=0;c<this.items.length;++c)b(this.items[c]);if(0!=this.c.length){var d=this;this.$(a,function(c){d.c[c].A(a,b)})}},m:function(a){0!=this.c.length?this.c[this.Z(a)].m(a):this.items.length>=c&&this.depth<d?(this.ia(),this.c[this.Z(a)].m(a)):
this.items.push(a)},Z:function(a){return a.x<this.x+this.j/2?a.y<this.y+this.g/2?0:2:a.y<this.y+this.g/2?1:3},$:function(a,b){return a.x<this.x+this.j/2&&(a.y<this.y+this.g/2&&b(0)||a.y>=this.y+this.g/2&&b(2))||a.x>=this.x+this.j/2&&(a.y<this.y+this.g/2&&b(1)||a.y>=this.y+this.g/2&&b(3))?!0:!1},ia:function(){var a=this.depth+1,c=this.j/2,d=this.g/2;this.c.push(new b(this.x,this.y,c,d,a));this.c.push(new b(this.x+c,this.y,c,d,a));this.c.push(new b(this.x,this.y+d,c,d,a));this.c.push(new b(this.x+c,
this.y+d,c,d,a));a=this.items;this.items=[];for(c=0;c<a.length;c++)this.m(a[c])},clear:function(){for(var a=0;a<this.c.length;a++)this.c[a].clear();this.items.length=0;this.c.length=0}};var e={x:0,y:0,j:0,g:0};return{root:new b(a.ca,a.da,a.oa-a.ca,a.pa-a.da,0),m:function(a){this.root.m(a)},A:function(a,b){this.root.A(a,b)},ra:function(a,b,c,d,f){e.x=a;e.y=b;e.j=c;e.g=d;this.root.A(e,f)},H:function(a){return this.root.H(a)},clear:function(){this.root.clear()}}}},ob=function(){var a=new W(0,0,0,32,
"#ED1C24",""),b=document.createElement("canvas");b.width=32;b.height=32;var c=b.getContext("2d");return function(){0<h.length&&(a.color=h[0].color,a.B(h[0].name));c.clearRect(0,0,32,32);c.save();c.translate(16,16);c.scale(.4,.4);a.w(c);c.restore();var d=document.getElementById("favicon"),e=d.cloneNode(!0);e.setAttribute("href",b.toDataURL("image/png"));d.parentNode.replaceChild(e,d)}}();e(function(){ob()});e(function(){+d.localStorage.wannaLogin&&(d.localStorage.loginCache&&Ab(d.localStorage.loginCache),
d.localStorage.fbPictureCache&&e(".agario-profile-picture").attr("src",d.localStorage.fbPictureCache))});d.facebookLogin=function(){d.localStorage.wannaLogin=1};d.fbAsyncInit=function(){function a(){d.localStorage.wannaLogin=1;null==d.FB?alert("You seem to have something blocking Facebook on your browser, please check for any extensions"):d.FB.login(function(a){Wa(a)},{scope:"public_profile, email"})}d.FB.init({appId:"677505792353827",cookie:!0,xfbml:!0,status:!0,version:"v2.2"});d.FB.Event.subscribe("auth.statusChange",
function(b){+d.localStorage.wannaLogin&&("connected"==b.status?Wa(b):a())});d.facebookLogin=a};d.logout=function(){E=null;e("#helloContainer").attr("data-logged-in","0");e("#helloContainer").attr("data-has-account-data","0");delete d.localStorage.wannaLogin;delete d.localStorage.loginCache;delete d.localStorage.fbPictureCache;L()};var bc=function(){function a(a,b,c,d,e){var f=b.getContext("2d"),g=b.width;b=b.height;a.color=e;a.B(c);a.size=d;f.save();f.translate(g/2,b/2);a.w(f);f.restore()}for(var b=
new W(-1,0,0,32,"#5bc0de",""),c=new W(-1,0,0,32,"#5bc0de",""),d="#0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e".split(" "),f=[],g=0;g<d.length;++g){var h=g/d.length*12,k=30*Math.sqrt(g/d.length);f.push(new W(-1,Math.cos(h)*k,Math.sin(h)*k,10,d[g],""))}Zb(f);var m=document.createElement("canvas");m.getContext("2d");m.width=m.height=70;a(c,m,"",26,"#ebc0de");return function(){e(".cell-spinner").filter(":visible").each(function(){var c=
e(this),d=Date.now(),f=this.width,g=this.height,h=this.getContext("2d");h.clearRect(0,0,f,g);h.save();h.translate(f/2,g/2);for(var k=0;10>k;++k)h.drawImage(m,(.1*d+80*k)%(f+140)-f/2-70-35,g/2*Math.sin((.001*d+k)%Math.PI*2)-35,70,70);h.restore();(c=c.attr("data-itr"))&&(c=da(c));a(b,this,c||"",+e(this).attr("data-size"),"#5bc0de")});e("#statsPellets").filter(":visible").each(function(){e(this);var b=this.width,c=this.height;this.getContext("2d").clearRect(0,0,b,c);for(b=0;b<f.length;b++)a(f[b],this,
"",f[b].size,f[b].color)})}}();d.createParty=function(){ca(":party");N=function(a){Xa("/#"+d.encodeURIComponent(a));e(".partyToken").val("agar.io/#"+d.encodeURIComponent(a));e("#helloContainer").attr("data-party-state","1")};L()};d.joinParty=eb;d.cancelParty=function(){Xa("/");e("#helloContainer").attr("data-party-state","0");ca("");L()};var z=[],Na=0,Oa="#000000",S=!1,Pa=!1,pb=0,qb=0,Ra=0,Qa=0,R=0,rb=!0;setInterval(function(){Pa&&z.push(yb()/100)},1E3/60);setInterval(function(){var a=ac();0!=a&&
(++Ra,0==R&&(R=a),R=Math.min(R,a))},1E3);d.closeStats=function(){S=!1;e("#stats").hide();gb(d.ab);la(0)};d.setSkipStats=function(a){rb=!a};e(function(){e(Ib)})}}}}})(window,window.jQuery);

</script>
<script>

var hasBottomAd = false;

var dfp = null;
var dfpBottom = null;
var dfpStats = null;

window['aa'] = [];
window['ab'] = [];

if(window.location.search.indexOf('fb') != -1){
	dfp = '/53945695/agar_facebook/agar/300x250';
	dfpStats = '/53945695/agar_facebook/agar/300x250_Stats';
}else{
	if(window.ABGroup < 80){
		dfp = '/53945695/agar/300x250_CRL';
		dfpStats = '/53945695/agar/300x250_CRL_stats';
	}else{
		dfp = '/53945695/agar/300x250_CPL';
		dfpStats = '/53945695/agar/300x250_CPL_stats';
	}
	dfpBottom = '/53945695/agar/728x90';
}


if(window.innerHeight > 960 && dfpBottom != null){
	hasBottomAd = true;
}

googletag.cmd.push(function() {
	window['aa'].push(googletag.defineSlot(dfp, [300, 250], 'a300x250').addService(googletag.pubads()));
	if(hasBottomAd) window['aa'].push(googletag.defineSlot(dfpBottom, [728, 90], 'a728x90').addService(googletag.pubads()));
	window['ab'].push(googletag.defineSlot(dfpStats, [300, 250], 's300x250').addService(googletag.pubads()));
	googletag.pubads().enableSingleRequest();
	googletag.pubads().disableInitialLoad();
	googletag.enableServices();
});

</script>
</head>
<body>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<script src="js/advertisement.js"></script>
<div id="overlays" style="display:none; position: absolute; left: 0; right: 0; top: 0; bottom: 0; z-index: 200;">
<div id="helloContainer" data-logged-in="0" data-has-account-data="0" data-party-state="0" data-results-state="0" data-gamemode="">
<div class="side-container">
<div class="agario-panel agario-side-panel agario-profile-panel">
<div class="clearfix" style="margin-bottom: 16px;">
<img class="agario-profile-picture"/>
<div class="agario-profile-name-container">
<span class="agario-profile-name"></span>
</div>
</div>
<div style="position: relative; margin-bottom: -15px;" class="clearfix">
<div class="agario-exp-bar progress">
<span class="progress-bar-text"></span>
<div class="progress-bar progress-bar-striped" style="width: 0%;"></div>
</div>
<div class="progress-bar-border"></div>
<div class="progress-bar-star"></div>
</div>
</div>
 
</div>
<div id="mainPanel" class="agario-panel">
<form role="form">
<div class="form-group clearfix">
<div style="float: left; margin-left: 20px;"><h2>Agar.io</h2></div>
<div style="float: right; margin-top: 10px; height: 40px;">
<div>
<script src="https://apis.google.com/js/platform.js" async></script>
<div class="g-ytsubscribe " data-channelid="UCC6hurPo_LxL7C0YFYgYnIw" data-layout="default" data-count="default"></div>
</div>
<div class="clearfix">
<div class="fb-like pull-right" data-href="https://www.facebook.com/playagar.io" data-layout="button" data-action="like" data-show-faces="true" data-share="true"></div>
</div>
</div>
</div>
<div class="form-group clearfix">
<input id="nick" class="form-control" placeholder="Nick" maxlength="15" autofocus />
<select id="gamemode" class="form-control" onchange="setGameMode($(this).val());" required>
<option selected value="" data-itr="gamemode_ffa"></option>
<option value=":teams" data-itr="gamemode_teams"></option>
<option value=":experimental" data-itr="gamemode_experimental"></option>
<option value=":party" data-itr="party"></option>
</select>
</div>
<div id="locationUnknown">
<select id="region" class="form-control" onchange="setRegion($('#region').val());" required>
<option selected disabled value="" data-itr="region_select"></option>
<option value="US-Atlanta" data-itr="region_north_america"></option>
<option value="BR-Brazil" data-itr="region_south_america"></option>
<option value="EU-London" data-itr="region_europe"></option>
<option value="RU-Russia" data-itr="region_russia"></option>
<option value="TK-Turkey" data-itr="region_turkey"></option>
<option value="JP-Tokyo" data-itr="region_east_asia"></option>
<option value="CN-China" data-itr="region_china"></option>
<option value="SG-Singapore" data-itr="region_oceania"></option>
</select>
</div>
 
<div class="form-group" id="agario-main-buttons">
<button type="button" onclick="$('#settings, #instructions').toggle();return false;" class="btn btn-info btn-settings"><i class="glyphicon glyphicon-cog"></i></button>
<button disabled type="submit" onclick="setNick(document.getElementById('nick').value); return false;" class="btn btn-play btn-primary btn-needs-server" data-itr="play"></button>
<button disabled type="submit" onclick="setNick(document.getElementById('nick').value); return false;" class="btn btn-play-guest btn-success btn-needs-server" data-itr="play_as_guest"></button>
<button onclick="facebookLogin(); return false;" class="btn btn-login btn-primary" style="line-height: 24px;">
<span class="social social-facebook" style="font-size:24px;margin-top:-6px;margin-left:-8px;vertical-align:middle;margin-right:5px;"></span>
<span data-itr="login_and_play"></span>
</button>
<br clear="both"/>
</div>
<div id="settings" class="checkbox" style="display:none;">
<div style="float: left; width: 200px;">
<div id="locationKnown"></div>
<div id="options" style="margin: 6px; font-size: 12px;">
<label><input type="checkbox" onchange="setSkins(!$(this).is(':checked'));"><span data-itr="option_no_skins"></span></label>
<label><input type="checkbox" onchange="setNames(!$(this).is(':checked'));"><span data-itr="option_no_names"></span></label>
<label><input type="checkbox" onchange="setColors($(this).is(':checked'));"><span data-itr="option_no_colors"></span></label>
<label><input type="checkbox" onchange="setShowMass($(this).is(':checked'));"><span data-itr="option_show_mass"></span></label>
<label><input type="checkbox" onchange="setDarkTheme($(this).is(':checked'));"><span data-itr="option_dark_theme"></span></label>
<label><input type="checkbox" onchange="setSkipStats($(this).is(':checked'));"><span data-itr="option_skip_stats"></span></label>
</div>
</div>
<div style="float: right; width: 120px;">
<button onclick="spectate(); return false;" disabled class="btn btn-warning btn-spectate btn-needs-server" data-itr="spectate"></button>
<button onclick="logout(); return false;" class="btn btn-danger btn-logout" data-itr="logout"></button>
</div>
<br clear="both"/>
</div>
</form>
<div id="instructions">
<hr/>
<center><span class="text-muted">
<span data-itr="instructions_mouse"></span><br/>
<span data-itr="instructions_space"></span><br/>
<span data-itr="instructions_w"></span><br/>
</span></center>
</div>
<hr/>
<center>
<div id="a300x250" style="margin-bottom: 10px;"></div>
</center>
</div>
<div id="stats" style="display: none;" class="agario-panel">
<h2><center>Match Results</center></h2>
<canvas id="statsGraph" width="350" height="230"></canvas>
<div id="statsPelletsContainer">
 
<span id="statsText" class="stats-food-eaten"></span>
<span id="statsSubtext" data-itr="stats_food_eaten"></span>
</div>
<div id="statsHighestMassContainer">
 
<span id="statsText" class="stats-highest-mass"></span>
<span id="statsSubtext" data-itr="stats_highest_mass"></span>
</div>
<div id="statsTimeAliveContainer">
 
<span id="statsText" class="stats-time-alive"></span>
<span id="statsSubtext" data-itr="stats_time_alive"></span>
</div>
<div id="statsTimeLeaderboardContainer">
 
<span id="statsText" class="stats-leaderboard-time"></span>
<span id="statsSubtext" data-itr="stats_leaderboard_time"></span>
</div>
<div id="statsPlayerCellsEatenContainer">
 
<span id="statsText" class="stats-cells-eaten"></span>
<span id="statsSubtext" data-itr="stats_cells_eaten"></span>
</div>
<div id="statsTopPositionContainer">
 
<span id="statsText" class="stats-top-position">?</span>
<span id="statsSubtext" data-itr="stats_top_position"></span>
</div>
<hr style="position:absolute;bottom:350px;width:100%;margin:0px;"/>
<button id="statsContinue" class="btn btn-primary" data-itr="continue" onclick="closeStats();"></button>
<hr style="position:absolute;bottom:255px;width:100%;"/>
<div id="s300x250"></div>
</div>
<div class="side-container">
<div class="agario-party">
<div class="agario-panel agario-side-panel agario-party-0">
<h4><center data-itr="party"></center></h4>
<div style="margin-bottom: 12px;" data-itr="party_description"></div>
<div class="clearfix" style="margin: 0px -10px 0px -10px;">
<button class="btn btn-primary" style="width: 102.5px; float: left;" onclick="$('#helloContainer').attr('data-party-state', '3');createParty();" data-itr="create_party"></button>
<button class="btn btn-primary" style="width: 102.5px; float: right;" onclick="$('#joinPartyToken').val('');$('#helloContainer').attr('data-party-state', '2');" data-itr="join_party"></button>
</div>
</div>
<div class="agario-panel agario-side-panel agario-party-1">
<h4><center data-itr="party"></center></h4>
<div style="margin-bottom: 12px;" data-itr="create_party_instructions"></div>
<div class="clearfix">
<input type="text" value="??????" readonly class="partyToken form-control" style="cursor: text; width: 130px; float: left; border-radius: 4px 0px 0px 4px;"/>
<button class="btn btn-primary copy-party-token" style="float: right; width: 60px; border-radius: 0px 4px 4px 0px;">Copy</button>
</div>
</div>
<div class="agario-panel agario-side-panel agario-party-2">
<h4><center data-itr="party"></center></h4>
<div style="margin-bottom: 12px;" data-itr="join_party_instructions"></div>
<input id="joinPartyToken" type="text" value="" class="form-control"/>
<div class="clearfix" style="margin: 10px -10px 0px -10px;">
<button class="btn btn-primary" style="width: 210px; float: right;" onclick="joinParty($('#joinPartyToken').val());" data-itr="join_party"></button>
</div>
</div>
<div class="agario-panel agario-side-panel agario-party-3" style="padding: 0px; overflow: hidden; position: relative;">
<canvas width="220" height="100" class="cell-spinner" data-size="26"></canvas>
<div class="creating-party-text" data-itr="creating_party"></div>
</div>
<div class="agario-panel agario-side-panel agario-party-4" style="padding: 0px; overflow: hidden; position: relative;">
<canvas width="220" height="100" class="cell-spinner" data-size="26"></canvas>
<div class="creating-party-text" data-itr="joining_party"></div>
</div>
<div class="agario-panel agario-side-panel agario-party-5">
<h4><center data-itr="party"></center></h4>
<div style="margin-bottom: 12px;" data-itr="joined_party_instructions"></div>
<div class="clearfix">
<input type="text" value="??????" readonly class="partyToken form-control" style="cursor: text; width: 125px; float: left;"/>
<button class="btn btn-primary copy-party-token" style="float: right; width: 60px;">Copy</button>
</div>
</div>
<div class="agario-panel agario-side-panel agario-party-6">
<h4><center data-itr="party"></center></h4>
<div style="margin-bottom: 12px;" data-itr="party_join_error"></div>
<div class="clearfix" style="margin: 10px -10px 0px -10px;">
<button class="btn btn-primary btn-block" onclick="$('#helloContainer').attr('data-party-state', '0');" data-itr="back_button"></button>
</div>
</div>
<div style="position: absolute; right: 10px; top: 4px;">
<button type="button" class="close" onclick="cancelParty();">&times;</button>
</div>
</div>
<div class="agario-promo" style="padding: 0px; width: 293px; height: 366px; position: relative; background-image: url(img/promo.png);">
<div style="text-align: center; position: absolute; bottom: 10px; width: 100%;">
<a href="https://itunes.apple.com/app/agar.io/id995999703?mt=8&amp;at=1l3vajp" target="_blank" onclick="ga('send', 'event', 'MobilePromo', 'AppStore');"><img src="img/appstore.png" alt="Download on the App Store"/></a>
<a href="https://play.google.com/store/apps/details?id=com.miniclip.agar.io" target="_blank" onclick="ga('send', 'event', 'MobilePromo', 'PlayStore');"><img src="img/google_play.png" alt="Get it on Google play"/></a>
</div>
</div>
</div>
</div>
<script>
	if(hasBottomAd){
		document.write('<div id="adsBottom" style="z-index: 200;"><div id="adsBottomInner"><div id="a728x90"></div></div></div>');
	}

	</script>
<div class="tosBox">
<center>
<a href="privacy.txt" class="text-muted" data-itr="privacy_policy"></a>
|
<a href="terms.txt" class="text-muted" data-itr="terms_of_service"></a>
|
<a href="changelog.txt" class="text-muted" data-itr="changelog"></a>
</center>
</div>
</div>
<div id="connecting" style="display: none; position: absolute; left: 0; right: 0; top: 0; bottom: 0; z-index: 100;">
<div class="connecting-panel" style="width: 350px; background-color: #FFFFFF; margin: auto; border-radius: 15px; padding: 5px 15px 5px 15px;">
<h2 data-itr="connecting"></h2>
<p data-itr="connect_help"></p>
</div>
</div>
<script>

$('.partyToken').on('mouseover click mousemove mousedown mouseup select', function(e){
	//this.setSelectionRange(0, this.value.length);
	//e.preventDefault();
});

$('.copy-party-token').click(function(){
	var i = $('.partyToken:visible')[0];
	i.setSelectionRange(0, i.value.length);
	i.select();
	try {
		document.execCommand('copy');
	} catch (e) {}
});

googletag.cmd.push(function() { googletag.display('a300x250'); });
if(hasBottomAd) googletag.cmd.push(function() { googletag.display('a728x90'); });
googletag.cmd.push(function() { googletag.display('s300x250'); });

var hasAdblock = (document.getElementById("tester") == null);

if(hasAdblock){
	$('#a300x250').css('background-image', "url('blocker.png')");
}
</script>
<canvas id="canvas" width="800" height="600"></canvas>
<div style="font-family:'Ubuntu'">&nbsp;</div>
<script>

$(function () {
	$('[data-itr]').each(function(){
		var $this = $(this);
		var itr = $this.attr('data-itr');
		$this.html(i18n[itr] || i18n_dict['en'][itr] || itr);
		//$this.html('');
	});
	
	$('.btn-login').tooltip({
		'html': true,
		'title': i18n['login_tooltip'],
		'placement': 'bottom'
	});
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-62402209-1', 'auto');
ga('send', 'pageview');
ga('send', 'event', 'HasAdblock', hasAdblock ? 'Yes' : 'No', {'nonInteraction': 1});

//ga('send', 'event', 'Protocol', window.location.protocol, {'nonInteraction': 1});

</script>
</body>
</html>
