<template>
  <div class="wrapper">
    <h2>Memory Game</h2>
    <section class="game-control" id="control">
      <div class="stars">
        <span>Score:</span>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
      </div>
      <div class="move">
        <span id="moves">{{moves}}</span> Moves
      </div>
      <div class="timer">
        00:00:00
      </div>
      <div class="reset" id="reset">
        <button><i class="fa fa-refresh"></i> Reset</button>
      </div>
    </section>
    <div class="game-content" id="game"></div>
    <div class="modal">
      <div class="modal-wrapper">
        <h4>You Win!</h4>
        <p class="get-stars">You finish the game, get </p>
        <p class="get-time">Your game time: </p>
        <button class="try-again" id="try">Try Again?</button>
      </div>
    </div>
  </div>
  </template>

<script>
  import './game'
  import './style.scss'
  export default {
    name: 'main',
    data () {
      return {
        moves: 0,
        stars: 3
      }
    },
    method: {
    }
  }
</script>
