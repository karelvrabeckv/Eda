//This file is used for preloading the voices of VOICES directory.

//Set new arrays for voices.
var EDAGAMEVoicesMainBasic = new Array();
var EDAGAMEVoicesMainInfo = new Array();
var EDAGAMEVoicesColorsInfo = new Array();
var EDAGAMEVoicesShapesInfo = new Array();
var EDAGAMEVoicesShapesTask = new Array();
var EDAGAMEVoicesAnimalsInfo = new Array();
var EDAGAMEVoicesAnimalsTask = new Array();
var EDAGAMEVoicesInstrumentsInfo = new Array();

//Set cycles for creating new audios.
for (var loop = 0; loop <= 12; loop++) {EDAGAMEVoicesMainBasic[loop] = new Audio();};
for (var loop = 0; loop <= 12; loop++) {EDAGAMEVoicesMainInfo[loop] = new Audio();};
for (var loop = 0; loop <= 10; loop++) {EDAGAMEVoicesColorsInfo[loop] = new Audio();};
for (var loop = 0; loop <= 19; loop++) {EDAGAMEVoicesShapesInfo[loop] = new Audio();};
for (var loop = 0; loop <= 19; loop++) {EDAGAMEVoicesShapesTask[loop] = new Audio();};
for (var loop = 0; loop <= 14; loop++) {EDAGAMEVoicesAnimalsInfo[loop] = new Audio();};
for (var loop = 0; loop <= 14; loop++) {EDAGAMEVoicesAnimalsTask[loop] = new Audio();};
for (var loop = 0; loop <= 10; loop++) {EDAGAMEVoicesInstrumentsInfo[loop] = new Audio();};

//Set paths for the new audios of a path: 'voices/main/basic'.
EDAGAMEVoicesMainBasic[0].src = 'voices/main/basic/Animals.mp3';
EDAGAMEVoicesMainBasic[1].src = 'voices/main/basic/Colors.mp3';
EDAGAMEVoicesMainBasic[2].src = 'voices/main/basic/CONAni.mp3';
EDAGAMEVoicesMainBasic[3].src = 'voices/main/basic/CONCol.mp3';
EDAGAMEVoicesMainBasic[4].src = 'voices/main/basic/CONIns.mp3';
EDAGAMEVoicesMainBasic[5].src = 'voices/main/basic/CONPai.mp3';
EDAGAMEVoicesMainBasic[6].src = 'voices/main/basic/CONSha.mp3';
EDAGAMEVoicesMainBasic[7].src = 'voices/main/basic/Instruments.mp3';
EDAGAMEVoicesMainBasic[8].src = 'voices/main/basic/Introduction.mp3';
EDAGAMEVoicesMainBasic[9].src = 'voices/main/basic/No.mp3';
EDAGAMEVoicesMainBasic[10].src = 'voices/main/basic/Pairs.mp3';
EDAGAMEVoicesMainBasic[11].src = 'voices/main/basic/Shapes.mp3';
EDAGAMEVoicesMainBasic[12].src = 'voices/main/basic/Yes.mp3';

//Set paths for the new audios of a path: 'voices/main/info'.
EDAGAMEVoicesMainInfo[0].src = 'voices/main/info/Animals.mp3';
EDAGAMEVoicesMainInfo[1].src = 'voices/main/info/Clear.mp3';
EDAGAMEVoicesMainInfo[2].src = 'voices/main/info/Colors.mp3';
EDAGAMEVoicesMainInfo[3].src = 'voices/main/info/Exit.mp3';
EDAGAMEVoicesMainInfo[4].src = 'voices/main/info/Instruments.mp3';
EDAGAMEVoicesMainInfo[5].src = 'voices/main/info/Pairs.mp3';
EDAGAMEVoicesMainInfo[6].src = 'voices/main/info/Quit.mp3';
EDAGAMEVoicesMainInfo[7].src = 'voices/main/info/Repeat.mp3';
EDAGAMEVoicesMainInfo[8].src = 'voices/main/info/RepeatMainTask.mp3';
EDAGAMEVoicesMainInfo[9].src = 'voices/main/info/RepeatTask.mp3';
EDAGAMEVoicesMainInfo[10].src = 'voices/main/info/Shapes.mp3';
EDAGAMEVoicesMainInfo[11].src = 'voices/main/info/Skip.mp3';
EDAGAMEVoicesMainInfo[12].src = 'voices/main/info/Start.mp3';

//Set paths for the new audios of a path: 'voices/colors/info'.
EDAGAMEVoicesColorsInfo[0].src = 'voices/colors/info/Black.mp3';
EDAGAMEVoicesColorsInfo[1].src = 'voices/colors/info/Blue.mp3';
EDAGAMEVoicesColorsInfo[2].src = 'voices/colors/info/Brown.mp3';
EDAGAMEVoicesColorsInfo[3].src = 'voices/colors/info/Green.mp3';
EDAGAMEVoicesColorsInfo[4].src = 'voices/colors/info/Grey.mp3';
EDAGAMEVoicesColorsInfo[5].src = 'voices/colors/info/Orange.mp3';
EDAGAMEVoicesColorsInfo[6].src = 'voices/colors/info/Pink.mp3';
EDAGAMEVoicesColorsInfo[7].src = 'voices/colors/info/Purple.mp3';
EDAGAMEVoicesColorsInfo[8].src = 'voices/colors/info/Red.mp3';
EDAGAMEVoicesColorsInfo[9].src = 'voices/colors/info/White.mp3';
EDAGAMEVoicesColorsInfo[10].src = 'voices/colors/info/Yellow.mp3';

//Set paths for the new audios of a path: 'voices/shapes/info'.
EDAGAMEVoicesShapesInfo[0].src = 'voices/shapes/info/Arrow.mp3';
EDAGAMEVoicesShapesInfo[1].src = 'voices/shapes/info/Book.mp3';
EDAGAMEVoicesShapesInfo[2].src = 'voices/shapes/info/Car.mp3';
EDAGAMEVoicesShapesInfo[3].src = 'voices/shapes/info/Circle.mp3';
EDAGAMEVoicesShapesInfo[4].src = 'voices/shapes/info/Cloud.mp3';
EDAGAMEVoicesShapesInfo[5].src = 'voices/shapes/info/Cross.mp3';
EDAGAMEVoicesShapesInfo[6].src = 'voices/shapes/info/Drop.mp3';
EDAGAMEVoicesShapesInfo[7].src = 'voices/shapes/info/Flower.mp3';
EDAGAMEVoicesShapesInfo[8].src = 'voices/shapes/info/Heart.mp3';
EDAGAMEVoicesShapesInfo[9].src = 'voices/shapes/info/House.mp3';
EDAGAMEVoicesShapesInfo[10].src = 'voices/shapes/info/Moon.mp3';
EDAGAMEVoicesShapesInfo[11].src = 'voices/shapes/info/Rectangle.mp3';
EDAGAMEVoicesShapesInfo[12].src = 'voices/shapes/info/Ring.mp3';
EDAGAMEVoicesShapesInfo[13].src = 'voices/shapes/info/Smile.mp3';
EDAGAMEVoicesShapesInfo[14].src = 'voices/shapes/info/Square.mp3';
EDAGAMEVoicesShapesInfo[15].src = 'voices/shapes/info/Star.mp3';
EDAGAMEVoicesShapesInfo[16].src = 'voices/shapes/info/Sun.mp3';
EDAGAMEVoicesShapesInfo[17].src = 'voices/shapes/info/Tree.mp3';
EDAGAMEVoicesShapesInfo[18].src = 'voices/shapes/info/Triangle.mp3';
EDAGAMEVoicesShapesInfo[19].src = 'voices/shapes/info/Umbrella.mp3';

//Set paths for the new audios of a path: 'voices/shapes/task'.
EDAGAMEVoicesShapesTask[0].src = 'voices/shapes/task/Arrow.mp3';
EDAGAMEVoicesShapesTask[1].src = 'voices/shapes/task/Book.mp3';
EDAGAMEVoicesShapesTask[2].src = 'voices/shapes/task/Car.mp3';
EDAGAMEVoicesShapesTask[3].src = 'voices/shapes/task/Circle.mp3';
EDAGAMEVoicesShapesTask[4].src = 'voices/shapes/task/Cloud.mp3';
EDAGAMEVoicesShapesTask[5].src = 'voices/shapes/task/Cross.mp3';
EDAGAMEVoicesShapesTask[6].src = 'voices/shapes/task/Drop.mp3';
EDAGAMEVoicesShapesTask[7].src = 'voices/shapes/task/Flower.mp3';
EDAGAMEVoicesShapesTask[8].src = 'voices/shapes/task/Heart.mp3';
EDAGAMEVoicesShapesTask[9].src = 'voices/shapes/task/House.mp3';
EDAGAMEVoicesShapesTask[10].src = 'voices/shapes/task/Moon.mp3';
EDAGAMEVoicesShapesTask[11].src = 'voices/shapes/task/Rectangle.mp3';
EDAGAMEVoicesShapesTask[12].src = 'voices/shapes/task/Ring.mp3';
EDAGAMEVoicesShapesTask[13].src = 'voices/shapes/task/Smile.mp3';
EDAGAMEVoicesShapesTask[14].src = 'voices/shapes/task/Square.mp3';
EDAGAMEVoicesShapesTask[15].src = 'voices/shapes/task/Star.mp3';
EDAGAMEVoicesShapesTask[16].src = 'voices/shapes/task/Sun.mp3';
EDAGAMEVoicesShapesTask[17].src = 'voices/shapes/task/Tree.mp3';
EDAGAMEVoicesShapesTask[18].src = 'voices/shapes/task/Triangle.mp3';
EDAGAMEVoicesShapesTask[19].src = 'voices/shapes/task/Umbrella.mp3';

//Set paths for the new audios of a path: 'voices/animals/info'.
EDAGAMEVoicesAnimalsInfo[0].src = 'voices/animals/info/Ant.mp3';
EDAGAMEVoicesAnimalsInfo[1].src = 'voices/animals/info/Bear.mp3';
EDAGAMEVoicesAnimalsInfo[2].src = 'voices/animals/info/Bird.mp3';
EDAGAMEVoicesAnimalsInfo[3].src = 'voices/animals/info/Butterfly.mp3';
EDAGAMEVoicesAnimalsInfo[4].src = 'voices/animals/info/Cat.mp3';
EDAGAMEVoicesAnimalsInfo[5].src = 'voices/animals/info/Cow.mp3';
EDAGAMEVoicesAnimalsInfo[6].src = 'voices/animals/info/Dog.mp3';
EDAGAMEVoicesAnimalsInfo[7].src = 'voices/animals/info/Fish.mp3';
EDAGAMEVoicesAnimalsInfo[8].src = 'voices/animals/info/Hen.mp3';
EDAGAMEVoicesAnimalsInfo[9].src = 'voices/animals/info/Horse.mp3';
EDAGAMEVoicesAnimalsInfo[10].src = 'voices/animals/info/Ladybird.mp3';
EDAGAMEVoicesAnimalsInfo[11].src = 'voices/animals/info/Monkey.mp3';
EDAGAMEVoicesAnimalsInfo[12].src = 'voices/animals/info/Mouse.mp3';
EDAGAMEVoicesAnimalsInfo[13].src = 'voices/animals/info/Pig.mp3';
EDAGAMEVoicesAnimalsInfo[14].src = 'voices/animals/info/Wasp.mp3';

//Set paths for the new audios of a path: 'voices/animals/task'.
EDAGAMEVoicesAnimalsTask[0].src = 'voices/animals/task/Ant.mp3';
EDAGAMEVoicesAnimalsTask[1].src = 'voices/animals/task/Bear.mp3';
EDAGAMEVoicesAnimalsTask[2].src = 'voices/animals/task/Bird.mp3';
EDAGAMEVoicesAnimalsTask[3].src = 'voices/animals/task/Butterfly.mp3';
EDAGAMEVoicesAnimalsTask[4].src = 'voices/animals/task/Cat.mp3';
EDAGAMEVoicesAnimalsTask[5].src = 'voices/animals/task/Cow.mp3';
EDAGAMEVoicesAnimalsTask[6].src = 'voices/animals/task/Dog.mp3';
EDAGAMEVoicesAnimalsTask[7].src = 'voices/animals/task/Fish.mp3';
EDAGAMEVoicesAnimalsTask[8].src = 'voices/animals/task/Hen.mp3';
EDAGAMEVoicesAnimalsTask[9].src = 'voices/animals/task/Horse.mp3';
EDAGAMEVoicesAnimalsTask[10].src = 'voices/animals/task/Ladybird.mp3';
EDAGAMEVoicesAnimalsTask[11].src = 'voices/animals/task/Monkey.mp3';
EDAGAMEVoicesAnimalsTask[12].src = 'voices/animals/task/Mouse.mp3';
EDAGAMEVoicesAnimalsTask[13].src = 'voices/animals/task/Pig.mp3';
EDAGAMEVoicesAnimalsTask[14].src = 'voices/animals/task/Wasp.mp3';

//Set paths for the new audios of a path: 'voices/instruments/info'.
EDAGAMEVoicesInstrumentsInfo[0].src = 'voices/instruments/info/Bell.mp3';
EDAGAMEVoicesInstrumentsInfo[1].src = 'voices/instruments/info/Carillone.mp3';
EDAGAMEVoicesInstrumentsInfo[2].src = 'voices/instruments/info/Drum.mp3';
EDAGAMEVoicesInstrumentsInfo[3].src = 'voices/instruments/info/Flute.mp3';
EDAGAMEVoicesInstrumentsInfo[4].src = 'voices/instruments/info/Guitar.mp3';
EDAGAMEVoicesInstrumentsInfo[5].src = 'voices/instruments/info/JingleBell.mp3';
EDAGAMEVoicesInstrumentsInfo[6].src = 'voices/instruments/info/Piano.mp3';
EDAGAMEVoicesInstrumentsInfo[7].src = 'voices/instruments/info/Tambourine.mp3';
EDAGAMEVoicesInstrumentsInfo[8].src = 'voices/instruments/info/Triangle.mp3';
EDAGAMEVoicesInstrumentsInfo[9].src = 'voices/instruments/info/Trumpet.mp3';
EDAGAMEVoicesInstrumentsInfo[10].src = 'voices/instruments/info/Violin.mp3';