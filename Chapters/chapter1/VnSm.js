Demo = function() {

  var output = document.getElementById('output'),
      demo   = document.getElementById('demo'),
      panic  = document.getElementById('panic'),
      warn   = document.getElementById('option1'),
      calm   = document.getElementById('calm'),
      clear  = document.getElementById('clear'),
      option1 = document.getElementById('option1'),
      option2 = document.getElementById('option2'),
      option3 = document.getElementById('option3'),
      count  = 0;

  

  var fsm = StateMachine.create({

    events: [
      { name: 'start', from: 'none',   to: 'firstChapter'  },
      { name: 'option1',  from: 'firstChapter',  to: 'firstChapterOption1' },
      { name: 'option2', from: 'firstChapter',  to: 'firstChapterOption2' },
      { name: 'option3', from: 'firstChapter',  to: 'firstChapterOption3' },
      { name: 'panic', from: 'yellow', to: 'red'    },
      { name: 'calm',  from: 'red',    to: 'yellow' },
      { name: 'clear', from: 'red',    to: 'green'  },
      { name: 'clear', from: 'yellow', to: 'green'  },
    ],

    callbacks: {
      onbeforestart: function(event, from, to) { alert("STARTING UP"); },
      onstart:       function(event, from, to) { alert("READY");       },

      onbeforoption1:  function(event, from, to) { alert("START   EVENT: warn!",  true);  },
      onbeforepanic: function(event, from, to) { alert("START   EVENT: panic!", true);  },
      onbeforecalm:  function(event, from, to) { alert("START   EVENT: calm!",  true);  },
      onbeforeclear: function(event, from, to) { alert("START   EVENT: clear!", true);  },

      onoption1:        function(event, from, to) {
      	console.log(fsm.current);
        //window.location.replace("chapter1Option1.html");
      },
      onpanic:       function(event, from, to) { alert("FINISH  EVENT: panic!");        },
      oncalm:        function(event, from, to) { alert("FINISH  EVENT: calm!");         },
      onclear:       function(event, from, to) { alert("FINISH  EVENT: clear!");        },

       
      onleaveyellow: function(event, from, to) { alert("LEAVE   STATE: yellow"); },
      onleavered:    function(event, from, to) { alert("LEAVE   STATE: red");    async(to); return StateMachine.ASYNC; },

      onfirstChapter:       function(event, from, to) { alert("ENTER   STATE: firstChapter");  },
      onfirstChapterOption1:       function(event, from, to) { alert("ENTER   STATE: firstChapterOP1");  },
      onfirstChapterOption2:       function(event, from, to) { alert("ENTER   STATE: firstChapterOP2");  },
      onfirstChapterOption3:       function(event, from, to) { alert("ENTER   STATE: firstChapterOP3");  },

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

