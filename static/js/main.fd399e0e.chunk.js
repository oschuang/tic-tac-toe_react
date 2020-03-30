(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},23:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(10),s=a.n(o),i=(a(23),a(4)),c=a(3),l=a(6),u=a(11),m=a(12),v=a(16),d=a(13),y=a(2),h=a(17),b=(a(24),function(e){var t=e.mode,a=e.btnText,r=e.currentPlayer,o=e.onClick,s="One Player"===a?"onePlayer"===t?" active-btn disabled-btn":"":"Two Player"===a?"twoPlayer"===t?" active-btn disabled-btn ":"":"New Game"===a?"Player O"===r&&"onePlayer"===t?" disabled-btn":"":"";return n.a.createElement("button",{class:"mode-btn"+s,onClick:o},a)}),g=function(e){var t=e.mode,a=(e.btnText,e.currentPlayer),r=e.toggleMode,o=e.restartGame,s=n.a.createElement(b,{btnText:"One Player",onClick:function(){r("onePlayer")},mode:t}),i=n.a.createElement(b,{btnText:"Two Player",onClick:function(){r("twoPlayer")},mode:t}),c=n.a.createElement(b,{btnText:"New Game",onClick:o,mode:t,currentPlayer:a});return n.a.createElement("div",{id:"mode-btn-wrapper"},"onePlayer"===t||null===t?s:"twoPlayer"===t?c:void 0,"onePlayer"===t?c:"twoPlayer"===t||null===t?i:void 0)},f=a(7),k=a(14),O=a(15),M=function(e){var t=e.movesHistory,a=e.squaresHistory,r=e.squareNum,o=t[a.indexOf(r)],s=n.a.createElement(f.a,{icon:k.a}),i=n.a.createElement(f.a,{icon:O.a}),c="X"===o?s:"O"===o?i:"",l="X"===o?"red-span":"blue-span";return n.a.createElement("span",{className:"marker-span "+l,movesHistory:t,squaresHistory:a},c)},P=function(e){var t=e.movesHistory,a=e.squaresHistory,r=e.squareNum,o=e.currentPlayer,s=e.gameOver,i=e.mode,c=e.makeMove,l=e.hardAI,u=t[a.indexOf(r)],m=a.includes(r)||s||"Player O"===o&&"onePlayer"===i?"disabled-square":"",v=null===i?"locked-square-start":"",d="X"===u?"red-square":"O"===u?"blue-square":"",y="Player X"===o?"hover-x":"Player O"===o?"hover-o":"";return n.a.createElement("div",{className:"square "+m+" "+d+" "+y+" "+v,onClick:function(){new Promise((function(e,t){c(r),"onePlayer"===i&&e()})).then((function(){setTimeout(l,350)}))}},n.a.createElement(M,{squareNum:r,movesHistory:t,squaresHistory:a}))},H=function(e){var t=e.movesHistory,a=e.squaresHistory,r=e.squareNum,o=e.currentPlayer,s=e.gameOver,i=e.mode,c=e.makeMove,l=e.hardAI;return n.a.createElement("div",{className:"column"},n.a.createElement(P,{squareNum:r+1,currentPlayer:o,gameOver:s,mode:i,makeMove:c,movesHistory:t,squaresHistory:a,hardAI:l}),n.a.createElement(P,{squareNum:r+2,currentPlayer:o,gameOver:s,mode:i,makeMove:c,movesHistory:t,squaresHistory:a,hardAI:l}),n.a.createElement(P,{squareNum:r+3,currentPlayer:o,gameOver:s,mode:i,makeMove:c,movesHistory:t,squaresHistory:a,hardAI:l}))},q=function(e){var t=e.movesHistory,a=e.squaresHistory,r=(e.squareNum,e.currentPlayer),o=e.gameOver,s=e.mode,i=e.makeMove,c=e.hardAI;return n.a.createElement("div",{id:"board"},n.a.createElement(H,{squareNum:0,currentPlayer:r,gameOver:o,mode:s,makeMove:i,movesHistory:t,squaresHistory:a,hardAI:c}),n.a.createElement(H,{squareNum:3,currentPlayer:r,gameOver:o,mode:s,makeMove:i,movesHistory:t,squaresHistory:a,hardAI:c}),n.a.createElement(H,{squareNum:6,currentPlayer:r,gameOver:o,mode:s,makeMove:i,movesHistory:t,squaresHistory:a,hardAI:c}))},E=function(e){var t=e.gameOver,a=e.mode,r=e.playAgain,o=e.restartGame,s=e.resultMessage,i=t?"":"hidden";return n.a.createElement("div",{class:"overlay "+i},n.a.createElement("div",{class:"overlay-content-wrapper"},n.a.createElement("span",{class:"overlay-span"},s),n.a.createElement("span",{class:"overlay-span"},"Play again?"),n.a.createElement("div",{id:"overlay-btn-wrapper"},n.a.createElement("button",{class:"overlay-btn",onClick:function(){return r(a)}},"YES"),n.a.createElement("button",{class:"overlay-btn",onClick:o},"NO"))))};function p(){return Math.floor(9*Math.random())+1}function w(e){return e.filter((function(t,a){return a!==e.length-1}))}function j(e,t){return e.filter((function(e){return!t.includes(e)}))[0]}function A(e,t){var a=[];return t.forEach((function(t){e.includes(t)&&a.push(t)})),a}var C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(v.a)(this,Object(d.a)(t).call(this,e))).state={mode:"onePlayer",marker:"X",squaresHistory:[],movesHistory:[],currentPlayer:"Player X",xMoves:[],oMoves:[],gameOver:!1,resultMessage:"",gameBoard:{1:"A",2:"B",3:"C",4:"D",5:"E",6:"F",7:"G",8:"H",9:"I"}},a.toggleMode=a.toggleMode.bind(Object(y.a)(a)),a.makeMove=a.makeMove.bind(Object(y.a)(a)),a.recordMove=a.recordMove.bind(Object(y.a)(a)),a.changeTurn=a.changeTurn.bind(Object(y.a)(a)),a.checkWin=a.checkWin.bind(Object(y.a)(a)),a.checkDraw=a.checkDraw.bind(Object(y.a)(a)),a.endGame=a.endGame.bind(Object(y.a)(a)),a.hardAI=a.hardAI.bind(Object(y.a)(a)),a.playAgain=a.playAgain.bind(Object(y.a)(a)),a.restartGame=a.restartGame.bind(Object(y.a)(a)),a.undoMove=a.undoMove.bind(Object(y.a)(a)),a.eliminateWinCombo=a.eliminateWinCombo.bind(Object(y.a)(a)),a.getRandomSquare=a.getRandomSquare.bind(Object(y.a)(a)),a.defaultBoard={1:"A",2:"B",3:"C",4:"D",5:"E",6:"F",7:"G",8:"H",9:"I"},a.winningCombinations=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],a.mapWinCombos=new Map([[[1,2,3],!0],[[4,5,6],!0],[[7,8,9],!0],[[1,4,7],!0],[[2,5,8],!0],[[3,6,9],!0],[[1,5,9],!0],[[3,5,7],!0]]),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"toggleMode",value:function(e){this.setState({mode:e})}},{key:"makeMove",value:function(e){var t=this;new Promise((function(a,r){t.recordMove(e),t.setState({gameBoard:Object(l.a)({},t.state.gameBoard,Object(c.a)({},e,t.state.marker))}),a()})).then((function(){t.checkWin()})).then((function(){9===t.state.movesHistory.length&&t.checkDraw()})).then((function(){t.state.gameOver||t.changeTurn()}))}},{key:"recordMove",value:function(e){this.setState({movesHistory:[].concat(Object(i.a)(this.state.movesHistory),[this.state.marker]),squaresHistory:[].concat(Object(i.a)(this.state.squaresHistory),[e])}),"X"===this.state.marker?this.setState({xMoves:[].concat(Object(i.a)(this.state.xMoves),[e])}):this.setState({oMoves:[].concat(Object(i.a)(this.state.oMoves),[e])})}},{key:"changeTurn",value:function(){var e="X"===this.state.marker?"O":"X",t="Player X"===this.state.currentPlayer?"Player O":"Player X";this.setState({marker:e,currentPlayer:t})}},{key:"checkWin",value:function(){var e=this,t=this.state,a=t.gameBoard,r=t.currentPlayer;this.winningCombinations.forEach((function(t){a[t[0]]===a[t[1]]&&a[t[0]]===a[t[2]]&&(e.endGame(),e.setState({resultMessage:"".concat(r," wins!")}))}))}},{key:"checkDraw",value:function(){this.state.gameOver||(this.endGame(),this.setState({resultMessage:"It's a draw!"}))}},{key:"endGame",value:function(){this.setState({gameOver:!0})}},{key:"hardAI",value:function(){if(!this.state.gameOver){var e,t=this.state,a=t.oMoves,r=t.xMoves,n=this.mapWinCombos,o=this.eliminateWinCombo,s=this.makeMove,i=this.getRandomSquare,c=!0;if(a.length<1)c=!1,e=i();else{var l=!0,u=!1,m=void 0;try{for(var v,d=n.keys()[Symbol.iterator]();!(l=(v=d.next()).done);l=!0){var y=v.value;if(n.get(y)){var h=A(y,r);if(2===A(y,r).length){c=!1,e=j(y,h),console.log("combo found");break}}}}catch(b){u=!0,m=b}finally{try{l||null==d.return||d.return()}finally{if(u)throw m}}}c&&(e=i()),s(e),o(e,n)}}},{key:"getRandomSquare",value:function(){var e=p();if(this.state.squaresHistory.includes(e))for(;this.state.squaresHistory.includes(e);)e=p();return e}},{key:"eliminateWinCombo",value:function(e,t){var a=!0,r=!1,n=void 0;try{for(var o,s=t.keys()[Symbol.iterator]();!(a=(o=s.next()).done);a=!0){var i=o.value;i.includes(e)&&t.get(i)&&t.set(i,!1)}}catch(c){r=!0,n=c}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}}},{key:"undoMove",value:function(){var e=this.state,t=e.marker,a=e.squaresHistory,r=e.movesHistory,n=e.gameBoard,o=e.xMoves,s=e.oMoves,i=e.gameOver,u=a[a.length-1];r.length>0&&!i&&(this.changeTurn(),this.setState({squaresHistory:w(a),movesHistory:w(r),xMoves:"O"===t?w(o):o,oMoves:"X"===t?w(s):s,gameBoard:Object(l.a)({},n,Object(c.a)({},u,this.defaultBoard[u]))}))}},{key:"restartGame",value:function(){this.setState({currentPlayer:"Player X",marker:"X",squaresHistory:[],movesHistory:[],gameBoard:{1:"A",2:"B",3:"C",4:"D",5:"E",6:"F",7:"G",8:"H",9:"I"},xMoves:[],oMoves:[],gameOver:!1,mode:null}),this.mapWinCombos=new Map([[[1,2,3],!0],[[4,5,6],!0],[[7,8,9],!0],[[1,4,7],!0],[[2,5,8],!0],[[3,6,9],!0],[[1,5,9],!0],[[3,5,7],!0]])}},{key:"playAgain",value:function(e){this.restartGame(),this.setState({mode:e})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{class:"header"},"Play Tic Tac Toe"),n.a.createElement(g,{mode:this.state.mode,currentPlayer:this.state.currentPlayer,toggleMode:this.toggleMode,restartGame:this.restartGame}),n.a.createElement(q,{mode:this.state.mode,gameOver:this.state.gameOver,currentPlayer:this.state.currentPlayer,makeMove:this.makeMove,hardAI:this.hardAI,movesHistory:this.state.movesHistory,squaresHistory:this.state.squaresHistory}),n.a.createElement(E,{mode:this.state.mode,gameOver:this.state.gameOver,playAgain:this.playAgain,restartGame:this.restartGame,resultMessage:this.state.resultMessage}))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.fd399e0e.chunk.js.map