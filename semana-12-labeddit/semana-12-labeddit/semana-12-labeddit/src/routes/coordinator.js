export const goToLoginPage = (history) => {
    history.push("/LoginPage")
}

export const goToFeedPage = (history, id) => {
    history.push(`/FeedPage/${id}`)
}

export const goToCadastroPage = (history) => {
    history.push("/")
}

export const goToPostpage = (history) => {
    history.push("/PostPage")
}
