type comment = {
    author: string,
    content: string,
    subComments: Array<comment>,
    id: string,
}

const generateUUID = () => {
    return crypto.randomUUID()
}

const commentsArea = document.getElementById("comments-area")

const mockComments: Array<comment> = [
    {
        author: 'lol',
        content: "haha hehe",
        subComments: [
            {
                author: 'nested',
                content: "should be a nested comment",
                subComments: [],
                id: generateUUID()
            }
        ],
        id: generateUUID()
    },
    {
        author: 'lol1',
        content: "haha hehe321321",
        subComments: [
            {
                author: 'nested',
                content: "should be a nested commentlol",
                subComments: [
                    {
                        author: 'nested',
                        content: "should be a nested comment1",
                        subComments: [
                            {
                                author: 'nested',
                                content: "should be a nested comment to the one above",
                                subComments: [],
                                id: generateUUID()
                            }
                        ],
                        id: generateUUID()
                    }
                ],
                id: generateUUID()
            },
            {
                author: 'nested',
                content: "should be a nested comment on same level",
                subComments: [],
                id: generateUUID()
            }
        ],
        id: generateUUID()
    }, {
        author: 'lol2',
        content: "haha hehevcxvxzcvxzcvvc",
        subComments: [
            {
                author: 'nested',
                content: "should be a nested commentlol",
                subComments: [
                    {
                        author: 'nested',
                        content: "should be a nested comment1",
                        subComments: [
                            {
                                author: 'nested',
                                content: "should be a nested comment to the one above",
                                subComments: [],
                                id: generateUUID()
                            }
                        ],
                        id: generateUUID()
                    }
                ],
                id: generateUUID()
            },
            {
                author: 'nested',
                content: "should be a nested comment on same level",
                subComments: [
                    {
                        author: 'nested',
                        content: "should be a nested comment to the one above",
                        subComments: [
                            {
                                author: 'nested',
                                content: "should be a nested comment to the one above",
                                subComments: [
                                    {
                                        author: 'nested',
                                        content: "should be a nested comment to the one above",
                                        subComments: [
                                            {
                                                author: 'nested',
                                                content: "should be a nested comment to the one above",
                                                subComments: [
                                                    {
                                                        author: 'nested',
                                                        content: "should be a nested comment to the one above",
                                                        subComments: [
                                                            {
                                                                author: 'nested',
                                                                content: "should be a nested comment to the one above",
                                                                subComments: [
                                                                    {
                                                                        author: 'nested',
                                                                        content: "should be a nested comment to the one above",
                                                                        subComments: [],
                                                                        id: generateUUID()
                                                                    }
                                                                ],
                                                                id: generateUUID()
                                                            }
                                                        ],
                                                        id: generateUUID()
                                                    }
                                                ],
                                                id: generateUUID()
                                            }
                                        ],
                                        id: generateUUID()
                                    }
                                ],
                                id: generateUUID()
                            }
                        ],
                        id: generateUUID()
                    }
                ],
                id: generateUUID()
            }
        ],
        id: generateUUID()
    },
]

const comments: Array<comment> = []

const generateCommentTemplate = (comment) => {
    return `
    <div class="comment" data-type="${comment.id}">
            <i class="fa-solid fa-user"></i>${comment.author}
            <br>
            ${comment.content}
        </div>
    `
}

const generateComments = (comments: Array<comment>) => {
    if (!comments.length) return
    let commentsList = ""
    for (const comment of comments) {
        let subCommentsTemplate = ""
        if (comment.subComments.length) subCommentsTemplate = "<ul>" + generateComments(comment.subComments) + "</ul>"
        commentsList += "<li>" + generateCommentTemplate(comment) + subCommentsTemplate + "</li>"
    }
    return commentsList
}

const render = () => {

    commentsArea.innerHTML = ""
    commentsArea.innerHTML += generateComments(mockComments)
    console.log(mockComments, generateComments(mockComments))

}

render()

