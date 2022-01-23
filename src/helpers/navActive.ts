type menu = '' | 'Todos' | 'SerieA' | 'SerieB'

export const navActive = (active: menu) => {
    let menuActive = {
        Todos: false,
        SerieA: false,
        SerieB: false
    }

    if(active !== ''){
        menuActive[active] = true
    }

    return menuActive
}