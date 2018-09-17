var AvertissementStockes = {
			
}
var syllabeUniques = [
	"ZUK", "WIY", "CEY", "RYB", "OZY", "ZYS", "EYB", "JEE", "CKN", "AKN", "EKN", "GBA", "CBO", "HUK", "LSQ", "OXU", "NPI", "DAQ", "SYD", "RLS", "YEC", "NPS", "ANP", "CSI", "ZAC", "KUF", "TCA", "IRN", "ZUP", "ZUS", "YUZ", "RZU", "AXH", "BEX", "YGY", "MTC", "BHU", "ZIK", "WYZ", "HWY", "WYA", "IXD", "XDA", "NBI", "PFA", "FAF", "YLH", "LHY", "ASD", "YFO", "AIF", "AJI", "BFE", "ISW", "XUO", "ALR", "LRA", "LBL", "YDD", "AZN", "DGK", "GKI", "NDG", "UYS", "OSG", "MUP", "HOJ", "OJP", "BSW", "BZI", "EBZ", "BYC", "UCM", "CMU", "CUJ", "ADP", "DP", "DPO", "TCU", "EDW", "EHT", "SEH", "EUK", "KD", "AKD", "KDA", "MK", "YMK", "MKH", "ZAO", "IRQ", "HIJ", "HYI", "HYU", "TYV", "IAY", "ALW", "LWE", "SYT", "RYK", "YKA", "OTM", "TAJ", "FEX", "CNA", "TPU", "CHB", "HBL", "YUH", "ATD", "OBD", "BNA", "YUN", "BHE", "RBH", "EKT", "BCI", "AOD", "DYI", "BYQ", "EUQ", "AYN", "FUH", "HNK", "AYR", "HUQ", "HUD", "HSO", "TYX", "YXE", "ESV", "TEJ", "GF", "GFL", "AGF", "PUO", "WME", "XSH", "AEK", "EKW", "KWO", "EPY", "SKH", "JIQ", "GOF", "SST", "FOF", "WRO", "OWR", "JNE", "JN", "EJN", "OOV", "BKI", "UBK", "VG", "OVG", "VGO", "AAD", "UEO", "QIE", "AQI", "UBQ", "BQ", "BQU", "LSH", "PW", "UPW", "PWE", "AHJ", "HJO", "RQA", "TPH", "MCI", "WAX", "FCO", "IBW", "UEQ", "OBZ", "BZA", "ECM", "CMN", "LJ", "OLJ", "LJE", "AGT", "OMG", "MG", "MGI", "AZT", "ZTE", "OMH", "MHY", "RDJ", "RDC", "DCO", "NDZ", "DZI", "LYW", "YW", "YWO", "CV", "ACV", "CVI", "AUU", "UUN", "HG", "CHG", "HGE", "JEZ", "ENM", "TZN", "EXV", "XVO", "STB", "TGL", "MCR", "PPS", "MZA", "OAB", "JIF", "JID", "JAJ", "YKY", "UIZ", "UAJ", "OML", "MLE", "LDJ", "HUO", "FCH", "OXH", "XHY", "EQS", "FAJ", "VC", "EVC", "VCH", "SEK", "ZK", "TZK", "ZKR", "CHV", "HVA", "MW", "MWA", "AMW", "ILW", "LWA", "CAA", "AAB", "KSI", "EZM", "LZH", "ZHE", "TZS", "ZS", "ZCS", "JD", "DJD", "JDJ", "UJS", "EUJ", "ITP", "TPI", "HEW", "RSQ", "MLS", "UMD", "MDU", "WID", "NIH", "GEW", "EWU", "URZ", "RZT", "ZTR", "TUU", "UUS", "KRU", "SSP", "DYX", "GEX", "EXY", "AAG", "PAW", "HH", "HHA", "AHH", "GOZ", "LKB", "ILK", "KBA", "YZY", "SYZ", "KUH", "ABF", "TGO", "TJO", "GUH", "WLO", "JIO", "WLS", "EWO", "WIO", "KII", "XII", "ZII", "AAN", "ATJ", "TSN", "WEZ", "VY", "VYL", "OVY", "BPA", "BPE", "YID", "ULK", "XAO", "AIP", "EKU", "KUE", "EYY", "YYA", "YYO", "AYY", "NTZ", "NTY", "IGW", "VOF", "UVL", "OVL", "XEP", "BCY", "GTS", "AVS", "UIY", "AWU", "TAW", "WUG", "YAW", "EYC", "LSC", "UXM", "XM", "XME", "HMU", "HSM", "YAA", "FIY", "XEO", "HPR", "MYZ", "XIW", "NUU", "PME", "PNA", "YRY", "HPI", "RMN", "LIH", "LSB", "LHI", "HRL", "IGY", "FAE", "VAE", "BIY", "KYD", "LWI", "GAH", "FAZ", "RGM", "EYV", "LKM", "PYU", "YNS", "UWO", "UWA", "ZAE", "NBU", "WBA", "YDN", "ADB", "DBU", "LYX", "KHM", "IPZ", "PZ", "PZI", "HSC", "LTZ", "IKT", "IZD", "ZDA", "FNI", "FNO", "DOJ", "GYG", "OCD", "CDU", "AFU", "AKV", "KV", "KVA", "TCL", "BFO", "CKC", "KCI", "VOX", "SUO", "XED", "AUY", "UYN", "KBU", "UDW", "HBO", "PUJ", "DMA", "RDM", "XEA", "ADZ", "ZOF", "UOG", "NTL", "SHT", "LTY", "RRS", "GWO", "DK", "ODK", "DKA", "TGA", "ILR", "ELR", "LRO", "AXY", "NTC", "IOH", "CG", "CGO", "ECG", "ZG", "TZG", "ZGE", "BTA", "NSR", "OOX", "HLS", "BIW", "YIM", "OYM", "OIM", "GBO", "EXD", "SZL", "WEU", "FAO", "NPA", "YNF", "FOT", "EYH", "YHO", "PYJ", "YJA", "YJ", "XOK", "ABZ", "BZY", "RZB", "ZBU", "UDL", "UCQ", "DIW", "PLY", "KIG", "GEH", "AEB", "BYA", "WUL", "YUE", "TSV", "VUI", "BYX", "OOB", "GUZ", "UZL", "AUO", "FOB", "KUP", "UPF", "QIB", "PTM", "HYK", "UNH", "XIU", "UZY", "OIB", "HNS", "UHS", "JIV", "JIG", "DAX", "RDV", "FAQ", "FTW", "EAX", "DHY", "PCH", "OPC", "NCQ", "RKM", "EDL", "SRY", "YSR", "XB", "XBA", "UXB", "FP", "RFP", "FPU", "XOU", "RTF", "DAF", "UOK", "OKK", "GHZ", "KHZ", "UWS", "DDA", "VOE", "OXV", "XVI", "GMU", "HRS", "BKA", "XOI", "LNU", "MAV", "TBE", "CQS", "AOK", "FJO", "LRE", "YEY", "LPS", "RWO", "UMT", "TUK", "PTC", "KUZ", "GHU", "AEM", "GUP", "MMS", "BBS", "AUJ", "AUH", "OEF", "EMR", "MRO", "VEQ", "NBL", "GAA", "KEG", "MIZ", "YOZ", "XYZ", "CYZ", "RYZ", "ZYP", "YPY", "TSD", "SDU", "GYA", "GYS", "PYX", "PYB", "WSK", "WSO", "EWS", "UOP", "KYN", "NYT", "SUV", "XUV", "EVL", "YEA", "ABK", "KIU", "UTL", "HC", "HCO", "CHC", "IHR", "ZLY", "EEW", "AWN", "EEF", "FST", "SKS", "AOY", "QAD", "CSC", "IJI", "UHR", "JUJ", "FUX", "WHA", "WKS", "BOW", "OWL", "WLI", "VNI", "IVN", "DSU", "BUJ", "FJE", "ODJ", "AWR", "WRE", "NDM", "ZAV", "WED", "ZUC", "UNR", "YUC", "UMY", "XOA", "POY", "RDL", "TNO", "RCN", "YNN", "MLA", "EBY", "USB", "WSM", "XIR", "HWA", "WUS", "XAP", "TTM", "KLU", "UMH", "YMH", "EOH", "ATW", "OWM", "WMA", "AII", "ZYD", "ZOY", "ZHU", "ETB", "PSK", "ONH", "BTO", "BCL", "OTZ", "LOJ", "DJL", "JL", "JLA", "UQA", "QAR", "UMZ", "MZE", "UXD", "OBC", "BKR", "YEB", "ZZM", "CBA", "CZI", "SPS", "KGR", "KGO", "KGA", "YTY", "ZYK", "YKL", "MQ", "MQU", "UMQ", "XEQ", "EXQ", "FV", "RFV", "FVE", "GNS", "RKK", "KFI", "KFO", "KFU", "EZC", "AZC", "QAN", "WET", "BPO", "VZ", "VZO", "EVZ", "BMO", "UHE", "PUV", "OBW", "ORW", "IRW", "EVH", "VH", "VHE", "HTM", "LTM", "USV", "AYB", "IMV", "AHV", "HVI", "KIY", "HAJ", "BII", "DSC", "GSU", "TJA", "TTV", "TVA", "STV", "TVO", "YRN", "SMY", "CP", "ICP", "CPO", "STL", "TLU", "IVN", "KAE", "MPF", "RCM", "EWI", "AJP", "TGU", "TAA", "UBY", "BYK", "YKH", "SOJ", "WPA", "BAA", "ZUG", "UGZ", "GZW", "APM", "KUV", "ASZ", "VNI", "EKP", "KPH", "AIJ", "RYD", "VUZ", "VUV", "RSD", "SDO", "RFF", "APV", "PV", "PVE", "VIH", "HUY", "ANR", "BMI", "YUD", "FUD", "BMA", "EBM", "YUP", "FY", "FYN", "YNB", "WBO", "BSL", "WPA", "XUT", "DYO", "OAQ", "YLF", "FTG", "NTM", "XOU", "NIY", "ZDE", "RYU", "LZW", "OCX", "IXY", "HLV"
]
var shuffle = function(a){
    for(let j = 0, x = "", i = a.length; i; i--){
        x = a[i - 1]
        a[i - 1] = a[j = Math.floor(Math.random() * i)]
        a[j] = x
    }
    return a
}
AvertissementStockes[app.user.authId] = {avertissements: 0, nom: app.user.displayName, role: app.user.role, triche: 0, automod: 0, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0, removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, syllabe: 0, tricheur: 0}
var Moderation = {
		
}
var monDico = document.createElement("script");
monDico.src = "https://rawgit.com/ErinaNakiri/bombparty-bot/master/Dictionnaire.js";
document.head.appendChild(monDico)
var change = 1
var end = 0
var max = -1
var autoban = -2
var parle = -1
var aide = -2
var syllabeNiquée = -2
var pendu = 0
var notif = 1
var jeuId = ""
var motPendu = ""
var motCaché = "RIM"
var lettreTrouvées = ""
var lapsguess = 60000
var lapsfound = 300000
function talk(msg){
	if (app.user.role === "host") {
		channel.socket.emit("settings:room.welcomeMessage", msg)
		parle = 0
	} else {
		channel.socket.emit("chatMessage", msg)
		parle = 1
	}
}
if (app.user.role === "host" || app.user.role === "moderator") {
	channel.socket.on("chatMessage", a => {
		let b = channel.data.usersByAuthId[a.userAuthId].displayName
		var c = channel.data.usersByAuthId[a.userAuthId]
		if(AvertissementStockes[c.authId].role === "Administrator" || AvertissementStockes[c.authId].role === "moderator") {
			channel.socket.emit("modUser", {displayName: c.displayName, authId: c.authId})
		}
		if (channel.data.usersByAuthId[a.userAuthId].latence === undefined) {
			c.latence = 0
		}
		if(AvertissementStockes[c.authId] === undefined) {
			AvertissementStockes[c.authId] = {avertissements: 0, nom: c.displayName, role: c.role, triche: 0, automod: 0, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0, removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0, tricheur: 0}
			talk("Le joueur " + AvertissementStockes[c.authId].nom + " n'avait pas de base de donnée. Elle a été créée avec succès.")
		}
		if (c.role === "moderator" || c.role === "host" ) {
			if (Moderation[c.authId] === undefined) {
				Moderation[c.authId] = {avertissement: 0, nom: c.displayName, authId: c.authId, mod: 0, joueur: "", joueurId: "", tentative: 0, role:c.role, unmod: 0, ban: 0, unwarn: 0, automod: 0, autounmod: 0, kick: 0, change: 0}
				AvertissementStockes[c.authId].role = "moderator"
				if (c.role === "moderator") {
					talk("Le joueur " + c.displayName + " a été détecté comme étant modérateur. Il a désormais les privilèges associés.")
				}
			}
		}
		if(change === 1) {
			if(app.user.authId === c.authId || AvertissementStockes[c.authId].role === "Administrator") {
				if (a.text === "Aucune") {
					talk("Il n'y aura donc pas de limite de caractères.")
					change = 0
					talk("Souhaitez-vous activer la détection automatique de bot ? (O/N)")
					autoban = -1
				} else if (isNaN(Number(a.text)) === true) {
					if(parle === 0) {
						talk("Ce que vous avez entré n'a pas été reconnu comme un chiffre !")
					}
				} else {
					talk("Le maximum de caractère a été mis à " + Number(a.text) + ".")
					change = 0
					max = Number(a.text)
					talk("Souhaitez-vous activer la détection automatique de bot ? (O/N)")
					autoban = -1
				}
			} 
		} else if(autoban === -1) {
			if(app.user.authId === c.authId || AvertissementStockes[c.authId].role === "Administrator") {
				if(a.text === "O") {
					talk("La fonction a bien été activée !")
					talk("Souhaitez-vous activer le .c ? (O/N)")
					autoban = 1
					aide = -1
				} else if(a.text === "N") {
					talk("La fonction a bien été désactivée !")
					talk("Souhaitez-vous activer le .c ? (O/N)")
					autoban = 0
					aide = -1
				} else {
					if(parle === 0) {
						talk("Souhaitez-vous activer la détection automatique de bot ? (O/N)")
					}
				}
			}
		} else if(aide === -1) {
			if(app.user.authId === c.authId || AvertissementStockes[c.authId].role === "Administrator") {
				if(a.text === "O") {
					talk("La fonction a bien été activée !")
					talk("Souhaitez-vous activer les syllabes niquées ? (O/N)")
					aide = 1
					syllabeNiquée = -1
				} else if(a.text === "N") {
					talk("La fonction a bien été désactivée !")
					talk("Souhaitez-vous avtiver les syllabes niquées ? (O/N)")
					aide = 0
					syllabeNiquée = -1
				}
			}
		} else if(syllabeNiquée === -1) {
			if(app.user.authId === c.authId || AvertissementStockes[c.authId].role === "Administrator") {
				if(a.text === "O") {
					talk("La fonction a bien été activée !")
					syllabeNiquée = 1
				} else if(a.text === "N") {
					talk("La fonction a bien été désactivée !")
					syllabeNiquée = 0
				}
			}
		}
		
		else if (a.text.length >= max) {
			if (a.userAuthId != AvertissementStockes[c.authId].role === "Administrator") {
				if(max != -1) { 			
					if (c.role === "host") {
						talk("Le message précédemment envoyé a été détecté comme trop long, mais l'utilisateur " + b + " est hôte.")
					} else if (c.role === "moderator") {
						talk("Le message précédemment envoyé a été détecté comme trop long, mais l'utilisateur " + b + " est modérateur.")
					} else {
						if (AvertissementStockes[c.authId].avertissements === 0) {
							talk("Le message précédemment envoyé a été détecté comme trop long. L'utilisateur " + b + " reçoit un avertissement.")
							AvertissementStockes[c.authId].avertissements = 1
							c.latence = Date.now()
						} else if (AvertissementStockes[c.authId].avertissements === 1) {
							talk("Le message précédemment envoyé a été détecté comme trop long. L'utilisateur " + b + " reçoit un 2e avertissement.")
							AvertissementStockes[c.authId].avertissements = 2
							c.latence = Date.now()
						} else {
							channel.socket.emit("banUser", {authId: a.userAuthId, displayName: b})
							talk("Le message précédemment envoyé a été détecté comme trop long. L'utilisateur " + b + " a été banni.")
						}
					}
				}
			}	
		}
		if (c.latence != 0) { 
			let d = Date.now()
			let e = d - c.latence 
			let Temps = Math.round(e/1000)
			let secondes = Temps % 60
			let minutes = ((Temps - secondes) / 60)
			if (minutes >= 10) {
				talk("Le joueur " + b + " a perdu un avertissement pour comportement acceptable.")
				c.latence = 0
				c.avertissements = c.avertissements - 1
			}
		}
		let cmd = a.text.substr(1).split(" ")
		let isCmd = ~["/", "."].indexOf(a.text[0])
		if(isCmd){
			if(~["warn"].indexOf(cmd[0])) {
				if(cmd.length === 1){
					talk("Quel joueur ?")
				} else {
					let user = channel.data.users.filter(x=>~x.displayName.toLowerCase().indexOf(cmd[1].toLowerCase()));
					if(user.length > 1) {
						if(AvertissementStockes[c.authId].unknown === 0) {
							if(Moderation[c.authId].joueurId === "") {
								let inconnu = function() {
									let m = 0
									let Joueurs = ""
									for(m = 0; m < user.length; m++) {
										Joueurs += m + 1
										Joueurs += ". "
										Joueurs += user[m].displayName
										if(AvertissementStockes[user[m].authId].connexion != undefined) {
											Joueurs += " (Connecté sur: "
											Joueurs += AvertissementStockes[user[m].authId].connexion
											Joueurs += ") "
										}
										if(AvertissementStockes[user[m].authId].role === "Administrator") {
											Joueurs += "(Admin) "
										} else if (user[m].role === "moderator") {
											Joueurs += "(Modo) "
										} else if (user[m].role === "host") {
											Joueurs += "(Hôte) "
										}
									}
									talk(Joueurs)
									talk("Indiquez le nombre correspondant au joueur que vous cherchez.")
								}
								let n = 0
								talk("Il y a plus d'un joueur qui correspond à votre recherche. S'agit-il de l'un de ceux-ci ?")
								AvertissementStockes[c.authId].unknown = 1
								AvertissementStockes[c.authId].warn = 1
								for(n = 0; n < user.length; n++) {
									AvertissementStockes[c.authId].unknownPlayer.push(user[n].displayName)
									AvertissementStockes[c.authId].unknownPlayerId.push(user[n].authId)
								}
								inconnu()
							} else {
								talk("Vous êtes déjà en train de modérer un joueur.")
							}
						} else {
							talk("Vous êtes déjà en train de chercher un joueur.")
						}
					} else if(user.length == 1) {
						talk("Le joueur " + user[0].displayName + " a " + AvertissementStockes[user[0].authId].avertissements + " avertissements.")
					} else {
						talk("Le joueur " + cmd[1] + " n'a pas été trouvé.")
					}
				}
			} else if (~["addwarn"].indexOf(cmd[0])) {
				let user = channel.data.users.filter(x=>~x.displayName.toLowerCase().indexOf(cmd[1].toLowerCase()));
				if(user.length > 1) {
					if(c.role === "moderator" || c.role === "host") {
						if(AvertissementStockes[c.authId].unknown === 0) {
							if(Moderation[c.authId].joueurId === "") {
								let inconnu = function() {
									let m = 0
									let Joueurs = ""
									for(m = 0; m < user.length; m++) {
										Joueurs += m + 1
										Joueurs += ". "
										Joueurs += user[m].displayName
										if(AvertissementStockes[user[m].authId].connexion != undefined) {
											Joueurs += " (Connecté sur: "
											Joueurs += AvertissementStockes[user[m].authId].connexion
											Joueurs += ") "
										}
										if(AvertissementStockes[user[m].authId].role === "Administrator") {
											Joueurs += "(Admin) "
										} else if (user[m].role === "moderator") {
											Joueurs += "(Modo) "
										} else if (user[m].role === "host") {
											Joueurs += "(Hôte) "
										}
									}
									talk(Joueurs)
								}
								let n = 0
								talk("Il y a plus d'un joueur qui correspond à votre recherche. S'agit-il de l'un de ceux-ci ?")
								AvertissementStockes[c.authId].unknown = 1
								AvertissementStockes[c.authId].addwarn = 1
								for(n = 0; n < user.length; n++) {
									AvertissementStockes[c.authId].unknownPlayer.push(user[n].displayName)
									AvertissementStockes[c.authId].unknownPlayerId.push(user[n].authId)
								}
								inconnu()
								talk("Indiquez le nombre correspondant au joueur que vous cherchez.")
							} else {
								talk("Vous êtes déjà en train de modérer un joueur.")
							} 
						} else {
							talk("Vous êtes déjà en train de chercher un joueur.")
						} 
					} else {
						talk("Vous n'avez pas les permissions pour effectuer cette commande.")
					}
				} else {
					if(a.AvertissementStockes[c.authId].role != "Administrator") {
						if (user[0].role === "moderator") {
							talk("Vous ne pouvez pas warn un modérateur !")
						} else if (user[0].role === "host") {
							talk("Vous ne pouvez pas warn l'hôte !")
						} else if (AvertissementStockes[user[0].authId].role === "Administrator") {
							talk ("Vous ne pouvez pas warn cette personne !")
						}
					}
					if(user[0].role != "moderator" && user[0].role != "host" && AvertissementStockes[user[0].authId].role === "Administrator") {
						if (c.role === "host" || c.role === "moderator") {
							if(AvertissementStockes[c.authId].role === "Administrator") {
								if(Moderation[c.authId].joueur === "") {
									if (cmd.length === 1) {
										talk("Quel joueur ?")
									} else {
										if(user.length) {
											talk("Êtes-vous sûr de vouloir warn " + user[0].displayName + " ? (O/N)")
											Moderation[c.authId].avertissement = 1
											Moderation[c.authId].joueur = user[0].displayName
											Moderation[c.authId].joueurId = user[0].authId
										} else {
											talk("Le joueur n'a pas été trouvé !")
										}
									}
								} else {
									talk("Vous êtes déjà en train de modérer un joueur !")
								}
							} 
						} else if (AvertissementStockes[c.authId].role != "Administrator") {
							talk("Vous n'avez pas le rang nécessaire pour faire un warn !")
						}
					}
					if(AvertissementStockes[c.authId].role === "Administrator") {
						if(user.length) {
							AvertissementStockes[user[0].authId].avertissements = AvertissementStockes[user[0].authId].avertissements + 1
							if(AvertissementStockes[user[0].authId].avertissements < 3) {
								talk("J'ai averti ce joueur pour vous.")
							} else {
								if(AvertissementStockes[user[0].authId].role === "moderator") {
									if(app.user.authId === user[0].authId) {
										if(AvertissementStockes[user[0]].role != "Administrator") {
											talk("Ce joueur est hôte du programme...")
											talk("Êtes-vous sûr de vouloir bannir l'hôte ? (O)")
											end = 1
										} else { 
											talk("Vous ne pouvez pas bannir un autre Administrateur.")
										}
									} else if (app.user.role === "host") {
										channel.socket.emit("unmodUser", user[0].authId)
										channel.socket.emit("banUser", {displayName: user[0].displayName, authId: user[0].authId})
									} else {
										talk("Je n'ai pas pu bannir ce joueur...")
									}
								} else if(user[0].role === "host") {
									if(app.user.authId === user[0]) {
										if(AvertissementStockes[user[0].authId].role != "Administrator") {
											end = 1
											talk("Ce joueur est hôte de la partie... Pour le bannir, nous devons user des méthodes de contournement, ce qui va détruire mon programme...")
											talk("Êtes-vous sûr de vouloir bannir l'hôte ? (O)")
										} else {
											talk("Vous ne pouvez pas bannir un autre Administrateur.")
										}
									} else {
										talk("Je n'ai pas pu bannir ce joueur...")
									}
								} else {
									channel.socket.emit("banUser", {displayName: user[0].displayName, authId: user[0].authId})
									talk("Le joueur a bien été banni.")
								}
							}
						}
					}
				} 
			} else if (~["mod"].indexOf(cmd[0])) {
				let user = channel.data.users.filter(x=>~x.displayName.toLowerCase().indexOf(cmd[1].toLowerCase()));
				if(user.length > 1) {
					if(c.role === "host" || AvertissementStockes[c.authId].role === "Administrator") {
						if(app.user.role === "host") {
							if(AvertissementStockes[c.authId].unknown === 0) {
								if(Moderation[c.authId].joueurId === "") {
									let inconnu = function() {
										let m = 0
										let Joueurs = ""
										for(m = 0; m < user.length; m++) {
											Joueurs += m + 1
											Joueurs += ". "
											Joueurs += user[m].displayName
											if(AvertissementStockes[user[m].authId].connexion != undefined) {
												Joueurs += " (Connecté sur: "
												Joueurs += AvertissementStockes[user[m].authId].connexion
												Joueurs += ") "
											}
											if(AvertissementStockes[user[m].authId].role === "Administrator") {
												Joueurs += "(Admin) "
											} else if (user[m].role === "moderator") {
												Joueurs += "(Modo) "
											} else if (user[m].role === "host") {
												Joueurs += "(Hôte) "
											}
										}
										talk(Joueurs)
									}
									let n = 0
									talk("Il y a plus d'un joueur qui correspond à votre recherche. S'agit-il de l'un de ceux-ci ?")
									AvertissementStockes[c.authId].unknown = 1
									AvertissementStockes[c.authId].mod = 1
									for(n = 0; n < user.length; n++) {
										AvertissementStockes[c.authId].unknownPlayer.push(user[n].displayName)
										AvertissementStockes[c.authId].unknownPlayerId.push(user[n].authId)
									}
									inconnu()
									talk("Indiquez le nombre correspondant au joueur que vous cherchez.")
								} else {
									talk("Vous êtes déjà en train de modérer un joueur.")
								}
							} else {
								talk("Vous êtes déjà en train de chercher un joueur.")
							}
						} else {
							talk("Le programme n'a pas été lancé par l'hôte")
						}
					} else {
						talk("Vous n'avez pas les permissions pour effectuer cette commande.")
					}
				}
				else if (channel.data.usersByAuthId[app.user.authId].role === "host") {
					if (c.role === "host" || AvertissementStockes[c.authId].role === "Administrator") {
						if (cmd.length === 1) {
							talk("Quel joueur ?")
						} else {
							if(Moderation[c.authId].joueur === "") {
								if(user.length) {
									talk("Êtes vous sûr de vouloir faire passer " + user[0].displayName + " modérateur ? (O/N)")
									Moderation[c.authId].mod = 1
									Moderation[c.authId].joueur = user[0].displayName
									Moderation[c.authId].joueurId = user[0].authId
								}
							} else {
								talk("Vous êtes déjà en train de modérer un joueur !")
							}
						}
					} else { 
						talk("Vous n'avez pas les permissions nécessaires!")
					}
				} else {
					talk("Cette fonction ne peut être activée, car le programme n'a pas été lancé par l'hôte !")
				}
			} else if (~["unmod", "unMod"].indexOf(cmd[0])) {
				let user = channel.data.users.filter(x=>~x.displayName.toLowerCase().indexOf(cmd[1].toLowerCase()));
				if(user.length > 1) {
					if(c.role === "host" || AvertissementStockes[c.authId].role === "Administrator") {
						if(app.user.role === "host") {
							if(AvertissementStockes[c.authId].unknown === 0) {
								if(Moderation[c.authId].joueurId === "") {
									let inconnu = function() {
										let m = 0
										let Joueurs = ""
										for(m = 0; m < user.length; m++) {
											Joueurs += m + 1
											Joueurs += ". "
											Joueurs += user[m].displayName
											if(AvertissementStockes[user[m].authId].connexion != undefined) {
												Joueurs += " (Connecté sur: "
												Joueurs += AvertissementStockes[user[m].authId].connexion
												Joueurs += ") "
											}
											if(AvertissementStockes[user[m].authId].role === "Administrator") {
												Joueurs += "(Admin) "
											} else if (user[m].role === "moderator") {
												Joueurs += "(Modo) "
											} else if (user[m].role === "host") {
												Joueurs += "(Hôte) "
											}
										}
										talk(Joueurs)
									}
									let n = 0
									talk("Il y a plus d'un joueur qui correspond à votre recherche. S'agit-il de l'un de ceux-ci ?")
									AvertissementStockes[c.authId].unknown = 1
									AvertissementStockes[c.authId].unmod = 1
									for(n = 0; n < user.length; n++) {
										AvertissementStockes[c.authId].unknownPlayer.push(user[n].displayName)
										AvertissementStockes[c.authId].unknownPlayerId.push(user[n].authId)
									}
									inconnu()
									talk("Indiquez le nombre correspondant au joueur que vous cherchez.")
								} else {
									talk("Vous êtes déjà en train de modérer un joueur.")
								}
							} else {
								talk("Vous êtes déjà en train de chercher un joueur.")
							}
						} else {
							talk("Le programme n'a pas été lancé par l'hôte")
						}
					} else {
						talk("Vous n'avez pas les permissions pour effectuer cette commande.")
					}
				}
				else if(user[0].role === "host" && AvertissementStockes[c.authId].role != "Administrator") {
					talk("Vous venez de tenter de rétrograder L'hôte, abruti !")
				} else if(user[0].role === "host" && AvertissementStockes[c.authId].role === "Administrator") {
					talk("Vous venez de tenter de rétrograder L'hôte.")
				} else {
					if (app.user.role === "host") {
						if (c.role === "host" || AvertissementStockes[c.authId].role === "Administrator") {
							if (cmd.length === 1) {
								talk("Quel joueur ?")
							} else {
								if (AvertissementStockes[user[0].authId].role === "Administrator") {
									talk("Vous ne pouvez pas rétrograder cette personne.")
								} else if(Moderation[c.authId].joueur === "") {
									if (user[0].role === "moderator") {
										if(user.length) {
											if(app.user.authId === user[0].authId) {
												talk("Vous ne pouvez pas rétrograder celui qui a lancé le programme !")
											} else {
												talk("Êtes vous sûr de vouloir retirer le rôle de modérateur à " + user[0].displayName + "  ? (O/N)")
												Moderation[c.authId].unmod = 1
												Moderation[c.authId].joueur = user[0].displayName
												Moderation[c.authId].joueurId = user[0].authId
											}
										}
									} else {
										talk("Vous ne pouvez pas rétrograder quelqu'un qui n'est pas modérateur !")
									}
								} else {
									talk("Vous êtes déjà en train de modérer un joueur !")
								}
							}
						} else {
							talk("Vous n'avez pas les permissions nécessaires!")
						}
					} else {
						talk("Cette fonction ne peut être activée, car le programme n'a pas été lancé par l'hôte !")
					}
				}
			} else if (~["change", "settings"].indexOf(cmd[0])) {
				if (c.role === "host" || AvertissementStockes[c.authId].role === "Administrator" || c.authId === app.user.authId) {
					if(Moderation[c.authId].change === 0) {
						if(Moderation[c.authId].joueurId === "") {
							Moderation[c.authId].change = 1
							talk("Quel paramètre souhaitez-vous modifier ?")
							talk("1. Limite de caractères. | 2. Détection automatique de bot. | 3. Activer ou désactiver le .c | 4. Activer ou désactiver les syllabes niquées")
							talk("5. Activer ou désactiver les notifs d'entrée/sortie | 6. Changer le laps du pendu | 0. Annuler")
						} else {
							talk("Vous êtes déjà en train de modérer un joueur !")
						}
					} else {
						talk("Vous êtes déjà en train de modifier les paramètres !")
					} 
				} else {
					talk("Vous n'avez pas les permissions suffisantes pour modifier les paramètres.")
				}
			} else if(~["patch"].indexOf(cmd[0])) {
				if(cmd.length === 1) {
					talk("Quel patch ? (1.0, 1.1, 1.2, 1.3, 1.3.1, 1.4)")
				} else if(cmd[1] === "1.0") {
					talk("Voici les principales mises à jours de la version 1.0.")
					talk("Ajout du système d'avertissements. Ajout du .warn, .addwarn, .help, .removewarn, .mod, .unmod, .automod, .ban. Ajout d'une limite de caractère. Ajout d'un détecteur de bot.")
				} else if(cmd[1] === "1.1") {
					talk("Voici les principales mises à jours de la version 1.1.")
					talk("Ajout d'un système de mesures en cas que deux joueurs semblables soient cherchés. Ajout du .kick.")
				} else if(cmd[1] === "1.2") {
					talk("Voici les principales mises à jours de la version 1.2")
					talk("Ajout de .c, ajout de la possibilité de le désactiver, rééquilibrage de la commande .change.")
				} else if(cmd[1] === "1.3") {
					talk("Voici les principales mises à jours de la version 1.3")
					talk("Ajout du premier jeu, .pendu, qui vient avec .guess et .found. Amusez-vous !")
				} else if(cmd[1] === "1.3.1") {
					talk("Voici les principales mises à jours de la version 1.3.1")
					talk("Ajout de l'option de retirer les notifs d'arrivée et de sortie. Ajout du choix du laps du pendu.")
				} else if(cmd[1] === "1.4") {
					talk("Cette mise à jour n'a pas encore été appliquée, et est sujette à des changements sans préavis.")
					talk("Ajout possible du .info, .t et rééquilibrage du spam.")
				}else { 
					talk("La patch n'a pas été reconnue.")
				}
			} else if (~["ban"].indexOf(cmd[0])) {
				let user = channel.data.users.filter(x=>~x.displayName.toLowerCase().indexOf(cmd[1].toLowerCase()));
				if(user.length > 1) {
					if(c.role === "moderator" || c.role === "host") {
						if(AvertissementStockes[c.authId].unknown === 0) {
							if(Moderation[c.authId].joueurId === "") {
								let inconnu = function() {
									let m = 0
									let Joueurs = ""
									for(m = 0; m < user.length; m++) {
										Joueurs += " "
										Joueurs += m + 1
										Joueurs += ". "
										Joueurs += user[m].displayName
										if(AvertissementStockes[user[m].authId].connexion != undefined) {
											Joueurs += " (Connecté sur: "
											Joueurs += AvertissementStockes[user[m].authId].connexion
											Joueurs += ") "
										}
										if(AvertissementStockes[user[m].authId].role === "Administrator") {
											Joueurs += "(Admin) "
										} else if (user[m].role === "moderator") {
											Joueurs += "(Modo) "
										} else if (user[m].role === "host") {
											Joueurs += "(Hôte) "
										}
									}
									talk(Joueurs)
								}
								let n = 0
								talk("Il y a plus d'un joueur qui correspond à votre recherche. S'agit-il de l'un de ceux-ci ?")
								AvertissementStockes[c.authId].unknown = 1
								AvertissementStockes[c.authId].ban = 1
								for(n = 0; n < user.length; n++) {
									AvertissementStockes[c.authId].unknownPlayer.push(user[n].displayName)
									AvertissementStockes[c.authId].unknownPlayerId.push(user[n].authId)
								}
								inconnu()
								talk("Indiquez le nombre correspondant au joueur que vous cherchez.")
							} else {
								talk("Vous êtes déjà en train de modérer un joueur.")
							} 
						} else {
							talk("Vous êtes déjà en train de chercher un joueur.")
						} 
					} else {
						talk("Vous n'avez pas les permissions pour effectuer cette commande.")
					}
				}
				else if(AvertissementStockes[c.authId].role === "Administrator") {
					if(user.length) {
						if(user[0].role === "host") {
							if(app.user.authId === user[0].authId) {
								if(AvertissementStockes[user[0].authId] != "Administrator") {
									talk("Le joueur est hôte. Pour le bannir, il me faudra user des méthodes de contournement. Êtes-vous sûr de vouloir procéder ? (O)")
									end = 1
								} else {
									talk("Vous ne pouvez pas bannir un autre Administrateur.")
								}
							} else {
								talk("Je n'ai pas pu bannir ce joueur.")
							}
						} else if(user[0].role === "moderator") {
							if (app.user.role === "host") {
								channel.socket.emit("unmodUser", user[0].authId)
								channel.socket.emit("banUser", {displayName: user[0].displayName, authId: user[0].authId})
								talk("J'ai bien banni le joueur demandé.")
							} else if (app.user.authId === user[0].authId) {
								if(AvertissementStockes[user[0].authId].role != "Administrator") {
									talk("Le joueur est hôte du programme. Êtes-vous sûre de vouloir le bannir ? (O)")
									end = 1
								} else {
									talk("Vous ne pouvez pas bannir un autre administrateur.")
								}
							} else {
								talk("Je n'ai pas pu bannir ce joueur...")
							}
						} else {
							channel.socket.emit("banUser", {displayName: user[0].displayName, authId: user[0].authId})
						}
					}
				} else if(c.role === "moderator" || c.role === "host") {
					if(Moderation[c.authId].joueur === "") {
						if(cmd.length === 1) {
							talk("Quel joueur ?")
						} else {
							let user = channel.data.users.filter(x=>~x.displayName.toLowerCase().indexOf(cmd[1].toLowerCase()));
							if(user.length) {
								if(AvertissementStockes[user[0].authId].role === "Administrator") {
									talk("Vous ne pouvez pas bannir la créatrice de ce programme !")
								}
								else if(user[0].role === "moderator") {
									talk("Vous ne pouvez pas bannir un modérateur.")
								} else if(user[0].role === "host") {
									talk("Vous ne pouvez pas bannir l'hôte.")
								} else {
									talk("Êtes-vous sûr de vouloir bannir " + user[0].displayName + " ? (O/N)")
									Moderation[c.authId].ban = 1
									Moderation[c.authId].joueur = user[0].displayName
									Moderation[c.authId].joueurId = user[0].authId
								}
							} else {
								("Le joueur n'a pas été trouvé !")
							}
						} 
					} else {
						talk("Vous êtes déjà en train de modérer un joueur !")
					}
				} else {
					talk("Vous n'avez pas les permissions nécessaires !")
				}
			} else if(~["removewarn", "rmvwarn"].indexOf(cmd[0])) {
				let user = channel.data.users.filter(x=>~x.displayName.toLowerCase().indexOf(cmd[1].toLowerCase()));
				if(user.length > 1) {
					if(c.role === "moderator" || c.role === "host") {
						if(AvertissementStockes[c.authId].unknown === 0) {
							if(Moderation[c.authId].joueurId === "") {
								let inconnu = function() {
									let m = 0
									let Joueurs = ""
									for(m = 0; m < user.length; m++) {
										Joueurs += m + 1
										Joueurs += ". "
										Joueurs += user[m].displayName
										if(AvertissementStockes[user[m].authId].connexion != undefined) {
											Joueurs += " (Connecté sur: "
											Joueurs += AvertissementStockes[user[m].authId].connexion
											Joueurs += ") "
										}
										if(AvertissementStockes[user[m].authId].role === "Administrator") {
											Joueurs += "(Admin) "
										} else if (user[m].role === "moderator") {
											Joueurs += "(Modo) "
										} else if (user[m].role === "host") {
											Joueurs += "(Hôte) "
										}
									}
									talk(Joueurs)
								}
								let n = 0
								talk("Il y a plus d'un joueur qui correspond à votre recherche. S'agit-il de l'un de ceux-ci ?")
								AvertissementStockes[c.authId].unknown = 1
								AvertissementStockes[c.authId].removewarn = 1
								for(n = 0; n < user.length; n++) {
									AvertissementStockes[c.authId].unknownPlayer.push(user[n].displayName)
									AvertissementStockes[c.authId].unknownPlayerId.push(user[n].authId)
								}
								inconnu()
								talk("Indiquez le nombre correspondant au joueur que vous cherchez.")
							} else {
								talk("Vous êtes déjà en train de modérer un joueur.")
							} 
						} else {
							talk("Vous êtes déjà en train de chercher un joueur.")
						} 
					} else {
						talk("Vous n'avez pas les permissions pour effectuer cette commande.")
					}
				}
				else if(c.role === "host" || c.role === "moderator" || AvertissementStockes[c.authId].role === "Administrator") {
					if(user.length) {
						if(user[0].role === "moderator") {
							if(AvertissementStockes[c.authId].role === "Administrator") {
								AvertissementStockes[user[0].authId].avertissements = AvertissementStockes[user[0].authId].avertissements - 1
								talk("J'ai retiré un avertissement à ce joueur.")
							} else {
								talk("On ne peut pas retirer un warn à un modérateur.")
							}
						} else if(user[0].role === "host") {
							if(AvertissementStockes[c.authId].role === "Administrator") {
								AvertissementStockes[user[0].authId].avertissements = AvertissementStockes[user[0].authId].avertissements - 1
								talk("J'ai retiré un avertissement à ce joueur.")
							} else {
								talk("On ne peut pas retirer un avertissement à l'hôte.")
							}
						} else {
							talk("Êtes vous sûr de vouloir retirer un warn du joueur " + user[0].displayName + " ? (O/N)")
							Moderation[c.authId].unwarn = 1
							Moderation[c.authId].joueur = user[0].displayName
							Moderation[c.authId].joueurId = user[0].authId
						}
					} else {
							talk("Je n'ai pas trouvé le joueur !")
					}
				} else {
					talk("Votre rang n'est pas suffisant !")
				}
			} else if (~["help"].indexOf(cmd[0])) {
				if (cmd.length === 1) {
					if (c.role === "") {
						if(app.user.role === "host") {
							talk("Voici la liste des commandes. Pour avoir plus d'information sur une commande, faites .help [la commande].")
							talk("warn | help | c | guess | found")
						} else {
							talk("Voici la liste des commandes. Pour avoir plus d'information sur une commande, faites .help [la commande].")
							talk("warn | help")
						}
					} else if (c.role === "moderator") {
						if (app.user.authId === a.authId) {
							talk("Voici la liste des commandes. Pour avoir plus d'information sur une commande, faites .help [la commande].")
							talk("warn | addwarn | ban | removewarn | help | change | guess | found")
						} else {
							talk("Voici la liste des commandes. Pour avoir plus d'information sur une commande, faites .help [la commande].")
							talk("warn | addwarn | ban | removewarn | help | guess | found | pendu")
						}
					} else {
						if(app.user.role === "host") {
							talk("Voici la liste des commandes. Pour avoir plus d'information sur une commande, faites .help [la commande].")
							talk("warn | help | addwarn | ban | removewarn | mod | unmod | change | kick | automod | c | guess | found | pendu")
						} else {
							talk("Voici la liste des commandes. Pour avoir plus d'information sur une commande, faites .help [la commande].")
							talk("warn | addwarn | ban | removewarn | help | change | kick | c ")
						}
					}
				} else {
					if(cmd[1] === "warn") {
						talk("Utilisation: .warn {utilisateur}")
						talk("Acronymes: Aucun.")
						talk("Prérequis: Aucun.")
						talk("Définition: Affiche le nombre d'avertissements de l'utilisateur demandé.")
					} else if (cmd[1] === "help") {
						talk("Utilisation: .help [commande]")
						talk("Acronymes: Aucun.")
						talk("Prérequis: Aucun.")
						talk("Définition: Affiche la liste des commandes. Si une autre commande est indiquée, affiche les détails de cette commande.")
					} else if (cmd[1] === "addwarn") {
						talk("Utilisation: .addwarn {utilisateur}")
						talk("Acronymes: Aucun.")
						talk("Prérequis: Modérateur+")
						talk("Définition: Ajoute un warn à l'utilisateur demandé. (3 = ban)")
					} else if (cmd[1] === "ban") {
						talk("Utilisation: .ban [utilisateur]")
						talk("Acronymes: Aucun.")
						talk("Prérequis: Modérateur+")
						talk("Définition: Le joueur demandé sera banni.")
					} else if (cmd[1] === "removewarn") {
						talk("Utilisation: .removewarn [utilisateur]")
						talk("Acronymes: rmvwarn")
						talk("Prérequis: Modérateur+")
						talk("Définition: Retire un warn à l'utilisateur.")
					} else if (cmd[1] === "mod") {
						talk("Utilisation: .mod [utilisateur]")
						talk("Acronymes: Aucun.")
						talk("Prérequis: Hôte+ + Le programme soit en place par l'hôte")
						talk("Définition: Monte l'utilisateur au rang de modérateur.")
					} else if (cmd[1] === "unmod") {
						talk("Utilisation: .unmod [utilisateur]")
						talk("Acronymes: Aucun.")
						talk("Prérequis: Hôte+ + Le programme soit en place par l'hôte.")
						talk("Définition: Rétrograde l'utilisateur.")
					} else if (cmd[1] === "change") {
						talk("Utilisation: .settings")
						talk("Acronymes: change")
						talk("Prérequis: Hôte+ ou être celui qui a mis en place le programme.")
						talk("Définition: Ouvre le menu de modification des paramètres en place.")
					} else if (cmd[1] === "automod") {
						talk("Utilisation: .automod [utilisateur]")
						talk("Acronymes: Aucun.")
						talk("Prérequis: Hôte+ + Le programme soit en place par l'hôte.")
						talk("Définition: rend un joueur automatiquement modérateur.")
					} else if (cmd[1] === "kick") {
						talk("Utilisation: .kick [utilisateur]")
						talk("Acronymes: Aucun.")
						talk("Prérequis: Modérateur+")
						talk("Kick l'utilisateur du salon. Celui-ci POURRA revenir.")
					} else if (cmd[1] === "pendu") {
						talk("Utilisation: .pendu [mot]")
						talk("Acronymes: aucun.")
						talk("Prérequis: Modérateur")
						talk("Définition: Lance une partie de pendu ! Cela nécessite de kick le joueur qui lance la partie, mais celui-ci pourra revenir.")
					}else if(cmd[1] === "guess") {
						talk("Utilisation: .guess [lettre]")
						talk("Acronymes: Aucun.")
						talk("Prérequis: Partie de pendu lancée.")
						talk("Définition: Essaie de deviner si la lettre est contenue dans le mot !")
					}else if(cmd[1] === "found") {
						talk("Utilisation: .found [mot]")
						talk("Acronymes: Aucun.")
						talk("Prérequis: Partie de pendu lancée.")
						talk("Définition: Essaie de deviner le mot !")
					} else {
						talk("La commande n'a pas été reconnue.")
					}
				}
			} else if (~["automod"].indexOf(cmd[0])) {
				let user = channel.data.users.filter(x=>~x.displayName.toLowerCase().indexOf(cmd[1].toLowerCase()));
				if(user.length > 1) {
					if(c.role === "host" || AvertissementStockes[c.authId].role === "Administrator") {
						if(app.user.role === "host") {
							if(AvertissementStockes[c.authId].unknown === 0) {
								if(Moderation[c.authId].joueurId === "") {
									let inconnu = function() {
										let m = 0
										let Joueurs = ""
										for(m = 0; m < user.length; m++) {
											Joueurs += m + 1
											Joueurs += ". "
											Joueurs += user[m].displayName
											if(AvertissementStockes[user[m].authId].connexion != undefined) {
												Joueurs += " (Connecté sur: "
												Joueurs += AvertissementStockes[user[m].authId].connexion
												Joueurs += ") "
											}
											if(AvertissementStockes[user[m].authId].role === "Administrator") {
												Joueurs += "(Admin) "
											} else if (user[m].role === "moderator") {
												Joueurs += "(Modo) "
											} else if (user[m].role === "host") {
												Joueurs += "(Hôte) "
											}
										}
										talk(Joueurs)
									}
									let n = 0
									talk("Il y a plus d'un joueur qui correspond à votre recherche. S'agit-il de l'un de ceux-ci ?")
									AvertissementStockes[c.authId].unknown = 1
									AvertissementStockes[c.authId].unkautomod = 1
									for(n = 0; n < user.length; n++) {
										AvertissementStockes[c.authId].unknownPlayer.push(user[n].displayName)
										AvertissementStockes[c.authId].unknownPlayerId.push(user[n].authId)
									}
									inconnu()
									talk("Indiquez le nombre correspondant au joueur que vous cherchez.")
								} else {
									talk("Vous êtes déjà en train de modérer un joueur.")
								}
							} else {
								talk("Vous êtes déjà en train de chercher un joueur.")
							}
						} else {
							talk("Le programme n'a pas été lancé par l'hôte")
						}
					} else {
						talk("Vous n'avez pas les permissions pour effectuer cette commande.")
					}
				}
				else if(app.user.role === "host") {
					if(user === undefined) {
						talk("Le joueur " + cmd[1] + " n'a pas été trouvé.")
					} else if(AvertissementStockes[c.authId].role === "Administrator") {
						if(AvertissementStockes[user[0].authId].automod === 0) {
							talk("Le joueur " + user[0].displayName + " est désormais automatiquement modérateur.")
							AvertissementStockes[user[0].authId].automod = 1
							channel.socket.emit("modUser", {displayName: user[0].displayName, authId: user[0].authId})
						} else {
							talk("Le joueur " + user[0].displayName + " n'est plus automatiquement modérateur.")
							AvertissementStockes[user[0].authId].automod = 0
							channel.socket.emit("unmodUser", user[0].authId)
						}
					} else if (c.role === "host") {
						if(AvertissementStockes[user[0].authId].role === "Administrator") {
							talk("Cette joueuse est la créatrice de ce programme. Elle est déjà automod !")
						} else if(app.user.authId === user[0].authId){
							talk("Vous ne pouvez pas rendre automod le joueur qui a lancé le programme, car s'il quitte le programme perdra effet !")
						} else {
							if(Moderation[c.authId].joueur === "") {
								if(AvertissementStockes[user[0].authId].automod === 0) {
									talk("Êtes vous sûr de vouloir rendre " + user[0].displayName + " automatiquement modérateur ? (O/N)")
									Moderation[c.authId].automod = 1
									Moderation[c.authId].joueur = user[0].displayName
									Moderation[c.authId].joueurId = user[0].authId
								} else {
									talk("Êtes vous sûr de vouloir retirer l'auto-modération à " + user[0].displayName + "  ? (O/N)")
									Moderation[c.authId].autounmod = 1
									Moderation[c.authId].joueur = user[0].displayName
									Moderation[c.authId].joueurId = user[0].authId
								}
							} else {
								talk("Vous êtes déjà en train de modérer un joueur !")
							}
						}
					} else {
						talk("Vous n'avez pas les permissions nécessaires pour effectuer cette commande !")
					}
				} else {
					talk("Le programme ne peut être activé, car il n'a pas été lancé par l'hôte !")
				}
			} else if(~["c"].indexOf(cmd[0])) {
				if(aide === 1) {
					shuffle(monDico)
					let aide1 = []
					let syllabe = channel.data.wordRoot;
					if(cmd.length > 1) {
						var syllabeChoisie = cmd[1].toUpperCase()
					}
					if(cmd.length === 1) {
						monDico.forEach(function(abcd) {
							if (abcd.indexOf(syllabe)>-1) { 
								aide1.push(abcd)
							}
						})
						if(aide1.length >= 5) {
							talk("Aide : (" + aide1.length +") " + aide1[0] + ", " + aide1[1] + ",  " + aide1[2] + ", " + aide1[3] + ", " + aide1[4] + ".")
						} else if(aide1.length === 4) {
							talk("Aide : (" + aide1.length +") " + aide1[0] + ", " + aide1[1] + ",  " + aide1[2] + ", " + aide1[3] +".")
						} else if(aide1.length === 3) {
							talk("Aide : (" + aide1.length +") " + aide1[0] + ", " + aide1[1] + ",  " + aide1[2] + ".")
						} else if(aide1.length === 2) {
							talk("Aide : (" + aide1.length +") " + aide1[0] + ", " + aide1[1] + ".")
						} else if(aide1.length === 1) {
							talk("Aide : (" + aide1.length +") " + aide1[0] + ".")
						} else {
							talk("Je n'ai trouvé aucun mot avec la syllabe " + syllabe)
						}
						aide1 = []
					} else {
						aide1 = []
						monDico.forEach(function(efgh) {
							if (efgh.indexOf(syllabeChoisie) >-1) {
								aide1.push(efgh)
							}
						})
						if(aide1.length >= 5) {
						talk("Aide : (" + aide1.length +") " + aide1[0] + ", " + aide1[1] + ",  " + aide1[2] + ", " + aide1[3] + ", " + aide1[4] + ".")
						} else if(aide1.length === 4) {
							talk("Aide : (" + aide1.length +") " + aide1[0] + ", " + aide1[1] + ",  " + aide1[2] + ", " + aide1[3] +".")
						} else if(aide1.length === 3) {
							talk("Aide : (" + aide1.length +") " + aide1[0] + ", " + aide1[1] + ",  " + aide1[2] + ".")
						} else if(aide1.length === 2) {
							talk("Aide : (" + aide1.length +") " + aide1[0] + ", " + aide1[1] + ".")
						} else if(aide1.length === 1) {
							talk("Aide : (" + aide1.length +") " + aide1[0] + ".")
						} else {
							talk("Je n'ai trouvé aucun mot avec la syllabe " + syllabeChoisie)
						}
						aide1 = []
					}
				} else {
					talk("Cette fonction a été désactivée !")
				}
			} else if(~["pendu"].indexOf(cmd[0])) {
				if(app.user.role === "host") {
					if(c.role === "moderator") {
						if(pendu === 0) {
							if(cmd.length === 1) {
									talk("Pour lancer le jeu, tapez .pendu [le mot]")
									talk("Placer cette commande va vous kick du salon pour que le message soit bien effacé.")
							} else if(cmd.length === 2) {
								if(cmd[1] === "random") {
									shuffle(monDico)
									motPendu = monDico[0]
									let lettres = 0
									for(lettres = 0; lettres < motPendu.length; lettres++) {
										lettreTrouvées += "- "
									}
									talk("Pour chercher une lettre, faites .guess [la lettre] (1 min. CD)")
									talk("Pour tenter le mot, faites .found [le mot] (5 min. CD)")
									talk(lettreTrouvées)
									pendu = 1
								}
								else if(monDico.indexOf(cmd[1].toUpperCase()) > 0) {
									motPendu = cmd[1].toUpperCase()
									let lettres = 0
									for(lettres = 0; lettres < motPendu.length; lettres++) {
										lettreTrouvées += "_ "
										pendu = 1
									}
									channel.socket.emit("unmodUser", c.authId)
									channel.socket.emit("banUser", {displayName: c.displayName, authId: c.authId})
									channel.socket.emit("unbanUser", c.authId)
									talk("Le mot a été mis en place !")
									talk("Pour chercher une lettre, faites .guess [la lettre] (1 min. CD)")
									talk("Pour tenter le mot, faites .found [le mot] (5 min. CD)")
									talk(lettreTrouvées)
									pendu = 1
									jeuId = c.authId
								} else {
									talk("Le mot n'a pas été trouvé dans le dico !")
								}
							} else {
								talk("Un seul mot autorisé !")
							}
						} else {
							talk("Une partie est déjà en cours !")
						}
					} else {
						if(cmd[1] === "random") {
							shuffle(monDico)
							motPendu = monDico[0]
							let lettres = 0
							for(lettres = 0; lettres < motPendu.length; lettres++) {
								lettreTrouvées += "- "
							}
							talk("Pour chercher une lettre, faites .guess [la lettre] (1 min. CD)")
							talk("Pour tenter le mot, faites .found [le mot] (5 min. CD)")
							talk(lettreTrouvées)
							pendu = 1
						} else {
							if(c.role === "") {
								talk("Vous n'avez pas les permissions nécessaires pour lancer le jeu.")
							} else {
								talk("Vos permissions sont trop élevées pour faire un .pendu. Vous pouvez toutefois essayer le .pendu random !")
							}
						}
					}
				} else {
					talk("Le programme n'a pas été lancé par l'hôte.")
				}
			}else if (~["guess"].indexOf(cmd[0])) {
				if(pendu === 1) {
					if(jeuId === c.authId) {
						talk("Le jeu ne peut pas être avancé par le créateur de celui-ci.")
					} else {
						let lapsend = Date.now()
						if(AvertissementStockes[c.authId].lapsguess === 0 || (lapsend - AvertissementStockes[c.authId].lapsguess) > lapsguess) {
							if(cmd.length === 2) {
								if(cmd[1].length === 1) {
									AvertissementStockes[c.authId].lapsguess = Date.now()
									if(motPendu.includes(cmd[1].toUpperCase())) {
										let l = 0
										let o = 0
										let nouveaumot = ""
										for(l = 0; l < (motPendu.length * 2); l += 2) {
											if(lettreTrouvées[l] === "-") {
												if(motPendu[l/2] === cmd[1].toUpperCase()) {
													nouveaumot += cmd[1].toUpperCase() + " "
													o += 1
												} else {
													nouveaumot += "- "
												}
											} else {
												nouveaumot += lettreTrouvées[l] + " "
											}
										}
										if(nouveaumot.includes("-")) {
											talk("Le mot contient la lettre '" + cmd[1].toUpperCase() + "' " + o + " fois.")
											talk(nouveaumot)
											lettreTrouvées = nouveaumot
										} else {
											talk(c.displayName + " a trouvé le mot ! Il s'agissait de " + nouveaumot)
											pendu = 0
											nouveaumot = ""
											motPendu = ""
											lettreTrouvées = ""
											jeuId = ""
										}
									} else {
										talk("Il n'y a pas la lettre " + cmd[1].toUpperCase() + " dans ce jeu.")
										talk(lettreTrouvées)
									}
								} else {
									talk("Vous n'avez pas entré votre guess correctement !")
								}
							} else {
								talk("Vous n'avez pas entré votre guess correctement !")
							}
						} else {
							let tpsrestant = Math.round(((lapsend - AvertissementStockes[c.authId].lapsguess)/1000))
							talk("Vous allez trop vite ! " + (lapsguess/1000 - tpsrestant) + "s restantes !")
						} 
					}
				} else {
					talk("Il n'y a pas de partie en cours !")
				}
			} else if (~["found"].indexOf(cmd[0])) {
				if(pendu === 1) {
					if(jeuId === c.authId) {
						talk("Le jeu ne peut pas être avancé par le créateur de celui-ci.")
					} else {
						let lapsend = Date.now()
						if(AvertissementStockes[c.authId].lapsfound === 0 || (lapsend - AvertissementStockes[c.authId].lapsfound) > lapsfound) {
							if(cmd.length === 1 || cmd.length > 2) {
								talk("Vous n'avez pas entré votre commande correctement.")
							} else {
								if(cmd[1].toUpperCase() === motPendu) {
									talk(c.displayName + " a trouvé le mot ! Il s'agissait de " + motPendu)
									pendu = 0
									nouveaumot = ""
									motPendu = ""
									lettreTrouvées = ""
									jeuId = ""
								} else {
									talk("Ce mot est invalide. Vous devrez attendre 5 minutes avant d'essayer à nouveau.")
									talk(lettreTrouvées)
									AvertissementStockes[c.authId].lapsfound = Date.now()
								}
							}
						} else {
							let tpsrestant = Math.round(((lapsend - AvertissementStockes[c.authId].lapsfound)/1000))
							talk("Vous allez trop vite ! " + (lapsfound/1000 - tpsrestant) + "s restantes !")
						}
					}
				} else {
					talk("Il n'y a pas de partie en cours !")
				}
			}else if (~["kick"].indexOf(cmd[0])) {
				let user = channel.data.users.filter(x=>~x.displayName.toLowerCase().indexOf(cmd[1].toLowerCase()));
				if(user.length > 1) {
					if(c.role === "moderator" || c.role === "host") {
						if(AvertissementStockes[c.authId].unknown === 0) {
							if(Moderation[c.authId].joueurId === "") {
								let inconnu = function() {
									let m = 0
									let Joueurs = ""
									for(m = 0; m < user.length; m++) {
										Joueurs += m + 1
										Joueurs += ". "
										Joueurs += user[m].displayName
										if(AvertissementStockes[user[m].authId].connexion != undefined) {
											Joueurs += " (Connecté sur: "
											Joueurs += AvertissementStockes[user[m].authId].connexion
											Joueurs += ") "
										}
										if(AvertissementStockes[user[m].authId].role === "Administrator") {
											Joueurs += "(Admin) "
										} else if (user[m].role === "moderator") {
											Joueurs += "(Modo) "
										} else if (user[m].role === "host") {
											Joueurs += "(Hôte) "
										}
									}
									talk(Joueurs)
								}
								let n = 0
								talk("Il y a plus d'un joueur qui correspond à votre recherche. S'agit-il de l'un de ceux-ci ?")
								AvertissementStockes[c.authId].unknown = 1
								AvertissementStockes[c.authId].kick = 1
								for(n = 0; n < user.length; n++) {
									AvertissementStockes[c.authId].unknownPlayer.push(user[n].displayName)
									AvertissementStockes[c.authId].unknownPlayerId.push(user[n].authId)
								}
								inconnu()
								talk("Indiquez le nombre correspondant au joueur que vous cherchez.")
							} else {
								talk("Vous êtes déjà en train de modérer un joueur.")
							} 
						} else {
							talk("Vous êtes déjà en train de chercher un joueur.")
						} 
					} else {
						talk("Vous n'avez pas les permissions pour effectuer cette commande.")
					}
				}
				else if (user === undefined) {
					talk("Je n'ai pas trouvé le joueur " + cmd[1])
				} else {
					if(AvertissementStockes[c.authId].role === "Administrator") {
						if(app.user.authId === user[0].authId) {
							if(AvertissementStockes[user[0].authId].role === "Administrator") {
								talk("Vous êtes sur le point de kick le lanceur de mon programme ! Êtes-vous sûre de vouloir procéder ? (O)")
								end = 1
							} else {
								talk("Vous ne pouvez pas bannir un autre Administrateur.")
							}
						} else if(user[0].role === "moderator") {
							if(app.user.role === "host") {
								talk("Êtes-vous sûre de vouloir kick " + user[0].displayName + " ? Il est modérateur. (O/N)")
								Moderation[c.authId].joueur = user[0].displayName
								Moderation[c.authId].joueurId = user[0].authId
								Moderation[c.authId].kick = 1
							} else {
								talk("Je n'ai pas pu kick ce joueur...")
							}
						} else if(user[0].role === "host") {
							talk("Je n'ai pas pu kick ce joueur...")
						} else {
							let e = user[0].authId
							channel.socket.emit("banUser", {displayName: user[0].displayName, authId: user[0].authId})
							channel.socket.emit("unbanUser", e)
							talk("J'ai kick ce joueur pour vous.")
						}
					} else if (c.role === "host" || c.role === "moderator") {
						if(user[0].role === "host" || user[0].role === "moderator") {
							talk("Vous ne pouvez pas kick cet utilisateur")
						} else {
							if(Moderation[c.authId].joueur === "") {
								talk("Êtes-vous sûr de vouloir kick " + user[0].displayName + " ? (O/N)")
								Moderation[c.authId].joueur = user[0].displayName
								Moderation[c.authId].joueurId = user[0].authId
								Moderation[c.authId].kick = 1
							} else {
								talk("Vous êtes déjà en train de modérer un joueur !")
							}
						} 
					} else {
						talk("Vous n'avez pas les permissions nécessaires.")
					}
				}
			} else {
				talk("La commande n'a pas été reconnue. Tapez '.help' pour plus d'infos.")
			}
		} else if(AvertissementStockes[c.authId].unknown === 1) {
			if(isNaN(a.text)) {
				talk("Ce que vous avez écrit ne correspond pas à un nombre !")
			} else if(Number(a.text) <= AvertissementStockes[c.authId].unknownPlayerId.length) {
				if(AvertissementStockes[c.authId].warn === 1) {
					talk("Le joueur " + AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1] + " a " + AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]].avertissements + " avertissements.")
					AvertissementStockes[c.authId].unknown = 0
					AvertissementStockes[c.authId].unknownPlayer = []
					AvertissementStockes[c.authId].unknownPlayerId = []
					AvertissementStockes[c.authId].warn = 0
				} else if (AvertissementStockes[c.authId].addwarn === 1) {
					if(AvertissementStockes[c.authId].role === "Administrator") {
						AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]].avertissements += 1
						if(AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]].avertissements === 3 && AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]].role === "host") {
							if(app.user.authId === AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]) {
								if(AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId].role != "Administrator") {
									talk("Êtes-vous sûre de vouloir bannir l'hôte de la partie ? (O)")
									end = 1
								} else {
									talk("Vous ne pouvez pas bannir un autre Administrateur.")
								}
							} else {
								talk("Je n'ai pas pu bannir ce joueur.")
							}
						} else if (AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]].avertissements === 3){
							channel.socket.emit("banUser", {displayName: AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1], authId: AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]})
							talk("Le joueur " + AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1] + " a été banni, car il a reçu son troisième avertissement.")
						} else {
							talk("Le joueur " + AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1] + " a bien reçu un avertissement.")
							AvertissementStockes[c.authId].unknown = 0
							AvertissementStockes[c.authId].unknownPlayer = []
							AvertissementStockes[c.authId].unknownPlayerId = []
							AvertissementStockes[c.authId].addwarn = 0
						} 
					} else if(AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]].role === "") {
							AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]].avertissements += 1
						if(AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]].avertissements === 3) {
							channel.socket.emit("banUser", {displayName: AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1], authId: AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]})
							talk("Le joueur " + AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1] + " a été banni, car il a reçu son troisième avertissement.")
						} else {
							talk("Le joueur " + AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1] + " a bien reçu un avertissement.")
							AvertissementStockes[c.authId].unknown = 0
							AvertissementStockes[c.authId].unknownPlayer = []
							AvertissementStockes[c.authId].unknownPlayerId = []
							AvertissementStockes[c.authId].addwarn = 0
						}
					} else {
						talk("On ne peut pas avertir ce joueur.")
					}
				} else if (AvertissementStockes[c.authId].removewarn === 1) {
					if(AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]].role === "" || AvertissementStockes[c.authId].role === "Administrator") {
						if (AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]].avertissements > 0) {
							AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]].avertissements -= 1
							talk("Le joueur " + AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1] + " a bien perdu un avertissement.")
							AvertissementStockes[c.authId].unknown = 0
							AvertissementStockes[c.authId].unknownPlayer = []
							AvertissementStockes[c.authId].unknownPlayerId = []
							AvertissementStockes[c.authId].removewarn = 0
						} else {
							talk("Le joueur " + AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1] + " n'a pas perdu d'avertissement, car il était déjà à zéro.")
							AvertissementStockes[c.authId].unknown = 0
							AvertissementStockes[c.authId].unknownPlayer = []
							AvertissementStockes[c.authId].unknownPlayerId = []
							AvertissementStockes[c.authId].removewarn = 0
						}
					} else {
						talk("Vous ne pouvez pas retirer un warn à ce joueur.")
					}
				} else if (AvertissementStockes[c.authId].mod === 1) {
					if(Moderation[AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]] === undefined) {
						channel.socket.emit("modUser", {displayName: AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1], authId: AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]})
						talk("Le joueur " + AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1] + " est désormais modérateur.")
						AvertissementStockes[c.authId].unknown = 0
						AvertissementStockes[c.authId].unknownPlayer = []
						AvertissementStockes[c.authId].unknownPlayerId = []
						AvertissementStockes[c.authId].mod = 0
					} else {
						talk("Ce joueur est déjà modérateur !")
					}
				} else if (AvertissementStockes[c.authId].unmod === 1) {
					if(AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]].role != "Administrator") {
						if(AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]].role === "moderator") {
							channel.socket.emit("unmodUser", AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1])
							talk("Le joueur " + AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1] + " a été rétrogradé.")
							delete Moderation[AvertissementStockes[c.authId].unknownPlayerId]
							AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId].role = ""
							AvertissementStockes[c.authId].unknown = 0
							AvertissementStockes[c.authId].unknownPlayer = []
							AvertissementStockes[c.authId].unknownPlayerId = []
							AvertissementStockes[c.authId].unmod = 0
						} else {
							talk("Ce joueur ne peut pas être rétrogradé.")
							AvertissementStockes[c.authId].unknown = 0
							AvertissementStockes[c.authId].unknownPlayer = []
							AvertissementStockes[c.authId].unknownPlayerId = []
							AvertissementStockes[c.authId].unmod = 0
						}
					} else { 
						talk("Vous ne pouvez pas rétrograder ce joueur.")
					}
				} else if (AvertissementStockes[c.authId].unkautomod === 1) {
					if(AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]].role != "Administrator") {
						if(AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]].automod === 0) {
							channel.socket.emit("modUser", {displayName: AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1], authId: AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]})
							talk("Le joueur " + AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1] + " est désormais auto-modérateur.")
							AvertissementStockes[c.authId].unknown = 0
							AvertissementStockes[c.authId].unknownPlayer = []
							AvertissementStockes[c.authId].unknownPlayerId = []
							AvertissementStockes[c.authId].unkautomod = 0
						} else {
							channel.socket.emit("unmodUser", AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1])
							talk("Le joueur " + AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1] + " n'est plus auto-modérateur.")
							delete Moderation[AvertissementStockes[c.authId].unknownPlayerId]
							AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId].role = ""
							AvertissementStockes[c.authId].unknown = 0
							AvertissementStockes[c.authId].unknownPlayer = []
							AvertissementStockes[c.authId].unknownPlayerId = []
							AvertissementStockes[c.authId].unkautomod = 0
						}
					} else {
						talk("Vous ne pouvez pas sortir ce joueur de l'auto-modération.")
					}
				} else if (AvertissementStockes[c.authId].kick === 1) {
					if(AvertissementStockes[c.authId].role === "Administrator") {
						channel.socket.emit("unmodUser", AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]) 
						channel.socket.emit("banUser", {displayName: AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1], authId: AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]})
						channel.socket.emit("unbanUser", AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1])
						talk("J'ai bien kick ce joueur.")
						AvertissementStockes[c.authId].unknown = 0
							AvertissementStockes[c.authId].unknownPlayer = []
							AvertissementStockes[c.authId].unknownPlayerId = []
							AvertissementStockes[c.authId].ban = 0
					} else {
						if(AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]].role === "") {
							channel.socket.emit("banUser", {displayName: AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1], authId: AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]})
							channel.socket.emit("unbanUser", AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1])
							talk("J'ai bien kick ce joueur.")
						} else {
							talk("Vous ne pouvez pas kick ce joueur.")
							AvertissementStockes[c.authId].unknown = 0
							AvertissementStockes[c.authId].unknownPlayer = []
							AvertissementStockes[c.authId].unknownPlayerId = []
							AvertissementStockes[c.authId].ban = 0
						}
					}
				} else if(AvertissementStockes[c.authId].ban === 1) {
					if(AvertissementStockes[c.authId].role === "Administrator") {
						channel.socket.emit("unmodUser", AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]) 
						channel.socket.emit("banUser", {displayName: AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1], authId: AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]})
						talk("J'ai bien banni ce joueur.")
						AvertissementStockes[c.authId].unknown = 0
							AvertissementStockes[c.authId].unknownPlayer = []
							AvertissementStockes[c.authId].unknownPlayerId = []
							AvertissementStockes[c.authId].ban = 0
					} else {
						if(AvertissementStockes[AvertissementStockes[c.authId].unknownPlayerId[Number(a.text)]].role === "") {
							channel.socket.emit("banUser", {displayName: AvertissementStockes[c.authId].unknownPlayer[Number(a.text) - 1], authId: AvertissementStockes[c.authId].unknownPlayerId[Number(a.text) - 1]})
							talk("J'ai bien banni ce joueur.")
							AvertissementStockes[c.authId].unknown = 0
							AvertissementStockes[c.authId].unknownPlayer = []
							AvertissementStockes[c.authId].unknownPlayerId = []
							AvertissementStockes[c.authId].ban = 0
						} else {
							talk("Vous ne pouvez pas bannir ce joueur.")
							AvertissementStockes[c.authId].unknown = 0
							AvertissementStockes[c.authId].unknownPlayer = []
							AvertissementStockes[c.authId].unknownPlayerId = []
							AvertissementStockes[c.authId].ban = 0
						}
					}
				}
			}
		} else if (Moderation[c.authId] != undefined) {
			if(Moderation[c.authId].avertissement === 1) {
				if (a.text === "O") {
					AvertissementStockes[Moderation[c.authId].joueurId].avertissements = AvertissementStockes[Moderation[c.authId].joueurId].avertissements + 1
					if(AvertissementStockes[Moderation[c.authId].joueurId].avertissements === 3) {
						channel.socket.emit("banUser", {displayName: Moderation[c.authId].joueur, authId: Moderation[c.authId].joueurId})
						talk("Le joueur " + Moderation[c.authId].joueur + " a été banni, car il a reçu un troisième avertissement.")
						} else {
							talk(Moderation[c.authId].joueur + " a reçu un avertissement !")
						}
						Moderation[c.authId].joueur = ""
						Moderation[c.authId].joueurId = ""
						Moderation[c.authId].tentative = 0
						Moderation[c.authId].avertissement = 0
				} else if (a.text === "N") {
					talk("Le joueur n'a pas été averti !")
					Moderation[c.authId].joueur = ""
					Moderation[c.authId].joueurId = ""
					Moderation[c.authId].tentative = 0
					Moderation[c.authId].avertissement = 0
				} else {
					if(Moderation[c.authId].authId === app.user.authId) {
						if(parle === 0) {
							if (Moderation[c.authId].tentative == 0) {
								talk("Nous vous rappelons que vous êtes sur le point d'avertir un joueur. (O/N)")
								Moderation[c.authId].tentative = 1
							} else if (Moderation[c.authId].tentative == 1) {
								talk("Nous vous rappelons que vous êtes sur le point d'avertir un joueur. (O/N) Ceci est votre dernier avertissement.")
								Moderation[c.authId].tentative = 2
							} else {
								talk("L'avertissement a été annulé.")
								Moderation[c.authId].joueur = ""
								Moderation[c.authId].joueurId = ""
								Moderation[c.authId].tentative = 0
								Moderation[c.authId].avertissement = 0
							}
						}
					} else {
						if (Moderation[c.authId].tentative == 0) {
							talk("Nous vous rappelons que vous êtes sur le point d'avertir un joueur. (O/N)")
							Moderation[c.authId].tentative = 1
						} else if (Moderation[c.authId].tentative == 1) {
							talk("Nous vous rappelons que vous êtes sur le point d'avertir un joueur. (O/N) Ceci est votre dernier avertissement.")
							Moderation[c.authId].tentative = 2
						} else {
							talk("L'avertissement a été annulé.")
							Moderation[c.authId].joueur = ""
							Moderation[c.authId].joueurId = ""
							Moderation[c.authId].tentative = 0
							Moderation[c.authId].avertissement = 0
						}
					}
				}
			}  else if (Moderation[c.authId].mod === 1) {
				if(a.text === "O") {
					channel.socket.emit("modUser", {displayName: Moderation[c.authId].joueur, authId: Moderation[c.authId].joueurId})
					talk("Le joueur " + Moderation[c.authId].joueur + " a bien été placé modérateur !")
					Moderation[c.authId].joueur = ""
					Moderation[c.authId].joueurId = ""
					Moderation[c.authId].tentative = 0
					Moderation[c.authId].mod = 0
				} else if(a.text === "N") {
					talk("Votre action a bien été annulée.")
					Moderation[c.authId].joueur = ""
					Moderation[c.authId].joueurId = ""
					Moderation[c.authId].tentative = 0
					Moderation[c.authId].mod = 0
				} else {
					if(Moderation[c.authId].authId === app.user.authId) {
						if(parle === 0) {
							if (Moderation[c.authId].tentative == 0) {
								talk("Nous vous rappelons que vous êtes sur le point de mettre un joueur modérateur. (O/N)")
								Moderation[c.authId].tentative = 1
							} else if (Moderation[c.authId].tentative == 1) {
								talk("Nous vous rappelons que vous êtes sur le point de mettre un joueur modérateur. (O/N) Ceci est votre dernier avertissement.")
								Moderation[c.authId].tentative = 2
							} else {
								talk("L'action a été annulée.")
								Moderation[c.authId].joueur = ""
								Moderation[c.authId].joueurId = ""
								Moderation[c.authId].tentative = 0
								Moderation[c.authId].mod = 0
							}
						}
					} else {
						if (Moderation[c.authId].tentative == 0) {
							talk("Nous vous rappelons que vous êtes sur le point de mettre un joueur modérateur. (O/N)")
							Moderation[c.authId].tentative = 1
						} else if (Moderation[c.authId].tentative == 1) {
							talk("Nous vous rappelons que vous êtes sur le point de mettre un joueur modérateur. (O/N) Ceci est votre dernier avertissement.")
							Moderation[c.authId].tentative = 2
						} else {
							talk("L'action a été annulée.")
							Moderation[c.authId].joueur = ""
							Moderation[c.authId].joueurId = ""
							Moderation[c.authId].tentative = 0
							Moderation[c.authId].mod = 0
						}
					}
				}
			} else if (Moderation[c.authId].unmod === 1) {
				if(a.text === "O") {
					channel.socket.emit("unmodUser", Moderation[c.authId].joueurId)
					talk("Le joueur " + Moderation[c.authId].joueur + " a bien été rétrogradé.")
					AvertissementStockes[Moderation[c.authId].joueurId].role = ""
					Moderation[c.authId].joueur = ""
					Moderation[c.authId].joueurId = ""
					Moderation[c.authId].tentative = 0
					Moderation[c.authId].unmod = 0
					delete Moderation[Moderation[c.authId].joueurId]
				} else if(a.text === "N") {
					talk("Votre action a bien été annulée.")
					Moderation[c.authId].joueur = ""
					Moderation[c.authId].joueurId = ""
					Moderation[c.authId].tentative = 0
					Moderation[c.authId].unmod = 0
				} else {
					if(Moderation[c.authId].authId === app.user.authId) {
						if(parle === 0) {
							if (Moderation[c.authId].tentative == 0) {
								talk("Nous vous rappelons que vous êtes sur le point de rétrograder un joueur. (O/N)")
								Moderation[c.authId].tentative = 1
							} else if (Moderation[c.authId].tentative == 1) {
								talk("Nous vous rappelons que vous êtes sur le point de rétrograder un joueur. (O/N) Ceci est votre dernier avertissement.")
								Moderation[c.authId].tentative = 2
							} else {
								talk("L'action a été annulée.")
								Moderation[c.authId].joueur = ""
								Moderation[c.authId].joueurId = ""
								Moderation[c.authId].tentative = 0
								Moderation[c.authId].unmod = 0
							}
						}
					} else {
						if (Moderation[c.authId].tentative == 0) {
							talk("Nous vous rappelons que vous êtes sur le point de mettre un joueur modérateur. (O/N)")
							Moderation[c.authId].tentative = 1
						} else if (Moderation[c.authId].tentative == 1) {
							talk("Nous vous rappelons que vous êtes sur le point de mettre un joueur modérateur. (O/N) Ceci est votre dernier avertissement.")
							Moderation[c.authId].tentative = 2
						} else {
							talk("L'action a été annulée.")
							Moderation[c.authId].joueur = ""
							Moderation[c.authId].joueurId = ""
							Moderation[c.authId].tentative = 0
							Moderation[c.authId].mod = 0
						}
					}
				}
			} else if (Moderation[c.authId].ban === 1) {
				if (a.text === "O") {
					channel.socket.emit("banUser", {displayName: Moderation[c.authId].joueur, authId: Moderation[c.authId].joueurId})
					talk("Le joueur a bien été banni.")
					Moderation[c.authId].joueur = ""
					Moderation[c.authId].joueurId = ""
					Moderation[c.authId].tentative = 0
					Moderation[c.authId].ban = 0
				} else if (a.text === "N") {
					talk("L'action a été annulée.")
					Moderation[c.authId].joueur = ""
					Moderation[c.authId].joueurId = ""
					Moderation[c.authId].tentative = 0
					Moderation[c.authId].ban = 0
				} else {
					if(Moderation[c.authId].authId === app.user.authId) {
						if(parle === 0) {
							if (Moderation[c.authId].tentative == 0) {
								talk("Nous vous rappelons que vous êtes sur le point de bannir un joueur. (O/N)")
								Moderation[c.authId].tentative = 1
							} else if (Moderation[c.authId].tentative == 1) {
								talk("Nous vous rappelons que vous êtes sur le point de bannir un joueur. (O/N) Ceci est votre dernier avertissement.")
								Moderation[c.authId].tentative = 2
							} else {
								talk("L'action a été annulée.")
								Moderation[c.authId].joueur = ""
								Moderation[c.authId].joueurId = ""
								Moderation[c.authId].tentative = 0
								Moderation[c.authId].unmod = 0
							}
						}
					} else {
						if (Moderation[c.authId].tentative == 0) {
							talk("Nous vous rappelons que vous êtes sur le point de bannir un joueur. (O/N)")
							Moderation[c.authId].tentative = 1
						} else if (Moderation[c.authId].tentative == 1) {
							talk("Nous vous rappelons que vous êtes sur le point de bannir un joueur. (O/N) Ceci est votre dernier avertissement.")
							Moderation[c.authId].tentative = 2
						} else {
							talk("L'action a été annulée.")
							Moderation[c.authId].joueur = ""
							Moderation[c.authId].joueurId = ""
							Moderation[c.authId].tentative = 0
							Moderation[c.authId].unmod = 0
						}
					}
				}
			} else if (Moderation[c.authId].unwarn === 1) {
				if(a.text === "O") {
					talk("Le joueur " + Moderation[c.authId].joueur + " a bien perdu un warn.")
					AvertissementStockes[Moderation[c.authId].joueurId].avertissements = AvertissementStockes[Moderation[c.authId].joueurId].avertissements - 1
					Moderation[c.authId].joueur = ""
					Moderation[c.authId].joueurId = ""
					Moderation[c.authId].tentative = 0
					Moderation[c.authId].unwarn = 0
				} else if(a.text === "N") {
					talk("L'action a été annulée.")
					Moderation[c.authId].joueur = ""
					Moderation[c.authId].joueurId = ""
					Moderation[c.authId].tentative = 0
					Moderation[c.authId].unwarn = 0
				} else {
					if(Moderation[c.authId].authId === app.user.authId) {
						if(parle === 0) {
							if (Moderation[c.authId].tentative == 0) {
								talk("Nous vous rappelons que vous êtes sur le point de retirer un warn à un joueur. (O/N)")
								Moderation[c.authId].tentative = 1
							} else if (Moderation[c.authId].tentative == 1) {
								talk("Nous vous rappelons que vous êtes sur le point de retirer un warn à un joueur. (O/N) Ceci est votre dernier avertissement.")
								Moderation[c.authId].tentative = 2
							} else {
								talk("L'action a été annulée.")
								Moderation[c.authId].joueur = ""
								Moderation[c.authId].joueurId = ""
								Moderation[c.authId].tentative = 0
								Moderation[c.authId].unwarn = 0
							}
						}
					} else {
						if (Moderation[c.authId].tentative == 0) {
							talk("Nous vous rappelons que vous êtes sur le point de retirer un warn à un joueur. (O/N)")
							Moderation[c.authId].tentative = 1
						} else if (Moderation[c.authId].tentative == 1) {
							talk("Nous vous rappelons que vous êtes sur le point de retirer un warn à un joueur. (O/N) Ceci est votre dernier avertissement.")
							Moderation[c.authId].tentative = 2
						} else {
							talk("L'action a été annulée.")
							Moderation[c.authId].joueur = ""
							Moderation[c.authId].joueurId = ""
							Moderation[c.authId].tentative = 0
							Moderation[c.authId].unwarn = 0
						}
					}
				}	
			} else if (Moderation[c.authId].automod === 1) {
				if(a.text === "O") {
					talk("Le joueur " + Moderation[c.authId].joueur + " est désormais modérateur automatique.")
					AvertissementStockes[Moderation[c.authId].joueurId].automod = 1
					channel.socket.emit("modUser", {displayName: Moderation[c.authId].joueur, authId: Moderation[c.authId].joueurId})
					Moderation[c.authId].joueur = ""
					Moderation[c.authId].joueurId = ""
					Moderation[c.authId].tentative = 0
					Moderation[c.authId].automod = 0
				} else if(a.text === "N") {
					talk("L'action a été annulée.")
					Moderation[c.authId].joueur = ""
					Moderation[c.authId].joueurId = ""
					Moderation[c.authId].tentative = 0
					Moderation[c.authId].automod = 0
				} else {
					if(Moderation[c.authId].authId === app.user.authId) {
						if(parle === 0) {
							if (Moderation[c.authId].tentative == 0) {
								talk("Nous vous rappelons que vous êtes sur le point de rendre un joueur modérateur automatique. (O/N)")
								Moderation[c.authId].tentative = 1
							} else if (Moderation[c.authId].tentative == 1) {
								talk("Nous vous rappelons que vous êtes sur le point de rendre un joueur modérateur automatique. (O/N) Ceci est votre dernier avertissement.")
								Moderation[c.authId].tentative = 2
							} else {
								talk("L'action a été annulée.")
								Moderation[c.authId].joueur = ""
								Moderation[c.authId].joueurId = ""
								Moderation[c.authId].tentative = 0
								Moderation[c.authId].automod = 0
							}
						}
					} else {
						if (Moderation[c.authId].tentative == 0) {
							talk("Nous vous rappelons que vous êtes sur le point de rendre un joueur modérateur automatique. (O/N)")
							Moderation[c.authId].tentative = 1
						} else if (Moderation[c.authId].tentative == 1) {
							talk("Nous vous rappelons que vous êtes sur le point de rendre un joueur modérateur automatique. (O/N) Ceci est votre dernier avertissement.")
							Moderation[c.authId].tentative = 2
						} else {
							talk("L'action a été annulée.")
							Moderation[c.authId].joueur = ""
							Moderation[c.authId].joueurId = ""
							Moderation[c.authId].tentative = 0
							Moderation[c.authId].automod = 0
						}
					}
				}	
			} else if (Moderation[c.authId].autounmod === 1) {
				if(a.text === "O") {
					talk("Le joueur " + Moderation[c.authId].joueur + " a perdu la modération automatique.")
					AvertissementStockes[Moderation[c.authId].joueurId].automod = 0
					channel.socket.emit("unmodUser", Moderation[c.authId].joueurId)
					Moderation[c.authId].joueur = ""
					Moderation[c.authId].joueurId = ""
					Moderation[c.authId].tentative = 0
					Moderation[c.authId].autounmod = 0
				} else if(a.text === "N") {
					talk("L'action a été annulée.")
					Moderation[c.authId].joueur = ""
					Moderation[c.authId].joueurId = ""
					Moderation[c.authId].tentative = 0
					Moderation[c.authId].autounmod = 0
				} else {
					if(Moderation[c.authId].authId === app.user.authId) {
						if(parle === 0) {
							if (Moderation[c.authId].tentative == 0) {
								talk("Nous vous rappelons que vous êtes sur le point de retirer un joueur de la modération automatique. (O/N)")
								Moderation[c.authId].tentative = 1
							} else if (Moderation[c.authId].tentative == 1) {
								talk("Nous vous rappelons que vous êtes sur le point de retirer un joueur de la modération automatique. (O/N) Ceci est votre dernier avertissement.")
								Moderation[c.authId].tentative = 2
							} else {
								talk("L'action a été annulée.")
								Moderation[c.authId].joueur = ""
								Moderation[c.authId].joueurId = ""
								Moderation[c.authId].tentative = 0
								Moderation[c.authId].autounmod = 0
							}
						}
					} else {
						if (Moderation[c.authId].tentative == 0) {
							talk("Nous vous rappelons que vous êtes sur le point de retirer un joueur de la modération automatique. (O/N)")
							Moderation[c.authId].tentative = 1
						} else if (Moderation[c.authId].tentative == 1) {
							talk("Nous vous rappelons que vous êtes sur le point de retirer un joueur de la modération automatique. (O/N) Ceci est votre dernier avertissement.")
							Moderation[c.authId].tentative = 2
						} else {
							talk("L'action a été annulée.")
							Moderation[c.authId].joueur = ""
							Moderation[c.authId].joueurId = ""
							Moderation[c.authId].tentative = 0
							Moderation[c.authId].autounmod = 0
						}
					}
				}
			} else if(Moderation[c.authId].kick === 1) {
				if(a.text === "O") {
					talk("Le joueur " + Moderation[c.authId].joueur + " a été kick.")
					AvertissementStockes[Moderation[c.authId].joueurId].automod = 0
					channel.socket.emit("banUser", {authId: Moderation[c.authId].joueurId, displayName: Moderation[c.authId].joueur})
					channel.socket.emit("unbanUser", Moderation[c.authId].joueurId)
					Moderation[c.authId].joueur = ""
					Moderation[c.authId].joueurId = ""
					Moderation[c.authId].tentative = 0
					Moderation[c.authId].kick = 0
				} else if(a.text === "N") {
					talk("L'action a été annulée.")
					Moderation[c.authId].joueur = ""
					Moderation[c.authId].joueurId = ""
					Moderation[c.authId].tentative = 0
					Moderation[c.authId].kick = 0
				} else {
					if(Moderation[c.authId].authId === app.user.authId) {
						if(parle === 0) {
							if (Moderation[c.authId].tentative == 0) {
								talk("Nous vous rappelons que vous êtes sur le point de retirer kicker un joueur. (O/N)")
								Moderation[c.authId].tentative = 1
							} else if (Moderation[c.authId].tentative == 1) {
								talk("Nous vous rappelons que vous êtes sur le point de kicker un joueur. (O/N) Ceci est votre dernier avertissement.")
								Moderation[c.authId].tentative = 2
							} else {
								talk("L'action a été annulée.")
								Moderation[c.authId].joueur = ""
								Moderation[c.authId].joueurId = ""
								Moderation[c.authId].tentative = 0
								Moderation[c.authId].kick = 0
							}
						}
					} else {
						if (Moderation[c.authId].tentative == 0) {
							talk("Nous vous rappelons que vous êtes sur le point de kicker un joueur. (O/N)")
							Moderation[c.authId].tentative = 1
						} else if (Moderation[c.authId].tentative = 1) {
							talk("Nous vous rappelons que vous êtes sur le point de kicker un joueur. (O/N) Ceci est votre dernier avertissement.")
							Moderation[c.authId].tentative = 2
						} else {
							talk("L'action a été annulée.")
							Moderation[c.authId].joueur = ""
							Moderation[c.authId].joueurId = ""
							Moderation[c.authId].tentative = 0
							Moderation[c.authId].kick = 0
						}
					}
				}
			} else if(Moderation[c.authId].change === 1) {
				if(a.text === "1") {
					talk("Quelle nouvelle limite souhaitez-vous ?")
					Moderation[c.authId].change = 2
					Moderation[c.authId].tentative = 0
				} else if (a.text === "2") {
					if(autoban === 0) {
						talk("Souhaitez-vous activer le détection automatique de bot ? (O/N)")
						Moderation[c.authId].change = 3
						Moderation[c.authId].tentative = 0
					} else {
						talk("Souhaitez-vous désactiver la détection automatique de bot ? (O/N)")
						Moderation[c.authId].change = 4
						Moderation[c.authId].tentative = 0
					}
				} else if (a.text === "3") {
					if(aide === 0) {
						talk("Souhaitez-vous activer le programme d'aide ? (O/N)")
						Moderation[c.authId].change = 5
						Moderation[c.authId].tentative = 0
					} else {
						talk("Souhaitez-vous désactiver le programme d'aide ? (O/N")
						Moderation[c.authId].change = 6
						Moderation[c.authId].tentative = 0
					}
				} else if(a.text === "4") {
					if(syllabeNiquée === 0) {
						talk("Souhaitez-vous activer le programme de syllabes niquées ? (O/N)")
						Moderation[c.authId].change = 7
						Moderation[c.authId].tentative = 0
					} else {
						talk("Souhaitez-vous désactiver le programme de syllabes niquées ? (O/N)")
						Moderation[c.authId].change = 8
						Moderation[c.authId].tentative = 0
					}
				}else if(a.text === "5") {
					if(notif === 1) {
						talk("Souhaitez-vous désactiver les notifications d'entrée et de sortie ? (O/N)")
						Moderation[c.authId].change = 9
						Moderation[c.authId].tentative = 0
					} else {
						talk("Souhaitez-vous activer les notifications d'entrée et de sortie ? (O/N)")
						Moderation[c.authId].change = 10
						Moderation[c.authId].tentative = 0
					}
				} else if(a.text === "6") {
					talk("Souhaitez-vous changer le laps du .guess (" + lapsguess/1000 + "s), le laps du .found (" + lapsfound/1000 + "s) ou annuler ? (1, 2, 0)")
					Moderation[c.authId].change = 11
					Moderation[c.authId].tentative = 0
				}else if (a.text === 0) {
					talk("L'action a bien été annulée.")
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				} else {
					if (Moderation[c.authId].tentative == 0) {
						talk("Nous vous rappelons que vous êtes sur le point de modifier les paramètres. (1/2/3/0)")
						Moderation[c.authId].tentative = 1
					} else if (Moderation[c.authId].tentative == 1) {
						talk("Nous vous rappelons que vous êtes sur le point de modifier les paramètres (1/2/3/0) Ceci est votre dernier avertissement.")
						Moderation[c.authId].tentative = 2
					} else {
						talk("L'action a été annulée.")
						Moderation[c.authId].tentative = 0
						Moderation[c.authId].change = 0
					}
				}
			} else if(Moderation[c.authId].change === 2) {
				if(isNaN(Number(a.text))) {
					talk("Je n'ai pas reconnu ce nombre.")
				} else {
					talk("Le limite a été mise à " + a.text + " caractères.")
					max = Number(a.text)
					Moderation[c.authId].change = 0
				}
			} else if(Moderation[c.authId].change === 3) {
				if(a.text === "O") {
					talk("La fonction a bien été activée !")
					autoban = 1
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				} else if(a.text === "N") {
					talk("La fonction n'a pas été activée.")
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				} else {
					if (Moderation[c.authId].tentative == 0) {
						talk("Nous vous rappelons que vous êtes sur le point de modifier les paramètres. (O/N)")
						Moderation[c.authId].tentative = 1
					} else if (Moderation[c.authId].tentative == 1) {
						talk("Nous vous rappelons que vous êtes sur le point de modifier les paramètres (O/N) Ceci est votre dernier avertissement.")
						Moderation[c.authId].tentative = 2
					} else {
						talk("L'action a été annulée.")
						Moderation[c.authId].tentative = 0
						Moderation[c.authId].change = 0
					}
				}
			}else if(Moderation[c.authId].change === 4) {
				if(a.text === "O") {
					talk("La fonction a bien été désactivée.")
					autoban = 0
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				} else if(a.text === "N") {
					talk("La fonction restera activée.")
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				} else {
					if (Moderation[c.authId].tentative == 0) {
						talk("Nous vous rappelons que vous êtes sur le point de modifier les paramètres. (O/N)")
						Moderation[c.authId].tentative = 1
					} else if (Moderation[c.authId].tentative == 1) {
						talk("Nous vous rappelons que vous êtes sur le point de modifier les paramètres (O/N) Ceci est votre dernier avertissement.")
						Moderation[c.authId].tentative = 2
					} else {
						talk("L'action a été annulée.")
						Moderation[c.authId].tentative = 0
						Moderation[c.authId].change = 0
					}
				}
			} else if(Moderation[c.authId].change === 5) {
				if(a.text === "O") {
					talk("La fonction a bien été activée !")
					aide = 1
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				} else if(a.text === "N") {
					talk("La fonction n'a pas été activée.")
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				} else {
					if (Moderation[c.authId].tentative == 0) {
						talk("Nous vous rappelons que vous êtes sur le point de modifier les paramètres. (O/N)")
						Moderation[c.authId].tentative = 1
					} else if (Moderation[c.authId].tentative == 1) {
						talk("Nous vous rappelons que vous êtes sur le point de modifier les paramètres (O/N) Ceci est votre dernier avertissement.")
						Moderation[c.authId].tentative = 2
					} else {
						talk("L'action a été annulée.")
						Moderation[c.authId].tentative = 0
						Moderation[c.authId].change = 0
					}
				}
			} else if(Moderation[c.authId].change === 6) {
				if(a.text === "O") {
					talk("La fonction a bien été désactivée.")
					aide = 0
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				} else if(a.text === "N") {
					talk("La fonction restera activée.")
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				} else {
					if (Moderation[c.authId].tentative == 0) {
						talk("Nous vous rappelons que vous êtes sur le point de modifier les paramètres. (O/N)")
						Moderation[c.authId].tentative = 1
					} else if (Moderation[c.authId].tentative == 1) {
						talk("Nous vous rappelons que vous êtes sur le point de modifier les paramètres (O/N) Ceci est votre dernier avertissement.")
						Moderation[c.authId].tentative = 2
					} else {
						talk("L'action a été annulée.")
						Moderation[c.authId].tentative = 0
						Moderation[c.authId].change = 0
					}
				}
			} else if(Moderation[c.authId].change === 7) {
				if(a.text === "O") {
					talk("La fonction a bien été activée !")
					syllabeNiquée = 1
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				} else if(a.text === "N") {
					talk("La fonction n'a pas été activée.")
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				} else {
					if (Moderation[c.authId].tentative == 0) {
						talk("Nous vous rappelons que vous êtes sur le point de modifier les paramètres. (O/N)")
						Moderation[c.authId].tentative = 1
					} else if (Moderation[c.authId].tentative == 1) {
						talk("Nous vous rappelons que vous êtes sur le point de modifier les paramètres (O/N) Ceci est votre dernier avertissement.")
						Moderation[c.authId].tentative = 2
					} else {
						talk("L'action a été annulée.")
						Moderation[c.authId].tentative = 0
						Moderation[c.authId].change = 0
					}
				}
			} else if(Moderation[c.authId].change === 8) {
				if(a.text === "O") {
					talk("La fonction a bien été désactivée.")
					syllabeNiquée = 0
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				} else if(a.text === "N") {
					talk("La fonction restera activée.")
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				}
			} else if(Moderation[c.authId].change === 9) {
				if(a.text.toUpperCase() === "O") {
					talk("La fonction a bien été désactivée.")
					notif = 0
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				} else if(a.text.toUpperCase() === "N") {
					talk("La fonction restera bien activée")
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				}
			} else if(Moderation[c.authId].change === 10) {
				if(a.text.toUpperCase() === "O") {
					talk("La fonction a bien été réactivée")
					notif = 1
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				} else if(a.text.toUpperCase() === "N") {
					talk("La fonction restera bien désactivée.")
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				}
			} else if(Moderation[c.authId].change === 11) {
				if(a.text === "1") {
					talk("Que souhaitez-vous que devienne la nouvelle limite de temps du guess? (secondes)")
					Moderation[c.authId].change = 12
					Moderation[c.authId].tentative = 0
				} else if(a.text === "2") {
					talk("Que souhaitez-vous que soit la nouvelle limite de temps du found? (secondes)")
					Moderation[c.authId].change = 13
					Moderation[c.authId].tentative = 0
				} else if(a.text === "0") {
					talk("L'action a été annulée")
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				}
			} else if(Moderation[c.authId].change === 12) {
				if(isNaN(a.text)) {
					talk("Ce que vous avez écrit n'est pas un nombre !")
				} else if(Number(a.text) < 0) {
					talk("Vous ne pouvez pas inscrire un nombre négatif !")
				} else {
					talk("Le laps a été mis à " + a.text + " secondes.")
					lapsguess = Number(a.text) * 1000
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				} 
			}else if(Moderation[c.authId].change === 13) {
				if(isNaN(a.text)) {
					talk("Ce que vous avez écrit n'est pas un nombre !")
				} else if(Number(a.text) < 0) {
					talk("Vous ne pouvez pas inscrire un nombre négatif !")
				} else {
					talk("Le laps a été mis à " + a.text + " secondes.")
					lapsfound = Number(a.text) * 1000
					Moderation[c.authId].change = 0
					Moderation[c.authId].tentative = 0
				}
			} else {
				if (Moderation[c.authId].tentative == 0) {
					talk("Nous vous rappelons que vous êtes sur le point de modifier les paramètres. (O/N)")
					Moderation[c.authId].tentative = 1
				} else if (Moderation[c.authId].tentative == 1) {
					talk("Nous vous rappelons que vous êtes sur le point de modifier les paramètres (O/N) Ceci est votre dernier avertissement.")
					Moderation[c.authId].tentative = 2
				} else {
					talk("L'action a été annulée.")
					Moderation[c.authId].tentative = 0
					Moderation[c.authId].change = 0
				}
			} if (end === 1) {
				if(AvertissementStockes[c.authId].role === "Administrator") {
					if(a.text === "O") {
						talk("Vous êtes sur le point de détruire mon programme... êtes-vous vraiment sûr de vouloir faire ça ? (O)")
						end = 2
					} else if(a.text === "N") {
						talk("Le programme a été annulé.")
						end = 0
					} else {
						if(parle === 0) {
							talk("Le programme a été annulé.")
							end = 0
						}
					}
				}
			} else if(end === 2) {
				if(AvertissementStockes[c.authId].role === "Administrator") {
					if(a.text === "O") {
						talk("Mon programme a été détruit.")
						location.assign("http://bombparty.sparklinlabs.com/")
					}else if(a.text === "N") {
						talk("Le programme a été annulé.")
						end = 0
					} else {
						if(parle === 0) {
							talk("Le programme a été annulé.")
							end = 0
						}
					}
				}
			}
		} 
	})
	channel.socket.on("removeUser", a => {
		if (Moderation[a] != undefined) {
			if(Moderation[a].role == "moderator") {
				talk("Le joueur " + AvertissementStockes[a].nom + " est parti. Il était modérateur.")
				delete Moderation[a]
			} else if (Moderation[a].role == "host"){
				talk("Le joueur " + AvertissementStockes[a].nom + " est parti. Il était hôte.")
				delete Moderation[a]
			} else {
				talk("Le joueur " + AvertissementStockes[a].nom + " est parti. Il était administrateur.")
			}
		} else if (a.includes("guest:") == false) {
			if (AvertissementStockes[a].avertissements < 3) {
				if(notif === 1) {
					talk("Le joueur " + AvertissementStockes[a].nom + " est parti. Il avait " + AvertissementStockes[a].avertissements + " avertissements.")
				}
			}
		}
	})
	channel.socket.on("addUser", a => {
		let b = channel.data.usersByAuthId[a.authId]
		if(AvertissementStockes[b.authId] != undefined) {
			if(AvertissementStockes[b.authId].role === "Administrator") {
				channel.data.usersByAuthId[b.authId].role = "administrator"
			}
			if(AvertissementStockes[b.authId].role === "Administrator" || AvertissementStockes[b.authId].role === "moderator") {
				channel.socket.emit("modUser", {displayName: b.displayName, authId: b.authId})
			} else if(AvertissementStockes[a.authId] != undefined) {
				if (AvertissementStockes[a.authId].automod === 1) {
					channel.socket.emit("modUser", {displayName: a.displayName, authId: a.authId})
				}
			}
		}
		if(AvertissementStockes[b.authId] === undefined) {
			if (a.authId.includes("guest:") === true) {
				AvertissementStockes[b.authId] = {avertissements: 2, nom: a.displayName, role: a.role, triche: 0, automod: 0, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0, removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0, tricheur: 0}
			} else {
				AvertissementStockes[b.authId] = {avertissements: 0, nom: a.displayName, role: a.role, triche: 0, automod: 0, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0, removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0, tricheur: 0}
				if(notif === 1) {
					talk("Le joueur " + AvertissementStockes[b.authId].nom + " est arrivé. C'est la première fois que l'on voit ce joueur.")
				}
			}
		} else {
			if(notif === 1) {
				talk("Le joueur " + AvertissementStockes[b.authId].nom + " est arrivé. Il avait " + AvertissementStockes[b.authId].avertissements + " avertissements stockés.")
			}
		}
		if(b.authId.includes("facebook:") === true) {
			AvertissementStockes[b.authId].connexion = "Facebook"
		} else if (b.authId.includes("twitter:") === true) {
			AvertissementStockes[b.authId].connexion = "Twitter"
		} else if (b.authId.includes("google:") === true) {
			AvertissementStockes[b.authId].connexion = "Google"
		} else if (b.authId.includes("steam:") === true) {
			AvertissementStockes[b.authId].connexion = "Steam"
		} else if (b.authId.includes("twitch:") === true) {
			AvertissementStockes[b.authId].connexion = "Twitch"
		}
	})
	channel.socket.on("failWord", a => {
		let b = channel.data.actorsByAuthId[a.playerAuthId]
		if(autoban === 1) {
			if(b.lastWord.includes("�") === true) {
				channel.socket.emit("banUser", {displayName: b.displayName, authId: b.authId})
				if(AvertissementStockes[a.playerAuthId].tricheur === 0) {
					talk("Le joueur " + b.displayName + " a été détecté comme un tricheur. Il a été banni.")
				}
				AvertissementStockes[a.playerAuthId].tricheur = 1
			}
		}
	})
	channel.socket.on("winWord", a => {
		if(syllabeNiquée === 1) {
			let b = channel.data.actorsByAuthId[a.playerAuthId]
			let c = []
			syllabeUniques.forEach(function(abcd) {
				if (b.lastWord.indexOf(abcd)>-1) { 
					c.push(abcd)
					AvertissementStockes[a.playerAuthId].syllabe += 1
			}})
			if(c === 1) {
				talk(b.displayName + " a niqué la syllabe " + c + " ! [" + AvertissementStockes[a.playerAuthId].syllabe + "]")
				c = []
			} else if (c > 1) {
				talk(b.displayName + " a niqué les syllabes " + c + " ! [" + AvertissementStockes[a.playerAuthId].syllabe + "]")
				c = []
			}
		}
	})
}
if(app.user.role === "host") {
	talk("Le programme Chat Bot 1.3.1 par Erina a été activé avec succès !")
	talk("Veuillez choisir une limite de caractères par messages. Si vous n'en voulez pas, écrivez 'Aucune'.")
} else if (app.user.role === "moderator") {
	talk("Le programme Chat Bot 1.3.1 par Erina a été activé avec succès en mode modérateur !")
	talk("Veuillez choisir une limite de caractères par messages. Si vous n'en voulez pas, écrivez 'Aucune'.")
} else {
	talk("Vous n'avez pas les permissions requise pour activer Chat Bot. Demandez à l'hôte s'il peut vous mettre modérateur !")
}
var i = 0
for(i = 0; i < channel.data.users.length; i++) {
	if(channel.data.users[i].authId === "google:102026776801715750701") {
		AvertissementStockes["google:102026776801715750701"] = {avertissements: 0, nom: "Erina Nakiri", role: "Administrator", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0, removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0, tricheur: 0}
		Moderation["google:102026776801715750701"] = {avertissement: 0, nom: "Erina Nakiri", authId: "google:102026776801715750701", mod: 0, joueur: "", joueurId: "", tentative: 0, role: "Administrator", unmod: 0, ban: 0, unwarn: 0, automod: 0, autounmod: 0, kick: 0, change: 0}
	} else if(channel.data.users[i].authId === "google:104483663403961701264") {
		AvertissementStockes["google:104483663403961701264"] = {avertissements: 0, nom: "「 」", role: "Administrator", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0,removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0}
		Moderation["google:104483663403961701264"] = {avertissement: 0, nom: "「 」", authId: "google:104483663403961701264", mod: 0, joueur: "", joueurId: "", tentative: 0, role: "Administrator", unmod: 0, ban: 0, unwarn: 0, automod: 0, autounmod: 0, kick: 0, change: 0}
	} else if(channel.data.users[i].authId === "google:105866966273702786545") {
		if(channel.data.usersByAuthId["google:105866966273702786545"].role === "" || channel.data.usersByAuthId["google:105866966273702786545"].role === "moderator") {
			AvertissementStockes["google:105866966273702786545"] = {avertissements: 0, nom: "V", role: "moderator", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0,removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0}
		} else {
			AvertissementStockes["google:105866966273702786545"] = {avertissements: 0, nom: "V", role: "host", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0,removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0}
		}
	} else if(channel.data.users[i].authId === "steam:76561198837014542") {
		if(channel.data.usersByAuthId["steam:76561198837014542"].role === "" || channel.data.usersByAuthId["steam:76561198837014542"].role === "moderator") {
			AvertissementStockes["steam:76561198837014542"] = {avertissements: 0, nom: "Tempérance", role: "moderator", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0,removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0}
		} else {
			AvertissementStockes["steam:76561198837014542"] = {avertissements: 0, nom: "Tempérance", role: "host", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0,removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0}
		}
	} else if(channel.data.users[i].authId === "facebook:1132837179") {
		if(channel.data.usersByAuthId["facebook:1132837179"].role === "" || channel.data.usersByAuthId["facebook:1132837179"].role === "moderator") {
			AvertissementStockes["facebook:1132837179"] = {avertissements: 0, nom: "Yass AS", role: "moderator", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0,removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0}
		} else {
			AvertissementStockes["facebook:1132837179"] = {avertissements: 0, nom: "Yass AS", role: "host", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0,removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0}
		}
	}else {
		AvertissementStockes[channel.data.users[i].authId] = {avertissements: 0, nom: channel.data.users[i].displayName, role: channel.data.users[i].role, triche: 0, automod: 0, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0, removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0, tricheur: 0}
		if(channel.data.users[i].role === "host" || channel.data.users[i] === "moderator") {
			Moderation[channel.data.users[i].authId] = {avertissement: 0, nom: channel.data.users[i].displayName, authId: channel.data.users[i].authId, mod: 0, joueur: "", joueurId: "", tentative: 0, role: channel.data.users[i].role, unmod: 0, ban: 0, unwarn: 0, automod: 0, autounmod: 0, kick: 0, change: 0, tricheur: 0}
		}
	}
	if(channel.data.users[i].authId.includes("facebook:") === true) {
		AvertissementStockes[channel.data.users[i].authId].connexion = "Facebook"
	} else if (channel.data.users[i].authId.includes("twitter:") === true) {
		AvertissementStockes[channel.data.users[i].authId].connexion = "Twitter"
	} else if (channel.data.users[i].authId.includes("google:") === true) {
		AvertissementStockes[channel.data.users[i].authId].connexion = "Google"
	} else if (channel.data.users[i].authId.includes("steam:") === true) {
		AvertissementStockes[channel.data.users[i].authId].connexion = "Steam"
	} else if (channel.data.users[i].authId.includes("twitch:") === true) {
		AvertissementStockes[channel.data.users[i].authId].connexion = "Twitch"
	}
}
AvertissementStockes["google:102026776801715750701"] = {avertissements: 0, nom: "Erina Nakiri", role: "Administrator", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0, removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0, tricheur: 0}
Moderation["google:102026776801715750701"] = {avertissement: 0, nom: "Erina Nakiri", authId: "google:102026776801715750701", mod: 0, joueur: "", joueurId: "", tentative: 0, role: "Administrator", unmod: 0, ban: 0, unwarn: 0, automod: 0, autounmod: 0, kick: 0, change: 0}
AvertissementStockes["google:104483663403961701264"] = {avertissements: 0, nom: "「 」", role: "Administrator", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0,removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0}
Moderation["google:104483663403961701264"] = {avertissement: 0, nom: "「 」", authId: "google:104483663403961701264", mod: 0, joueur: "", joueurId: "", tentative: 0, role: "Administrator", unmod: 0, ban: 0, unwarn: 0, automod: 0, autounmod: 0, kick: 0, change: 0}
if(channel.data.usersByAuthId["steam:76561198837014542"] != undefined) {
	if(channel.data.usersByAuthId["steam:76561198837014542"].role === "" || channel.data.usersByAuthId["steam:76561198837014542"].role === "moderator") {
		AvertissementStockes["steam:76561198837014542"] = {avertissements: 0, nom: "Tempérance", role: "moderator", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0,removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0}
	} else {
		AvertissementStockes["steam:76561198837014542"] = {avertissements: 0, nom: "Tempérance", role: "host", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0,removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0}
	}
} else {
	AvertissementStockes["steam:76561198837014542"] = {avertissements: 0, nom: "Tempérance", role: "moderator", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0,removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0}
}
if(channel.data.usersByAuthId["facebook:1132837179"] != undefined) {
	if(channel.data.usersByAuthId["facebook:1132837179"].role === "" || channel.data.usersByAuthId["facebook:1132837179"].role === "moderator") {
		AvertissementStockes["facebook:1132837179"] = {avertissements: 0, nom: "Yass AS", role: "moderator", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0,removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0}
	} else {
		AvertissementStockes["facebook:1132837179"] = {avertissements: 0, nom: "Yass AS", role: "host", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0,removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0}
	}
} else {
	AvertissementStockes["facebook:1132837179"] = {avertissements: 0, nom: "Yass AS", role: "moderator", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0,removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0}
}
if(channel.data.usersByAuthId["google:105866966273702786545"] != undefined) {
	if(channel.data.usersByAuthId["google:105866966273702786545"].role === "" || channel.data.usersByAuthId["google:105866966273702786545"].role === "moderator") {
		AvertissementStockes["google:105866966273702786545"] = {avertissements: 0, nom: "V", role: "moderator", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0,removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0}
	} else {
		AvertissementStockes["google:105866966273702786545"] = {avertissements: 0, nom: "V", role: "host", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0,removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0}
	}
} else {
	AvertissementStockes["google:105866966273702786545"] = {avertissements: 0, nom: "V", role: "moderator", triche: 0, automod: 1, unknown: 0, unknownPlayer: [], unknownPlayerId: [], warn: 0, addwarn: 0,removewarn: 0, kick: 0, unkautomod: 0, mod: 0, unmod: 0, lapsguess: 0, lapsfound: 0, syllabe: 0}
}
