

/* MODEL */

/* DATA MODEL */

var won = false;
var currentPlayer = "X";
var x = 1
var o = -1




var boardCenterPlaneA = [
  "", "", "",// A, B, C Center Side/Plane
  "", "", "",// D, E ,F
  "", "", "" // G, H, I
];

var boardRightPlaneB = [
  "", "", "", // C, J, K Right Side/Plane
  "", "", "", // F, L ,M
  "", "", "" // I, N, O
];

var boardBackPlaneC = [
  "", "", "", // K, P, Q Back Rear Side/Plane
  "", "", "", // M, R ,S
  "", "", "" //  O, T, U

];var boardLeftPlaneD = [
  "", "", "", // Q, V, A Left Side/Plane
  "", "", "", // S, W ,D
  "", "", "" // U, X, G
];

var boardTopPlaneE = [
  "", "", "", // Q, P, K Up Top Side/Plane
  "", "", "", // V, Z ,J
  "", "", "" // A, B, C
];

var boardDownPlaneF = [
  "", "", "", // G, H, I Down Bottom Side/Plane
  "", "", "", // X, Y ,N
  "", "", "" // U, T, O
];

var startGame = function() {
  won = false;
  currentPlayer = "X";
  boardCenterPlaneA = [
  "", "", "",// A, B, C Center Side/Plane
  "", "", "",// D, E ,F
  "", "", "" // G, H, I
  ];

 boardRightPlaneB = [
    "", "", "", // C, J, K Right Side/Plane
    "", "", "", // F, L ,M
    "", "", "" // I, N, O
  ];

  boardBackPlaneC = [
    "", "", "", // K, P, Q Back Rear Side/Plane
    "", "", "", // M, R ,S
    "", "", "" //  O, T, U

  ];

  boardLeftPlaneD = [
    "", "", "", // Q, V, A Left Side/Plane
    "", "", "", // S, W ,D
    "", "", "" // U, X, G
  ];

  boardTopPlaneE = [
    "", "", "", // Q, P, K Up Top Side/Plane
    "", "", "", // V, Z ,J
    "", "", "" // A, B, C
  ];

  boardDownPlaneF = [
    "", "", "", // G, H, I Down Bottom Side/Plane
    "", "", "", // X, Y ,N
    "", "", "" // U, T, O
  ];
};

/* BEHAVIOR */

var move = function(cellIndex) {
  boardCenterPlaneA[cellIndex] = currentPlayer;
  if (gameWon()) {
    won = true;
  } else {
    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
    // currentPlayer = (currentPlayer === "X" ? "O" : "X");
  }
};

var gameWon = function() {
  if (

    ((boardCenterPlaneA[0] === boardCenterPlaneA[1]) && (boardCenterPlaneA[0] === boardCenterPlaneA[2]) && boardCenterPlaneA[0] !== "") ||
    ((boardCenterPlaneA[3] === boardCenterPlaneA[4]) && (boardCenterPlaneA[3] === boardCenterPlaneA[5]) && boardCenterPlaneA[3] !== "") ||
    ((boardCenterPlaneA[6] === boardCenterPlaneA[7]) && (boardCenterPlaneA[6] === boardCenterPlaneA[8]) && boardCenterPlaneA[6] !== "") ||
    ((boardCenterPlaneA[0] === boardCenterPlaneA[3]) && (boardCenterPlaneA[0] === boardCenterPlaneA[6]) && boardCenterPlaneA[0] !== "") ||
    ((boardCenterPlaneA[1] === boardCenterPlaneA[4]) && (boardCenterPlaneA[1] === boardCenterPlaneA[7]) && boardCenterPlaneA[1] !== "") ||
    ((boardCenterPlaneA[2] === boardCenterPlaneA[5]) && (boardCenterPlaneA[2] === boardCenterPlaneA[8]) && boardCenterPlaneA[2] !== "") ||
    ((boardCenterPlaneA[0] === boardCenterPlaneA[4]) && (boardCenterPlaneA[0] === boardCenterPlaneA[8]) && boardCenterPlaneA[0] !== "") ||
    ((boardCenterPlaneA[2] === boardCenterPlaneA[4]) && (boardCenterPlaneA[2] === boardCenterPlaneA[6]) && boardCenterPlaneA[2] !== "") ||

    ((boardRightPlaneB[0] === boardRightPlaneB[1]) && (boardRightPlaneB[0] === boardRightPlaneB[2]) && boardRightPlaneB[0] !== "") ||
    ((boardRightPlaneB[3] === boardRightPlaneB[4]) && (boardRightPlaneB[3] === boardRightPlaneB[5]) && boardRightPlaneB[3] !== "") ||
    ((boardRightPlaneB[6] === boardRightPlaneB[7]) && (boardRightPlaneB[6] === boardRightPlaneB[8]) && boardRightPlaneB[6] !== "") ||
    ((boardRightPlaneB[0] === boardRightPlaneB[3]) && (boardRightPlaneB[0] === boardRightPlaneB[6]) && boardRightPlaneB[0] !== "") ||
    ((boardRightPlaneB[1] === boardRightPlaneB[4]) && (boardRightPlaneB[1] === boardRightPlaneB[7]) && boardRightPlaneB[1] !== "") ||
    ((boardRightPlaneB[2] === boardRightPlaneB[5]) && (boardRightPlaneB[2] === boardRightPlaneB[8]) && boardRightPlaneB[2] !== "") ||
    ((boardRightPlaneB[0] === boardRightPlaneB[4]) && (boardRightPlaneB[0] === boardRightPlaneB[8]) && boardRightPlaneB[0] !== "") ||
    ((boardRightPlaneB[2] === boardRightPlaneB[4]) && (boardRightPlaneB[2] === boardRightPlaneB[6]) && boardRightPlaneB[2] !== "") ||

    ((boardBackPlaneC[0] === boardBackPlaneC[1]) && (boardBackPlaneC[0] === boardBackPlaneC[2]) && boardBackPlaneC[0] !== "") ||
    ((boardBackPlaneC[3] === boardBackPlaneC[4]) && (boardBackPlaneC[3] === boardBackPlaneC[5]) && boardBackPlaneC[3] !== "") ||
    ((boardBackPlaneC[6] === boardBackPlaneC[7]) && (boardBackPlaneC[6] === boardBackPlaneC[8]) && boardBackPlaneC[6] !== "") ||
    ((boardBackPlaneC[0] === boardBackPlaneC[3]) && (boardBackPlaneC[0] === boardBackPlaneC[6]) && boardBackPlaneC[0] !== "") ||
    ((boardBackPlaneC[1] === boardBackPlaneC[4]) && (boardBackPlaneC[1] === boardBackPlaneC[7]) && boardBackPlaneC[1] !== "") ||
    ((boardBackPlaneC[2] === boardBackPlaneC[5]) && (boardBackPlaneC[2] === boardBackPlaneC[8]) && boardBackPlaneC[2] !== "") ||
    ((boardBackPlaneC[0] === boardBackPlaneC[4]) && (boardBackPlaneC[0] === boardBackPlaneC[8]) && boardBackPlaneC[0] !== "") ||
    ((boardBackPlaneC[2] === boardBackPlaneC[4]) && (boardBackPlaneC[2] === boardBackPlaneC[6]) && boardBackPlaneC[2] !== "") ||

    ((boardLeftPlaneD[0] === boardLeftPlaneD[1]) && (boardLeftPlaneD[0] === boardLeftPlaneD[2]) && boardLeftPlaneD[0] !== "") ||
    ((boardLeftPlaneD[3] === boardLeftPlaneD[4]) && (boardLeftPlaneD[3] === boardLeftPlaneD[5]) && boardLeftPlaneD[3] !== "") ||
    ((boardLeftPlaneD[6] === boardLeftPlaneD[7]) && (boardLeftPlaneD[6] === boardLeftPlaneD[8]) && boardLeftPlaneD[6] !== "") ||
    ((boardLeftPlaneD[0] === boardLeftPlaneD[3]) && (boardLeftPlaneD[0] === boardLeftPlaneD[6]) && boardLeftPlaneD[0] !== "") ||
    ((boardLeftPlaneD[1] === boardLeftPlaneD[4]) && (boardLeftPlaneD[1] === boardLeftPlaneD[7]) && boardLeftPlaneD[1] !== "") ||
    ((boardLeftPlaneD[2] === boardLeftPlaneD[5]) && (boardLeftPlaneD[2] === boardLeftPlaneD[8]) && boardLeftPlaneD[2] !== "") ||
    ((boardLeftPlaneD[0] === boardLeftPlaneD[4]) && (boardLeftPlaneD[0] === boardLeftPlaneD[8]) && boardLeftPlaneD[0] !== "") ||
    ((boardLeftPlaneD[2] === boardLeftPlaneD[4]) && (boardLeftPlaneD[2] === boardLeftPlaneD[6]) && boardLeftPlaneD[2] !== "") ||

    ((boardTopPlaneE[0] === boardTopPlaneE[1]) && (boardTopPlaneE[0] === boardTopPlaneE[2]) && boardTopPlaneE[0] !== "") ||
    ((boardTopPlaneE[3] === boardTopPlaneE[4]) && (boardTopPlaneE[3] === boardTopPlaneE[5]) && boardTopPlaneE[3] !== "") ||
    ((boardTopPlaneE[6] === boardTopPlaneE[7]) && (boardTopPlaneE[6] === boardTopPlaneE[8]) && boardTopPlaneE[6] !== "") ||
    ((boardTopPlaneE[0] === boardTopPlaneE[3]) && (boardTopPlaneE[0] === boardTopPlaneE[6]) && boardTopPlaneE[0] !== "") ||
    ((boardTopPlaneE[1] === boardTopPlaneE[4]) && (boardTopPlaneE[1] === boardTopPlaneE[7]) && boardTopPlaneE[1] !== "") ||
    ((boardTopPlaneE[2] === boardTopPlaneE[5]) && (boardTopPlaneE[2] === boardTopPlaneE[8]) && boardTopPlaneE[2] !== "") ||
    ((boardTopPlaneE[0] === boardTopPlaneE[4]) && (boardTopPlaneE[0] === boardTopPlaneE[8]) && boardTopPlaneE[0] !== "") ||
    ((boardTopPlaneE[2] === boardTopPlaneE[4]) && (boardTopPlaneE[2] === boardTopPlaneE[6]) && boardTopPlaneE[2] !== "") ||

    ((boardDownPlaneF[0] === boardDownPlaneF[1]) && (boardDownPlaneF[0] === boardDownPlaneF[2]) && boardDownPlaneF[0] !== "") ||
    ((boardDownPlaneF[3] === boardDownPlaneF[4]) && (boardDownPlaneF[3] === boardDownPlaneF[5]) && boardDownPlaneF[3] !== "") ||
    ((boardDownPlaneF[6] === boardDownPlaneF[7]) && (boardDownPlaneF[6] === boardDownPlaneF[8]) && boardDownPlaneF[6] !== "") ||
    ((boardDownPlaneF[0] === boardDownPlaneF[3]) && (boardDownPlaneF[0] === boardDownPlaneF[6]) && boardDownPlaneF[0] !== "") ||
    ((boardDownPlaneF[1] === boardDownPlaneF[4]) && (boardDownPlaneF[1] === boardDownPlaneF[7]) && boardDownPlaneF[1] !== "") ||
    ((boardDownPlaneF[2] === boardDownPlaneF[5]) && (boardDownPlaneF[2] === boardDownPlaneF[8]) && boardDownPlaneF[2] !== "") ||
    ((boardDownPlaneF[0] === boardDownPlaneF[4]) && (boardDownPlaneF[0] === boardDownPlaneF[8]) && boardDownPlaneF[0] !== "") ||
    ((boardDownPlaneF[2] === boardDownPlaneF[4]) && (boardDownPlaneF[2] === boardDownPlaneF[6]) && boardDownPlaneF[2] !== "")

  ) {
    return true;
  } else {
    return false;
  }
};


/* RENDER OUR VIEW */

var render = function() {
  // Render Turn Counter Component
  var $turnEl = $("#turn")
  $turnEl.text("Turn: " + currentPlayer);

  // Render Winner Component
  var $winnerEl = $("#winner");
  renderboard();
  if (!won) {
    $winnerEl.text("Winner: ?");
  } else {
    $winnerEl.text("Winner: " + currentPlayer);
    alert("Yo dawg, I can't believe " + currentPlayer + " just won!! DAYYUM!")
  }
};

// As an example, we can "render" a component separately
// in a function, just calling it above. This can help
// us test it, or even just deal with REALLY long render
// functions, breaking them up in to smaller ones.
var renderboard = function() {
  $("#cell0").text(boardCenterPlaneA[0]);
  $("#cell1").text(boardCenterPlaneA[1]);
  $("#cell2").text(boardCenterPlaneA[2]);
  $("#cell3").text(boardCenterPlaneA[3]);
  $("#cell4").text(boardCenterPlaneA[4]);
  $("#cell5").text(boardCenterPlaneA[5]);
  $("#cell6").text(boardCenterPlaneA[6]);
  $("#cell7").text(boardCenterPlaneA[7]);
  $("#cell8").text(boardCenterPlaneA[8]);

  // for (var i = 0; i < board.length; i++) {
  //   $("cell" + i).text(board[i]);
  // }
}

/* USER INTERACTION */

$("#restart").click(function(evt) {
  startGame();
  render();
});

$("#board").delegate("td", "click", function() {
  var $cellEl    = $(this);
  var cellIndex = $cellEl.attr('id').slice(-1);

  if (!won && $cellEl.text() === "") {
    move(cellIndex);
    render();
  } else if (!won && $cellEl.text() !== "") {
    $cellEl.addClass("fade-in");
    setTimeout(function() {
      $cellEl.addClass("fade-out");
    }, 1000);
    setTimeout(function() {
      $cellEl.removeClass("fade-in");
      $cellEl.removeClass("fade-out");
    }, 2000);
  }
});



//boardCenterPlaneA[0] boardCenterPlaneA[1] boardCenterPlaneA[2]
//boardCenterPlaneA[3] boardCenterPlaneA[4] boardCenterPlaneA[5]
//boardCenterPlaneA[6] boardCenterPlaneA[7] boardCenterPlaneA[8]

//boardRightPlaneB[0] boardRightPlaneB[1] boardRightPlaneB[2]
//boardRightPlaneB[3] boardRightPlaneB[4] boardRightPlaneB[5]
//boardRightPlaneB[6] boardRightPlaneB[7] boardRightPlaneB[8]

//boardBackPlaneC[0] boardBackPlaneC[1] boardBackPlaneC[2]
//boardBackPlaneC[3] boardBackPlaneC[4] boardBackPlaneC[5]
//boardBackPlaneC[6] boardBackPlaneC[7] boardBackPlaneC[8]

//boardLeftPlaneD[0] boardLeftPlaneD[1] boardLeftPlaneD[2]
//boardLeftPlaneD[3] boardLeftPlaneD[4] boardLeftPlaneD[5]
//boardLeftPlaneD[6] boardLeftPlaneD[7] boardLeftPlaneD[8]

//boardTopPlaneE[0] boardTopPlaneE[1] boardTopPlaneE[2]
//boardTopPlaneE[3] boardTopPlaneE[4] boardTopPlaneE[5]
//boardTopPlaneE[6] boardTopPlaneE[7] boardTopPlaneE[8]

//boardDownPlaneF[0] boardDownPlaneF[1] boardDownPlaneF[2]
//boardDownPlaneF[3] boardDownPlaneF[4] boardDownPlaneF[5]
//boardDownPlaneF[6] boardDownPlaneF[7] boardDownPlaneF[8]






