const mockResponse = {
    data: {
        results: [
            {
                category: "History",
                correct_answer: "Alexander Flemming",
                difficulty: "easy",
                incorrect_answers: [ ['Marie Curie', 'Alfred Nobel', 'Louis Pasteur'] ],
                question: "Who discovered Penicillin?",
                type: "multiple"
            }
        ]
    }
}


export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}
