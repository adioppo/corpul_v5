/*
	const corpul_2 = document.getElementById("corpul_2");
	var parti_on_off = 0;
	corpul_2.addEventListener("click", function() 
	{
		console.log("corpul_2 was clicked");
		parti_on_off = 0;
		document.getElementById('stil').href = "css/header.css";
		document.getElementById('p_scrolabil_id').style.display = "block";
		document.getElementById('aside').style.display = "none";
		document.getElementById('main_image').src='img/corp.png';
		document.getElementById('main_image').alt='Poza cu un corp';
		document.getElementById('titlul_prezentarii').innerHTML='Prezentarea corpului uman';
		document.getElementById('p_scrolabil_id').innerHTML='Corpul uman este o mașină biologică complexă și fascinantă care este vizibilă cu ochiul liber. Corpul uman este alcătuit din diferite părți care lucrează împreună pentru a se asigura că organismul funcționează corect. Când ne uităm la corpul uman, putem vedea părțile externe, cum ar fi capul, brațele, picioarele și trunchiul. Începând cu capul, putem vedea fața, care este cea mai recunoscută trăsătură a corpului uman. Fața este formată din diferite părți, cum ar fi ochii, nasul, urechile și gura. Ochii sunt cea mai proeminentă trăsătură și sunt responsabili de vedere. Nasul este situat între ochi și este responsabil de miros. Gura, pe de altă parte, este situată sub nas și este folosită pentru a mânca și a vorbi. Mișcându-ne în jos de la cap, putem vedea trunchiul, care include pieptul și abdomenul. Pieptul găzduiește inima și plămânii, care sunt responsabili pentru pomparea sângelui și, respectiv, respirația. Abdomenul conține diverse organe, cum ar fi ficatul, stomacul și intestinele, care sunt responsabile de digestie. Brațele și picioarele sunt atașate de trunchi și sunt folosite pentru mișcare. Brațele sunt folosite pentru atingerea și apucarea, în timp ce picioarele sunt folosite pentru mers și alergat. Mâinile și picioarele sunt situate la capătul brațelor și, respectiv, al picioarelor și sunt folosite pentru apucare și echilibru. Când ne uităm la corpul uman, putem vedea și pielea, care este cel mai mare organ din corp. Pielea acoperă întregul corp și îl protejează de factorii externi, cum ar fi bacteriile și radiațiile UV. De asemenea, reglează temperatura corpului și ne permite să simțim senzații precum atingerea, presiunea și durerea. În concluzie, corpul uman este o mașinărie biologică remarcabilă care poate fi văzută cu ochiul liber. Diferitele sale părți lucrează împreună pentru a se asigura că organismul funcționează corect. Când ne uităm la corpul uman, putem vedea caracteristicile sale externe, cum ar fi capul, brațele, picioarele și trunchiul, precum și pielea care îl acoperă.';
	});	
	
	const partile_2 = document.getElementById("partile_2");
	partile_2.addEventListener("click", function() 
	{
		console.log("partile_2 was clicked");
		parti_on_off = 1;
		document.getElementById('stil').href = "css/parti.css";
		document.getElementById('p_scrolabil_id').style.display = "none";
		document.getElementById('aside').style.display = "block";
		document.getElementById('main_image').src='img/parti.png';
		document.getElementById('main_image').alt='Poza cu un corp din spate';
		document.getElementById('titlul_prezentarii').innerHTML='Partile corpului';
		document.getElementById('p_scrolabil_id').innerHTML='Text care nu trebuie sa se vada';

	});
	
*/
var parti_on_off = 0;
const corpul = document.getElementById("corpul");
	corpul.addEventListener("click", function() 
	{
		console.log("corpul was clicked");
		parti_on_off = 0;
		if (('ontouchstart' in window || navigator.maxTouchPoints)&&screen.width < 600) 
		{
			console.log("This is a mobile device");
			document.getElementById('meniu_poza').style.display = "none";
		} 
		else 
		{
			document.getElementById('meniu_poza').style.display = "block";
		}		
		document.getElementById('stil').href = "css/header.css";
		document.getElementById('p_scrolabil_id').style.display = "block";
		document.getElementById('aside').style.display = "none";
		document.getElementById('main_image').src='img/corp.png';
		document.getElementById('main_image').alt='Poza cu un corp';
		document.getElementById('titlul_prezentarii').innerHTML='Prezentarea corpului uman';
		document.getElementById('p_scrolabil_id').innerHTML='Corpul uman este o mașină biologică complexă și fascinantă care este vizibilă cu ochiul liber. Corpul uman este alcătuit din diferite părți care lucrează împreună pentru a se asigura că organismul funcționează corect. Când ne uităm la corpul uman, putem vedea părțile externe, cum ar fi capul, brațele, picioarele și trunchiul. Începând cu capul, putem vedea fața, care este cea mai recunoscută trăsătură a corpului uman. Fața este formată din diferite părți, cum ar fi ochii, nasul, urechile și gura. Ochii sunt cea mai proeminentă trăsătură și sunt responsabili de vedere. Nasul este situat între ochi și este responsabil de miros. Gura, pe de altă parte, este situată sub nas și este folosită pentru a mânca și a vorbi. Mișcându-ne în jos de la cap, putem vedea trunchiul, care include pieptul și abdomenul. Pieptul găzduiește inima și plămânii, care sunt responsabili pentru pomparea sângelui și, respectiv, respirația. Abdomenul conține diverse organe, cum ar fi ficatul, stomacul și intestinele, care sunt responsabile de digestie. Brațele și picioarele sunt atașate de trunchi și sunt folosite pentru mișcare. Brațele sunt folosite pentru atingerea și apucarea, în timp ce picioarele sunt folosite pentru mers și alergat. Mâinile și picioarele sunt situate la capătul brațelor și, respectiv, al picioarelor și sunt folosite pentru apucare și echilibru. Când ne uităm la corpul uman, putem vedea și pielea, care este cel mai mare organ din corp. Pielea acoperă întregul corp și îl protejează de factorii externi, cum ar fi bacteriile și radiațiile UV. De asemenea, reglează temperatura corpului și ne permite să simțim senzații precum atingerea, presiunea și durerea. În concluzie, corpul uman este o mașinărie biologică remarcabilă care poate fi văzută cu ochiul liber. Diferitele sale părți lucrează împreună pentru a se asigura că organismul funcționează corect. Când ne uităm la corpul uman, putem vedea caracteristicile sale externe, cum ar fi capul, brațele, picioarele și trunchiul, precum și pielea care îl acoperă.';
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
		document.getElementById('p_scrolabil_id').scrollTop=-50000;
	});	
	
	const partile = document.getElementById("partile");
	partile.addEventListener("click", function() 
	{
		console.log("partile was clicked");
		parti_on_off = 1;
		document.getElementById('meniu_poza').style.display = "none";
		document.getElementById('stil').href = "css/parti.css";
		document.getElementById('p_scrolabil_id').scrollTop=-50000;
		document.getElementById('p_scrolabil_id').style.display = "none";
		document.getElementById('aside').style.display = "block";
		document.getElementById('main_image').src='img/parti.png';
		document.getElementById('main_image').alt='Poza cu un corp din spate';
		document.getElementById('titlul_prezentarii').innerHTML='Partile corpului';
		document.getElementById('p_scrolabil_id').innerHTML='Daca se vede textul asta, e naspa :)))';
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
		
	});
	
	
	const capul = document.getElementById("capul");
	capul.addEventListener("click", function() 
	{
		console.log("capul was clicked");
		parti_on_off = 0;
		if (('ontouchstart' in window || navigator.maxTouchPoints)&&screen.width < 600) 
		{
			console.log("This is a mobile device");
			document.getElementById('meniu_poza').style.display = "none";
		} 
		else 
		{
			document.getElementById('meniu_poza').style.display = "block";
		}	
		document.getElementById('stil').href = "css/header.css";
		document.getElementById('p_scrolabil_id').style.display = "block";
		document.getElementById('aside').style.display = "none";
		document.getElementById('main_image').src='img/cap.png';
		document.getElementById('main_image').alt='Poza cu trei capete';
		document.getElementById('titlul_prezentarii').innerHTML='Capul';
		document.getElementById('p_scrolabil_id').innerHTML='Capul este una dintre cele mai importante părți ale corpului uman, servind drept centru de control pentru multe funcții vitale. Este situat în partea de sus a corpului și este compus din mai multe structuri interconectate, inclusiv craniul, creierul, fața, ochii, nasul, urechile, gura și gâtul.Craniul, care protejează creierul, este structura osoasă care formează porțiunea superioară a capului. În interiorul craniului, creierul controlează diverse funcții fiziologice și cognitive, inclusiv mișcarea, senzația, gândul și emoția.Fața, situată în partea din față a capului, conține ochii, nasul și gura, care sunt esențiale pentru vedere, miros și, respectiv, gust. Urechile, situate și pe părțile laterale ale capului, ne permit să auzim și să menținem echilibrul.Gâtul conectează capul de restul corpului, oferind sprijin și facilitând mișcarea.În general, capul joacă un rol esențial în capacitatea noastră de a interacționa cu lumea din jurul nostru, iar orice deteriorare sau vătămare a acestui sistem complex poate avea consecințe grave asupra sănătății și bunăstării noastre generale.';
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
		document.getElementById('p_scrolabil_id').scrollTop=-50000;
		});
	const trunchiul = document.getElementById("trunchiul");
	trunchiul.addEventListener("click", function() 
	{
		console.log("trunchiul was clicked");
		parti_on_off = 0;
		if (('ontouchstart' in window || navigator.maxTouchPoints)&&screen.width < 600) 
		{
			console.log("This is a mobile device");
			document.getElementById('meniu_poza').style.display = "none";
		} 
		else 
		{
			document.getElementById('meniu_poza').style.display = "block";
		}		
		document.getElementById('stil').href = "css/header.css";		
		document.getElementById('p_scrolabil_id').style.display = "block";
		document.getElementById('aside').style.display = "none";
		document.getElementById('main_image').src='img/tors.png';
		document.getElementById('main_image').alt='Poza cu un trunchi';
		document.getElementById('titlul_prezentarii').innerHTML='Trunchiul';
		document.getElementById('p_scrolabil_id').innerHTML='Trunchiul este o parte vitală a corpului uman, cuprinzând pieptul, abdomenul și spatele. Acesta servește ca principală structură de sprijin pentru partea superioară a corpului și găzduiește mai multe organe critice, inclusiv inima, plămânii, ficatul, stomacul și intestinele.Pieptul conține cutia toracică, care protejează inima și plămânii. Inima, un organ muscular responsabil cu pomparea sângelui în tot corpul, este situată în centrul pieptului. Plămânii, care facilitează respirația, sunt situați de ambele părți ale inimii.Abdomenul conține mai multe organe responsabile de digestie și eliminarea deșeurilor, inclusiv stomacul, ficatul și intestinele. Spatele adăpostește măduva spinării, care conectează creierul de restul corpului și susține greutatea părții superioare a corpului.Musculatura trunchiului joacă un rol crucial în mișcare și stabilitate, permițându-ne să stăm, să stăm în picioare, să mergem și să efectuăm alte activități fizice.În general, trunchiul este o parte complexă și vitală a corpului uman, esențială pentru menținerea sănătății și bunăstării noastre generale. Orice vătămare sau boală care afectează trunchiul poate avea consecințe grave asupra calității vieții noastre.';
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
		document.getElementById('p_scrolabil_id').scrollTop=-50000;
		});
	const bratele = document.getElementById("bratele");
	bratele.addEventListener("click", function() 
	{
		console.log("bratele was clicked");
		parti_on_off = 0;
		if (('ontouchstart' in window || navigator.maxTouchPoints)&&screen.width < 600) 
		{
			console.log("This is a mobile device");
			document.getElementById('meniu_poza').style.display = "none";
		} 
		else 
		{
			document.getElementById('meniu_poza').style.display = "block";
		}		
		document.getElementById('stil').href = "css/header.css";
		document.getElementById('p_scrolabil_id').style.display = "block";
		document.getElementById('aside').style.display = "none";
		document.getElementById('main_image').src='img/brat.png';
		document.getElementById('main_image').alt='Poza cu brate';
		document.getElementById('titlul_prezentarii').innerHTML='Bratele';
		document.getElementById('p_scrolabil_id').innerHTML='Brațele sunt părți esențiale ale corpului uman, constând din braț, antebraț, încheietură și mână. Sunt atașate de umeri și permit o gamă largă de mișcări, de la atingere și apucare până la aruncare și ridicare.Partea superioară a brațului conține humerusul, osul lung care merge de la umăr până la cot. Antebrațul conține două oase, ulna și radius, care leagă cotul de încheietura mâinii. Incheietura mainii conecteaza antebratul de mana si contine opt oase mici care permit miscari complicate. Mâna este compusă din palmă, degete și degetul mare și este esențială pentru abilitățile motorii fine, cum ar fi scrisul, tastarea și cântatul la instrumente muzicale.Mușchii brațelor permit forță și mișcare și sunt împărțiți în trei grupe: mușchii biceps, triceps și antebraț. Bicepsul și tricepsul lucrează împreună pentru a flexa și extinde cotul, în timp ce mușchii antebrațului sunt responsabili pentru mișcările încheieturii mâinii și ale mâinii.În general, brațele sunt esențiale pentru activitățile zilnice și interacțiunile cu lumea din jurul nostru, iar orice deteriorare sau rănire a acestui sistem complex poate avea consecințe grave asupra mobilității și funcționalității noastre generale.';
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;	
		document.getElementById('p_scrolabil_id').scrollTop=-50000;
	});
	const picioarele = document.getElementById("picioarele");
	picioarele.addEventListener("click", function() 
	{
		console.log("picioarele was clicked");
		parti_on_off = 0;
		if (('ontouchstart' in window || navigator.maxTouchPoints)&&screen.width < 600) 
		{
			console.log("This is a mobile device");
			document.getElementById('meniu_poza').style.display = "none";
		} 
		else 
		{
			document.getElementById('meniu_poza').style.display = "block";
		}		
		document.getElementById('stil').href = "css/header.css";
		document.getElementById('p_scrolabil_id').style.display = "block";
		document.getElementById('aside').style.display = "none";
		document.getElementById('main_image').src='img/picioare.png';
		document.getElementById('main_image').alt='Poza cu picioare';
		document.getElementById('titlul_prezentarii').innerHTML='Picioarele';
		document.getElementById('p_scrolabil_id').innerHTML='Picioarele sunt o parte esențială a corpului uman, oferind sprijin, echilibru și mobilitate. Sunt formate din coapsă, genunchi, gambe, glezne și picior și sunt atașate de pelvis.Coapsa este porțiunea superioară a piciorului și conține femurul, cel mai lung os din corp. Articulația genunchiului conectează coapsa de piciorul inferior și este crucială pentru mișcare și stabilitate. Partea inferioară a piciorului conține două oase, tibia și fibula și se conectează la articulația gleznei. Piciorul este compus din gleznă, călcâi, talpă și degete și este esențial pentru a sta în picioare, a merge și a alerga.Mușchii picioarelor, inclusiv cvadricepsul, ischio-jambierii și mușchii gambei, sunt responsabili pentru mișcare și sprijin. Cvadricepsul ne permite să ne îndreptăm picioarele, în timp ce ischiobigiolarele ne permit să le îndoim. Mușchii gambei sunt esențiali pentru mers și alergare și lucrează pentru a ridica călcâiul de pe sol.În general, picioarele sunt esențiale pentru activitățile zilnice și interacțiunile cu lumea din jurul nostru, iar orice deteriorare sau vătămare a acestui sistem complex poate avea consecințe grave asupra mobilității și funcționalității noastre generale.';
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
		document.getElementById('p_scrolabil_id').scrollTop=-50000;
	});
	

////////////////////////
	const capul_2 = document.getElementById("capul_2");
	capul_2.addEventListener("click", function() 
	{
		console.log("capul_2 was clicked");
		parti_on_off = 0;
		document.getElementById('stil').href = "css/header.css";
		document.getElementById('p_scrolabil_id').style.display = "block";
		document.getElementById('aside').style.display = "none";
		document.getElementById('main_image').src='img/cap.png';
		document.getElementById('main_image').alt='Poza cu trei capete';
		document.getElementById('titlul_prezentarii').innerHTML='Capul';
		document.getElementById('p_scrolabil_id').innerHTML='Capul este una dintre cele mai importante părți ale corpului uman, servind drept centru de control pentru multe funcții vitale. Este situat în partea de sus a corpului și este compus din mai multe structuri interconectate, inclusiv craniul, creierul, fața, ochii, nasul, urechile, gura și gâtul.Craniul, care protejează creierul, este structura osoasă care formează porțiunea superioară a capului. În interiorul craniului, creierul controlează diverse funcții fiziologice și cognitive, inclusiv mișcarea, senzația, gândul și emoția.Fața, situată în partea din față a capului, conține ochii, nasul și gura, care sunt esențiale pentru vedere, miros și, respectiv, gust. Urechile, situate și pe părțile laterale ale capului, ne permit să auzim și să menținem echilibrul.Gâtul conectează capul de restul corpului, oferind sprijin și facilitând mișcarea.În general, capul joacă un rol esențial în capacitatea noastră de a interacționa cu lumea din jurul nostru, iar orice deteriorare sau vătămare a acestui sistem complex poate avea consecințe grave asupra sănătății și bunăstării noastre generale.';
		document.getElementById('p_scrolabil_id').scrollTop=-50000;
		//f1();
	});
	const trunchiul_2 = document.getElementById("trunchiul_2");
	trunchiul_2.addEventListener("click", function() 
	{
		console.log("trunchiul_2 was clicked");
		parti_on_off = 0;
		document.getElementById('stil').href = "css/header.css";
		document.getElementById('p_scrolabil_id').style.display = "block";
		document.getElementById('aside').style.display = "none";
		document.getElementById('main_image').src='img/tors.png';
		document.getElementById('main_image').alt='Poza cu un trunchi';
		document.getElementById('titlul_prezentarii').innerHTML='Trunchiul';
		document.getElementById('p_scrolabil_id').innerHTML='Trunchiul este o parte vitală a corpului uman, cuprinzând pieptul, abdomenul și spatele. Acesta servește ca principală structură de sprijin pentru partea superioară a corpului și găzduiește mai multe organe critice, inclusiv inima, plămânii, ficatul, stomacul și intestinele.Pieptul conține cutia toracică, care protejează inima și plămânii. Inima, un organ muscular responsabil cu pomparea sângelui în tot corpul, este situată în centrul pieptului. Plămânii, care facilitează respirația, sunt situați de ambele părți ale inimii.Abdomenul conține mai multe organe responsabile de digestie și eliminarea deșeurilor, inclusiv stomacul, ficatul și intestinele. Spatele adăpostește măduva spinării, care conectează creierul de restul corpului și susține greutatea părții superioare a corpului.Musculatura trunchiului joacă un rol crucial în mișcare și stabilitate, permițându-ne să stăm, să stăm în picioare, să mergem și să efectuăm alte activități fizice.În general, trunchiul este o parte complexă și vitală a corpului uman, esențială pentru menținerea sănătății și bunăstării noastre generale. Orice vătămare sau boală care afectează trunchiul poate avea consecințe grave asupra calității vieții noastre.';
		document.getElementById('p_scrolabil_id').scrollTop=-500000;
	});
	const bratele_2 = document.getElementById("bratele_2");
	bratele_2.addEventListener("click", function() 
	{
		console.log("bratele_2 was clicked");
		parti_on_off = 0;
		document.getElementById('stil').href = "css/header.css";
		document.getElementById('p_scrolabil_id').style.display = "block";
		document.getElementById('aside').style.display = "none";
		document.getElementById('main_image').src='img/brat.png';
		document.getElementById('main_image').alt='Poza cu brate';
		document.getElementById('titlul_prezentarii').innerHTML='Bratele';
		document.getElementById('p_scrolabil_id').innerHTML='Brațele sunt părți esențiale ale corpului uman, constând din braț, antebraț, încheietură și mână. Sunt atașate de umeri și permit o gamă largă de mișcări, de la atingere și apucare până la aruncare și ridicare.Partea superioară a brațului conține humerusul, osul lung care merge de la umăr până la cot. Antebrațul conține două oase, ulna și radius, care leagă cotul de încheietura mâinii. Incheietura mainii conecteaza antebratul de mana si contine opt oase mici care permit miscari complicate. Mâna este compusă din palmă, degete și degetul mare și este esențială pentru abilitățile motorii fine, cum ar fi scrisul, tastarea și cântatul la instrumente muzicale.Mușchii brațelor permit forță și mișcare și sunt împărțiți în trei grupe: mușchii biceps, triceps și antebraț. Bicepsul și tricepsul lucrează împreună pentru a flexa și extinde cotul, în timp ce mușchii antebrațului sunt responsabili pentru mișcările încheieturii mâinii și ale mâinii.În general, brațele sunt esențiale pentru activitățile zilnice și interacțiunile cu lumea din jurul nostru, iar orice deteriorare sau rănire a acestui sistem complex poate avea consecințe grave asupra mobilității și funcționalității noastre generale.';
		document.getElementById('p_scrolabil_id').scrollTop=-500000;
	});
	const picioarele_2 = document.getElementById("picioarele_2");
	picioarele_2.addEventListener("click", function() 
	{
		console.log("picioarele_2 was clicked");
		parti_on_off = 0;
		document.getElementById('stil').href = "css/header.css";
		document.getElementById('p_scrolabil_id').style.display = "block";
		document.getElementById('aside').style.display = "none";
		document.getElementById('main_image').src='img/picioare.png';
		document.getElementById('main_image').alt='Poza cu picioare';
		document.getElementById('titlul_prezentarii').innerHTML='Picioarele';
		document.getElementById('p_scrolabil_id').innerHTML='Picioarele sunt o parte esențială a corpului uman, oferind sprijin, echilibru și mobilitate. Sunt formate din coapsă, genunchi, gambe, glezne și picior și sunt atașate de pelvis.Coapsa este porțiunea superioară a piciorului și conține femurul, cel mai lung os din corp. Articulația genunchiului conectează coapsa de piciorul inferior și este crucială pentru mișcare și stabilitate. Partea inferioară a piciorului conține două oase, tibia și fibula și se conectează la articulația gleznei. Piciorul este compus din gleznă, călcâi, talpă și degete și este esențial pentru a sta în picioare, a merge și a alerga.Mușchii picioarelor, inclusiv cvadricepsul, ischio-jambierii și mușchii gambei, sunt responsabili pentru mișcare și sprijin. Cvadricepsul ne permite să ne îndreptăm picioarele, în timp ce ischiobigiolarele ne permit să le îndoim. Mușchii gambei sunt esențiali pentru mers și alergare și lucrează pentru a ridica călcâiul de pe sol.În general, picioarele sunt esențiale pentru activitățile zilnice și interacțiunile cu lumea din jurul nostru, iar orice deteriorare sau vătămare a acestui sistem complex poate avea consecințe grave asupra mobilității și funcționalității noastre generale.';
		document.getElementById('p_scrolabil_id').scrollTop=-500000;
	});

//portrait
window.addEventListener("orientationchange", function() {
  if (window.orientation === 0 || window.orientation === 180) {
   //alert("userul a schimbat orientarea in portret");
	  if (parti_on_off === 0)
	  {
		  //alert(parti_on_off);
	   document.getElementById('aside').style.display = "none";
	  }
	  else
	  {
		  //alert(parti_on_off);
	   document.getElementById('aside').style.display = "block";
	  }
	document.getElementById('meniu_poza').style.display = "none";
  }
});


//landscape
window.addEventListener("orientationchange", function() {
  if (window.orientation === 90 || window.orientation === -90) {
    //alert("userul a schimbat orientarea in Landscape");
	
	if (parti_on_off == 0)
	  {
		  //alert(parti_on_off);
	   document.getElementById('aside').style.display = "none";
	  }
	  else
	  {
		  //alert(parti_on_off);
	   document.getElementById('aside').style.display = "block";
	  }
	document.getElementById('meniu_poza').style.display = "block";
  }
});

/* eroare, comentariu pastrat doar pentru exemplu:
window.addEventListener("orientationchange", function() {
  if (window.orientation === 0 || window.orientation === 180) {
    console.log("userul a schimbat orientarea in portret");
	document.getElementById('aside').style.display = "none";
  }
});

window.addEventListener("orientationchange", function() {
  if (window.orientation === 90 || window.orientation === -90) {
    console.log("userul a schimbat orientarea in portret");
	document.getElementById('aside').style.display = "block";
  }
});
*/
