
var d = new Date();

			/* getTime() renvoie le nombre de ms ecoulées entre : le 1er janvier 1970 et la date 
			contenue dans d */
			var dMs = d.getTime();

			/* getFullYear() renvoie l'année relative à la date */ 
			var dy = d.getFullYear();

			/* getDate() renvoie le jour du mois sous forme de nombre (entre 1 et 31) */ 
			var ddate = d.getDate();

			/* getDate() renvoie le mois  sous forme de nombre entre 0(janvier) et 11(décembre)*/
			var dmo = d.getMonth()+1;

			/* getDate() renvoie le jour de la semaine sous forme de nombre entre 0 (dimanche) et 6 (samedi)*/
			var dday = d.getDate();

			var dh = d.getHours(); /* Ronvoie l'heure entre 0 et 23*/ 
			var dmi = d.getMinutes(); /* Renvoie les minutes (0-59) */
			var ds = d.getSeconds(); /*  Renvoie les secondes (0-59) */
			var dms = d.getMilliseconds(); /*  Renvoie le ms (0-59) */   

			//console.log('Nous somme le : ' +ddate+'/'+dmo+'/'+dy+'.\nIl est actuellement ' +dh+':'+dmi+':'+ds+'.');
			document.getElementById('heure').innerHTML = ('Nous sommes le : ' +ddate+'/'+dmo+'/'+dy+'.\nIl est actuellement ' +dh+':'+dmi+':'+ds);
                  
		var titrepsy = document.getElementById('psychologie');
             var titreconfi = document.getElementById('confinement');
             
            titrepsy.setAttribute("title","Psychologie");
            titreconfi.setAttribute("title","Confinement");
            var titreinfo = document.getElementById('cousinfo"');
            titreinfo.setAttribute("title","Informatique");
            