const SEND_MESSAGE = 'SEND-MESSAGE'
const REMOVE_MESSAGE = 'REMOVE-MESSAGE'

const initialState = {
    messages: [
        {
            id: 0,
            message: 'Just to order',
            authorId: 0,
            sendDate: '15:05'
        },
        {
            id: 1,
            message: 'Okay, for what level of spiciness?',
            authorId: 0,
            sendDate: '15:05'
        },
        {
            id: 2,
            message: 'Don`t know.',
            authorId: 1,
            sendDate: '15:06'
        },
        {
            id: 3,
            message: 'Okay I\'m waiting  👍',
            authorId: 0,
            sendDate: '15:10'
        }
    ]
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: state.messages.length > 0 ? state.messages[state.messages.length - 1].id + 1 : 0,
                message: action.message,
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

export const sendMessage = (message, sendDate) => ({type: SEND_MESSAGE, message, sendDate})
export const removeMessage = (id) => ({type: REMOVE_MESSAGE, id})