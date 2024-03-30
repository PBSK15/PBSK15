<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Site Error</title>
		<link rel="stylesheet" src="https://normalize-css.googlecode.com/svn/trunk/normalize.css" />
		<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
		<style type="text/css">
	body {
		background-color:#e6e6e6;
		margin:0;
		padding:0 20px;
		font-family:Helvetica, sans-serif;
		color:#666;
		line-height:1.4em;
	}
	#frame {
		position:relative;
		margin:20px auto;
		padding:20px 30px;
		min-width:400px;
		max-width:800px;
		border-radius:10px;
		background-color:#fff;
		border-bottom:2px solid #c3c3c3;
	}
	h1 {
		font-size:200%;
		padding:30px 30px;
		text-align:center;
		margin:0 0 40px;
		font-weight:normal;
		color:#fff;
		letter-spacing:-0.05em;
		border-radius:8px;
		border-bottom:2px solid #ccc;
		border-color:#751700;
		background: #cc3300;
		background: -moz-linear-gradient(top,  #cc3300 0%, #a02500 100%);
		background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#cc3300), color-stop(100%,#a02500));
		background: -webkit-linear-gradient(top,  #cc3300 0%,#a02500 100%);
		background: -o-linear-gradient(top,  #cc3300 0%,#a02500 100%);
		background: -ms-linear-gradient(top,  #cc3300 0%,#a02500 100%);
		background: linear-gradient(to bottom,  #cc3300 0%,#a02500 100%);
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc3300', endColorstr='#a02500',GradientType=0 );
		text-shadow: 2px 2px #770F0F;
	}
	a:hover {
		text-decoration:none;
	}
	ul.formError {
		color:#c00;
	}
	legend{
		font-weight:bold;
		margin-bottom:15px;
		font-size:120%;
	}
	fieldset {
		border:0;
		padding:0;
		margin:0;
	}
	.content,
	form {
		margin:0 auto;
		padding:0;
		width:60%;
	}
	.row {
		position: relative;
		height:40px;
	}
	.row label {
		float:left;
		width:40%;
		padding-top: 5px;
		color: #999;
	}
	.note {
		clear:left;
		font-size:80%;
		margin:10px 0 20px;
		padding:10px;
		border:1px solid #bbb;
		border-radius:4px;
		float:left;
		width:100%;
		line-height:1.6;
		background:#eee;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		position: absolute;
		left:0;
		right:0;
		top:30px;
		display:none;
		z-index:100;
	}
	.row:hover .note {
		display:block;
		pointer-events: none;
	}
	.note:after, .note:before {
		bottom: 100%;
		border: solid transparent;
		content: " ";
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
	}

	.note:after {
		border-color: rgba(238, 238, 238, 0);
		border-bottom-color: #eee;
		border-width: 10px;
		left: 10%;
		margin-left: -10px;
	}
	.note:before {
		border-color: rgba(187, 187, 187, 0);
		border-bottom-color: #bbb;
		border-width: 11px;
		left: 10%;
		margin-left: -11px;
	}
	.clear {
		clear:both;
	}
	.row .checkbox {
		font-size:2em;
		height:1em;
		float:left;
	}
	.row select,
	.row .text {
		float:left;
		width:60%;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-appearance: none;
		-moz-appearance:none;
		appearance:none;
		outline:none;
		border:1px solid #ccc;
		padding:8px;
		font-size:16px;
		border-radius:4px;
		background-color:#fff;
		color:#333;
	}
	.buttons {
		text-align:center;
		padding:20px 0;
	}
	.buttons input {
		font-size:110%;
		padding:8px 50px;
		cursor:pointer;
		background-color:#888;
		color:#fff !important;
		border:1px solid #555;
		border-bottom-width:2px;
		text-decoration:none;
		margin:0 2px;
		border-radius:25px;
	}
	.buttons input:hover {
		border-color:#751700;
		background: #a02500;
	}
	
	/** For 0px - 599px */
	@media all and (max-width : 599px) {
		#frame {
			margin:0;
			min-width:auto;
			border-radius:0;
			border:0;
			padding:0;
		}
		h1 {
			border-radius:0;
		}
		body {
			padding:0;
			background:#fff;
		}
		.content, form {
			width: auto;
			min-width: auto;
			padding:0 20px;
		}
		.note {
			display:block;
			position:static;
			top:auto;
			left:0;
			right:0;
		}
		.note:after, .note:before {
			display:none;
		}
	}
</style>
		<style type="text/css">
			.fatalError {
				padding:10px 0 0;
			}
			.fatalError ol{
				padding:15px 20px 15px 50px;
				font-size:90%;
				line-height:1.4em;
				margin:0 0 10px;
				color:#888;
				font-family:monospace;
				border-left:0px solid #DBDBDB;
				background-color:#F0F0F0;
					border-bottom-right-radius:6px;
					border-bottom-left-radius:6px;
			}
			ol li {
				margin-bottom:5px;
				word-wrap:break-word;
				border-bottom:1px solid #ccc;
				padding-bottom:5px;
			}
			ol li:last-child {
				border:0;
				padding:0;
				margin:0;
			}
			.message {
				font-weight:bold;
				font-size:120%;
				text-align:center;
			}
			.file {
				font-size:90%;
				text-align:center;
				color:#999;
			}
			.code {
				width:70px;
				position:absolute;
				top:30px;
				right:40px;
				background:#770F0F;
				color:#fff;
				text-align:center;
				padding:10px 0;
				margin:0;
				border-radius:6px;
				border-bottom:1px solid #C76A6A;
			}
			.code span { display:block; white-space:nowrap }
			.codeLabel {
				font-size:70%;
				text-transform:uppercase;
				color:#c99;
			}
			.codeNumber {
				font-size:140%;
			}
			.stackTitle {
				text-align: center;
				font-weight: bold;
				padding: 5px;
				margin-top: 20px;
				background: #dbdbdb;
				border-bottom:1px solid #ccc;
				border-top-right-radius:6px;
				border-top-left-radius:6px;
			}
			.moreInfo {
				text-align:center;
				font-size:12px;
				color:#999;
			}
			
			h1 {
				margin-bottom:20px;
			}
			/** For 0px - 599px */
			@media all and (max-width : 599px) {
				.code {
					top:10px;
					right:10px;
				}
				.fatalError {
					padding:10px 20px 20px;
				}
			}
		</style>
	</head>
	<body>
		<div id="frame">
			<div class="code">
				<span class="codeLabel">Code</span>
				<span class="codeNumber">125</span>
			</div>
			<h1>Site Error</h1>
			
				<div class="fatalError">	
					<div class="message">No settings were found for this domain (staging.pbskids.org) please update your config file</div>
					<div class="file">on Server/DeploymentStatus.php (line:224)</div>
					<div class="stackTitle">Stack trace</div>
					<ol><li>Site.php(256): Canteen\Server\DeploymentStatus->__construct('/mnt/ebs/lunchl...', 'staging.pbskids...')</li><li>/mnt/ebs/lunchlab/webroot/lunchlab/assets/php/site/Site.php(64): Canteen\Site->__construct('/mnt/ebs/lunchl...', '/mnt/ebs/lunchl...', NULL)</li><li>/mnt/ebs/lunchlab/webroot/lunchlab/index.php(11): LunchLab\Site->__construct('/mnt/ebs/lunchl...', '/mnt/ebs/lunchl...', 4)</li><li>{main}</li></ol>
				</div>
			
			
		</div>
	</body>
</html>