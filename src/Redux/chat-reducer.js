const SEND_MESSAGE = 'SEND-MESSAGE'
const REMOVE_MESSAGE = 'REMOVE-MESSAGE'

const initialState = {
    messages: [
        {
            id: 0,
            text: 'Just to order',
            authorId: 0,
            sendDate: new Date('December 12, 2021 15:04:00')
        },
        {
            id: 1,
            text: 'Okay, for what level of spiciness?',
            authorId: 0,
            sendDate: new Date('December 12, 2021 15:05:00')
        },
        {
            id: 2,
            text: 'Don`t know.',
            authorId: 1,
            sendDate: new Date('December 12, 2021 15:06:00')
        },
        {
            id: 3,
            text: 'Okay I\'m waiting  👍',
            authorId: 0,
            sendDate: new Date('December 12, 2021 15:10:00')
        }
    ]
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: state.messages.length > 0 ? state.messages[state.messages.length - 1].id + 1 : 0,
                text: action.text,
                authorId: 0,
                sendDate: action.sendDate
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }

        }
        case REMOVE_MESSAGE: {
            let filteredMessages = state.messages.filter((message) => {
                return Number.parseInt(message.id) !== Number.parseInt(action.id)
            })
            return {
                ...state,
                messages: filteredMessages
            }
        }
        default: {
            return state
        }
    }
}

export const sendMessageAC = (text, sendDate) => ({type: SEND_MESSAGE, text, sendDate})
export const removeMessageAC = (id) => ({type: REMOVE_MESSAGE, id})