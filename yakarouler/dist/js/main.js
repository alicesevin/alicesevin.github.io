$(document).ready(function(){
    var filterSet = '';
    var research = [];
    var step = 0;
    var select_marque =
        "<select id='constructor_id'>"
        +"<option value='' selected='selected'>machin</option>"
        +"<optgroup label='Les marques principales'>"
        +"<option value='133' >RENAULT</option>"
        +"<option value='119' >PEUGEOT</option>"
        +"<option value='35' >CITROEN</option>"
        +"<option value='160' >VOLKSWAGEN</option>"
        +"<option value='23' >BMW</option>"
        +"<option value='58' >FORD</option>"
        +"<option value='56' >FIAT</option>"
        +"<option value='11' >AUDI</option>"
        +"<option value='97' >MERCEDES</option>"
        +"<option value='115' >OPEL</option>"
        +"<option value='139' >SEAT</option>"
        +"</optgroup>"
        +"<optgroup label='&nbsp;'></optgroup>"
        +"<optgroup label='Toutes les marques'>"
        +"<option class='' value='3' >ALFA-ROMEO</option>"
        +"<option class='' value='4' >ALLIED VEHICLE</option>"
        +"<option class='' value='7' >ARO</option>"
        +"<option class='' value='8' >ASIA</option>"
        +"<option class='' value='10' >ASTON MARTIN</option>"
        +"<option class='principal_car' value='11' >AUDI</option>"
        +"<option class='' value='170' >AUSTIN MORRIS</option>"
        +"<option class='' value='12' >AUTOBIANCHI</option>"
        +"<option class='' value='16' >BAB-BUGGY</option>"
        +"<option class='' value='17' >BEDFORD</option>"
        +"<option class='' value='19' >BENTLEY</option>"
        +"<option class='' value='20' >BERTONE</option>"
        +"<option class='' value='21' >BINZ</option>"
        +"<option class='' value='194' >BLMC</option>"
        +"<option class='principal_car' value='23' >BMW</option>"
        +"<option class='' value='25' >BUGATTI</option>"
        +"<option class='' value='26' >BUICK</option>"
        +"<option class='' value='27' >CADILLAC</option>"
        +"<option class='' value='30' >CATERHAM</option>"
        +"<option class='' value='182' >CHEVROLET</option>"
        +"<option class='' value='31' >CHEVROLET (USA)</option>"
        +"<option class='' value='32' >CHEYENNE</option>"
        +"<option class='' value='33' >CHRYSLER</option>"
        +"<option class='principal_car' value='35' >CITROEN</option>"
        +"<option class='' value='38' >DACIA</option>"
        +"<option class='' value='39' >DAEWOO</option>"
        +"<option class='' value='40' >DAF</option>"
        +"<option class='' value='41' >DAIHATSU</option>"
        +"<option class='' value='42' >DAIMLER</option>"
        +"<option class='' value='195' >DALLAS</option>"
        +"<option class='' value='169' >DANGEL</option>"
        +"<option class='' value='44' >DATSUN</option>"
        +"<option class='' value='105' >DE-TOMASO</option>"
        +"<option class='' value='47' >DE-TOMASO</option>"
        +"<option class='' value='188' >DIJEAU CARROSSIER</option>"
        +"<option class='' value='171' >DODGE</option>"
        +"<option class='' value='196' >DONKERVOORT</option>"
        +"<option class='' value='50' >DURISOTTI</option>"
        +"<option class='' value='51' >EBRO</option>"
        +"<option class='' value='52' >EBS</option>"
        +"<option class='' value='55' >FERRARI</option>"
        +"<option class='principal_car' value='56' >FIAT</option>"
        +"<option class='principal_car' value='58' >FORD</option>"
        +"<option class='' value='192' >FORD (USA)</option>"
        +"<option class='' value='60' >FSO</option>"
        +"<option class='' value='61' >GIANNINI</option>"
        +"<option class='' value='173' >GMC</option>"
        +"<option class='' value='62' >GME</option>"
        +"<option class='' value='903' >GTF INNOVATIONS</option>"
        +"<option class='' value='189' >HOLDEN</option>"
        +"<option class='' value='67' >HOMMELL</option>"
        +"<option class='' value='68' >HONDA</option>"
        +"<option class='' value='190' >HUMMER</option>"
        +"<option class='' value='70' >HYUNDAI</option>"
        +"<option class='' value='193' >INFINITI</option>"
        +"<option class='' value='72' >INNOCENTI</option>"
        +"<option class='' value='73' >ISUZU</option>"
        +"<option class='' value='74' >IVECO</option>"
        +"<option class='' value='75' >JAGUAR</option>"
        +"<option class='' value='187' >JEEP</option>"
        +"<option class='' value='77' >KIA</option>"
        +"<option class='' value='800' >KTM</option>"
        +"<option class='' value='79' >LADA</option>"
        +"<option class='' value='81' >LAMBORGHINI</option>"
        +"<option class='' value='82' >LANCIA</option>"
        +"<option class='' value='85' >LAND ROVER</option>"
        +"<option class='' value='910' >LANDWIND</option>"
        +"<option class='' value='83' >LDV</option>"
        +"<option class='' value='168' >LEXUS</option>"
        +"<option class='' value='176' >LINCOLN</option>"
        +"<option class='' value='84' >LOTUS</option>"
        +"<option class='' value='88' >MAHINDRA</option>"
        +"<option class='' value='90' >MARTIN</option>"
        +"<option class='' value='89' >MARUTI</option>"
        +"<option class='' value='91' >MASERATI</option>"
        +"<option class='' value='92' >MAYBACH</option>"
        +"<option class='' value='93' >MAZDA</option>"
        +"<option class='' value='94' >MC LAREN</option>"
        +"<option class='' value='96' >MEGA</option>"
        +"<option class='principal_car' value='97' >MERCEDES</option>"
        +"<option class='' value='99' >MERCURY</option>"
        +"<option class='' value='100' >METROCAB</option>"
        +"<option class='' value='177' >MG</option>"
        +"<option class='' value='164' >MINI</option>"
        +"<option class='' value='101' >MITSUBISHI</option>"
        +"<option class='' value='105' >MORGAN</option>"
        +"<option class='' value='110' >MVS</option>"
        +"<option class='' value='112' >NISSAN</option>"
        +"<option class='' value='113' >OLDSMOBILE</option>"
        +"<option class='principal_car' value='115' >OPEL</option>"
        +"<option class='' value='117' >PAGANI</option>"
        +"<option class='principal_car' value='119' >PEUGEOT</option>"
        +"<option class='' value='120' >PGO</option>"
        +"<option class='' value='121' >PIAGGIO</option>"
        +"<option class='' value='122' >POLSKI-FIAT</option>"
        +"<option class='' value='123' >PONTIAC</option>"
        +"<option class='' value='124' >PORSCHE</option>"
        +"<option class='' value='127' >PROTON</option>"
        +"<option class='' value='132' >RELIANT</option>"
        +"<option class='principal_car' value='133'>RENAULT</option>"
        +"<option class='' value='135' >ROLLS-ROYCE</option>"
        +"<option class='' value='136' >ROVER</option>"
        +"<option class='' value='137' >SAAB</option>"
        +"<option class='' value='138' >SAMSUNG</option>"
        +"<option class='' value='191' >SCAM</option>"
        +"<option class='principal_car' value='139' >SEAT</option>"
        +"<option class='' value='900' >SECMA</option>"
        +"<option class='' value='201' >SHUANGHUAN</option>"
        +"<option class='' value='140' >SKODA</option>"
        +"<option class='' value='95' >SMART</option>"
        +"<option class='' value='203' >SOMAC</option>"
        +"<option class='' value='144' >SSANGYONG</option>"
        +"<option class='' value='145' >SUBARU</option>"
        +"<option class='' value='147' >SUZUKI-SANTANA</option>"
        +"<option class='' value='149' >TALBOT SIMCA</option>"
        +"<option class='' value='150' >TATA</option>"
        +"<option class='' value='199' >THINK</option>"
        +"<option class='' value='153' >TOYOTA</option>"
        +"<option class='' value='154' >TRIUMPH</option>"
        +"<option class='' value='165' >VAUXHALL</option>"
        +"<option class='principal_car' value='160' >VOLKSWAGEN</option>"
        +"<option class='' value='159' >VOLVO</option>"
        +"<option class='' value='162' >YUGO</option>"
        +"<option class='' value='198' >ZAZ</option>"
        +"</optgroup>"
        +"</select>";
    var select_model =
        '<select id="model"  class="select-actif ">'
        +'<option value="" selected="selected">truc</option>'
        +'<optgroup label="R11">'
        +'<option value="renault-r11-3portes-hayon">R11 Hayon 3 portes (04/1983 &gt; 06/1989)</option>'
        +'<option value="renault-r11-5portes-hayon" >R11 Hayon 5 portes (04/1983 &gt; 06/1989)</option>'
        +'</optgroup>'
        +'<optgroup label="R12">'
        +'<option value="renault-r12-5portes-break" >R12 Break 5 portes (08/1970 &gt; 12/1979)</option>'
        +'</optgroup>'
        +'<optgroup label="R14">'
        +'<option value="renault-r14-5portes-hayon" >R14 Hayon 5 portes (07/1979 &gt; 06/1983)</option>'
        +'</optgroup>'
        +'<optgroup label="R15">'
        +'<option value="renault-r15-3portes-coupe" >R15 Coupe 3 portes (01/1971 &gt; 12/1979)</option>'
        +'</optgroup>'
        +'<optgroup label="R16">'
        +'<option value="renault-r16-5portes-hayon" >R16 Hayon 5 portes (01/1968 &gt; 12/1980)</option>'
        +'</optgroup>'
        +'<optgroup label="R17">'
        +'<option value="renault-r17-3portes-coupe" >R17 Coupe 3 portes (01/1972 &gt; 12/1979)</option>'
        +'</optgroup>'
        +'<optgroup label="R18">'
        +'<option value="renault-r18-4portes-berline" >R18 Berline 4 portes (01/1978 &gt; 01/1986)</option>'
        +'<option value="renault-r18-5portes-break" >R18 Break 5 portes (01/1978 &gt; 01/1986)</option>'
        +'</optgroup>'
        +'<optgroup label="R19">'
        +'<option value="renault-r19-4portes-berline" >R19 Berline 4 portes (07/1988 &gt; 04/1997)</option>'
        +'<option value="renault-r19-2portes-cabriolet" >R19 Cabriolet 2 portes (07/1988 &gt; 04/1997)</option>'
        +'<option value="renault-r19-3portes-hayon" >R19 Hayon 3 portes (07/1988 &gt; 04/1997)</option>'
        +'<option value="renault-r19-5portes-hayon" >R19 Hayon 5 portes (07/1988 &gt; 04/1997)</option>'
        +'</optgroup>'
        +'<optgroup label="R20">'
        +'<option value="renault-r20-5portes-hayon" >R20 Hayon 5 portes (10/1975 &gt; 03/1984)</option>'
        +'</optgroup>'
        +'<optgroup label="R21">'
        +'<option value="renault-r21-4portes-berline" >R21 Berline 4 portes (01/1986 &gt; 12/1995)</option>'
        +'<option value="renault-r21-5portes-break" >R21 Break 5 portes (01/1986 &gt; 12/1995)</option>'
        +'<option value="renault-r21-5portes-hayon" >R21 Hayon 5 portes (01/1986 &gt; 12/1995)</option>'
        +'</optgroup>'
        +'<optgroup label="R25">'
        +'<option value="renault-r25-5portes-hayon" >R25 Hayon 5 portes (03/1984 &gt; 06/1992)</option>'
        +'</optgroup>'
        +'<optgroup label="R30">'
        +'<option value="renault-r30-5portes-hayon" >R30 Hayon 5 portes (01/1979 &gt; 03/1984)</option>'
        +'</optgroup>'
        +'<optgroup label="R4">'
        +'<option value="renault-r4-5portes-hayon" >R4 Hayon 5 portes (01/1978 &gt; 12/1992)</option>'
        +'<option value="renault-r4-2portes-pickup" >R4 Pickup 2 portes (01/1978 &gt; 12/1992)</option>'
        +'</optgroup>'
        +'<optgroup label="F4">'
        +'<option value="renault-f4-3portes-break" >F4 Break 3 portes (01/1966 &gt; 08/1988)</option>'
        +'<option value="renault-f4-3portes-fourgon" >F4 Fourgon 3 portes (01/1966 &gt; 08/1988)</option>'
        +'</optgroup>'
        +'<optgroup label="F6">'
        +'<option value="renault-f6-2portes-chassis-cabine" >F6 Chassis cabine 2 portes (01/1976 &gt; 01/1987)</option>'
        +'<option value="renault-f6-3portes-fourgon" >F6 Fourgon 3 portes (01/1976 &gt; 01/1987)</option>'
        +'</optgroup>'
        +'<optgroup label="R5">'
        +'<option value="renault-r5-3portes-hayon" >R5 Hayon 3 portes (01/1975 &gt; 06/1986)</option>'
        +'<option value="renault-r5-5portes-hayon" >R5 Hayon 5 portes (01/1975 &gt; 06/1986)</option>'
        +'</optgroup>'
        +'<optgroup label="R5 TURBO">'
        +'<option value="renault-r5-turbo-3portes-hayon" >R5 TURBO Hayon 3 portes (07/1980 &gt; 06/1986)</option>'
        +'</optgroup>'
        +'<optgroup label="R6">'
        +'<option value="renault-r6-5portes-hayon" >R6 Hayon 5 portes (09/1968 &gt; 04/1987)</option>'
        +'</optgroup>'
        +'<optgroup label="R9">'
        +'<option value="renault-r9-4portes-berline" >R9 Berline 4 portes (07/1981 &gt; 06/1989)</option>'
        +'</optgroup>'
        +'<optgroup label="A110">'
        +'<option value="renault-a110-2portes-coupe" >A110 Coupe 2 portes (01/1970 &gt; 12/1977)</option>'
        +'</optgroup>'
        +'<optgroup label="A310">'
        +'<option value="renault-a310-2portes-coupe" >A310 Coupe 2 portes (03/1971 &gt; 06/1985)</option>'
        +'</optgroup>'
        +'<optgroup label="A610">'
        +'<option value="renault-a610-3portes-coupe" >A610 Coupe 3 portes (04/1991 &gt; 06/1995)</option>'
        +'</optgroup>'
        +'<optgroup label="GT">'
        +'<option value="renault-gt-2portes-coupe" >GT Coupe 2 portes (03/1985 &gt; 04/1991)</option>'
        +'</optgroup>'
        +'<optgroup label="AVANTIME">'
        +'<option value="renault-avantime-3portes-monospace" >AVANTIME Monospace 3 portes (09/2001 &gt; 04/2003)</option>'
        +'</optgroup>'
        +'<optgroup label="CAPTUR">'
        +'<option value="renault-captur-5portes-hayon" >CAPTUR Hayon 5 portes (02/2013 &gt; )</option>'
        +'</optgroup>'
        +'<optgroup label="CHEROKEE">'
        +'<option value="renault-sport-spider-2portes-cabriolet" >SPORT SPIDER Cabriolet 2 portes (12/1995 &gt; 08/2000)</option>'
        +'</optgroup>'
        +'<optgroup label="SUPER 5">'
        +'<option value="renault-super-5-3portes-hayon" >SUPER 5 Hayon 3 portes (10/1984 &gt; 12/1996)</option>'
        +'<option value="renault-super-5-5portes-hayon" >SUPER 5 Hayon 5 portes (10/1984 &gt; 12/1996)</option>'
        +'</optgroup>'
        +'<optgroup label="TALISMAN">'
        +'<option value="renault-talisman-4portes-berline" >TALISMAN Berline 4 portes (09/2015 &gt; )</option>'
        +'</optgroup>'
        +'<optgroup label="THALIA/SYMBOL">'
        +'<option value="renault-thalia-symbol-1-4portes-berline" >THALIA/SYMBOL I Berline 4 portes (02/2000 &gt; 10/2008)</option>'
        +'<option value="renault-thalia-symbol-2-4portes-berline" >THALIA/SYMBOL II Berline 4 portes (10/2008 &gt; )</option>'
        +'</optgroup>'
        +'<optgroup label="TRAFIC">'
        +'<option value="renault-trafic-1-4portes-bus" >TRAFIC I Bus 4 portes (08/1982 &gt; 11/2000)</option>'
        +'<option value="renault-trafic-1-2portes-chassis-cabine" >TRAFIC I Chassis cabine 2 portes (08/1982 &gt; 11/2000)</option>'
        +'<option value="renault-trafic-1-4portes-chassis-cabine" >TRAFIC I Chassis cabine 4 portes (08/1982 &gt; 11/2000)</option>'
        +'<option value="renault-trafic-1-4portes-fourgon" >TRAFIC I Fourgon 4 portes (08/1982 &gt; 11/2000)</option>'
        +'<option value="renault-trafic-1-2portes-plateau" >TRAFIC I Plateau 2 portes (08/1982 &gt; 11/2000)</option>'
        +'<option value="renault-trafic-2-4portes-break" >TRAFIC II Break 4 portes (10/2001 &gt; )</option>'
        +'<option value="renault-trafic-2-4portes-bus" >TRAFIC II Bus 4 portes (10/2001 &gt; )</option>'
        +'<option value="renault-trafic-2-2portes-chassis-cabine" >TRAFIC II Chassis cabine 2 portes (10/2001 &gt; )</option>'
        +'<option value="renault-trafic-2-4portes-combi" >TRAFIC II Combi 4 portes (10/2001 &gt; )</option>'
        +'<option value="renault-trafic-2-5portes-combi" >TRAFIC II Combi 5 portes (10/2001 &gt; )</option>'
        +'<option value="renault-trafic-2-4portes-fourgon" >TRAFIC II Fourgon 4 portes (10/2001 &gt; )</option>'
        +'<option value="renault-trafic-2-5portes-fourgon" >TRAFIC II Fourgon 5 portes (10/2001 &gt; )</option>'
        +'<option value="renault-trafic-2-4portes-isotherme" >TRAFIC II Isotherme 4 portes (10/2001 &gt; )</option>'
        +'<option value="renault-trafic-2-5portes-isotherme" >TRAFIC II Isotherme 5 portes (10/2001 &gt; )</option>'
        +'<option value="renault-trafic-3-4portes-combi" >TRAFIC III Combi 4 portes (06/2014 &gt; )</option>'
        +'<option value="renault-trafic-3-5portes-combi" >TRAFIC III Combi 5 portes (06/2014 &gt; )</option>'
        +'<option value="renault-trafic-3-4portes-fourgon" >TRAFIC III Fourgon 4 portes (06/2014 &gt; )</option>'
        +'</optgroup>'
        +'<optgroup label="TWINGO">'
        +'<option value="renault-twingo-1-3portes-hayon" >TWINGO I Hayon 3 portes (04/1993 &gt; 06/2007)</option>'
        +'<option value="renault-twingo-2-3portes-hayon" >TWINGO II Hayon 3 portes (06/2007 &gt; )</option>'
        +'<option value="renault-twingo-3-5portes-hayon" >TWINGO III Hayon 5 portes (06/2014 &gt; )</option>'
        +'</optgroup>'
        +'<optgroup label="TWIZY">'
        +'<option value="renault-twizy-2portes-berline" >TWIZY Berline 2 portes (03/2012 &gt; )</option>'
        +'</optgroup>'
        +'<optgroup label="VEL SATIS">'
        +'<option value="renault-vel-satis-5portes-hayon" >VEL SATIS Hayon 5 portes (01/2002 &gt; 12/2009)</option>'
        +'</optgroup>'
        +'<optgroup label="WIND">'
        +'<option value="renault-wind-2portes-cabriolet" >WIND Cabriolet 2 portes (06/2010 &gt; 12/2013)</option>'
        +'</optgroup>'
        +'<optgroup label="WRANGLER">'
        +'<option value="renault-wrangler-2portes-cabriolet" >WRANGLER Cabriolet 2 portes (01/1990 &gt; 12/1992)</option>'
        +'</optgroup>'
        +'<optgroup label="ZOE">'
        +'<option value="renault-zoe-5portes-hayon" >ZOE Hayon 5 portes (10/2012 &gt; )</option>'
        +'</optgroup>'
        +'</select>';
    var select_moteur =
        "<select id='engine_power'  class='select-actif'>"
        +"<option value='' selected='selected'>bidule</option>"
        +"<optgroup label='DIESEL - boîte MANUELLE'>"
        +"<option value='renault-r11-3portes-hayon-1-6-55cv-diesel-manuelle' >1.6 55cv Diesel MANUELLE</option>"
        +"<optgroup label=''>"
        +"</optgroup>"
        +"</optgroup>"
        +"<optgroup label='ESSENCE - boîte AUTOMATIQUE'>"
        +"<option  value='renault-r11-3portes-hayon-1-4-70cv-essence-automatique' >1.4 70cv Essence AUTOMATIQUE</option>"
        +"</optgroup>"
        +"<optgroup label='ESSENCE - boîte MANUELLE'>"
        +"<option value='renault-r11-3portes-hayon-1-1-47cv-essence-manuelle' >1.1 47cv Essence MANUELLE</option>"
        +"<option value='renault-r11-3portes-hayon-1-2-48cv-essence-manuelle' >1.2 48cv Essence MANUELLE</option>"
        +"<option value='renault-r11-3portes-hayon-1-2-55cv-essence-manuelle' >1.2 55cv Essence MANUELLE</option>"
        +"<option value='renault-r11-3portes-hayon-1-4-60cv-essence-manuelle' >1.4 60cv Essence MANUELLE</option>"
        +"<option value='renault-r11-3portes-hayon-1-4-70cv-essence-manuelle' >1.4 70cv Essence MANUELLE</option>"
        +"<option value='renault-r11-3portes-hayon-1-4-105cv-essence-manuelle' >1.4 105cv Essence MANUELLE</option>"
        +"<option value='renault-r11-3portes-hayon-1-4-115cv-essence-manuelle' >1.4 115cv Essence MANUELLE</option>"
        +"<option value='renault-r11-3portes-hayon-1-7-75cv-essence-manuelle' >1.7 75cv Essence MANUELLE</option>"
        +"<option value='renault-r11-3portes-hayon-1-7-82cv-essence-manuelle' >1.7 82cv Essence MANUELLE</option>"
        +"<option value='renault-r11-3portes-hayon-1-7-90cv-essence-manuelle' >1.7 90cv Essence MANUELLE</option>"
        +"</optgroup>"
        +"</select>";
    var alternative_car_detail =
        '<span class="alternative_div_detail">'+
        'de numéro'+
        '<input id="alternative_research_carDetail" type="text" placeholder="machin">'+
        '<br>'+
        '</span>';
    var alternative_car_model =
        '<span class="alternative_div_model">'+
        'de la marque'+
        select_marque+
        ',dont le modèle est'+
        select_model+
        ',<br>le moteur est'+
        select_moteur+
        '</span>';
    var help_car = '<div class="help_car">?<span>Essai</span></div>';

    /*Create autocompleteInput*/
    var createInput = function(){
        var data = '',
            addField = '',
            categories = [],
            list_categories = [];

        switch (filterSet){
            default:
                data = 'public/js/products.json';
                addField = 'id';
                categories = ["Filtres & Autres","Chaines à neige","Chambre à air","Son et vidéo","Pneus","Moteurs"];
                for(var i=0;i<categories.length;i++){
                    var categorie = {
                        listLocation: categories[i],
                        maxNumberOfElements: 4,
                        header: categories[i]
                    };
                    list_categories.push(categorie);
                }
                break;
        }
        var options = {
            url: data,
            categories: list_categories,

            getValue: function(element) {
                return element.name;
            },

            template: {
                type: "description",
                fields: {
                    description: addField
                }
            },

            list: {
                maxNumberOfElements: 8,
                match: {
                    enabled: true
                },
                sort: {
                    enabled: true
                }
            }
        };

        $("#principal_researchInput").easyAutocomplete(options);
    };
    /*Load autocompleteInput*/
    $('#principal_researchInput').load(createInput());

    /*Show hide help for some technicals words*/
    $(document).on({
        mouseover : function() {
            $(this).find('span').css('display', 'block');
        },
        mouseout : function(){
            $(this).find('span').css('display', 'none');
        }
    },'.help_car');

    /*Show/Hide magical sentence*/
    $(document).on('click','#magic_research_button',function(){
        $(this).css('background-color','#BABABA');
        $( ".magic_research" ).slideDown(500);
        $('body').animate({scrollTop: 630},600);
    });
    $(document).on('click','#close_magic_research',function(){
        $('#magic_research').css('background-color','#F6915F');
        $( ".magic_research" ).slideUp(500);
        $('body').animate({scrollTop: 0},600);
    });

    /*Add or remove parts of magical sentence*/
    $(document).on('change','#alternative_research_car',function() {
        if ($(this).val() == 'marque' && !($('.alternative_research>form>p>span:nth-child(2)').hasClass('alternative_div_model'))) {
            $('#alternative_research_car').closest('span').after(alternative_car_model);
            $('.alternative_div_detail').remove();
            $('.help_car').remove();
        } else {
            if(!($('.alternative_research>form>p>span:nth-child(2)').hasClass('alternative_div_detail'))) {
                $('.alternative_div_model').remove();
                $('#alternative_research_car').closest('span').after(alternative_car_detail);
            }
            if ($(this).val() == 'carte') {
                $('#alternative_research_carDetail').after(help_car);
            } else {
                $('.help_car').remove();
            }
        }
    });

    /*Hover effect of categorie_gallery (in Products)*/
    $(document).on({
        mouseenter : function() {
            var hover_text = $(this).find('img').attr('alt');
            $(this).prepend('<a class="categorie_hover" href="#"><p href="#">'+hover_text+'</p></a>');
            $('.categorie_hover').fadeIn(300);
        },
        mouseleave : function(){
            $(this).find('.categorie_hover').fadeOut(200,function(){
                $(this).remove();
            });
        }
    },'.gallery_categorie>li');

    /*Restart data to use for research and determinate filter to use*/
    $(document).on('click','#filterModel,#filterImmatriculation,#filterCarte',function(){
        research = [];
        step = 0;
        $('.removals').remove();
        $('.filterActive').removeClass('filterActive');
        $(this).addClass('filterActive');
        filterSet = $(this).attr('id');
        filterResearch(filterSet,research);
    });
    $(document).on('change','.principalResearch-filters_responsive',function(){
        research = [];
        step = 0;
        $('.removals').remove();
        filterSet = $(this).val();
        filterResearch(filterSet,research);
    });
    $(document).on('click','#eac-container-principal_researchInput>ul>li',function(){
        filterResearch(filterSet,research);
    });

    /*add question to principal research input related on user steps*/
    var filterResearch = function(filterSet,research){
        if(filterSet != '') {
            step += 1;
            if (step >= 2) {
                research.push($('#principal_researchInput').val());
                $('#principalResearch-values').append('<button class="removals removal' + (research.length - 1) + '">' + research[research.length - 1] + '</button>');
            }
            var question = '';
            switch (filterSet) {
                case 'filterModel':
                    if (step == 1) {
                        question = 'Quel est votre marque de voiture?';
                    } else if (step == 2) {
                        question = 'Quel est le modèle de votre ' + research[0] + ' ?';
                    } else if (step == 3) {
                        question = 'Quel est le moteur de votre  ' + research[1] + ' ?';
                    } else if (step == 4) {
                        question = 'Quel est la pièce que vous recherchez pour votre ' + research[2] + ' ?';
                    } else {
                        submitForm();
                    }
                    break;
                case 'filterImmatriculation':
                    if (step == 1) {
                        question = 'Quel est votre numéro de plaque d\'immatriculation?';
                    } else if (step == 2) {
                        question = 'Quel est la pièce que vous recherchez pour votre voiture ?';
                    } else {
                        submitForm();
                    }
                    break;
                case 'filterCarte':
                    if (step == 1) {
                        question = 'Quel est votre type <u class="mineInfo">mine</u>?';
                    } else if (step == 2) {
                        question = 'Quel est la pièce que vous recherchez pour votre voiture ?';
                    } else {
                        submitForm();
                    }
                    break;
            }
            $('#principalResearch-questions').empty();
            $('#principalResearch-questions').append('<p>' + question + '</p>');
            $('#principal_researchInput').val('');
            if ($('#principalResearch-questions>p').length > 0) {
                $('.easy-autocomplete-container').find('ul').css('margin-top', '75px');
            } else {
                $('.easy-autocomplete-container').find('ul').css('margin-top', '29px');
            }
            $('#principal_researchInput').focus();
        }
    };

    /*delete cards added when a research is done*/
    $(document).on('click','.removals',function(){
        $(this).remove();
        $('#principalResearch-questions').empty();
    });

    /*Submit form with the cards undeleted*/
    var submitForm = function(){
        if($('.removals').length>0) {
            var researchSend = '';
            $('.removals').each(function (index) {
                var query = $('.removals').text();
                if (index > 0) {
                    query = '&' + $('.removals').text();
                }
                researchSend += query;
            });
            $('#principal_researchInput').val(researchSend);
            $('#principal_researchForm').submit();
        }
    };
    $(document).on('click','#principalResearch-submit',function(event){
        event.preventDefault();
        submitForm();
    });

    /*Responsive adaptations*/
    var responsive = function() {
        if ($(window).width() <= 768) {
            $(".principalResearch-filters_responsive").select2({
                minimumResultsForSearch: Infinity,
                placeholder: "Select a state"
            });
            $('.easy-autocomplete').css('width','100%');
        }else{
            $('.select2-container').remove();
            $('.easy-autocomplete').css('width','85%');
        }
    };
    $(window).resize(function(){responsive()});
    responsive();
});
