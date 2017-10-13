var myState = {
    iWasFound: false,
    iamRearrangingNow: false,
    iamMovedNow: false,
    highlightConnected: false,
}

var myActions = {
    iWasFound: [switchMyHeaderToActive, addMeToSearchResults],
    iamRearrangingNow: []
}

function switchMyHeaderToActive() {
    // var isActive = d3.select(n[i]).select('.terrapin-title-pillow').classed('active')
    // if (isActive) {
    //     d3.select(n[i]).select('.terrapin-title-pillow').classed('active', true)
    // } else {
    //     d3.select(n[i]).select('.terrapin-title-pillow').classed('active', true)
    // }
    console.log('headerActive');
}

function addMeToSearchResults() {
    console.log('added to search results')
}

function changeClassToRearanging(params) {
    console.log('class changed to rearranging')
}


function changeMyState(stateName, stateValue) {
    if (myState[stateName] != stateValue) {
        myState[stateName] = stateValue;
        executeAction(stateName);
    }
}

function executeAction(state) {
    if (myActions.hasOwnProperty(state)) {
        var acts = myActions[state];
        for (var i = 0, l = acts.length; i < l; i++) {
            console.log(i, acts[i]);
            acts[i]();
        }
    }
}



// какая-то переменная содержащая все подписки на значимые объекты окружения
// по срабатыванию событий окружения выполняются функции, которые меняют состояние объекта (если текст содержится - поменять состояние)
// если состояние изменилось (новое состояние не равно текущему), то запускаются соответствующие действия.