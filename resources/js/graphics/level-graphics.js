import Data from '../game-data.js'
import {TILES, DOTS_PER_TILE, DOTS, BOARD_SIZE} from '../game-helper.js'
import {createCanvas, clearCanvas, fillArea} from './graphics-handler.js'

class LevelGraphics {
  constructor (ctx_) {
    if (ctx_) {
      this.ctx = ctx_
    } else {
      const canvas = createCanvas('canvas canvas--static', BOARD_SIZE, BOARD_SIZE)
      document.querySelector('.graphics-wrapper').appendChild(canvas)
      this.ctx = canvas.getContext('2d')
    }
  }

  clear () {
    clearCanvas(this.ctx)
  }

  render () {
    clearCanvas(this.ctx)
    this.renderBackground()
    this.drawTiles()
  }

  renderBackground () {
    clearCanvas(this.ctx)
    this.drawGrid()
    this.drawClickPattern()
    this.drawSquares()
  }

  drawTiles () {
    Data.instance.tiles.map((o) => {
      this.ctx.setTransform(1, 0, 0, 1, 0, 0)
      this.ctx.translate(o.x, o.y)
      o.render(this.ctx)
    })
  }

  drawGrid () {
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
    fillArea(this.ctx, 0, 0, DOTS, DOTS)
  }

  drawClickPattern () {
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.20)'

    for (let x = 0; x < TILES; x += 1) {
      for (let y = 0; y < TILES; y += 2) {
        const offsetX = x * DOTS_PER_TILE
        let offsetY = (y + x % 2) * DOTS_PER_TILE
        fillArea(this.ctx, offsetX + 1, offsetY + 3, 2, 4)
        fillArea(this.ctx, offsetX + 3, offsetY + 5, 2, 2)
        fillArea(this.ctx, offsetX + 3, offsetY + 1, 4, 2)
        fillArea(this.ctx, offsetX + 5, offsetY + 3, 2, 2)

        offsetY = (y + (x + 1) % 2) * DOTS_PER_TILE
        fillArea(this.ctx, offsetX + 1, offsetY + 1, 2, 4)
        fillArea(this.ctx, offsetX + 3, offsetY + 1, 2, 2)
        fillArea(this.ctx, offsetX + 3, offsetY + 5, 4, 2)
        fillArea(this.ctx, offsetX + 5, offsetY + 3, 2, 2)
      }
    }
  }

  drawSquares () {
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'
    for (let x = 0; x <= TILES; x += 1) {
      for (let y = 0; y <= TILES; y += 2) {
        let offsetX = x * DOTS_PER_TILE
        let offsetY = (y + x % 2) * DOTS_PER_TILE

        fillArea(this.ctx, offsetX - 1, offsetY - 1, 3, 3)
      }
    }
  }
}

export default LevelGraphics
