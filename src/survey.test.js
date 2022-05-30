const questions = [{
    name: "Does your solution need to, or is willing to, reach users from a web-based interface?",
    type: "boolean",
    userAnswer: null
}, {
    name: "Does your solution need to, or want to be able to, support users at a global scale?",
    type: "boolean",
    userAnswer: null
}, {
    name: "Is a serverless approach desired?",
    type: "boolean",
    userAnswer: null
}, {
    name: "Do you need something quick and easy (Yes), or higher quality and worth the extra time and development effort (No)?",
    type: "boolean",
    userAnswer: null
}, {
    name: "Does your service need to support instantly-answered questions via AI?",
    type: "boolean",
    userAnswer: null
}, ]

function handleBoolean(index, answer) {
    answerSelected = 1;
    questions[index].userAnswer = answer;
    //sessionStorage.setItem(0, JSON.stringify(questions))

    // if (answer == true) {
    //     if (document.getElementById("2").classList != null) {
    //         document.getElementById("2").classList.remove("aSelected")
    //     }
    //     document.getElementById("1").classList.add("aSelected")
    // } else if (answer == false) {
    //     if (document.getElementById("1").classList != null) {
    //         document.getElementById("1").classList.remove("aSelected")
    //     }
    //     document.getElementById("2").classList.add("aSelected")
    // }
}

var index = 0;
test('handles boolean', () => {
    handleBoolean(index, true)
    expect(questions[index].userAnswer).toEqual(true)
})

index = 1
test('handles boolean', () => {
    handleBoolean(index, false)
    expect(questions[index].userAnswer).toEqual(false)
})

index = 2
test('handles boolean', () => {
    handleBoolean(index, true)
    expect(questions[index].userAnswer).toEqual(true)
})
index = 3
test('handles boolean', () => {
    handleBoolean(index, false)
    expect(questions[index].userAnswer).toEqual(false)
})
index = 4
test('handles boolean', () => {
    handleBoolean(index, false)
    expect(questions[index].userAnswer).toEqual(false)
})