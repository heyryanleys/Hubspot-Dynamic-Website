console.log("debug");
var $a = document.getElementById("a");
var $img = $a.getElementsByTagName("img")[0];

function() {
  document.getElementById('lcqualitybadge').insertAdjacentHTML('afterend','<div id="a"><!--HubSpot Call-to-Action Code --><span class="hs-cta-wrapper" id="hs-cta-wrapper-4bf8b6d1-efbe-4de2-9c25-f345c1649c7c"><span class="hs-cta-node hs-cta-4bf8b6d1-efbe-4de2-9c25-f345c1649c7c" id="hs-cta-4bf8b6d1-efbe-4de2-9c25-f345c1649c7c"><!--[if lte IE 8]><div id="hs-cta-ie-element"></div><![endif]--><a href="https://cta-redirect.hubspot.com/cta/redirect/2366840/4bf8b6d1-efbe-4de2-9c25-f345c1649c7c" ><img class="hs-cta-img" id="hs-cta-img-4bf8b6d1-efbe-4de2-9c25-f345c1649c7c" style="border-width:0px;" height="1" width="1" src="https://no-cache.hubspot.com/cta/default/2366840/4bf8b6d1-efbe-4de2-9c25-f345c1649c7c.png"  alt="Neither"/></a></span><script charset="utf-8" src="https://js.hscta.net/cta/current.js"></script><script type="text/javascript"> hbspt.cta.load(2366840, "4bf8b6d1-efbe-4de2-9c25-f345c1649c7c", {});</script></span> <!-- end HubSpot Call-to-Action Code --></div>' );
  console.log($img.alt);
}
function(){
  if($img.alt == "Neither"){ $(document.getElementsByClassName('News')[0]).html('<div><a href="/wpck/17096/contact_sales" target="_blank"><img src="/_corporate_images/button-visit.gif" alt="I need a visit"><strong><br>Do you need help with a project or application?</strong><br>Schedule a visit with an igus® specialist</a></div>') }
}
