solutions = [{
    name: 'Serverless Website',
    /* If even one of these isn't met, don't display the solution */
    /* Expected answers won't include an answer for each question. Not 
    every question will be relevant to every solution. */
    expected_answers: [{
        /* The index of the question in the questions array */
        question: 1,
        type: 'boolean',
        answer: true,
    }, {
        /* The index of the question in the questions array */
        question: 2,
        type: 'boolean',
        answer: true,
    }, {
        /* The index of the question in the questions array */
        question: 3,
        type: 'boolean',
        answer: true,
    }, ],
    resources: [{
        name: 'Route53',
        link: 'https://aws.amazon.com/route53/',
        /* generic resource description */
        description: 'Domain Name Service (DNS)',
        dependencies: [{
            dependency: [{
                resource: 'Simple Storage Service (S3)'
            }, {
                reason: "While S3 itself is not a requirement, a static hosting origin (such as S3) is. To prevent friction and headache from trying to link resources from different providers, we would encourage the use of S3, as AWS allows for a convenient 'alias' record creation. You can just click on the name of the S3 bucket when creating an A record for it in Route53, for example!",
            }, ],
        }, ],
        /* why this resource exists in the environment/solution */
        justification: 'Allows your users to enter a domain name and be redirected to your website',
        /* costs are quite complex with AWS, I've removed non-related costs */
        costs: [{
            name: 'Hosted Zone',
            type: 'decimal',
            cost: 0.5,
        }, {
            name: 'Per-Query',
            type: 'decimal',
            cost: 0.0000004,
        }, ],
    }, {
        name: 'Simple Storage Service (S3)',
        link: 'https://aws.amazon.com/s3/',
        /* generic resource description */
        description: 'Scalable object storage',
        dependencies: undefined,
        /* why this resource exists in the environment/solution */
        justification: 'Static file hosting; dynamic backends can be added to this environment if desired',
        /* costs are quite complex with AWS, I've removed non-related costs */
        costs: [{
            name: 'Storage (GB)',
            type: 'decimal',
            cost: 0.023,
        }, {
            name: 'Per PUT Request',
            type: 'decimal',
            cost: 0.000005,
        }, {
            name: 'Per GET Request',
            type: 'decimal',
            cost: 0.0000004,
        }, ],
    }, {
        name: 'CloudFront',
        link: 'https://aws.amazon.com/cloudfront/',
        /* generic resource description */
        description: 'Content Distribution Network (CDN)',
        dependencies: [{
            dependency: [{
                resource: 'Certificate Manager'
            }, {
                reason: 'CloudFront requries a TLS/SSL certificate in order to be created, as it transmits data via HTTPS.',
            }, ],
        }, ],
        /* why this resource exists in the environment/solution */
        justification: 'HTTPS (Secure) web-based connection to website resources, data caching for hosting origin (S3) relief, and data caching for faster retrieval times.',
        /* costs are quite complex with AWS, I've removed non-related costs */
        costs: [{
            name: 'Data Transfer: To Internet (GB)',
            type: 'decimal',
            cost: 0.085,
        }, {
            name: 'Data Transfer: To Origin (GB)',
            type: 'decimal',
            cost: 0.02,
        }, ],
    }, {
        name: 'Certificate Manager',
        link: 'https://aws.amazon.com/certificate-manager/',
        /* generic resource description */
        description: 'Manages TLS and SSL certificates',
        dependencies: [{
            dependency: [{
                resource: 'Route53'
            }, {
                reason: "While you may be able to use a DNS from another provider, the difficulty of such with integration to Certificate Manager is unknown. It's encouraged to use Rotue53 as your DNS for ease-of-use when using Certificate Manager.",
            }, ],
        }, ],
        /* why this resource exists in the environment/solution */
        justification: 'Required for HTTPS-based connections.',
        /* costs are quite complex with AWS, I've removed non-related costs */
        // No costs associated to this service
        costs: null,
    }, ],
}, {
    name: 'Chatbot',
    /* If even one of these isn't met, don't display the solution */
    /* Expected answers won't include an answer for each question. Not 
    every question will be relevant to every solution. */
    expected_answers: [{
        /* The index of the question in the questions array */
        question: 1,
        type: 'boolean',
        answer: true,
    }, {
        /* The index of the question in the questions array */
        question: 2,
        type: 'boolean',
        answer: true,
    }, {
        /* The index of the question in the questions array */
        question: 3,
        type: 'boolean',
        answer: true,
    }, ],
    resources: [{
        name: 'Kendra',
        link: 'https://aws.amazon.com/kendra/',
        /* generic resource description */
        description: 'Intelligent Searching',
        dependencies: undefined,
        /* why this resource exists in the environment/solution */
        justification: 'Searches through question -> response relationships to provide meaningful responses to user input/questions.',
        /* costs are quite complex with AWS, I've removed non-related costs */
        costs: [{
            name: 'Developer Edition (Per-Hour)',
            type: 'decimal',
            cost: 1.125,
        }, ],
    }, {
        name: 'Simple Storage Service (S3)',
        link: 'https://aws.amazon.com/s3/',
        /* generic resource description */
        description: 'Scalable object storage',
        dependencies: undefined,
        /* why this resource exists in the environment/solution */
        justification: 'Stores and serves static content',
        /* costs are quite complex with AWS, I've removed non-related costs */
        costs: [{
            name: 'Storage (GB)',
            type: 'decimal',
            cost: 0.023,
        }, {
            name: 'Per PUT Request',
            type: 'decimal',
            cost: 0.000005,
        }, {
            name: 'Per GET Request',
            type: 'decimal',
            cost: 0.0000004,
        }, ],
    }, {
        name: 'Lambda',
        link: 'https://aws.amazon.com/lambda/',
        /* generic resource description */
        description: 'Event-driven serverless computing',
        dependencies: undefined,
        /* why this resource exists in the environment/solution */
        justification: "Serverless 'server'",
        /* costs are quite complex with AWS, I've removed non-related costs */
        costs: [{
            name: 'Per-Million Requests',
            type: 'decimal',
            cost: 0.2,
        }, ],
    }, {
        name: 'Lexbot',
        link: 'https://aws.amazon.com/lex/',
        /* generic resource description */
        description: 'Conversational AI',
        dependencies: undefined,
        /* why this resource exists in the environment/solution */
        justification: 'The chatbot. It needs some other resources to work on an impressive level, but it works on its own',
        /* costs are quite complex with AWS, I've removed non-related costs */
        // No costs associated to this service
        costs: [{
            name: 'Cost per speech request',
            type: 'decimal',
            cost: 0.004,
        }, {
            name: 'Cost per text request',
            type: 'decimal',
            cost: 0.00075,
        }, ],
    }, ],
}, {
    name: 'Standalone API',
    /* If even one of these isn't met, don't display the solution */
    /* Expected answers won't include an answer for each question. Not 
    every question will be relevant to every solution. */
    expected_answers: [{
        /* The index of the question in the questions array */
        question: 1,
        type: 'boolean',
        answer: true,
    }, {
        /* The index of the question in the questions array */
        question: 2,
        type: 'boolean',
        answer: false,
    }, {
        /* The index of the question in the questions array */
        question: 3,
        type: 'boolean',
        answer: false,
    }, {
        /* The index of the question in the questions array */
        question: 4,
        type: 'boolean',
        answer: true,
    }, ],
    resources: [{
        name: 'Route53',
        link: 'https://aws.amazon.com/route53/',
        /* generic resource description */
        description: 'Domain Name Service (DNS)',
        dependencies: [{
            dependency: [{
                resource: 'Elastic Compute Cloud (EC2)'
            }, {
                reason: "While EC2 itself is not a requirement, a server hosting origin (such as EC2) is. To prevent friction and headache from trying to link resources from different providers, we would encourage the use of EC2, as AWS allows for a convenient 'alias' record creation. You can just click on the name of the EC2 instance when creating an A record for it in Route53, for example!",
            }, ],
        }, ],
        /* why this resource exists in the environment/solution */
        justification: "Allows your users to enter a domain name and be redirected to your website; Not required if connecting to 'public ipv4' is acceptable.",
        /* costs are quite complex with AWS, I've removed non-related costs */
        costs: [{
            name: 'Hosted Zone',
            type: 'decimal',
            cost: 0.5,
        }, {
            name: 'Per-Query',
            type: 'decimal',
            cost: 0.0000004,
        }, ],
    }, {
        name: 'Elastic Compute Cloud (EC2)',
        link: 'https://aws.amazon.com/pm/ec2/?trk=36c6da98-7b20-48fa-8225-4784bced9843&sc_channel=ps&sc_campaign=acquisition&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|Compute|EC2|US|EN|Text&s_kwcid=AL!4422!3!488982705492!e!!g!!aws%20ec2&ef_id=CjwKCAjwgr6TBhAGEiwA3aVuIdXS9mFt1Q9g4-JhDd8v1Cpdf1fmQH5tlVSn2l6JEgGKGHCQ07-58hoCfkwQAvD_BwE:G:s&s_kwcid=AL!4422!3!488982705492!e!!g!!aws%20ec2',
        /* generic resource description */
        description: 'Cloud-based Compute Service (Virtual Machine in the Cloud)',
        dependencies: undefined,
        /* why this resource exists in the environment/solution */
        justification: 'The hosting origin for your API, and where all of your development will occur',
        /* costs are quite complex with AWS, I've removed non-related costs */
        costs: [{
            name: 'On-Demand Per-Hour',
            type: 'decimal',
            cost: 0.0116,
        }, ],
    }, ],
}, ];

function renderRecomendations(checkAnswers, url) {
    //if a solution was found
    if (checkAnswers != -1) {
        var c = "cardzone"

        var card = document.createElement('div');
        card.innerHTML =
            '<div id="solutionTitle" class="solutionTitle">' +
            '<h2 class ="solutionTitleText">' + solutions[checkAnswers].name + '</h2>' +
            "<a href='" + url + "'download>" +
            '<button class="btn">' + '<i class="fa fa-download">' + '</i> Download</button>' +
            '</a>' +
            '</div>'

        document.getElementById(c).appendChild(card)

        for (i = 0; i < Object.keys(solutions[checkAnswers].resources).length; i++) {
            var resources = document.createElement('div');
            resources.innerHTML =

                '<a class ="resourceTitle" href = ' + solutions[checkAnswers].resources[i].link + ' >' +
                '<h2 class ="resourceTitle">' + '' + solutions[checkAnswers].resources[i].name + '</h2>' +
                '</a>' +
                '<div >' +
                '<ul>' +
                '<li class="text-white">' + 'Description: ' + solutions[checkAnswers].resources[i].description + '</li>' +
                '</ul>' +
                '<ul>' +
                '<li class="text-white">' + 'Justification: ' + solutions[checkAnswers].resources[i].justification + '</li>' +
                '</ul>'

            '</div>'

            document.getElementById(c).appendChild(resources)

            if (solutions[checkAnswers].resources[i].costs != null) {
                var costTitle = document.createElement('div');

                costTitle.innerHTML =
                    '<div>' +
                    '<ul>' +
                    '<li class = "text-white">' + 'Cost by type:' + '</li>' +
                    '</ul>' +
                    '</div>'

                document.getElementById(c).appendChild(costTitle)

                if (solutions[checkAnswers].resources[i].costs)
                    for (j = 0; j < Object.keys(solutions[checkAnswers].resources[i].costs).length; j++) {

                        var resourceCosts = document.createElement('div');
                        resourceCosts.innerHTML =
                            '<div class="costsPadding">' +
                            '<ul>' +
                            '<li class="text-white">' + solutions[checkAnswers].resources[i].costs[j].name + ': $' + solutions[checkAnswers].resources[i].costs[j].cost + '</li>' +
                            '</ul>' +
                            '</div>'

                        document.getElementById(c).appendChild(resourceCosts)
                    }
            }
            var recomendationsPadding = document.createElement('div');
            recomendationsPadding.innerHTML = '<div class="recomendationsPadding">' + '</div>'
            document.getElementById(c).appendChild(recomendationsPadding)
        }

    } else {
        document.getElementById('cardzone').innerHTML =
            '<div class = "divflex2">' +
            '<h2 class ="resourceTitle">' + "No Solutions Found" + '</h2>' +
            '</div>' +
            '<div class ="flex-center">' +
            '<p class="text-white noSolutionText">' + "Sorry, we were unable to find a solution that meets your requirements." + '</p>'
        '</div>'
    }

}

window.onload = function() {

    var questions = JSON.parse(sessionStorage.getItem(0));

    if ((questions[0].userAnswer == true) && (questions[1].userAnswer == true) && (questions[2].userAnswer == true)) {
        //serverless website
        renderRecomendations(0, "https://s3.amazonaws.com/awsec-artifact.org/s3website.yml")


    } else if ((questions[0].userAnswer == true) && (questions[1].userAnswer == false) && (questions[2].userAnswer == false) && (questions[3].userAnswer == false) && (questions[4].userAnswer == true)) {
        //chatbot
        renderRecomendations(1, "https://s3.amazonaws.com/awsec-artifact.org/chatbot.yml")
    } else if ((questions[0].userAnswer == true) && (questions[1].userAnswer == false) && (questions[2].userAnswer == false) && (questions[3].userAnswer == true)) {
        //standalone api
        renderRecomendations(2)
    } else {
        //no solutoin found
        renderRecomendations(-1)
    }
};


test('renderRecomendations 0', () => {
    document.body.innerHTML =
        '<body class="body" style="margin: 0;">' +
        '<h1 id="test" class="text-white surveyTitle">Recomendations</h1>' +
        '<div class="divflex">' +
        '<div id="cardzone" class="card container ">' +
        '</div>' +
        '<div>'
    '<div class="flex-center">' +
    '<form class="submit-form" action="./index.html">' +
    '<input type="submit" value="Return Home" class="start-button">' +
    '</form>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</body>' +
    renderRecomendations(0, "https://s3.amazonaws.com/awsec-artifact.org/s3website.yml")
    expect(document.getElementById('cardzone')).not.toBeNull()
    expect(document.getElementById('solutionTitle')).not.toBeNull()
})
test('renderRecomendations 1', () => {

    document.body.innerHTML =
        '<body class="body" style="margin: 0;">' +
        '<h1 id="test" class="text-white surveyTitle">Recomendations</h1>' +
        '<div class="divflex">' +
        '<div id="cardzone" class="card container ">' +
        '</div>' +
        '<div>'
    '<div class="flex-center">' +
    '<form class="submit-form" action="./index.html">' +
    '<input type="submit" value="Return Home" class="start-button">' +
    '</form>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</body>' +
    renderRecomendations(1, "https://s3.amazonaws.com/awsec-artifact.org/chatbot.yml")
    expect(document.getElementById('cardzone')).not.toBeNull()
    expect(document.getElementById('solutionTitle')).not.toBeNull()
})
test('renderRecomendations 2', () => {
    document.body.innerHTML =
        '<body class="body" style="margin: 0;">' +
        '<h1 id="test" class="text-white surveyTitle">Recomendations</h1>' +
        '<div class="divflex">' +
        '<div id="cardzone" class="card container ">' +
        '</div>' +
        '<div>'
    '<div class="flex-center">' +
    '<form class="submit-form" action="./index.html">' +
    '<input type="submit" value="Return Home" class="start-button">' +
    '</form>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</body>' +
    renderRecomendations(2)
    expect(document.getElementById('cardzone')).not.toBeNull()
    expect(document.getElementById('solutionTitle')).not.toBeNull()

})