Demo = function() {

  var output = document.getElementById('output'),
      demo   = document.getElementById('demo'),
      panic  = document.getElementById('panic'),
      warn   = document.getElementById('warn'),
      calm   = document.getElementById('calm'),
      clear  = document.getElementById('clear'),
      count  = 0;

  

  var fsm = StateMachine.create({

    events: [
      { name: 'start', from: 'none',   to: 'green'  },
      { name: 'warn',  from: 'green',  to: 'yellow' },
      { name: 'panic', from: 'green',  to: 'red'    },
      { name: 'panic', from: 'yellow', to: 'red'    },
      { name: 'calm',  from: 'red',    to: 'yellow' },
      { name: 'clear', from: 'red',    to: 'green'  },
      { name: 'clear', from: 'yellow', to: 'green'  },
    ],

    callbacks: {
      onbeforestart: function(event, from, to) { alert("STARTING UP"); },
      onstart:       function(event, from, to) { alert("READY");       },

      onbeforewarn:  function(event, from, to) { alert("START   EVENT: warn!",  true);  },
      onbeforepanic: function(event, from, to) { alert("START   EVENT: panic!", true);  },
      onbeforecalm:  function(event, from, to) { alert("START   EVENT: calm!",  true);  },
      onbeforeclear: function(event, from, to) { alert("START   EVENT: clear!", true);  },

      onwarn:        function(event, from, to) { alert("FINISH  EVENT: warn!");         },
      onpanic:       function(event, from, to) { alert("FINISH  EVENT: panic!");        },
      oncalm:        function(event, from, to) { alert("FINISH  EVENT: calm!");         },
      onclear:       function(event, from, to) { alert("FINISH  EVENT: clear!");        },

      onleavegreen:  function(event, from, to) { alert("LEAVE   STATE: green");
    window.location.replace("../Chapters/chapter1/chapter1.html");
  },  
      onleaveyellow: function(event, from, to) { alert("LEAVE   STATE: yellow"); },
      onleavered:    function(event, from, to) { alert("LEAVE   STATE: red");    async(to); return StateMachine.ASYNC; },

      ongreen:       function(event, from, to) { alert("ENTER   STATE: green");  },
      onyellow:      function(event, from, to) { alert("ENTER   STATE: yellow"); },
      onred:         function(event, from, to) { alert("ENTER   STATE: red");    },

      onchangestate: function(event, from, to) { alert("CHANGED STATE: " + from + " to " + to); }
    }
  });

  var async = function(to) {
    pending(to, 3);
    setTimeout(function() {
      pending(to, 2);
      setTimeout(function() {
        pending(to, 1);
        setTimeout(function() {
          fsm.transition(); // trigger deferred state transition
        }, 1000);
      }, 1000);
    }, 1000);
  };

  var pending = function(to, n) { log("PENDING STATE: " + to + " in ..." + n); };

  fsm.start();
  return fsm;

}();

