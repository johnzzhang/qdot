
  function swordclash()
  {
    var swordclash = document.getElementById("swordclash");
    swordclash.play();
    var elem = document.getElementById("swordsound");
   }


  function magic()
  {
    var magic = document.getElementById("magic");
    magic.play();
   }

  function bow()
  {
    var bow = document.getElementById("bow");
    bow.play();
   }

  function attack()
  {
  	var attack = document.getElementById("attack");
  	attack.play();
  }

  function cave1()
  {
  	var cave1 = document.getElementById("cave1");
    if(!cave1.paused)
    {
      cave1.pause();
    }
    else
    {
      cave1.play();
    }
    var elem = document.getElementById("Dcave");
    //Changing audio name
    if  (elem.value=="Cave Spelunking") 
    {
        elem.value = "Stop Audio";
    }
    else 
    {
        elem.value= "Cave Spelunking";
    }
  }

   function tamb()
  {
    var tamb = document.getElementById("tamb");
    if(!tamb.paused)
    {
      tamb.pause();
    }
    else
    {
      tamb.play();
    }
    var elem = document.getElementById("TownA");
    //Changing audio name
    if  (elem.value=="Town") 
    {
        elem.value = "Stop Audio";
    }
    else 
    {
        elem.value= "Town";
    }
  }

     function namb()
  {
    var namb = document.getElementById("namb");
    if(!namb.paused)
    {
      namb.pause();
    }
    else
    {
      namb.play();
    }
    var elem = document.getElementById("NatA");
    //Changing audio name
    if  (elem.value=="Forest") 
    {
        elem.value = "Stop Audio";
    }
    else 
    {
        elem.value= "Forest";
    }
  }

     function ramb()
  {
    var ramb = document.getElementById("ramb");
    if(!ramb.paused)
    {
      ramb.pause();
    }
    else
    {
      ramb.play();
    }
    var elem = document.getElementById("RainA");
    //Changing audio name
    if  (elem.value=="Rain") 
    {
        elem.value = "Stop Audio";
    }
    else 
    {
        elem.value= "Rain";
    }
  }

     function camb()
  {
    var camb = document.getElementById("camb");
    if(!camb.paused)
    {
      camb.pause();
    }
    else
    {
      camb.play();
    }
    var elem = document.getElementById("CaveA");
    //Changing audio name
    if  (elem.value=="Cave") 
    {
        elem.value = "Stop Audio";
    }
    else 
    {
        elem.value= "Cave";
    }
  }

   function townm()
  {
    var townm = document.getElementById("townm");
    if(!townm.paused)
    {
      townm.pause();
    }
    else
    {
      townm.play();
    }
    var elem = document.getElementById("TownB");
    //Changing audio name
    if  (elem.value=="City Fanfare") 
    {
        elem.value = "Stop Audio";
    }
    else 
    {
        elem.value= "City Fanfare";
    }
  }

     function natm()
  {
    var natm = document.getElementById("natm");
    if(!natm.paused)
    {
      natm.pause();
    }
    else
    {
      natm.play();
    }
    var elem = document.getElementById("NatB");
    //Changing audio name
    if  (elem.value=="Natural Peace") 
    {
        elem.value = "Stop Audio";
    }
    else 
    {
        elem.value= "Natural Peace";
    }
  }

     function spookm()
  {
    var spookm = document.getElementById("spookm");
    if(!spookm.paused)
    {
      spookm.pause();
    }
    else
    {
      spookm.play();
    }
    var elem = document.getElementById("SpookA");
    //Changing audio name
    if  (elem.value=="Ominous Melodies") 
    {
        elem.value = "Stop Audio";
    }
    else 
    {
        elem.value= "Ominous Melodies";
    }
  }

