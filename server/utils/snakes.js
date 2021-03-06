let SNAKES = []
let MAP = []


export const addSnake = (data) => {
  SNAKES.push(data)
  return data
}

export const setSnake = (id, data, appleEat) => {
  let tempAppleEat = appleEat
  SNAKES = SNAKES.map(snake => {
    if (snake?.id === id) {
      if (tempAppleEat < 0) tempAppleEat = 0
      return { ...snake, position: data, appleEat: tempAppleEat }
    }
    return snake
  })
}

export const getSnake = (id) => {
  let snakeTemp
  SNAKES.map(snake => {
    if (snake?.id === id) snakeTemp = snake
  })
  return snakeTemp
}

export const delSnake = (id) => {
  SNAKES = SNAKES.filter(snake => snake?.id !== id)
}

export const allSnakes = (id) => {
  return SNAKES.filter(snake => snake?.id !== id)
}

export const getAllSnakes = () => {
  return SNAKES
}

export const checkXY = (checkElement) => {
  const array = []
  SNAKES.forEach(snake => array.push(...snake.position))
  return array.some(e => e.x === checkElement.x && e.y === checkElement.y)
}

export const setSnakeDir = (id, dir) => {
  console.log('start Array')
  SNAKES = SNAKES.map(snake => {
    console.log('start SNAKE', snake)
    if (snake?.id === id) {
      console.log('true')
      return { ...snake, dir: dir, }
    }
    return snake
  })
}